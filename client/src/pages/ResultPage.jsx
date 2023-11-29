import resultArt from "../assets/images/resultArt.png";
import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/Buttons/LoginButton";
import LogoutButton from "../components/Buttons/LogoutButton";
import getRecommendations from "../utils/getRecommendations";
import validateTimestamp from "../utils/validateTimestamp";
import saveResultData from "../utils/saveResultData";
import AuthLoader from "../components/AuthLoader";

function ResultPage() {
  // Get the assessment score and timestamp from the local Storage
  const assessmentScore = localStorage.getItem("score");
  const timestamp = localStorage.getItem("timestamp");

  // States to manage various aspects of the result
  const [loader, setLoader] = useState(false);
  const [authLoader, setAuthLoader] = useState(false);
  const [alertError, setAlertError] = useState("Tracking Result Saved!"); //alert message in modal component
  const [showModal, setshowModal] = useState(false); //toggle popup modal
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [status, setStatus] = useState("Not Working!");
  const [testResult, setTestResult] = useState("Kam hi nahi kar raha!");
  const [recommendation, setRecommendation] = useState("Kuch mat kar bhai");
  const [gptRecommendationsArray, setGptRecommendationsArray] = useState([]);
  const [gptTestResult, setGptTestResult] = useState("");
  const [gptRecommendedBook, setGptRecommendedBook] = useState("");
  const [helplineNumber, setHelplineNumber] = useState("1800-599-0019");

  // Use useEffect to modify status based on assessmentScore changes
  useEffect(() => {
    // Get recommendations from ChatGPT using IIFE
    (async () => {
      showAuthLoader();
      try {
        const recommendations = await getRecommendations();
        const recommendationsObj = JSON.parse(recommendations);
        const valuesArray = Object.values(recommendationsObj);
        setGptTestResult(valuesArray[2]);
        setGptRecommendationsArray(valuesArray.slice(3, 6));
        setGptRecommendedBook(valuesArray[7]);
        //valuesArray[6] will give helpline number
        valuesArray[6] && setHelplineNumber(valuesArray[6]);
      } catch (error) {
        console.error(
          `Error in getting recommendations from ChatGPT: ${error}`
        );
      } finally {
        hideAuthLoader();
      }
    })();

    // Update variable values based on the assessment score
    if (assessmentScore < 1.7) {
      setStatus("Yeeah!");
      setTestResult("Little or no Stress!");
      setRecommendation("Stay joyful and be relaxed");
    } else if (assessmentScore > 1.7 && assessmentScore < 3.4) {
      setStatus("Ahaan!");
      setTestResult("Moderate amount of Stress!");
      setRecommendation("Increase physical activity & think positive");
    } else if (assessmentScore >= 3.4) {
      setStatus("Oh No!");
      setTestResult("High stress level!");
      setRecommendation("Consult a Psychiatrist!");
    }
  }, [assessmentScore]); // assessmentScore in dependency array to run the effect when value changes

  // Handle click on Save Progress Button
  const handleSaveProgress = async () => {
    if (!isAuthenticated) {
      setAlertError("Login to save result.");
      openModal();
    } else {
      showLoader();
      const isExist = await validateTimestamp(user.email, timestamp);
      if (isExist) {
        setAlertError("Result already saved!");
        openModal();
      } else {
        saveResultData(user.email, timestamp, assessmentScore);
        //Calling modal with default value i.e. Tracking Result Saved
        openModal();
      }
      hideLoader();
    }
  };

  // Show & Hide Model
  const openModal = () => setshowModal(true);
  const closeModal = () => setshowModal(false);

  // Show & Hide Loader
  const showLoader = () => setLoader(true);
  const hideLoader = () => setLoader(false);

  // Show & Hide Loader
  const showAuthLoader = () => setAuthLoader(true);
  const hideAuthLoader = () => setAuthLoader(false);

  // Handle user login
  const handleLogin = () => {
    loginWithRedirect({
      authorizationParams: { redirect_uri: window.location.href },
    });
  };

  // Handle user logout
  const handleLogout = () => {
    //Remove get tracking data variable from localStorage before logging out
    localStorage.removeItem("getData");
    logout({ logoutParams: { returnTo: window.location.href } });
  };

  return (
    <>
      {showModal && (
        <Modal alert="Alert!" alertError={alertError} closeModal={closeModal} />
      )}
      {loader && <Loader />}
      {authLoader && (
        <AuthLoader loadingText="Getting personalised Recommendations..." />
      )}
      <div className="resultContainer py-[15rem] bg-[#FFCE00] w-[100%] min-h-[100vh] relative font-primary flex justify-center items-center relative">
        <div className="w-[95dvw] flex items-center px-[0.1rem] sm:px-[2rem] mt-[1rem] justify-between md:w-[99dvw] lg:px-[3rem] 2xl:px-[4rem] lg:mt-[1rem] absolute top-[1rem]">
          <Link to={"/"}>
            <img
              src={logo}
              className="vvsm:w-[5rem] md:w-[6rem] lg:w-[8rem] cursor-pointer"
              alt="logo"
            />
          </Link>
          {isAuthenticated ? (
            <LogoutButton handleLogout={handleLogout} />
          ) : (
            <LoginButton handleLogin={handleLogin} />
          )}
        </div>

        <div className="resultText w-[85%] h-[55%] md:h-[60%] md:w-[75%] flex flex-col gap-[1rem] justify-evenly items-center md:gap-[2rem] z-[1]">
          <h1 className="vvsm:text-[2.5rem] vsm:text-[3.5rem] gsm:text-[4rem] md:text-[5rem] leading-[1.2]">
            {status}
          </h1>
          <div className="testResult bg-[#FF7F1E] rounded-[2rem] vvsm:rounded-[1rem] px-[2rem] py-[0.5rem] text-center">
            <h2 className="vvsm:text-[1.3rem] vsm:text-[1.5rem] msm:text-[1.7rem] gsm:text-[2rem] 2xl:text-[3rem] md:text-[2.5rem] lg:text-[2.8rem] text-white flex flex-col">
              Test Result:{" "}
              <span className="text-black">
                {gptTestResult ? gptTestResult : testResult}
              </span>
            </h2>
          </div>
          <div className="recommendation bg-[#E03A3A]  rounded-[2rem] vvsm:rounded-[1rem] px-[2rem] py-[0.5rem] text-left">
            <h2 className="vvsm:text-[1.3rem] vsm:text-[1.5rem] msm:text-[1.7rem] gsm:text-[2rem] 2xl:text-[3rem] md:text-[2.5rem] lg:text-[2.8rem] text-white flex flex-col">
              <span className="text-center">Recommendations:</span>
              {gptRecommendationsArray.length ? (
                gptRecommendationsArray.map((recommendation, i) => {
                  return (
                    <span className="text-[#FAC05E] flex gap-x-2" key={i}>
                      <span>&#128307;</span> {recommendation}.
                    </span>
                  );
                })
              ) : (
                <span className="text-[#FAC05E]">
                  &#128307; {recommendation}
                </span>
              )}
            </h2>
          </div>

          <div className="testResult bg-[#2596be] rounded-[2rem] vvsm:rounded-[1rem] px-[2rem] py-[0.5rem] text-center">
            <h2 className="vvsm:text-[1.3rem] vsm:text-[1.5rem] msm:text-[1.7rem] gsm:text-[2rem] 2xl:text-[3rem] md:text-[2.5rem] lg:text-[2.8rem] text-white flex flex-col">
              Helpline Number:
              <span className="text-black">{helplineNumber}</span>
            </h2>
          </div>

          <button
            className="transition ease-in-out vvsm:text-[1.3rem] vsm:text-[1.5rem] lg:text-[1.5rem] gsm:text-[1.8rem]  md:text-[2rem] lg:text-[2.5rem] bg-[#D9D9D9] py-[0.3rem] px-[2rem] rounded-[2rem] hover:bg-black hover:text-[#D9D9D9]"
            onClick={handleSaveProgress}
          >
            Save Progress
          </button>
        </div>
        <img
          src={resultArt}
          alt="Blob"
          className="absolute right-0 bottom-0 vvsm:w-[18rem] vsm:w-[20rem] sm:w-[25rem] lg:w-[30rem] 2xl:w-[40rem]"
        />
      </div>
    </>
  );
}

export default ResultPage;

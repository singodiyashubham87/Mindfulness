import resultArt from "../assets/images/resultArt.png";
import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import axios from "axios";

function ResultPage() {
  // Get the current location
  const location = useLocation();
  // Extract the assessment score from the location state
  const assessmentScore = location.state?.assessmentScore.score;

  // States to manage various aspects of the result
  const [status, setStatus] = useState("Not Working!");
  const [testResult, setTestResult] = useState("Kam hi nahi kar raha!");
  const [recommendation, setRecommendation] = useState("Kuch mat kar bhai");
  const [loader, setLoader] = useState(false);
  const [showModal, setshowModal] = useState(false); //toggle popup modal

  // Show & Hide Model
  const openModal = () => setshowModal(true);
  const closeModal = () => setshowModal(false);

    // Show & Hide Loader
    const showLoader = () => setLoader(true);
    const hideLoader = () => setLoader(false);
  

  // Handle click on Save Progress Button
  const handleSaveProgress = async () => {
    showLoader();
    const data = {"user":"examplee@gmail.com", "score": 33};
    const res = await axios.post("http://127.0.0.1:8000/api/saveresult/",data)
    hideLoader();
    openModal();
  }

  // Use useEffect to modify status based on assessmentScore changes
  useEffect(() => {
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
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      {showModal && (
        <Modal alert="Alert!" alertError="Tracking Result Saved!" closeModal={closeModal} />
      )}
      {loader && <Loader/>}
      <div className="resultContainer bg-[#FFCE00] w-[100%] h-[100vh] relative font-primary flex justify-center items-center relative">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="absolute top-[2rem] left-[2rem] vvsm:w-[5rem] msm:w-[6rem] lg:w-[8rem] lg:top-[2rem] lg:left-[2rem]"
          />
        </Link>

        <div className="resultText w-[85%] h-[55%] md:h-[60%] md:w-[75%] flex flex-col justify-evenly items-center">
          <h1 className="vvsm:text-[3rem] vsm:text-[3.5rem] gsm:text-[4rem] md:text-[5rem] leading-[1.2]">
            {status}
          </h1>
          <div className="testResult bg-[#FF7F1E] rounded-[2rem] vvsm:rounded-[1rem] px-[2rem] text-center">
            <h2 className="vvsm:text-[1.3rem] vsm:text-[1.5rem] msm:text-[1.7rem] gsm:text-[2rem] 2xl:text-[3rem] md:text-[2.5rem] lg:text-[2.8rem] text-white">
              Test Result: <span className="text-black">{testResult}</span>
            </h2>
          </div>
          <div className="recommendation bg-[#E03A3A]  rounded-[2rem] vvsm:rounded-[1rem] px-[2rem] text-center">
            <h2 className="vvsm:text-[1.3rem] vsm:text-[1.5rem] msm:text-[1.7rem] gsm:text-[2rem] 2xl:text-[3rem] md:text-[2.5rem] lg:text-[2.8rem] text-white">
              Recommendation:{" "}
              <span className="text-[#FAC05E]">{recommendation}</span>
            </h2>
          </div>
          <button className="transition ease-in-out vvsm:text-[1.3rem] vsm:text-[1.5rem] lg:text-[1.5rem] gsm:text-[1.8rem]  md:text-[2rem] lg:text-[2.5rem] bg-[#D9D9D9] py-[0.3rem] px-[2rem] rounded-[2rem] mt-[0.8rem] hover:bg-black hover:text-[#D9D9D9]" onClick={handleSaveProgress}>
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

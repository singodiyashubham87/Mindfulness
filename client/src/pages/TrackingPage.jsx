import logo from "../assets/images/logo.png";
import trackingPageBg from "../assets/images/trackingPageBg.png";
import mediumTrackingPageBg from "../assets/images/mediumTrackingPageBg.png";
import Loader from "../components/Loader";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import TrackDiv from "../components/TrackDiv";
import LogoutButton from "../components/Buttons/LogoutButton";

function TrackingPage() {
  const { logout, isLoading, user } = useAuth0();
  const [loader, setLoader] = useState(false); //loader variable
  const [trackingData, setTrackingData] = useState([]); //tracking data array
  const [showGetDataButton, setShowGetDataButton] = useState(true);
  

  useEffect(() => {
    if(localStorage.getItem("getData") == "false") {
      getData({ email: "examplee@gmail.com" });
      setShowGetDataButton(false);
    }
  },[])

  // Get Track Data from Backend
  const getData = async (reqBody) => {
    const res = await axios.get("http://127.0.0.1:8000/api/user/", {
      params: reqBody,
    });
    setTrackingData(res.data);
  };

  // Function to handle click on Get Tracking Data button
  const handleGetTrackingData = () => {
    try {
      // Show loader while getting data from backend
      showLoader();

      const reqBody = { email: "examplee@gmail.com" };
      getData(reqBody);

      // Hide the "Get Tracking Data" button and set local storage variable value to false
      setShowGetDataButton(false);
      localStorage.setItem("getData", "false");

    } catch (error) {
      console.error("Error fetching tracking data:", error);
    } finally {
      // Hide loader after fetching data
      hideLoader(true);
    }
  };

  // Handle user logout
  const handleLogout = () => {
    localStorage.clear(); // Clear local storage before logging out
    const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URL;
    logout({ logoutParams: { returnTo: redirectUri } });
  };

  // Show & Hide Loader component
  const showLoader = () => setLoader(true);
  const hideLoader = () => setLoader(false);

  // Returns Authentication Loader component if authentication is in progress
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="trackingPageContainer flex flex-col justify-center items-center w-[100%] min-h-[100vh] bg-[#f7d681] relative font-primary overflow-y-auto overflow-x-hidden overflow-hidden">
        <div className="w-[90%] flex justify-between items-center absolute top-[1rem]">
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              className=" cursor-pointer vvsm:w-[5rem] msm:w-[6rem] lg:w-[8rem]"
            />
          </Link>
        <LogoutButton handleLogout={handleLogout}/>
        </div>

        <div className="w-full overflow-hidden h-[70%] absolute bottom-[0]">
          <picture>
            <source media="(min-width: 768px)" srcSet={mediumTrackingPageBg} />
            <img
              src={trackingPageBg}
              alt="background image"
              className="absolute bottom-[0] w-full sm:bottom-[-7%] lg:bottom-[-15%] xl:bottom-[-20%] 2xl:bottom-[-25%]"
            />
          </picture>
        </div>

        <div className="content w-[90%] min-h-fit flex flex-col justify-center items-center gap-4 z-[1] relative sm:w-[80%] md:gap-8 flex-grow-1 my-[10rem] overflow-hidden">
          <div className="userInfo flex gap-4 justify-start items-center">
            <div className="userAvatar w-[5rem] h-[5rem] border-2 border-black rounded-[50%] overflow-hidden">
              <img
                src={user.picture}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="userName text-[1.5rem] md:text-[2rem]">
              {user.name}
            </h3>
          </div>
          <div className="assessmentHistory flex flex-col justify-center items-center w-full min-h-fit  flex-grow-1">
            {!showGetDataButton? (
              <>
                <h3 className="assessmentHistory text-[1.5rem] mb-[0.5rem] md:text-[2rem]">
                  Assessment History
                </h3>
                <div className="divPool flex flex-col justify-center items-center gap-2 w-full h-[90%] sm:w-[90%] sm:px-[1rem] md:w-[80%] mmd:w-[75%] lg:w-[65%] xl:w-[55%] 2xl:w-[45%] relative flex-grow-1">
                  {trackingData.length === 0 ? (
                    <div className="bg-[#FF8020] text-black text-[1.5rem] sm:text-[2rem] px-[2rem] sm:px-[4rem] border-2 border-black rounded-[0.625rem]">
                      No previous record found.
                    </div>
                  ) : (
                    // Render TrackDiv components with the received tracking data
                    trackingData.map((ele, i) => {
                      let timestamp = ele.datetime;
                      let assessmentDate = new Date(timestamp);
                      let status = ele.score > 40 ? "Good" : "Moderate";
                      return (
                        <TrackDiv
                          key={i}
                          date={assessmentDate.getDate()}
                          month={assessmentDate.getMonth() + 1}
                          year={assessmentDate.getFullYear()}
                          status={status}
                        />
                      );
                    })
                  )}
                </div>
              </>
            ) : (
              <button
                className="bg-[#FF8020] text-black text-[1.5rem] sm:text-[2rem] px-[2rem] sm:px-[4rem] hover:bg-white hover:text-black border-2 border-black rounded-[0.625rem]"
                onClick={handleGetTrackingData}
              >
                Get Tracking Data
              </button>
            )}
          </div>
        </div>
        {loader && <Loader />}
      </div>
    </>
  );
}

export default TrackingPage;

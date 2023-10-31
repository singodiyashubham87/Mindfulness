import logo from "../assets/images/logo.png";
import trackingPageBg from "../assets/images/trackingPageBg.png";
import mediumTrackingPageBg from "../assets/images/mediumTrackingPageBg.png";
import smiley from "../assets/images/smiley.png";
import avatar from "../assets/images/avatar.png";
import { useAuth0 } from "@auth0/auth0-react";

function TrackingPage() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const date = new Date();

  return (
    <>
      <div className="trackingPageContainer flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-[#f7d681] relative font-primary">
        <img
          src={logo}
          alt="logo"
          className="w-[8rem] absolute top-[1rem] left-[1rem] vvsm:w-[6rem]"
        />
        <div className="w-[100vw] overflow-hidden h-[70%] absolute bottom-[0]">
          <picture>
            <source media="(min-width: 768px)" srcSet={mediumTrackingPageBg} />
            <img
              src={trackingPageBg}
              alt="background image"
              className="absolute bottom-[0] w-full sm:bottom-[-7%] lg:bottom-[-15%] xl:bottom-[-20%] 2xl:bottom-[-25%]"
            />
          </picture>
        </div>

        {!isAuthenticated ? (
          <button
            className="bg-[#FF8020] text-black text-[1.5rem] sm:text-[2rem] px-[2rem] sm:px-[4rem] hover:bg-white hover:text-black border-2 border-black rounded-[0.625rem] z-[1]"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        ) : (
          <>
            <div className="content w-[80%] max-h-[70%] flex flex-col justify-center items-center gap-4 z-[1] relative md:gap-8">
              {/* <div className="userInfo flex gap-4 justify-start items-center w-full pl-[1rem]"> */}
              <div className="userInfo flex gap-4 justify-start items-center">
                <div className="userAvatar w-[5rem] h-[5rem] border-2 border-black rounded-[50%] overflow-hidden">
                  <img
                    src={user.picture}
                    alt={`${user.name}_avatar`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="userName text-[1.5rem] md:text-[2rem]">
                  {user.name}
                </h3>
              </div>
              <div className="assessmentHistory flex flex-col justify-center items-center w-full">
                <h3 className="assessmentHistory text-[1.5rem] mb-[0.5rem] md:text-[2rem]">
                  Assessment History
                </h3>
                <div className="divPool px-[1rem] flex flex-col justify-center items-center gap-2 w-full sm:w-[90%] md:w-[80%] mmd:w-[75%] lg:w-[65%] xl:w-[55%] 2xl:w-[45%] overflow-y-auto">
                  <div className="data bg-[#FF8020] flex justify-center items-center h-[5rem] w-full border-2 border-black rounded-[0.625rem] relative">
                    <div className="trackData w-[90%] h-[80%] relative">
                      <span className="date absolute top-0 left-0 text-[1.2rem]">
                        {date.getDate()}-{date.getMonth()}-{date.getFullYear()}
                      </span>
                      <span className="absolute left-0 bottom-0 text-[1.2rem]">
                        Status: <span className="text-white">Moderate</span>
                      </span>
                      <div className="smiley overflow-hidden h-full absolute right-0">
                        <img
                          src={smiley}
                          alt="emoji"
                          className="h-[100%] w-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="data bg-[#FF8020] flex justify-center items-center h-[5rem] w-full border-2 border-black rounded-[0.625rem] relative">
                    <div className="trackData w-[90%] h-[80%] relative">
                      <span className="date absolute top-0 left-0 text-[1.2rem]">
                        {date.getDate()}-{date.getMonth()}-{date.getFullYear()}
                      </span>
                      <span className="absolute left-0 bottom-0 text-[1.2rem]">
                        Status: <span className="text-white">Moderate</span>
                      </span>
                      <div className="smiley overflow-hidden h-full absolute right-0">
                        <img
                          src={smiley}
                          alt="emoji"
                          className="h-[100%] w-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="data bg-[#FF8020] flex justify-center items-center h-[5rem] w-full border-2 border-black rounded-[0.625rem] relative">
                    <div className="trackData w-[90%] h-[80%] relative">
                      <span className="date absolute top-0 left-0 text-[1.2rem]">
                        {date.getDate()}-{date.getMonth()}-{date.getFullYear()}
                      </span>
                      <span className="absolute left-0 bottom-0 text-[1.2rem]">
                        Status: <span className="text-white">Moderate</span>
                      </span>
                      <div className="smiley overflow-hidden h-full absolute right-0">
                        <img
                          src={smiley}
                          alt="emoji"
                          className="h-[100%] w-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logout Button  */}
            <button
              className="bg-[#FF8020] text-black text-[1.3rem] sm:text-[1.5rem] px-[1rem] sm:px-[2rem] hover:bg-white hover:text-black border-2 border-black rounded-[0.625rem] absolute top-[2.5rem] right-[2rem]"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default TrackingPage;

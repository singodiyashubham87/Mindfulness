import logo from "../assets/images/logo.png";
import trackingPageBg from "../assets/images/trackingPageBg.png";
import avatar from "../assets/images/avatar.png";
import { useAuth0 } from "@auth0/auth0-react";

function TrackingPage() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      <div className="trackingPageContainer flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-[#f7d681] relative font-primary">
        <img
          src={logo}
          alt="logo"
          className="w-[8rem] absolute top-[1rem] left-[1rem] vvsm:w-[6rem]"
        />
        <img
          src={trackingPageBg}
          alt="background image"
          className="absolute bottom-[0]"
        />

        {!isAuthenticated ? (
          <button
            className="bg-[#FF8020] text-black text-[1.5rem] sm:text-[2rem] px-[2rem] sm:px-[4rem] hover:bg-white hover:text-black border-2 border-black rounded-[0.625rem] z-[1]"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        ) : (
          <>
            <div className="content w-[80%] max-h-[70%] flex flex-col justify-center items-center gap-4 z-[1] relative">
              {/* <div className="userInfo flex gap-4 justify-start items-center w-full pl-[1rem]"> */}
              <div className="userInfo flex gap-4 justify-start items-center">
                <div className="userAvatar w-[5rem] h-[5rem] border-2 border-black rounded-[50%] overflow-hidden">
                  <img
                    src={user.picture}
                    alt={`${user.name}_avatar`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="userName text-[1.5rem]">{user.name}</h3>
              </div>
              <div className="assessmentHistory flex flex-col justify-center items-center w-full">
                <h3 className="assessmentHistory text-[1.5rem] mb-[0.5rem]">
                  Assessment History
                </h3>
                <div className="divPool px-[1rem] flex flex-col justify-center items-center gap-2 w-full overflow-y-auto">
                  <div className="data bg-[#FF8020] h-[5rem] w-full border-2 border-black rounded-[0.625rem]"></div>
                  <div className="data bg-[#FF8020] h-[5rem] w-full border-2 border-black rounded-[0.625rem]"></div>
                  <div className="data bg-[#FF8020] h-[5rem] w-full border-2 border-black rounded-[0.625rem]"></div>
                </div>
              </div>
            </div>

            {/* Logout Button  */}
            <button
              className="bg-[#FF8020] text-black text-[1.5rem] sm:text-[2rem] px-[2rem] sm:px-[4rem] hover:bg-white hover:text-black border-2 border-black rounded-[0.625rem] absolute top-[2rem] right-[2rem]"
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

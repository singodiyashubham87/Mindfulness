import landingPageBanner from "../assets/images/landingPageBg.png";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";
import { Link } from "react-router-dom";

function Homepage() {

  return (
    <>
      <div className="trackingContainer bg-[#ffd801] w-[100vw] h-[100vh] font-primary relative border-2 border-black">
        <div className="w-full overflow-hidden h-[70%] absolute bottom-[0]">
        <Link to={"/"}>
          <img
            src={landingPageBanner}
            alt="background image"
            className="absolute bottom-[0] w-full 2xl:bottom-[-10%] xxl:bottom-[-18%]"
          />
          </Link>
        </div>
        <nav className="flex items-center px-[2rem] mt-[1rem] justify-between lg:px-[4rem] lg:mt-[2rem] xl:pr-[8rem] 2xl:pr-[12rem]">
          <img src={logo} className="vvsm:w-[5rem] md:w-[6rem] lg:w-[8rem]" alt="logo" />
          <Link to={"/track"}>
            <div className="userProfile w-[3rem] h-[3rem] md:w-[3.5rem] md:h-[3.5rem] lg:w-[4rem] lg:h-[4rem] rounded-[50%] border-2 border-black overflow-hidden cursor-pointer">
              <img
                src={avatar}
                alt="avatarLogo"
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
          </Link>
        </nav>
        <div className="landingPageText m-auto flex flex-col items-center justify-center w-[100%] absolute top-[50%] left-[50%] translate-x-[-50%]	translate-y-[-50%]">
          <h1 className="text-[3rem] msm:text-[4rem] gsm:text-[4.5rem] md:text-[5rem] leading-[1.2]">Mindfulness</h1>
          <h4 className="text-[#5F5A5A] text-[1.5rem] msm:text-[1.8rem] gsm:text-[2rem] md:text-[2.5rem] w-[90%] text-center mt-[0.5rem] md:w-[80%] mmd:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            Assess your mental health status by answering some questions.
          </h4>
          <Link to={"/assessment"}>
            <button className="transition ease-in-out  text-[1.5rem] msm:text-[1.8rem] gsm:text-[2rem] md:text-[2.2rem] bg-[#D9D9D9] py-[0.3rem] px-[2rem] rounded-[2rem] mt-[0.8rem] hover:bg-black hover:text-[#D9D9D9]">
              Start Test
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Homepage;

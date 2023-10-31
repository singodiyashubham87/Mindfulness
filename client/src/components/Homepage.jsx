import landingPageBanner from "../assets/images/landingPageBg.png";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";

function Homepage() {
  return (
    <>
      <div className="trackingContainer bg-[#ffd801] w-[100vw] h-[100vh] font-primary relative border-2 border-black  z-[-100]">
        <div className="w-full overflow-hidden h-full xl:h-[80%] absolute bottom-[0]">
          <img
            src={landingPageBanner}
            alt="background image"
            className="absolute bottom-[0] w-full 2xl:bottom-[-10%] xxl:bottom-[-18%]"
          />
        </div>
        <nav className="flex items-center px-[4rem] mt-[1rem] justify-between">
          <img src={logo} className="w-[7rem]" alt="logo" />
          <div className="userProfile w-[4rem] h-[4rem] rounded-[50%] border-2 border-black overflow-hidden cursor-pointer">
            <img
              src={avatar}
              alt="avatarLogo"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
        </nav>
        <div className="landingPageText m-auto flex flex-col items-center justify-center w-[100%] absolute top-[50%] left-[50%] translate-x-[-50%]	translate-y-[-50%]">
          <h1 className="text-[5rem] leading-[1.2]">Mindfulness</h1>
          <h4 className="text-[#5F5A5A] text-[2rem] w-[90%] text-center mt-[0.5rem]">
            Assess your mental health status by answering some questions.
          </h4>
          <button className="transition ease-in-out  text-[2rem] bg-[#D9D9D9] py-[0.3rem] px-[2rem] rounded-[2rem] mt-[0.8rem] hover:bg-black hover:text-[#D9D9D9]">
            Start Test
          </button>
        </div>
      </div>
    </>
  );
}

export default Homepage;

import landingPageBanner from "../assets/images/landingPageBg.png";
import logo from "../assets/images/logo.png";
import userAvatar from "../assets/images/userAvatar.png";

function Homepage() {
  return (
    <>
      <div
        className="homePage w-[100%] h-[100vh] bg-[image:var(--image-url)] font-primary border-2 border-black"
        style={{ "--image-url": `url(${landingPageBanner})` }}
      >
        <nav className="flex items-center px-[4rem] mt-[1rem] justify-between">
          <img
            src={logo}
            className="w-[10rem]"
            alt="logo"
          />
          <div className="userProfile  w-[5rem] h-[5rem] rounded-[50%]">
            <img src={userAvatar} alt="userAvatarLogo" className="cursor-pointer"/>
          </div>
        </nav>
          <div className="landingPageText m-auto flex flex-col items-center justify-center  w-[50%]">
            <h1 className="text-[7.5rem] leading-[1.2]">Mindfulness</h1>
            <h4 className="text-[#5F5A5A] text-[2.2rem] w-[60%] text-center mt-[0.5rem]">
              Assess your mental health status by answering some questions.
            </h4>
            <button className="transition ease-in-out  text-[2rem] bg-[#D9D9D9] py-[0.3rem] px-[2rem] rounded-[2rem] mt-[0.8rem] hover:bg-black hover:text-[#D9D9D9]">Start Test</button>
          </div>
      </div>
    </>
  );
}

export default Homepage;

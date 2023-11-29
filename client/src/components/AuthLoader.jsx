import logo from "../assets/images/logo.png"

function AuthLoader(props){
  const {loadingText} = props;
    return (
      <div className="loaderContainer fixed top-[0] bottom-[0] right-[0] left-[0] bg-black flex justify-center items-center z-[20] ">
          <div className="loading h-[100%] w-[50%] h-auto flex flex-col gap-[2rem] justify-center items-center">
            <img id="logo" src={logo} alt="loader" className="border-4  border-white w-[150px] sm:w-[200px] rounded-[50%] animate-spin"/>
            <h5 className="text-white font-primary text-[1rem] vvsm:text-[1.5rem] vsm:text-[1.7rem] md:text-[2.5rem] sm:text-[2rem] text-center">{loadingText}</h5>
          </div>
        </div>
      );
}

export default AuthLoader;
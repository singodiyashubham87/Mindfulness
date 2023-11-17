import logo from "../assets/images/logo.png"

function AuthLoader(){
    return (
        <div className="loader h-[100vh] w-[100vw] flex justify-center items-center bg-black">
          <div className="loading h-[100%] w-[100%] flex flex-col sm:flex-row justify-center items-center border-4 border-white-800">
            <img id="logo" src={logo} alt="loader" className="border-4  border-white w-[150px] sm:w-[200px] rounded-[50%] sm:mr-[1rem] sm:mb-[0] mb-[2rem] animate-spin"/>
            <h5 className="text-white font-primary text-[1rem] vvsm:text-[1.5rem] vsm:text-[1.7rem] md:text-[2.5rem] sm:text-[2rem] ">Authenticating...</h5>
          </div>
        </div>
      );
}

export default AuthLoader;
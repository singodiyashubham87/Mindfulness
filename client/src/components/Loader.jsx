import logo from "../assets/images/logo.png"

const Loader = () => {
  return (
    <div className="loaderContainer w-[100vw] fixed top-[0] bottom-[0] right-[0] left-[0] bg-[#272829] flex justify-center items-center opacity-[90%] z-[2]">
      <img
        id="logo"
        src={logo}
        alt="loader"
        className=" border-4 border-white w-[150px] sm:w-[200px] rounded-[50%] animate-spin"
      />
    </div>
  )
}

export default Loader;

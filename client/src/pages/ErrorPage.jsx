import errorPageImage from "../assets/images/errorPage.jpg"

const ErrorPage = () => {
  return (
    <div className="h-[100dvh] w-[100dvw] bg-[#ffd801] border-2 border-black flex justify-center items-center">
        <img src={errorPageImage} alt="errorImage" className="w-full h-full cover " />
    </div>
  )
}

export default ErrorPage;

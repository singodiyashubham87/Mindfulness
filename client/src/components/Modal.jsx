const Modal = (props) => {
  const { alert, alertError, closeModal } = props;

  return (
    <>
      <div
        onClick={closeModal}
        className="wrapper top-[0] bottom-[0] right-[0] left-[0] bg-[#272829] fixed opacity-[90%] z-[5]"
      ></div>
      <div className="modalContainer w-[90%] vsm:w-[75%] sm:w-[60%] md:w-[auto] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black border-2 border-[#fff] flex flex-col justify-center items-center px-[1rem] py-[1rem] md:px-[4rem] md:py-[2rem] xl:px-[5rem] xl:py-[3rem] font-primary z-[10]">
        <h1 className="text-white text-[1.3rem] md:text-[1.7rem] xl:text-[2rem] text-white">
          {alert || "Alert!"}
        </h1>
        <p className="text-white text-center m-[1rem] md:m-[1.5rem] xl:m-[2rem] text-[1.3rem] xl:text-[2rem] md:text-[1.7rem] text-[#FF7F1E]">
          {alertError}
        </p>
        <button
          onClick={closeModal}
          className="close md:text-[1.5rem] text-white border border-[#fff] hover:bg-[#fff] hover:text-black px-[1rem] py-[.5rem] xl:px-[3rem] xl:py-[1rem]"
        >
          Close
        </button>
      </div>
    </>
  );
};

export default Modal;

const Button = (props) => {
    const { questionNum, questionIndex, buttonValue, option, handleSelectOption } = props;

  return (
    <div className="radioDiv relative">
      <input type="radio" name={questionNum} value={buttonValue} onChange={() => handleSelectOption(questionIndex, buttonValue)} checked={option === buttonValue}
        className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
        <label> {buttonValue} </label>
      </div>
    </div>
  );
};

export default Button;

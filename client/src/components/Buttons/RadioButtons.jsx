import RadioButton from "./RadioButton";

const RadioButtons = (props) => {
    const { questionNum, questionIndex, buttonValue1, buttonValue2, buttonValue3, option, handleSelectOption } = props;

  return (
    <div className="optionButtons w-[98%] flex flex-wrap gap-y-[0.5rem] justify-between mb-[1rem] mt-[0.5rem] xl:w-[90%]">
        <RadioButton questionIndex={questionIndex} questionNum={questionNum} buttonValue={buttonValue1} option={option} handleSelectOption={handleSelectOption} />
        <RadioButton questionIndex={questionIndex} questionNum={questionNum} buttonValue={buttonValue2} option={option} handleSelectOption={handleSelectOption} />
        <RadioButton questionIndex={questionIndex} questionNum={questionNum} buttonValue={buttonValue3} option={option} handleSelectOption={handleSelectOption} />
    </div>
  )
}

export default RadioButtons;

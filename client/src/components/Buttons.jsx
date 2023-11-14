import Button from "./Button";

const Buttons = (props) => {
    const { questionNum, questionIndex, buttonValue1, buttonValue2, buttonValue3, option, handleSelectOption } = props;

  return (
    <div className="optionButtons w-[98%] flex justify-between mb-[1rem] mt-[0.5rem] xl:w-[90%]">
        <Button questionIndex={questionIndex} questionNum={questionNum} buttonValue={buttonValue1} option={option} handleSelectOption={handleSelectOption} />
        <Button questionIndex={questionIndex} questionNum={questionNum} buttonValue={buttonValue2} option={option} handleSelectOption={handleSelectOption} />
        <Button questionIndex={questionIndex} questionNum={questionNum} buttonValue={buttonValue3} option={option} handleSelectOption={handleSelectOption} />
    </div>
  )
}

export default Buttons;

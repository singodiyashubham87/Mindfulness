import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import assessmentPageBg from "../assets/images/assessmentPageBg.png";
import kidThinking from "../assets/images/kidThinking.png";
import axios from "axios";
import Question from "../components/Question";
import Buttons from "../components/Buttons";

function AssessmentPage() {
  // Navigation control
  const navigateTo = useNavigate();

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    console.log(selectedOptions);
    let formData = {};
    for(let i=0;i<19;i++){
      formData[`q${i}`]= `${selectedOptions[i]}`;
    }
    console.log(formData);
    // const formData = {
    //     q0: 18,
    //     q1: "Business",
    //     q2: "Female",
    //     q3: 3.3,
    //     q4: 5,
    //     q5: 0,
    //     q6: "Average",
    //     q7: "Moderate",
    //     q8: "Average",
    //     q9: "Low",
    //     q10: "Married",
    //     q11: "Never",
    //     q12: "Occasionally",
    //     q13: "No",
    //     q14: "No",
    //     q15: 5,
    //     q16: "Moderate",
    //     q17: 18,
    //     q18: "Off-Campus",
    // };
    // console.log(formData);
    // axios
    //   .post("http://localhost:8000/api/user/", {
    //     'data': formData,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    // console.log("request successful");
    // navigateTo("/result", { state: { assessmentResult: data } });
  }

  // Question's Option Choice
  const [selectedOptions, setSelectedOptions] = useState(Array(19).fill("")); // State to manage selected options for 19 questions

  // Function to handle selecting an option for a specific question
  const handleSelectOption = (questionIndex, option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = option;
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <>
      <div
        className="trackingContainer bg-[image:var(--assessmentPageBg)] bg-no-repeat bg-center bg-cover relative font-primary"
        style={{ "--assessmentPageBg": `url(${assessmentPageBg})` }}
      >
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="absolute top-[1rem] left-[1rem] vvsm:w-[6rem] lg:w-[8rem] lg:top-[2rem] lg:left-[2rem]"
          />
        </Link>
        <div className="content h-[100vh] flex justify-center items-center">
          <div className="left hidden md:block flex justify-center items-center w-[25%]">
            <img
              src={kidThinking}
              alt="kidThinkingImage"
              className="w-[100%]"
            />
          </div>
          <div className="right flex justify-center items-center w-[100%] h-[75%] md:w-[70%] mmd:w-[60%] xl:w-[50%] xl:h-[80%]  2xl:w-[45%]">
            <form
              action="/"
              className="assessmentForm text-center w-[90%] h-[95%] bg-[#D1BA9180] rounded-[0.625rem] p-[0.5rem] pt-[2rem] pl-[1.5rem] px-[1rem] gsm:w-[85%] sm:w-[80%] md:w-[100%]"
            >
              <div className="questions rounded-[0.625rem] overflow-y-auto h-[85%] text-left">

                <div className="q1">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={0} questionNum="q1" buttonValue1="Mai" buttonValue2="Kon" buttonValue3="Batau" option={selectedOptions[0]} handleSelectOption={handleSelectOption}/>
                </div>


                <div className="q2">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={1} questionNum="q2" buttonValue1="Hehe" buttonValue2="Kon" buttonValue3="Lol" option={selectedOptions[1]} handleSelectOption={handleSelectOption}/>
                </div>


                <div className="q3">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={2} questionNum="q3" buttonValue1="tu" buttonValue2="happ" buttonValue3="ganda" option={selectedOptions[2]} handleSelectOption={handleSelectOption}/>
                </div>


                <div className="q4">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={3} questionNum="q4" buttonValue1="hehe" buttonValue2="kutta" buttonValue3="lul" option={selectedOptions[3]} handleSelectOption={handleSelectOption}/>
                </div>


                <div className="q5">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={4} questionNum="q5" buttonValue1="Mai" buttonValue2="Kon" buttonValue3="Batau" option={selectedOptions[4]} handleSelectOption={handleSelectOption}/>
                </div>


                <div className="q6">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={5} questionNum="q6" buttonValue1="Hehe" buttonValue2="Kon" buttonValue3="Lol" option={selectedOptions[5]} handleSelectOption={handleSelectOption}/>
                </div>


                <div className="q7">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={6} questionNum="q7" buttonValue1="tu" buttonValue2="happ" buttonValue3="ganda" option={selectedOptions[6]} handleSelectOption={handleSelectOption}/>
                </div>


                <div className="q8">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={7} questionNum="q8" buttonValue1="hehe" buttonValue2="kutta" buttonValue3="lul" option={selectedOptions[7]} handleSelectOption={handleSelectOption}/>
                </div>


                <div className="q9">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={8} questionNum="q9" buttonValue1="Mai" buttonValue2="Kon" buttonValue3="Batau" option={selectedOptions[8]} handleSelectOption={handleSelectOption}/>
                </div>


                <div className="q10">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={9} questionNum="q10" buttonValue1="Hehe" buttonValue2="Kon" buttonValue3="Lol" option={selectedOptions[9]} handleSelectOption={handleSelectOption}/>
                </div>


                <div className="q11">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={10} questionNum="q11" buttonValue1="tu" buttonValue2="happ" buttonValue3="ganda" option={selectedOptions[10]} handleSelectOption={handleSelectOption}/>
                </div>


                <div className="q12">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={11} questionNum="q12" buttonValue1="hehe" buttonValue2="kutta" buttonValue3="lul" option={selectedOptions[11]} handleSelectOption={handleSelectOption}/>
                </div>


                <div className="q13">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={12} questionNum="q13" buttonValue1="Mai" buttonValue2="Kon" buttonValue3="Batau" option={selectedOptions[12]} handleSelectOption={handleSelectOption}/>
                </div>


                <div className="q14">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={13} questionNum="q14" buttonValue1="Hehe" buttonValue2="Kon" buttonValue3="Lol" option={selectedOptions[13]} handleSelectOption={handleSelectOption}/>
                </div>


                <div className="q15">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={14} questionNum="q15" buttonValue1="tu" buttonValue2="happ" buttonValue3="ganda" option={selectedOptions[14]} handleSelectOption={handleSelectOption}/>
                </div>


                <div className="q16">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={15} questionNum="q16" buttonValue1="hehe" buttonValue2="kutta" buttonValue3="lul" option={selectedOptions[15]} handleSelectOption={handleSelectOption}/>
                </div>


                <div className="q17">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={16} questionNum="q17" buttonValue1="tu" buttonValue2="happ" buttonValue3="ganda" option={selectedOptions[16]} handleSelectOption={handleSelectOption}/>
                </div>


                <div className="q18">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={17} questionNum="q18" buttonValue1="hehe" buttonValue2="kutta" buttonValue3="lul" option={selectedOptions[17]} handleSelectOption={handleSelectOption}/>
                </div>


                <div className="q19">
                  <Question question={"How will you rate your inner peace?"} />
                  <Buttons questionIndex={18} questionNum="q19" buttonValue1="Mai" buttonValue2="Kon" buttonValue3="Batau" option={selectedOptions[18]} handleSelectOption={handleSelectOption}/>
                </div>


              </div>
              <input
                type="submit"
                className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] mt-[1.5rem]"
                value={"Submit"}
                onClick={handleSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssessmentPage;

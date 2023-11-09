import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import assessmentPageBg from "../assets/images/assessmentPageBg.png";
import kidThinking from "../assets/images/kidThinking.png";
import axios from 'axios';

function AssessmentPage() {
  // Navigation control
  const navigateTo = useNavigate();

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    let formData = {};
    for(let i=0;i<10;i++){
      formData[`q${i}`]= `${selectedOptions[i]}`;
    }
    console.log(formData);
    axios.post("http://localhost:8000/api/user/",{
      "user": {
        "email": "admin@example.com",
      },
      "data": formData,
    }).then(res=>{
      console.log(res.data);
    })
    console.log("request successful");
    // navigateTo("/result", { state: { assessmentResult: data } });
  }

  // Question's Option Choice
  const [selectedOptions, setSelectedOptions] = useState(Array(10).fill("")); // State to manage selected options for 5 questions

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
                  <span className="question text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">How will you rate your inner peace?</span>
                  <div className="optionButtons w-[98%] flex justify-between mb-[1rem] mt-[0.5rem] xl:w-[90%]">
                    <div className="radioDiv relative">
                      <input type="radio" name="q1" value="Satisfied" onChange={() => handleSelectOption(0, "Satisfied")} checked={selectedOptions[0] === "Satisfied"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Satisfied </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q1" value="Good" onChange={() => handleSelectOption(0, "Good")} checked={selectedOptions[0] === "Good"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Good </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q1" value="Excellent" onChange={() => handleSelectOption(0, "Excellent")} checked={selectedOptions[0] === "Excellent"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Excellent </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="q2">
                  <span className="question text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">How will you rate your inner peace?</span>
                  <div className="optionButtons w-[98%] flex justify-between mb-[1rem] mt-[0.5rem] xl:w-[90%]">
                    <div className="radioDiv relative">
                      <input type="radio" name="q2" value="Satisfied" onChange={() => handleSelectOption(1, "Satisfied")} checked={selectedOptions[1] === "Satisfied"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Satisfied </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q2" value="Good" onChange={() => handleSelectOption(1, "Good")} checked={selectedOptions[1] === "Good"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Good </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q2" value="Excellent" onChange={() => handleSelectOption(1, "Excellent")} checked={selectedOptions[1] === "Excellent"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Excellent </label>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="q3">
                  <span className="question text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">How will you rate your inner peace?</span>
                  <div className="optionButtons w-[98%] flex justify-between mb-[1rem] mt-[0.5rem] xl:w-[90%]">
                    <div className="radioDiv relative">
                      <input type="radio" name="q3" value="Satisfied" onChange={() => handleSelectOption(2, "Satisfied")} checked={selectedOptions[2] === "Satisfied"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Satisfied </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q3" value="Good" onChange={() => handleSelectOption(2, "Good")} checked={selectedOptions[2] === "Good"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Good </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q3" value="Excellent" onChange={() => handleSelectOption(2, "Excellent")} checked={selectedOptions[2] === "Excellent"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Excellent </label>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="q4">
                  <span className="question text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">How will you rate your inner peace?</span>
                  <div className="optionButtons w-[98%] flex justify-between mb-[1rem] mt-[0.5rem] xl:w-[90%]">
                    <div className="radioDiv relative">
                      <input type="radio" name="q4" value="Satisfied" onChange={() => handleSelectOption(3, "Satisfied")} checked={selectedOptions[3] === "Satisfied"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Satisfied </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q4" value="Good" onChange={() => handleSelectOption(3, "Good")} checked={selectedOptions[3] === "Good"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Good </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q4" value="Excellent" onChange={() => handleSelectOption(3, "Excellent")} checked={selectedOptions[3] === "Excellent"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Excellent </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="q5">
                  <span className="question text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">How will you rate your inner peace?</span>
                  <div className="optionButtons w-[98%] flex justify-between mb-[1rem] mt-[0.5rem] xl:w-[90%]">
                    <div className="radioDiv relative">
                      <input type="radio" name="q5" value="Satisfied" onChange={() => handleSelectOption(4, "Satisfied")} checked={selectedOptions[4] === "Satisfied"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Satisfied </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q5" value="Good" onChange={() => handleSelectOption(4, "Good")} checked={selectedOptions[4] === "Good"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Good </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q5" value="Excellent" onChange={() => handleSelectOption(4, "Excellent")} checked={selectedOptions[4] === "Excellent"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Excellent </label>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="q6">
                  <span className="question text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">How will you rate your inner peace?</span>
                  <div className="optionButtons w-[98%] flex justify-between mb-[1rem] mt-[0.5rem] xl:w-[90%]">
                    <div className="radioDiv relative">
                      <input type="radio" name="q6" value="Satisfied" onChange={() => handleSelectOption(5, "Satisfied")} checked={selectedOptions[5] === "Satisfied"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Satisfied </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q6" value="Good" onChange={() => handleSelectOption(5, "Good")} checked={selectedOptions[5] === "Good"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Good </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q6" value="Excellent" onChange={() => handleSelectOption(5, "Excellent")} checked={selectedOptions[5] === "Excellent"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Excellent </label>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="q7">
                  <span className="question text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">How will you rate your inner peace?</span>
                  <div className="optionButtons w-[98%] flex justify-between mb-[1rem] mt-[0.5rem] xl:w-[90%]">
                    <div className="radioDiv relative">
                      <input type="radio" name="q7" value="Satisfied" onChange={() => handleSelectOption(6, "Satisfied")} checked={selectedOptions[6] === "Satisfied"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Satisfied </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q7" value="Good" onChange={() => handleSelectOption(6, "Good")} checked={selectedOptions[6] === "Good"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Good </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q7" value="Excellent" onChange={() => handleSelectOption(6, "Excellent")} checked={selectedOptions[6] === "Excellent"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Excellent </label>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="q8">
                  <span className="question text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">How will you rate your inner peace?</span>
                  <div className="optionButtons w-[98%] flex justify-between mb-[1rem] mt-[0.5rem] xl:w-[90%]">
                    <div className="radioDiv relative">
                      <input type="radio" name="q8" value="Satisfied" onChange={() => handleSelectOption(7, "Satisfied")} checked={selectedOptions[7] === "Satisfied"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Satisfied </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q8" value="Good" onChange={() => handleSelectOption(7, "Good")} checked={selectedOptions[7] === "Good"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Good </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q8" value="Excellent" onChange={() => handleSelectOption(7, "Excellent")} checked={selectedOptions[7] === "Excellent"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Excellent </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="q9">
                  <span className="question text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">How will you rate your inner peace?</span>
                  <div className="optionButtons w-[98%] flex justify-between mb-[1rem] mt-[0.5rem] xl:w-[90%]">
                    <div className="radioDiv relative">
                      <input type="radio" name="q9" value="Satisfied" onChange={() => handleSelectOption(8, "Satisfied")} checked={selectedOptions[8] === "Satisfied"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Satisfied </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q9" value="Good" onChange={() => handleSelectOption(8, "Good")} checked={selectedOptions[8] === "Good"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Good </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q9" value="Excellent" onChange={() => handleSelectOption(8, "Excellent")} checked={selectedOptions[8] === "Excellent"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Excellent </label>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="q10">
                  <span className="question text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">How will you rate your inner peace?</span>
                  <div className="optionButtons w-[98%] flex justify-between mb-[1rem] mt-[0.5rem] xl:w-[90%]">
                    <div className="radioDiv relative">
                      <input type="radio" name="q10" value="Satisfied" onChange={() => handleSelectOption(9, "Satisfied")} checked={selectedOptions[9] === "Satisfied"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Satisfied </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q10" value="Good" onChange={() => handleSelectOption(9, "Good")} checked={selectedOptions[9] === "Good"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Good </label>
                      </div>
                    </div>
                    <div className="radioDiv relative">
                      <input type="radio" name="q10" value="Excellent" onChange={() => handleSelectOption(9, "Excellent")} checked={selectedOptions[9] === "Excellent"} className="h-[100%] w-[100%] absolute opacity-0 cursor-pointer z-[50]"/>
                      <div className="optionText flex justify-center items-center text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] buttonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black">
                        <label> Excellent </label>
                      </div>
                    </div>
                  </div>
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

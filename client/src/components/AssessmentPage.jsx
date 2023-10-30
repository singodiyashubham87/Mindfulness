import logo from "../assets/images/logo.png";
import assessmentPageBg from "../assets/images/assessmentPageBg.png";
import kidThinking from "../assets/images/kidThinking.png";

function AssessmentPage() {
  return (
    <>
      <div
        className="trackingContainer bg-[image:var(--assessmentPageBg)] bg-no-repeat bg-center bg-cover relative font-primary"
        style={{ "--assessmentPageBg": `url(${assessmentPageBg})` }}
      >
        <img
          src={logo}
          alt="logo"
          className="w-[8rem] absolute top-[1rem] left-[1rem] vvsm:w-[6rem]"
        />
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
                  <span className="question text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">
                    How will you rate your inner peace?
                  </span>
                  <div className="optionButtons w-[98%] flex justify-between mb-[0.5rem] mt-[0.5rem] xl:w-[90%]">
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] hover:bg-black hover:text-[#D9D9D9] ">Not Good</button>
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Good</button>
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Excellent</button>
                  </div>
                </div>
                <div className="q2">
                  <span className="question text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">
                    How will you rate your inner peace?
                  </span>
                  <div className="optionButtons w-[98%] flex justify-between mb-[0.5rem] mt-[0.5rem] xl:w-[90%]">
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Not Good</button>
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Good</button>
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Excellent</button>
                  </div>
                </div>
                <div className="q3">
                  <span className="question text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">
                    How will you rate your inner peace?
                  </span>
                  <div className="optionButtons w-[98%] flex justify-between mb-[0.5rem] mt-[0.5rem] xl:w-[90%]">
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Not Good</button>
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Good</button>
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Excellent</button>
                  </div>
                </div>
                <div className="q4">
                  <span className="question text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">
                    How will you rate your inner peace?
                  </span>
                  <div className="optionButtons w-[98%] flex justify-between mb-[0.5rem] mt-[0.5rem] xl:w-[90%]">
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Not Good</button>
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Good</button>
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Excellent</button>
                  </div>
                </div>
                <div className="q5">
                  <span className="question text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">
                    How will you rate your inner peace?
                  </span>
                  <div className="optionButtons w-[98%] flex justify-between mb-[0.5rem] mt-[0.5rem] xl:w-[90%]">
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Not Good</button>
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Good</button>
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Excellent</button>
                  </div>
                </div>
                <div className="q5">
                  <span className="question text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">
                    How will you rate your inner peace?
                  </span>
                  <div className="optionButtons w-[98%] flex justify-between mb-[0.5rem] mt-[0.5rem] xl:w-[90%]">
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Not Good</button>
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Good</button>
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Excellent</button>
                  </div>
                </div>
                <div className="q5">
                  <span className="question text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">
                    How will you rate your inner peace?
                  </span>
                  <div className="optionButtons w-[98%] flex justify-between mb-[0.5rem] mt-[0.5rem] xl:w-[90%]">
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Not Good</button>
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Good</button>
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Excellent</button>
                  </div>
                </div>
                <div className="q5">
                  <span className="question text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">
                    How will you rate your inner peace?
                  </span>
                  <div className="optionButtons w-[98%] flex justify-between mb-[0.5rem] mt-[0.5rem] xl:w-[90%]">
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Not Good</button>
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Good</button>
                    <button className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] ">Excellent</button>
                  </div>
                </div>
              </div> 
              <input type="submit" className="text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] mt-[1.5rem]" value={"Submit"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssessmentPage;

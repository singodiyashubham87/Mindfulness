import logo from "../assets/images/logo.png";
import trackingPageBg from "../assets/images/trackingPageBg.png";
import kidThinking from "../assets/images/kidThinking.png";

function AssessmentPage() {
  return (
    <>
      <div
        className="trackingContainer bg-[image:var(--trackingPageBg)] bg-no-repeat bg-center bg-cover relative font-primary"
        style={{ "--trackingPageBg": `url(${trackingPageBg})` }}
      >
        <img
          src={logo}
          alt="logo"
          className="w-[8rem] absolute top-[2rem] left-[2rem]"
        />
        <div className="content h-[100vh] flex justify-center items-center">
          <div className="left flex justify-center items-center w-[25%]">
            <img
              src={kidThinking}
              alt="kidThinkingImage"
              className="w-[90%]"
            />
          </div>
          <div className="right flex justify-center items-center w-[55%] h-[80%]">
            <form
              action="/"
              className="assessmentForm text-center w-[90%] h-[95%] bg-[#D1BA9180] rounded-[0.625rem] p-[0.5rem] pt-[2rem] pl-[3rem]"
            >
              <div className="questions rounded-[0.625rem] overflow-y-auto h-[85%] text-left">
                <div className="q1">
                  <span className="question text-[2rem]">
                    How will you rate your inner peace?
                  </span>
                  <div className="optionButtons w-[85%] flex justify-between mb-[0.5rem] mt-[0.5rem]">
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Not Good</button>
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Good</button>
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Excellent</button>
                  </div>
                </div>
                <div className="q2">
                  <span className="question text-[2rem]">
                    How will you rate your inner peace?
                  </span>
                  <div className="optionButtons w-[85%] flex justify-between mb-[0.5rem] mt-[0.5rem]">
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Not Good</button>
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Good</button>
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Excellent</button>
                  </div>
                </div>
                <div className="q3">
                  <span className="question text-[2rem]">
                    How will you rate your inner peace?
                  </span>
                  <div className="optionButtons w-[85%] flex justify-between mb-[0.5rem] mt-[0.5rem]">
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Not Good</button>
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Good</button>
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Excellent</button>
                  </div>
                </div>
                <div className="q4">
                  <span className="question text-[2rem]">
                    How will you rate your inner peace?
                  </span>
                  <div className="optionButtons w-[85%] flex justify-between mb-[0.5rem] mt-[0.5rem]">
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Not Good</button>
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Good</button>
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Excellent</button>
                  </div>
                </div>
                <div className="q5">
                  <span className="question text-[2rem]">
                    How will you rate your inner peace?
                  </span>
                  <div className="optionButtons w-[85%] flex justify-between mb-[0.5rem] mt-[0.5rem]">
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Not Good</button>
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Good</button>
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Excellent</button>
                  </div>
                </div>
                <div className="q5">
                  <span className="question text-[2rem]">
                    How will you rate your inner peace?
                  </span>
                  <div className="optionButtons w-[85%] flex justify-between mb-[0.5rem] mt-[0.5rem]">
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Not Good</button>
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Good</button>
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Excellent</button>
                  </div>
                </div>
                <div className="q5">
                  <span className="question text-[2rem]">
                    How will you rate your inner peace?
                  </span>
                  <div className="optionButtons w-[85%] flex justify-between mb-[0.5rem] mt-[0.5rem]">
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Not Good</button>
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Good</button>
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Excellent</button>
                  </div>
                </div>
                <div className="q5">
                  <span className="question text-[2rem]">
                    How will you rate your inner peace?
                  </span>
                  <div className="optionButtons w-[85%] flex justify-between mb-[0.5rem] mt-[0.5rem]">
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Not Good</button>
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Good</button>
                    <button className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer ">Excellent</button>
                  </div>
                </div>
              </div> 
              <input type="submit" className="text-[1.5rem] bg-[#D9D9D9] px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer mt-[1.5rem]" value={"Submit"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssessmentPage;

import resultArt from "../assets/images/resultArt.png";
import { useState } from "react";

function ResultPage() {
  const [status, setStatus] = useState("Wohoo!");
  const [testResult, setTestResult] = useState("Little or no Stress!");
  const [recommendation, setRecommendation] = useState("Stay joyful and be relaxed");

  return (
    <>
      <div className="resultContainer bg-[#FFCE00] w-[100%] h-[100vh] relative font-primary flex justify-center items-center">
        <div className="resultText w-[85%] h-[55%] md:h-[60%] md:w-[75%] flex flex-col justify-evenly items-center">
          <h1 className="vvsm:text-[3rem] vsm:text-[3.5rem] gsm:text-[4rem] md:text-[5rem] leading-[1.2]">{status}</h1>
          <div className="testResult bg-[#FF7F1E] rounded-[2rem] vvsm:rounded-[1rem] px-[2rem] text-center">
            <h2 className="vvsm:text-[1.3rem] vsm:text-[1.5rem] msm:text-[1.7rem] gsm:text-[2rem] 2xl:text-[3rem] md:text-[2.5rem] lg:text-[2.8rem] text-white">
              Test Result: <span className="text-black">{testResult}</span>
            </h2>
          </div>
          <div className="recommendation bg-[#E03A3A]  rounded-[2rem] vvsm:rounded-[1rem] px-[2rem] text-center">
            <h2 className="vvsm:text-[1.3rem] vsm:text-[1.5rem] msm:text-[1.7rem] gsm:text-[2rem] 2xl:text-[3rem] md:text-[2.5rem] lg:text-[2.8rem] text-white">
            Recommendation: <span className="text-[#FAC05E]">{recommendation}</span>
            </h2>
          </div>
          <button className="transition ease-in-out vvsm:text-[1.3rem] vsm:text-[1.5rem] lg:text-[1.5rem] gsm:text-[1.8rem]  md:text-[2rem] lg:text-[2.5rem] bg-[#D9D9D9] py-[0.3rem] px-[2rem] rounded-[2rem] mt-[0.8rem] hover:bg-black hover:text-[#D9D9D9]">Save Progress</button>

        </div>
        <img
          src={resultArt}
          alt="Blob"
          className="absolute right-0 bottom-0 vvsm:w-[18rem] vsm:w-[20rem] sm:w-[25rem] lg:w-[30rem] 2xl:w-[40rem]"
        />
      </div>
    </>
  );
}

export default ResultPage;

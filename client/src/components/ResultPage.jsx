import resultArt from "../assets/images/resultArt.png";
import { useState } from "react";

function ResultPage() {
  const [status, setStatus] = useState("Wohoo!");
  const [testResult, setTestResult] = useState("Little or no Stress!");
  const [recommendation, setRecommendation] = useState("Stay joyful and be relaxed");

  return (
    <>
      <div className="resultContainer bg-[#FFCE00] w-[100%] h-[100vh] relative font-primary flex justify-center items-center">
        <div className="resultText w-[40%] h-[70%] flex flex-col justify-evenly items-center">
          <h1 className="text-[5rem] leading-[1.2]">{status}</h1>
          <div className="testResult bg-[#FF7F1E] rounded-[2rem] px-[2rem] text-center">
            <h2 className="text-[3rem] text-white">
              Test Result: <span className="text-black">{testResult}</span>
            </h2>
          </div>
          <div className="recommendation bg-[#E03A3A]  rounded-[2rem] px-[2rem] text-center">
            <h2 className="text-[3rem] text-white">
            Recommendation: <span className="text-[#FAC05E]">{recommendation}</span>
            </h2>
          </div>
          <button className="transition ease-in-out  text-[2rem] bg-[#D9D9D9] py-[0.3rem] px-[2rem] rounded-[2rem] mt-[0.8rem] hover:bg-black hover:text-[#D9D9D9]">Save Progress</button>

        </div>
        <img
          src={resultArt}
          alt="Blob"
          className="absolute right-0 bottom-0 w-[40rem]"
        />
      </div>
    </>
  );
}

export default ResultPage;

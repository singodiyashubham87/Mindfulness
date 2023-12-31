import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import assessmentPageBg from "../assets/images/assessmentPageBg.png";
import kidThinking from "../assets/images/kidThinking.png";
import Question from "../components/Question";
import RadioButtons from "../components/Buttons/RadioButtons";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import prepareFormDataObj from "../utils/prepareFormDataObj";
import getUserScore from "../utils/getUserScore";

function AssessmentPage() {
  const navigateTo = useNavigate(); // Navigation control
  const [loader, setLoader] = useState(false); //loader variable
  const [showModal, setshowModal] = useState(false); //toggle popup modal
  // State to manage selected options for 19 questions
  const [selectedOptions, setSelectedOptions] = useState(Array(19).fill(""));

  // Function to handle form submission
  async function handleSubmit(e) {
    e.preventDefault();

    //getting form element as variable
    const form = document.getElementById("myForm");

    // validating if user answered all questions
    if (!form.checkValidity()) {
      openModal();
    } else {
      showLoader(); // show loader until score is calculated

      const formData = prepareFormDataObj(selectedOptions);
      const score = await getUserScore(formData);
      if (score === -1) {
        console.error(
          "Form Data posted but response not received. Maybe ML Model is not working properly."
        );
      }

      // Hide loader after score is fetched
      hideLoader();

      // Store the score and timestamp in the local storage
      const timestamp = new Date().getTime();
      localStorage.setItem("score", score);
      localStorage.setItem("timestamp", timestamp);
      // Navigate to result page after score is fetched
      navigateTo("/result", { state: { assessmentScore: score } });
    }
  }

  // Function to handle selecting an option for a specific question
  const handleSelectOption = (questionIndex, option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = option;
    setSelectedOptions(newSelectedOptions);
  };

  // Show & Hide Model
  const openModal = () => setshowModal(true);
  const closeModal = () => setshowModal(false);

  // Show & Hide Loader
  const showLoader = () => setLoader(true);
  const hideLoader = () => setLoader(false);

  return (
    <>
      {showModal && (
        <Modal
          alert="Alert"
          alertError="Please answer all Questions!"
          closeModal={closeModal}
        />
      )}
      <div
        className="trackingContainer bg-[image:var(--assessmentPageBg)] bg-no-repeat bg-center bg-cover relative font-primary"
        style={{ "--assessmentPageBg": `url(${assessmentPageBg})` }}
      >
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="absolute top-[1rem] left-[1rem] vvsm:w-[3.5rem] vsm:w-[4rem] md:w-[6rem] lg:w-[8rem] lg:top-[2rem] lg:left-[2rem]"
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
          <div className="right flex justify-center items-center w-[100%] h-[75%] md:w-[70%] mmd:w-[60%] xl:w-[50%] xl:h-[80%] 2xl:w-[45%]">
            <form
              id="myForm"
              className="assessmentForm text-center w-[98%] formsm:w-[96%] vsm:w-[94%] h-[95%] bg-[#D1BA9180] rounded-[0.625rem]  pt-[2rem] pl-[.2rem] formsm:pl-[0.4rem] vsm:pl-[0.5rem] msm:pl-[1rem] gsm:w-[90%] gsm:px-[0.8rem] gsm:pl-[1.5rem] sm:w-[85%] md:w-[100%]"
            >
              <div className="questions rounded-[0.625rem] overflow-y-auto h-[90%] text-left">
                <div className="q0">
                  <Question question={"Q. What is your current age?"} />
                  <RadioButtons
                    questionIndex={0}
                    questionNum="q0"
                    buttonValue1="Below 20"
                    buttonValue2="20-30"
                    buttonValue3="Above 30"
                    option={selectedOptions[0]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>

                <div className="q1">
                  <Question
                    question={"Q. What course are you currently enrolled in?"}
                  />
                  <RadioButtons
                    questionIndex={1}
                    questionNum="q1"
                    buttonValue1="Medical"
                    buttonValue2="Engineering"
                    buttonValue3="Others"
                    option={selectedOptions[1]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>

                <div className="q2">
                  <Question question={"Q. How do you identify your gender?"} />
                  <RadioButtons
                    questionIndex={2}
                    questionNum="q2"
                    buttonValue1="Male"
                    buttonValue2="Female"
                    buttonValue3="Other"
                    option={selectedOptions[2]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>

                <div className="q3">
                  <Question
                    question={
                      "Q. What is your current Cumulative Grade Point Average (CGPA)?"
                    }
                  />
                  <RadioButtons
                    questionIndex={3}
                    questionNum="q3"
                    buttonValue1="0.0-3.3"
                    buttonValue2="3.3-6.6"
                    buttonValue3="6.6-9.9"
                    option={selectedOptions[3]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>

                <div className="q4">
                  <Question
                    question={
                      "Q. On a scale from 0 to 5, how would you rate your stress level?"
                    }
                  />
                  <RadioButtons
                    questionIndex={4}
                    questionNum="q4"
                    buttonValue1="0"
                    buttonValue2="2.5"
                    buttonValue3="5"
                    option={selectedOptions[4]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>

                <div className="q5">
                  <Question
                    question={
                      "Q. On a scale from 0 to 5, how anxious do you feel?"
                    }
                  />
                  <RadioButtons
                    questionIndex={5}
                    questionNum="q5"
                    buttonValue1="0"
                    buttonValue2="2.5"
                    buttonValue3="5"
                    option={selectedOptions[5]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>

                <div className="q6">
                  <Question
                    question={"Q. How would you rate your sleep quality?"}
                  />
                  <RadioButtons
                    questionIndex={6}
                    questionNum="q6"
                    buttonValue1="Good"
                    buttonValue2="Average"
                    buttonValue3="Poor"
                    option={selectedOptions[6]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>

                <div className="q7">
                  <Question
                    question={
                      "Q. How often do you engage in physical activity per week?"
                    }
                  />
                  <RadioButtons
                    questionIndex={7}
                    questionNum="q7"
                    buttonValue1="Low"
                    buttonValue2="Moderate"
                    buttonValue3="High"
                    option={selectedOptions[7]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>

                <div className="q8">
                  <Question
                    question={
                      "Q. How would you describe the overall quality of your diet?"
                    }
                  />
                  <RadioButtons
                    questionIndex={8}
                    questionNum="q8"
                    buttonValue1="Good"
                    buttonValue2="Average"
                    buttonValue3="Poor"
                    option={selectedOptions[8]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>

                <div className="q9">
                  <Question
                    question={
                      "Q. How would you describe the you current social_support?"
                    }
                  />
                  <RadioButtons
                    questionIndex={9}
                    questionNum="q9"
                    buttonValue1="Low"
                    buttonValue2="Moderate"
                    buttonValue3="High"
                    option={selectedOptions[9]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>

                <div className="q10">
                  <Question
                    question={"Q. What is your current relationship status?"}
                  />
                  <RadioButtons
                    questionIndex={10}
                    questionNum="q10"
                    buttonValue1="Single"
                    buttonValue2="In a Relationship"
                    buttonValue3="Married"
                    option={selectedOptions[10]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>

                <div className="q11">
                  <Question
                    question={
                      "Q. Have you ever engaged in substance use (e.g., alcohol, drugs)?"
                    }
                  />
                  <RadioButtons
                    questionIndex={11}
                    questionNum="q11"
                    buttonValue1="Never"
                    buttonValue2="Occasionally"
                    buttonValue3="Frequently"
                    option={selectedOptions[11]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>

                <div className="q12">
                  <Question
                    question={
                      "Q. How often have you used counseling services for mental health support?"
                    }
                  />
                  <RadioButtons
                    questionIndex={12}
                    questionNum="q12"
                    buttonValue1="Never"
                    buttonValue2="Occasionally"
                    buttonValue3="Frequently"
                    option={selectedOptions[12]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>

                <div className="q13">
                  <Question
                    question={
                      "Q. Is there a history of mental health issues in your family?"
                    }
                  />
                  <RadioButtons
                    questionIndex={13}
                    questionNum="q13"
                    buttonValue1="No"
                    buttonValue2="Neutral"
                    buttonValue3="Yes"
                    option={selectedOptions[13]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>

                <div className="q14">
                  <Question
                    question={
                      "Q. Do you have any chronic illnesses or health conditions?"
                    }
                  />
                  <RadioButtons
                    questionIndex={14}
                    questionNum="q14"
                    buttonValue1="No"
                    buttonValue2="Neutral"
                    buttonValue3="Yes"
                    option={selectedOptions[14]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>

                <div className="q15">
                  <Question
                    question={
                      "Q. On a scale from 0 to 5, how would you rate your financial stress?"
                    }
                  />
                  <RadioButtons
                    questionIndex={15}
                    questionNum="q15"
                    buttonValue1="0"
                    buttonValue2="2.5"
                    buttonValue3="5"
                    option={selectedOptions[15]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>

                <div className="q16">
                  <Question
                    question={
                      "Q. How much are you involved in any extracurricular activities?"
                    }
                  />
                  <RadioButtons
                    questionIndex={16}
                    questionNum="q16"
                    buttonValue1="Low"
                    buttonValue2="Moderate"
                    buttonValue3="High"
                    option={selectedOptions[16]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>

                <div className="q17">
                  <Question
                    question={
                      "Q. How many credits are you currently enrolled in this semester?"
                    }
                  />
                  <RadioButtons
                    questionIndex={17}
                    questionNum="q17"
                    buttonValue1="15-20"
                    buttonValue2="20-25"
                    buttonValue3="25-30"
                    option={selectedOptions[17]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>

                <div className="q18">
                  <Question
                    question={
                      "Q. What type of residence do you currently live in?"
                    }
                  />
                  <RadioButtons
                    questionIndex={18}
                    questionNum="q18"
                    buttonValue1="On-Campus"
                    buttonValue2="Off-Campus"
                    buttonValue3="With Family"
                    option={selectedOptions[18]}
                    handleSelectOption={handleSelectOption}
                  />
                </div>
              </div>
              <input
                type="submit"
                className="text-[1rem] vsm:text-[1.2rem] lg:text-[1.4rem] 2xl:text-[1.5rem] bg-[#D9D9D9] px-[0.7rem] RadioButtonsm:px-[1rem] msm:px-[1.5rem] pt-[0.3rem] rounded-[0.8rem] border-2 border-black cursor-pointer hover:bg-black hover:text-[#D9D9D9] mt-[0.5rem]"
                value={"Submit"}
                onClick={handleSubmit}
              />
            </form>
          </div>
          {loader && <Loader />}
        </div>
      </div>
    </>
  );
}

export default AssessmentPage;

const Question = ({ question }) => {
  return (
    <span className="question text-[1.2rem] buttonsm:text-[1.3rem] msm:text-[1.4rem] gsm:text-[1.35rem] md:text-[1.5rem] lg:text-[1.7rem] 2xl:text-[2rem]">
      {question}
    </span>
  );
};

export default Question;

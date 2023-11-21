import smiley from "../assets/images/smiley.png";

const TrackDiv = (props) => {
  const { date, month, year, status } = props;

  return (
    <div className="data bg-[#FF8020] flex justify-center items-center h-[5rem] w-full border-2 border-black rounded-[0.625rem] relative">
      <div className="trackData w-[90%] h-full relative">
        <span className="date absolute top-0 left-0 text-[1.2rem]">
          {date}-{month}-{year}
        </span>
        <span className="absolute left-0 bottom-0 text-[1.2rem]">
          Status: <span className="text-white">{status}</span>
        </span>
        <div className="smiley overflow-hidden h-full absolute right-0">
          <img src={smiley} alt="emoji" className="h-[100%] w-auto" />
        </div>
      </div>
    </div>
  );
};

export default TrackDiv;

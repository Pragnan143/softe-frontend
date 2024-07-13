import React from "react";
import left from "../assets/left_1.png";
import right from "../assets/right_1.png";
import baby from "../assets/left_1_baby.png";
const Mentor = () => {
  return (
    <div className="h-full relative w-full flex-col items-center justify-center mb-10">
      <div className="absolute left-[30%]  top-[25%]  flex flex-col items-center text-5xl py-5 font-medium z-40 ">
        <p className="tracking-wide">Select what type of mentor want</p>
        <p className="tracking-wide">kids</p>
      </div>
      <div className="flex z-40 ">
        <div className="w-[50%] flex items-start justify-start relative">
          <img
            src={left}
            alt="left"
            className="w-[500px] h-[800px] bg-transparent z-30"
          />
          <img
            src={baby}
            alt="left"
            className="w-[350px] h-[500px] absolute left-10 -bottom-7 bg-transparent z-40"
          />
        </div>
        <div className="relative w-[50%] flex items-center justify-end h-[670px] ">
          <img src={right} alt="right" className="w-[400px] h-[400px] z-30" />
          <div className="bg-white/30 backdrop-blur-2xl blur-sm	 rounded-2xl h-[400px] w-[320px] absolute -bottom-20 right-[17.5%] z-40 "></div>
        </div>
      </div>
      {/* <img
        src={ecllipse}
        alt="ec"
        className="absolute bottom-0 bg-[#BED1CF] h-[300px] w-full z-20 "
      /> */}
      <svg
        width="1440"
        height="1020"
        viewBox="0 0 1440 1020"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-2 z-20 "
      >
        <ellipse cx="720.5" cy="510" rx="758.5" ry="510" fill="#f5f5f5" />
      </svg>
      <div className="absolute -bottom-[10%] bg-[#BED1CF] h-[400px] w-full z-10 "></div>
    </div>
  );
};

export default Mentor;

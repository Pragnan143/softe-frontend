import React from "react";
import left from "../assets/left_1.png";
import right from "../assets/right_1.png";
import baby from "../assets/left_1_baby.png";
import ecllipse from "../assets/ecllipse.jpg";
const Mentor = () => {
  return (
    <div className="h-screen relative w-full flex-col items-center justify-center mb-10">
      <div className="absolute left-[35%] top-[25%]  flex flex-col items-center text-4xl py-5 font-medium">
        <p>Select what type of mentor want</p>
        <p>kids</p>
      </div>
      <div className="flex z-40 bg-transparent">
        <div className="w-1/2 flex items-start justify-start relative">
          <img
            src={left}
            alt="left"
            className="w-[500px] h-[670px] bg-transparent z-30"
          />
          <img
            src={baby}
            alt="left"
            className="w-[300px] h-[400px] absolute left-10 -bottom-6 bg-transparent z-40"
          />
        </div>
        <div className="relative w-1/2 flex items-center justify-end h-[670px] ">
          <img src={right} alt="right" className="w-[350px] h-[350px] z-20" />
          <div className="bg-white/30 backdrop-blur-xl	 rounded-2xl h-[360px] w-[320px] absolute -bottom-10 right-20 z-40 "></div>
        </div>
      </div>
      {/* <img
        src={ecllipse}
        alt="ec"
        className="absolute bottom-0 bg-[#BED1CF] h-[300px] w-full z-20 "
      /> */}
      <div className="absolute -bottom-5 bg-[#BED1CF] h-[300px] w-full z-10 "></div>
    </div>
  );
};

export default Mentor;

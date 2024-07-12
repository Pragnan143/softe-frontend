import React from "react";
import MarketCards from "./MarketCards";
import left from "../assets/marketing_left.svg";
import right from "../assets/Marketing_right.svg";

const Marketing = () => {
  return (
    <div className="relative  h-screen w-full flex-col items-center z-20 mt-[15%] ">
      <p className="font-bold text-5xl px-[37.5%] py-2 z-10 ">Marketing Hook</p>
      <img className="absolute left-0 z-10" src={left} alt="" />{" "}
      <img className="absolute right-0 z-10" src={right} alt="" />
      <MarketCards />
    </div>
  );
};

export default Marketing;

import React from "react";

const Cards = () => {
  return (
    <div className="relative w-[280px] h-[150px] bg-[#FFFFFF] shadow-lg z-40 rounded-2xl cursor-pointer	">
      <div className="absolute left-[35%] -top-10 h-[80px] w-[80px] shadow-lg rounded-full bg-[#FFF7F2]  text-[#FF73A2] z-40"></div>
    </div>
  );
};
const Cards1 = () => {
  return (
    <div className="relative w-[280px] h-[150px] bg-[#FFFFFF] shadow-lg z-40 rounded-2xl cursor-pointer	">
      <div className="absolute left-[35%] -top-10 h-[80px] w-[80px] shadow-lg rounded-full text-[#FFF3A2]  bg-[#FF73A2] z-40"></div>
    </div>
  );
};
const OurProductCards = () => {
  return (
    <div className="h-full w-full flex flex-wrap gap-20 justify-around ">
      <Cards1 />
      <Cards />
      <Cards />
      <Cards />

      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
};

export default OurProductCards;

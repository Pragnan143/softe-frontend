import React from "react";
import left from "../assets/OurProduct_left.svg";
import right from "../assets/OurProduct_right.svg";
import OurProductCards from "./OurProductCards";
const OurProducts = () => {
  return (
    <div className="relative my-[150px] h-screen w-full ">
      <p className="font-bold text-5xl underline decoration-pink-500 underline-offset-8 px-[40%]">
        Our Products
      </p>
      <div className="mx-[350px] my-20 w-[800px] flex items-center justify-around">
        <div className="h-[50px] w-[180px] bg-[#FF73A2] text-[#FFF7F2] text-xl font-bold flex items-center justify-center overflow-hidden rounded-full">
          <button>For Business</button>
        </div>
        <div className="h-[50px] w-[180px] border-2 border-[#FF73A2] flex items-center text-[#FF73A2] bg-[#FFF7F2] text-xl font-bold justify-center overflow-hidden rounded-full">
          <button>For Individuals</button>
        </div>
      </div>
      <img src={left} alt="" className="absolute left-0 -bottom-20 z-10" />
      <div className=" absolute bottom-5 w-full h-[351px] bg-[#BED1CF]  z-20"></div>{" "}
      <img src={right} alt="" className="absolute right-0 top-12 z-10" />
      <OurProductCards />
    </div>
  );
};

export default OurProducts;

import React from "react";
import Card from "./Card";
const Products = () => {
  return (
    <div className="relative h-screen  flex-col justify-center z-50">
      <div className="h-24 font-medium flex items-center justify-center ">
        <div className="flex flex-col items-center text-4xl py-5 font-medium ">
          <p>Learn What salesforce products</p>
          <p>can do for you .</p>
        </div>
      </div>
      {/* <svg
        width="1440"
        height="1074"
        viewBox="0 0 1440 1074"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="z-40 absolute -bottom-30 right-10"
      >
        <ellipse cx="710.5" cy="537" rx="758.5" ry="537" fill="white" />
      </svg> */}

      <div className=" bg-[#BED1CF] h-[550px] w-full ">
        <div className="flex gap-20  px-[50px] pt-[150px] overflow-x-auto  scroll-smooth no-scrollbar">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Products;

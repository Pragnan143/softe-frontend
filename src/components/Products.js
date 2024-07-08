import React from "react";
import Card from "./Card";
const Products = () => {
  return (
    <div className=" h-screen  flex-col justify-center ">
      <div className="h-24 font-medium flex items-center justify-center ">
        <div className="flex flex-col items-center text-4xl py-5 font-medium">
          <p>Learn What salesforce products</p>
          <p>can do for you .</p>
        </div>
      </div>
      <div className="bg-[#BED1CF] h-[550px] w-screen ">
        <div className="flex gap-20  px-[50px] pt-[150px] overflow-x-auto">
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

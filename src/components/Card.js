import React from "react";

const card = () => {
  return (
    <div className=" h-[300px] min-w-[270px] bg-white first:bg-[#FFF6F1] rounded-2xl relative">
      <div className="h-[75px] w-[75px] rounded-full bg-black absolute -top-8 left-10 right-0"></div>
      <div className="relative flex flex-col items-start justify-center	pt-10 px-6 gap-2 h-full">
        <h1 className="text-xl font-bold ">Soft Skills</h1>
        <p>
          lorem jfb knjrnjrn jnjngjr ngjknjkg ngkjrn jrgngkn ngngkgr jkngrn
          gnkjtngkt tnrng tjnkjrtn jkgnkgt tnmktmg ghtrmg tnmt mtm tmgmtr ng nmt
          gtnn gkjtng nmt .
        </p>
        <div className="w-full flex items-center justify-center pt-2 ">
          <button className="h-10 w-[120px] flex items-center justify-center font-medium text-white rounded-full first:bg-[#FF74A2] bg-gray-100">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default card;

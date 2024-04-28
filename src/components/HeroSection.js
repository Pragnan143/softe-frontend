import React from "react";

const HeroSection = () => {
  return (
    <div className="flex h-[100vh] w-full">
      <div className=" w-2/3 flex flex-col items-start px-16 justify-center gap-8 ">
        <h1 className="text-3xl font-bold">
          IF YOU GIVE SOFTIE
          <br />
          MAKE IT SOFT-E
        </h1>
        <p className="text-gray-500 text-lg">
          Hello, welcome to the wordpress to the heros of the world and we are
          gladd to help to here from the begening of your carrer
        </p>
        <div className="bg-[#FF73A2] flex items-center justify-center w-72 h-16 rounded-lg text-white text-lg font-semibold cursor-pointer">
          CTA
        </div>
      </div>
      <div className="flex justify-center items-center">Right</div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="flex align-center justify-center bg-[#BED1CF] h-[300px] w-full">
      <div className="grid grid-cols-3 p-20 gap-4 h-full w-full text-white font-medium  ml-[150px]">
        <div
          className={`w-16 h-14 rounded-full overflow-hidden  cursor-pointer  select-none`}
        >
          <img src={logo} alt="softe" />
        </div>
        <a href="#">LPU,Lawgate</a>
        <a href="#">LPU,Lawgate</a>
        <a href="#">LPU,Lawgate</a>
        <a href="#">LPU,Lawgate</a>
        <a href="#">LPU,Lawgate</a>
        <a href="#">LPU,Lawgate</a>
        <a href="#">LPU,Lawgate</a>
        <a href="#">LPU,Lawgate</a>
      </div>
    </div>
  );
};

export default Footer;

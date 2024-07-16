import React from "react";
import Vector from "../assets/Vector.svg";
import Vector1 from "../assets/Vector_1.svg";
import Vector2 from "../assets/Vector_2.svg";
import Vector3 from "../assets/Vector_3.svg";
import Vector4 from "../assets/Vector_4.svg";
import Vector5 from "../assets/Vector_5.svg";
import Vector6 from "../assets/Vector_6.svg";
import Vector7 from "../assets/Vector_7.svg";
const Card = () => {
  return <div className="h-[300px] w-[250px]  bg-pink-500 z-40"></div>;
};
const LeadershipTeam = () => {
  return (
    <div className="h-screen w-full  mt-[180px] mb-[400px] relative ">
      {" "}
      <img
        src={Vector}
        alt=""
        className="absolute w-[400px] h-[370px] -top-28 left-0 z-10 select-none	"
      />
      <img
        src={Vector1}
        alt=""
        className="absolute h-[350px] w-[230px] -top-20 right-[33.5%] z-10 select-none	"
      />{" "}
      <img
        src={Vector2}
        alt=""
        className="absolute right-0 top-12 h-[500px] w-[550px] z-10 select-none	"
      />{" "}
      <div className=" absolute top-0 h-[140px] w-full bg-[#BED1CF] z-30 flex flex-col items-center justify-center gap-10">
        <h1 className="z-30 font-bold text-4xl">Our Leadership Team</h1>
        <p className="font-medium text-lg">
          we are all started from scratch to make this webpage
        </p>
      </div>
      <img
        src={Vector3}
        alt=""
        className="absolute left-20 top-[40%] h-[310px] w-[400px] z-10 select-none	"
      />{" "}
      <img
        src={Vector4}
        alt=""
        className="absolute left-[45%] top-[40%] h-[300px] w-[300px]  z-10 select-none	"
      />{" "}
      <img
        src={Vector5}
        alt=""
        className="absolute left-0 -bottom-[20%] h-[370px] w-[400px]  z-10 select-none	"
      />{" "}
      <img
        src={Vector6}
        alt=""
        className="absolute left-[50%] -bottom-[20%]  z-10 select-none	"
      />{" "}
      <img
        src={Vector7}
        alt=""
        className="absolute right-0 -bottom-[14%]  z-10 select-none	"
      />{" "}
      <div className=" absolute top-80 w-full flex gap-0 justify-evenly z-40 select-none	">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default LeadershipTeam;

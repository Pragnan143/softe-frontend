import React, { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu_btn.png";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [anime, setAnime] = useState("rotate-0");

  const loginHandler = () => {
    // redirect to login page
    console.log(search);
  };

  const animeHandler = () => {
    anime !== "rotate-0" ? setAnime("rotate-180") : setAnime("rotate-90	");
  };

  return (
    <div className="flex bg-[#FFF7F2] h-16 w-full sticky top-0 z-50">
      <div className="flex items-center justify-start gap-10 px-10 w-1/2 ">
        <div className={`Menubar w-5 ${anime} `} onClick={animeHandler}>
          <img src={menu} alt="menu" />
        </div>
        <div className={`w-14 rounded-full overflow-hidden  cursor-pointer  `}>
          <img src={logo} alt="softe" />
        </div>
      </div>
      <div className="flex w-1/2 gap-10 items-center justify-center   ">
        <input
          type="text"
          placeholder="search"
          className="rounded-full flex items-center justify-center px-4 w-[480px] h-10 outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div
          onClick={loginHandler}
          className="bg-[#FF73A2] flex items-center justify-center w-36 h-10 rounded-full text-white cursor-pointer"
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Navbar;

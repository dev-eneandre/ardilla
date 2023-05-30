import React, { useState } from "react";
import Logo from "../assets/Images/svg/logo.svg";
import { AiFillCaretDown } from "react-icons/ai";


const Nav = () => {
    const [activeNav, setactiveNav] = useState(false);
  return (
    <div className="flex justify-between items-center h-24 border-b-2 border-[#825eb323] px-28 text-white ">
      {/* logo */}
      <div className="cursor-pointer">
        <img src={Logo} alt="ardilla logo" />
      </div>
      {/* links  */}
      <div className="w-2/4 text-sm md:h-auto h-screen">
        <ul className="flex justify-between items-center">
          <li className="flex items-center cursor-pointer">Products <AiFillCaretDown /></li>
          <li className="cursor-pointer">Business<span className="ml-2 px-1 text-sm rounded-md border-2 border-white">Beta</span></li>
          <li className="flex items-center cursor-pointer ">Company <AiFillCaretDown /> </li>
          <li className="cursor-pointer">Learn</li>
        </ul>
      </div>
      {/* buttons */}
      <div className="text-sm">
            <button>Sign in</button>
            <button className="bg-[rgb(136,7,247)]/100 py-3 px-8 rounded-3xl text-white ml-5 ">Create Account</button>
      </div>
    </div>
  );
};

export default Nav;

import React, { useState } from "react";
import Logo from "../assets/Images/svg/logo.svg";
import World from "../assets/Images/svg/world.svg";
import { AiFillCaretDown, AiOutlineDown } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [activeNav, setactiveNav] = useState(false);
  return (
    <div className="flex justify-between items-center h-24 border-b-2 border-[#825eb323] md:px-28 px-14 text-white ">
      {/* logo */}
      <div className="cursor-pointer">
        <img src={Logo} alt="ardilla logo" />
      </div>
      {/* links  */}
      <div
        className={`md:w-[470px] w-full  md:static absolute text-sm md:h-auto h-screen ${
          activeNav
            ? "md:translate-x-0  translate-x-[-150%] "
            : "  bg-[rgba(36,0,83,1)] top-0 right-0 translate-x-[-0%]"
        }`}
      >
        <GiHamburgerMenu
          className="md:hidden block "
          onClick={() => setactiveNav(!activeNav)}
        />
        <ul className="flex justify-between items-center md:flex-row flex-col">
          <li className="flex items-center cursor-pointer">
            Products <AiFillCaretDown />
          </li>
          <li className="cursor-pointer">
            Business
            <span className="ml-2 px-1 text-sm rounded-md border-2 border-white">
              Beta
            </span>
          </li>
          <li className="flex items-center cursor-pointer ">
            Company <AiFillCaretDown />{" "}
          </li>
          <li className="cursor-pointer">Learn</li>
          <div className="md:hidden block">
            <div
              className={`text-sm flex justify-between items-center ml-16 ${
                activeNav ? "hidden" : "block"
              } `}
            >
              <button>Sign in</button>
              <button className="bg-[rgb(136,7,247)]/100 py-3 px-8 rounded-3xl text-white ml-5 ">
                Create Account
              </button>
              <button className="bg-[rgba(214,171,252,1)] rounded-full p-2 ml-2">
                <img src={World} alt="" />
              </button>{" "}
              <FiChevronDown className="" />
            </div>
          </div>
        </ul>
      </div>
      {/* buttons */}
      <div className="md:block hidden">
        <div className={`text-sm flex justify-between items-center ml-16  `}>
          <button>Sign in</button>
          <button className="bg-[rgb(136,7,247)]/100 py-3 px-8 rounded-3xl text-white ml-5 ">
            Create Account
          </button>
          <button className="bg-[rgba(214,171,252,1)] rounded-full p-2 ml-2">
            <img src={World} alt="" />
          </button>{" "}
          <FiChevronDown className="" />
        </div>
      </div>
      {/* toggle  */}
      <GiHamburgerMenu
        className="md:hidden block"
        onClick={() => setactiveNav(!activeNav)}
      />
    </div>
  );
};

export default Nav;

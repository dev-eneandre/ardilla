import React, { useState } from "react";
import Logo from "../assets/Images/svg/logo.svg";
import World from "../assets/Images/svg/world.svg";
import { AiFillCaretDown, AiOutlineDown } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

export function setFoo(val){ foo = val }

const Nav = () => {
  const [activeNav, setactiveNav] = useState(false);
 
  return (
    <div className="flex justify-between items-center top-0 sticky h-24 bg-[rgba(36,0,83,1)]  md:px-28 px-5 text-white ">
      {/* logo */}
      <div className="cursor-pointer">
        <img src={Logo} alt="ardilla logo" />
      </div>
      {/* links  */}
      <div
        className={`md:w-[470px] w-full  md:static absolute text-sm md:h-auto h-screen z-40 ${
          activeNav
            ? "md:translate-x-0  translate-x-[-150%] "
            : "bg-[rgba(36,0,83,1)] top-0 right-0 translate-x-[-0%] "
        }`}
      >
        <GiHamburgerMenu
          className="md:hidden block ml-10 mt-10 text-2xl"
          onClick={() => setactiveNav(!activeNav)}
        />
        <ul className="flex justify-between items-center md:flex-row flex-col">
          <li className="flex items-center cursor-pointer md:py-0 py-5">
            Products <AiFillCaretDown />
          </li>
          <li className="cursor-pointer md:py-0 py-5">
            Business
            <span className="ml-2 px-1 text-sm rounded-md border-2 border-white">
              Beta
            </span>
          </li>
          <li className="flex items-center cursor-pointer md:py-0 py-5">
            Company <AiFillCaretDown />{" "}
          </li>
          <li className="cursor-pointer md:py-0 py-5">Learn</li>
          <div className="md:hidden block">
            <div
              className={`text-sm flex justify-between items-center ml-16 ${
                activeNav ? "hidden" : "block flex-col  ml-0"
              } `}
            >
              <button className="md:py-0 py-5">Sign in</button>
              <button className="bg-[rgb(136,7,247)]/100 py-3 px-8 rounded-3xl text-white ml-5  md:my-0 my-5">
                Create Account
              </button>
              <button className="bg-[rgba(214,171,252,1)] rounded-full p-2 ml-2 md:my-0 my-5">
                <img src={World} alt="" />
              </button>
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

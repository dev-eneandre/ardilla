import React from "react";
import Logo from "../assets/Images/svg/logo.svg";


const Nav = () => {
  return (
    <div>
      {/* logo */}
      <div className="">
        <img src={Logo} alt="ardilla logo" />
      </div>
      {/* links  */}
      <div className="">
        <ul>
          <li>Products</li>
          <li>
            Business{" "}
            <span className="py-1 px-2 border-2 border-white">Beta</span>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

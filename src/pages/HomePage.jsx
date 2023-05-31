import React from "react";
import Phone from "../assets/images/svg/phone.svg";
import ProductsSwiper from "../components/ProductsSwiper";

export function setFoo(val) {
  foo = val;
}

const HomePage = () => {
  return (
    <div className="bg-[rgba(36,0,83,1)]">
      {/* Welcome Section Of Home Page  */}
      <div className=" bg-home-bg bg-top bg-cover bg-no-repeat ">
        <div className="pt-16 text-center ">
          <h2 className="bg-gradient-to-r from-[rgba(255,235,53,1)] to-[rgba(25,253,130,0.99)] inline-block text-transparent bg-clip-text md:text-8xl text-5xl font-bold">
            Your Access To More
          </h2>
          <p className="text-sm w-2/4 m-auto md:pt-10 pt-5 md:leading-7 leading-4 text-white">
            Ardilla helps you save and invest in achieving your financial goals,
            we have the most flexible and seamless way to grow your funds.
          </p>
          <button className="md:py-6 py-3 md:px-16 px-8 bg-white text-[rgba(61,0,114,1)] md:mt-10 mt-5 font-semibold rounded-full text-sm ">
            Get Started
          </button>
        </div>

        <div className="pt-10 flex items-center justify-center">
          <img className="md:w-1/2 md:h-2/3 w-full h-full object-contain" src={Phone} alt="Phone" />
        </div>
      </div>
{/* Products  */}
      <div className="pt-16 px-20 rounded-tr-3xl rounded-tl-3xl bg-[rgba(255,253,242,1)] ">
         <div>
            <ProductsSwiper />
        </div>
      </div>

      <div className="h-screen">

      </div>
    </div>
  );
};

export default HomePage;

import React from "react";
import Phone from "../assets/images/svg/phone.svg";
import BtnIcon from "../assets/images/svg/icon.svg";
import ProductsSwiper from "../components/ProductsSwiper";
import Clip from "../assets/images/png/clip.png"

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

      <div className="md:py-20 py-10 bg-[rgba(255,255,255,1)] flex justify-between items-center md:flex-nowrap flex-wrap md:-mt-10 -mt-2 px-20">
        <div>
          <h3 className="md:text-7xl text-4xl font-bold md:w-2/3 w-full text-[rgba(61,0,114,1)]">We’re Keen On<span className="text-[rgba(232,53,109,1)]"> Transparency</span></h3>
        <p className="text-[rgba(61,0,114,1)] text-sm md:py-8 py-4"> Calculate your interests everytime you save on our platform</p>
        <button className="md:py-6 py-3 md:px-16 px-8 bg-[rgba(136,7,247,1)] text-white font-semibold rounded-full text-sm ">
            Get Started
          </button>
        </div>
        <div className="overflow-hidden rounded-2xl md:mt-0 mt-5 ">
          <img className="object-contain" src={Clip} alt="" />
        </div>
      </div>

      {/* UNLIMITED INVESTMENT  */}
      <div className="h-screen bg-arrow-bg bg-center bg-cover bg-no-repeat text-left flex flex-col justify-center md:px-20 px-5  text-[rgba(61,0,114,1)]">
          <h4 className="text-5xl w-1/2 font-bold leading-snug">Unlimited  <span className="text-teal-600">Investment Opportunities</span></h4>
          <p className="md:w-5/12 w-full text-base pt-5 font-normal leading-9">Plan towards your future by investing with ardilla,  Grow your money confidently and securely with the available investment oppurtuinities  </p>
          <button className="flex  items-center justify-between border-2 border-[rgba(136,7,247,1)] w-fit mt-7 px-6 py-3 rounded-2xl">Invest with ardilla (Coming Soon)<img className="pl-3" src={BtnIcon} alt="send button" /></button>
      </div>
    </div>
  );
};

export default HomePage;

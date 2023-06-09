import React from "react";
import Phone from "../assets/images/svg/phone.svg";
import BtnIcon from "../assets/images/svg/icon.svg";
import SendWhite from "../assets/images/svg/send-white.svg";
import ProductsSwiper from "../components/ProductsSwiper";
import Clip from "../assets/images/png/clip.png";
import SC from "../assets/images/png/screenshot.png";
import ImagePhone from "../assets/images/svg/imagef.svg";
import Yellow from "../assets/images/svg/yellow.svg";
import Pink from "../assets/images/svg/pink.svg";
import Purple from "../assets/images/svg/purple.svg";
import Green from "../assets/images/svg/green.svg";
import TestimonialSwiper from "../components/TestimonialSwiper";
import Zik from "../assets/images/svg/zikoko.svg";
// import TC from "../assets/images/svg/crunch.svg";
import Guard from "../assets/images/svg/guardian.svg";
// import Press from "../assets/images/svg/press_reviews.svg";
import {SlSocialInstagram} from "react-icons/sl"
import {TfiFacebook} from "react-icons/tfi"
import {RiLinkedinFill} from "react-icons/ri"
import {GrTwitter} from "react-icons/gr"
// import HomeBg from "../assets/images/png/  "


const HomePage = () => {
  return (
    <div className="bg-[#8807F7]">
      <div className="bg-[rgba(36,0,83,1)]">
        {/* Welcome Section Of Home Page  */}
        <div className=" bg-home-bg bg-top bg-cover bg-no-repeat ">
          <div className="pt-16 text-center ">
            <h2 className="bg-gradient-to-r from-[rgba(255,235,53,1)] to-[rgba(25,253,130,0.99)] inline-block text-transparent bg-clip-text md:text-8xl text-5xl font-bold">
              Your Access To More
            </h2>
            <p className="text-sm w-2/4 m-auto md:pt-10 pt-5 md:leading-7 leading-4 text-white">
              Ardilla helps you save and invest in achieving your financial
              goals, we have the most flexible and seamless way to grow your
              funds.
            </p>
            <button className="md:py-6 py-3 md:px-16 px-8 bg-white text-[rgba(61,0,114,1)] md:mt-10 mt-5 font-semibold rounded-full text-sm ">
              Get Started
            </button>
          </div>

          <div className="pt-10 flex items-center justify-center">
            <img
              className="md:w-1/2 md:h-2/3 w-full h-full object-contain"
              src={Phone}
              alt="Phone"
            />
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
            <h3 className="md:text-7xl text-4xl font-bold md:w-2/3 w-full text-[rgba(61,0,114,1)]">
              We’re Keen On
              <span className="text-[rgba(232,53,109,1)]"> Transparency</span>
            </h3>
            <p className="text-[rgba(61,0,114,1)] text-sm md:py-8 py-4">
              {" "}
              Calculate your interests everytime you save on our platform
            </p>
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
          <h4 className="text-5xl w-1/2 font-bold leading-snug">
            Unlimited{" "}
            <span className="text-teal-600">Investment Opportunities</span>
          </h4>
          <p className="md:w-5/12 w-full text-base pt-5 font-normal leading-9">
            Plan towards your future by investing with ardilla, Grow your money
            confidently and securely with the available investment
            oppurtuinities{" "}
          </p>
          <button className="flex  items-center justify-between border-2 border-[rgba(136,7,247,1)] w-fit mt-7 px-6 py-3 rounded-2xl">
            Invest with ardilla (Coming Soon)
            <img className="pl-3" src={BtnIcon} alt="send button" />
          </button>
        </div>

        {/* ACCESS MORE WITH YOUR MONEY  */}
        <div className="min-h-screen bg-[rgba(27,1,50,1)] text-[rgba(255,255,255,1)] p-20 ">
          <h6 className="md:text-7xl text-4xl font-bold">
            Access More With Your Money
          </h6>
          <p className="text-xs leading-8 md:w-7/12 w-full py-7 ">
            Earn, learn, parlay, and grow financially. With Ardilla, you have
            more opportunities than ever at your finger tips. Why not take
            advantage today?
          </p>
          <button className="flex items-center justify-between border-2 hover:bg-[rgba(136,7,247,.17)] duration-100 border-white w-fit mt-1 px-6 py-3 rounded-3xl text-sm">
            Learn more about savings
            <img className="pl-3" src={SendWhite} alt="send button" />
          </button>

          {/* card  */}
          <div
            className="w-full md:p-20 p-10 mx-auto min-h-screen bg-[rgba(41,1,75,1)] rounded-lg mt-14 border-2 border-[rgba(136,7,247,1)] shadow-[rgba(136,7,247,1)] shadow-2xl
        flex justify-between  flex-wrap
        "
          >
            <div className="md:w-96 w-full h-3/4 md:p-7 p-1 md:mt-5 mt-10 hover:bg-[rgba(67,2,126,1)] rounded-2xl  cursor-pointer duration-100 ease-in-out ">
              <img
                src={Yellow}
                alt="Yellow Icon"
                className="shadow-xl shadow-[rgba(232,53,109,.7)] rounded-full mb-10"
              />

              <h4 className="font-semibold text-2xl">Dreams</h4>
              <p className="md:w-10/12 w-full text-sm leading-7 pt-5">
                Helping you make your dreams a reality is important to us. We
                have helped so many others. We can help you as well.
              </p>

              <p className="pt-5 font-semibold text-sm">Learn More</p>
            </div>

            <div className="md:w-96 w-full h-3/4 md:p-7 p-1 md:mt-5 mt-10 hover:bg-[rgba(67,2,126,1)] rounded-2xl  cursor-pointer duration-100 ease-in-out">
              <img
                src={Pink}
                alt="Yellow Icon"
                className="shadow-xl shadow-[rgba(234,179,8,.7)] rounded-full mb-10"
              />

              <h4 className="font-semibold text-2xl">DIB</h4>
              <p className="w-10/12 text-sm leading-7 pt-5">
                Nothing beats an emergency quite like an emergency fund. With
                Ardilla you can get started building that emergency fund.
              </p>

              <p className="pt-5 font-semibold text-sm">Learn More</p>
            </div>

            <div className="md:w-96 w-full h-3/4 md:p-7 p-1 md:mt-5 mt-10  hover:bg-[rgba(67,2,126,1)] rounded-2xl cursor-pointer duration-100 ease-in-out ">
              <img
                src={Purple}
                alt="Yellow Icon"
                className="shadow-xl shadow-[rgba(136,7,247,.7)] rounded-full mb-10"
              />

              <h4 className="font-semibold text-2xl">Vault</h4>
              <p className="w-10/12 text-sm leading-7 pt-5">
                Lock away excess funds you don't know what to do with. We can
                help you safeguard it till you are ready. It definitely beats
                spending it and wondering where all that money went to.
              </p>

              <p className="pt-5 font-semibold text-sm">Learn More</p>
            </div>

            <div className="md:w-96 w-full h-3/4 md:p-7 p-1 md:mt-5 mt-10 hover:bg-[rgba(67,2,126,1)] rounded-2xl cursor-pointer duration-100 ease-in-out">
              <img
                src={Green}
                alt="Yellow Icon"
                className="shadow-xl shadow-[rgba(34,197,94,.7)] rounded-full mb-10"
              />

              <h4 className="font-semibold text-2xl">Grit</h4>
              <p className="w-10/12 text-sm leading-7 pt-5">
                Become a VIP when you save more money with us. Enjoy better
                benefits.
              </p>

              <p className="pt-5 font-semibold text-sm">Learn More</p>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL SWIPER  */}
        <div className="bg-[rgba(243,244,246,1)]  px-14 py-16 text-[rgba(61,0,114,1)]">
          <h5 className=" md:text-5xl text-2xl font-bold ">
            Don’t Take Our{" "}
            <span className="text-[rgba(232,53,109,1)]">Word</span> For It
          </h5>
          <p className=" text-sm py-6">
            Listen to testimonials from Ardilla users building wealth
          </p>
          <TestimonialSwiper />
        </div>

        {/* AVAILABLE ON WEB  */}
        <div className="bg-[rgba(248,250,252,1)] h-screen">
          <div className="flex justify-center items-center md:pt-20 pt-10 md:flex-row flex-col">
            <img className="pr-7 " src={Zik} alt="" />
            {/* <img className="pr-7" src={TC} alt="" /> */}
            <img className="pr-7" src={Guard} alt="" />
            <span className="border-r-2 border-gray-500 pl-7"></span>
            {/* <img className="pl-7 pr-7 " src={Press} alt="" /> */}
          </div>
          <div>
            <img className="mx-auto mt-10" src={SC} alt="" />
          </div>
        </div>

        {/* TRACTION  */}
        <div className="bg-traction-bg min-h-[125vh] bg-center bg-no-repeat bg-cover px-16 py-10">
          <h4 className="text-center md:pt-20 pt-10 text-5xl font-bold text-white">
            Traction
          </h4>
          <p className="text-center py-4 text-white text-sm">
            Our products and investments grossed 1.1 billion in 2022
          </p>

          <div className="flex md:flex-nowrap flex-wrap justify-between items-center pt-10">
            <div
              className="bg-[rgba(210,255,222,1)] h-[400px] w-[356px] rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl
            flex  justify-center items-center md:mt-0 mt-10
          "
            >
              <div className="">
                <h3 className="text-[rgba(42,51,44,1)] text-sm">
                  Investment in{" "}
                  <span className="bg-[rgba(51,89,61,1)] text-white px-2">
                    2022
                  </span>
                </h3>
                <h5 className="text-[rgba(42,51,44,1)] text-5xl font-bold">
                  ₦100M
                </h5>
              </div>
            </div>
            <div
              className="bg-[rgba(200,193,253,1)] h-[400px] w-[356px] rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl
          flex  justify-center items-center md:mt-0 mt-10 
          "
            >
              <div className="">
                <h3 className="text-[rgba(42,51,44,1)] text-sm">
                  Risk{" "}
                  <span className="bg-[rgba(53,41,138,1)] text-white px-2">
                    Management
                  </span>
                </h3>
                <h5 className="text-[rgba(42,51,44,1)] text-5xl font-bold">
                  0% Risk
                </h5>
              </div>
            </div>
            <div
              className="bg-[rgba(250,247,195,1)] h-[400px] w-[356px] rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl
          flex  justify-center items-center md:mt-0 mt-10
          "
            >
              <div className="">
                <h3 className="text-[rgba(42,51,40,1)] text-sm">
                  Risk{" "}
                  <span className="bg-[#9F9704] text-white px-2">
                    Management
                  </span>
                </h3>
                <h5 className="text-[rgba(42,51,44,1)] text-5xl font-bold">
                  0% Risk
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="h-screen bg-[#8807F7]">

      </div> */}
      </div>
      {/* floating image  */}
      <div className="bg-over-bg w-7/12 h-96 bg-no-repeat md:flex rounded-lg mx-auto -mt-28 px-14 hidden justify-between items-center md:flex-nowrap flex-wrap">
        <div>
          <h3 className="text-white font-bold text-2xl  leading-8">
            Download for free Start saving Today
          </h3>
          <button className="bg-white text-xs py-4 px-4 rounded-lg mt-10">
            Download for free
          </button>
        </div>
        <div>
          <img className="w-full h-full object-cover" src={ImagePhone} alt="" />
        </div>
      </div>

      <div className="min-h-full  px-20 pt-20">
        <div className=" flex justify-between md:flex-nowrap flex-wrap text-white text-sm  border-b-2 border-[rgba(209,213,219,1)] pb-10">
          <div>
            <h4 className="font-semibold py-2">Products</h4>
            <p className="py-2 text-xs pt-8">Savings</p>
            <p  className="py-2 text-xs">Dilla</p>
            <p className="py-2 text-xs">Financial Coach</p>
            <p className="py-2 text-xs text-[rgba(255,255,255,.9)]">Halal</p>
            <p className="py-2 text-xs text-[rgba(255,255,255,.9)]">Budgetting <span className="border-2 py-1 px-2 ml-1 rounded-xl  text-[5px]">Coming Soon</span></p>
            <p className="py-2 text-xs text-[rgba(255,255,255,.9)]">Investment <span className="border-2 py-1 px-2 ml-1 rounded-xl  text-[5px]">Coming Soon</span></p>
            <p className="py-2 text-xs text-[rgba(255,255,255,.9)]">Insurance <span className="border-2 py-1 px-2 ml-1 rounded-xl  text-[5px]">Coming Soon</span></p>
          </div>
    
          <div>
            <h4 className="font-semibold py-2">Company</h4>
            <p className="py-2 text-xs pt-8 text-[rgba(255,255,255,.9)]">About Us</p>
            <p  className="py-2 text-xs text-[rgba(255,255,255,.9)]">Careers</p>
            <p className="py-2 text-xs text-[rgba(255,255,255,.9)]">FAQS</p>
            <p className="py-2 text-xs text-[rgba(255,255,255,.9)]">Press</p>
          </div>

          <div>
            <h4 className="font-semibold py-2">Transparency</h4>
            <p className="py-2 text-xs pt-8 text-[rgba(255,255,255,.9)]">Terms & conditions</p>
            <p  className="py-2 text-xs  text-[rgba(255,255,255,.9)]">Information security policy</p>
            <p className="py-2 text-xs text-[rgba(255,255,255,.9)]">Privacy policy</p>
            <p className="py-2 text-xs text-[rgba(255,255,255,.9)]">Interest Tool</p>
          </div>

          <div>
            <h4 className="font-semibold py-2">Developer</h4>
            <p className="py-2 text-xs text-[rgba(255,255,255,.9)]">Connect API <span className="border-2 py-1 px-2 ml-1 rounded-xl  text-[5px]">Coming Soon</span></p>
          </div>

          <div>
            <div>
              <h4 className="font-semibold py-2">Address</h4>
            <p className="py-2 text-xs text-[rgba(255,255,255,.9)]">33B, Ogundana street, Allen, Ikeja.</p>
            </div>
            <div>
              <h4 className="font-semibold py-2">Contact</h4>
            <p className="py-2 text-xs text-[rgba(255,255,255,.9)]">support@ardilla.africa.</p>
            <p className="py-2 text-xs text-[rgba(255,255,255,.9)]">(234)801 000 1234</p>
            </div>

          </div>

        </div>
        <div className="flex justify-between py-10 text-white md:flex-nowrap flex-wrap">
        <div>
          <p className="pb-3 text-sm">© 2023 Ardilla. All right reserved</p>
          <p className="text-xs">Ardilla operates under the coorperative license of Ardilla Multipurpose Cooperative Society, LSC 18245, We provide Savings and Fixed deposit services to our users</p>
        </div>
        <div className="flex justify-around">
          <SlSocialInstagram className="text-4xl py-2 border-2 rounded-full mx-2" />
          <TfiFacebook className="text-4xl py-2 border-2 rounded-full mx-2"/>
          <RiLinkedinFill className="text-4xl py-2 border-2 rounded-full mx-2"/>
          <GrTwitter className="text-4xl py-2 border-2 rounded-full mx-2" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

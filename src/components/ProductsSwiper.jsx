import React from "react";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillCheckCircle } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Budget from "../assets/images/svg/budget.svg";
import Educate from "../assets/images/svg/educate.svg";
import Insure from "../assets/images/svg/insure.svg";
import Right from "../assets/images/svg/right.svg";
import Save from "../assets/images/svg/save.svg";

const Slider = ({ slides }) => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="md:my-10 my-2">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 9000 }}
      >
        <SwiperSlide>
          <div className="text-white text-2xl ">
            <h3 className="text-[rgba(61,0,114,1)] md:text-6xl text-3xl font-bold md:pb-10">
              Products
            </h3>
            <div className="flex justify-evenly items-center md:flex-nowrap flex-wrap ">
              <div className="text-left md:pt-14 pt-6">
                <h4 className="text-[rgba(232,53,109,1)] font-semibold text-3xl leading-loose">
                  Save
                </h4>
                <p className="text-[rgba(61,0,114,1)] text-sm leading-10">
                  Save at your own pace!
                </p>
                <p className="text-gray-400 text-xs leading-2 pb-5">
                  Save your money daily, weekly, or monthly. No pressure. We
                  work at your pace
                </p>

                <p className=" flex items-center text-sm leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm"> Create Unlimted savings plans</span>
                </p>
                <p className="text-[rgba(232,53,109,1)] flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm"> Withdraw anytime</span>
                </p>
                <p className="text-[rgba(232,53,109,1)] flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm"> Save with Friends with SAN ID</span>
                </p>
                <p className=" flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm"> Be better at saving</span>
                </p>
                <p className=" flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm">Accountability profile</span>
                </p>
                <p className=" flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm">Activity and report</span>
                </p>
              </div>
              <div className="bg-[rgba(232,53,109,.8)] pt-5 px-10 rounded-tl-3xl rounded-tr-3xl md: md:mt-0 mt-10" >
                <img className="object-contain w-full h-full" src={Save} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-white text-2xl ">
            <h3 className="text-[rgba(61,0,114,1)] md:text-6xl text-3xl font-bold md:pb-10">
              Products
            </h3>
            <div className="flex justify-evenly items-center md:flex-nowrap flex-wrap ">
              <div className="text-left md:pt-14 pt-6">
                <h4 className="text-[rgba(232,53,109,1)] font-semibold text-3xl leading-loose">
                  Learn
                </h4>
                <p className="text-[rgba(61,0,114,1)] text-sm leading-10">
                Financial freedom begins with You and Ardilla
                </p>
                <p className="text-gray-400 text-xs leading-2 pb-5">
                Ardila offers wealth-building tips from great financial minds to help you get to where you need to be.
                </p>

                <p className=" flex items-center text-sm leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm"> Learn to invest in 2hrs</span>
                </p>
                <p className="text-[rgba(232,53,109,1)] flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm"> Get a portfolio manager</span>
                </p>
                <p className="text-[rgba(232,53,109,1)] flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm"> Save with Friends with SAN ID</span>
                </p>
                <p className=" flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm"> Stay on top of your finances</span>
                </p>
                <p className=" flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm">Learn with family and friends</span>
                </p>
                <p className=" flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm">Earn points and reward</span>
                </p>
              </div>
              <div className="bg-[rgba(232,53,109,.8)] pt-5 px-10 rounded-tl-3xl rounded-tr-3xl md: md:mt-0 mt-10" >
                <img className="object-contain w-full h-full" src={Educate} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-white text-2xl ">
            <h3 className="text-[rgba(61,0,114,1)] md:text-6xl text-3xl font-bold md:pb-10">
              Products
            </h3>
            <div className="flex justify-evenly items-center md:flex-nowrap flex-wrap ">
              <div className="text-left md:pt-14 pt-6">
                <h4 className="text-[rgba(232,53,109,1)] font-semibold text-3xl leading-loose">
                  Invest
                </h4>
                <p className="text-[rgba(61,0,114,1)] text-sm leading-10">
                Multiply your finances
                </p>
                <p className="text-gray-400 text-xs leading-2 pb-5">
                Investment opportunities that gets you closer to financial freedom
                </p>

                <p className=" flex items-center text-sm leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm">Portfolio mangement</span>
                </p>
                <p className="text-[rgba(232,53,109,1)] flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm"> Track your returns</span>
                </p>
                <p className="text-[rgba(232,53,109,1)] flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm"> Risk Assessment</span>
                </p>
                <p className=" flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm"> Vetted Investment opportuinities</span>
                </p>
                <p className=" flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm">Invest within your risk appetite</span>
                </p>
                <p className=" flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm">Invest in Naira and Dollars</span>
                </p>
              </div>
              <div className="bg-[rgba(232,53,109,.8)] pl-0  rounded-tl-3xl rounded-tr-3xl md:mt-0 mt-10" >
                <img className="object-contain w-full h-full" src={Right} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-white text-2xl ">
            <h3 className="text-[rgba(61,0,114,1)] md:text-6xl text-3xl font-bold md:pb-10">
              Products
            </h3>
            <div className="flex justify-evenly items-center md:flex-nowrap flex-wrap ">
              <div className="text-left md:pt-14 pt-6">
                <h4 className="text-[rgba(232,53,109,1)] font-semibold text-3xl leading-loose">
                  Budget
                </h4>
                <p className="text-[rgba(61,0,114,1)] text-sm leading-10">
                Plan your money
                </p>
                <p className="text-gray-400 text-xs leading-2 pb-5">
                Every good budget starts with a good plan for your money
                </p>

                <p className=" flex items-center text-sm leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm">Save as you spend</span>
                </p>
                <p className="text-[rgba(232,53,109,1)] flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm"> Track your expenses</span>
                </p>
                <p className="text-[rgba(232,53,109,1)] flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm"> Organize your finances</span>
                </p>
                <p className=" flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm"> Sync and share budgets</span>
                </p>
                <p className=" flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm">Financial guide</span>
                </p>
                <p className=" flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm">Better decision-making</span>
                </p>
              </div>
              <div className="bg-[rgba(232,53,109,.8)] pl-0  rounded-tl-3xl rounded-tr-3xl md:mt-0 mt-10" >
                <img className="object-contain w-full h-full" src={Budget} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-white text-2xl ">
            <h3 className="text-[rgba(61,0,114,1)] md:text-6xl text-3xl font-bold md:pb-10">
              Products
            </h3>
            <div className="flex justify-evenly items-center md:flex-nowrap flex-wrap ">
              <div className="text-left md:pt-14 pt-6">
                <h4 className="text-[rgba(232,53,109,1)] font-semibold text-3xl leading-loose">
                  Insurance
                </h4>
                <p className="text-[rgba(61,0,114,1)] text-sm leading-10">
                Protect your interest
                </p>
                <p className="text-gray-400 text-xs leading-2 pb-5">
                Stay protected, live freely
                </p>

                <p className=" flex items-center text-sm leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm">Vehicle insurance</span>
                </p>
                <p className="text-[rgba(232,53,109,1)] flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm"> Home insurance</span>
                </p>
                <p className="text-[rgba(232,53,109,1)] flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm"> Mutual insurance</span>
                </p>
                <p className=" flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm">Life insurance</span>
                </p>
                <p className=" flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm"> Health insurance</span>
                </p>
                <p className=" flex items-center leading-8 py-2">
                  <AiFillCheckCircle  className="text-[rgba(232,53,109,1)] text-lg" /> <span className="text-[rgba(61,0,114,1)] pl-5 text-sm">Tavel insurance</span>
                </p>
              </div>
              <div className="bg-[rgba(232,53,109,.8)] pl-0  rounded-tl-3xl rounded-tr-3xl md:mt-0 mt-10" >
                <img className="object-contain w-full h-full" src={Insure} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
              
        <p className="mt-20"> </p>
      </Swiper>
    </div>
  );
};

export default Slider;

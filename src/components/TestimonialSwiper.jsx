import React from "react";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillCheckCircle } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import PlainImg1 from "../assets/images/svg/onyinye.svg";
import DetailedImg1 from "../assets/images/svg/onyinye_details.svg";
import PlainImg2 from "../assets/images/svg/michael.svg";
import DetailedImg2 from "../assets/images/svg/michael_details.svg";
import PlainImg3 from "../assets/images/svg/david.svg";
import DetailedImg3 from "../assets/images/svg/david_details.svg";


const TestimonialSwiper = ({ slides }) => {
    SwiperCore.use([Autoplay]);
  
    return (
      <div className="md:my-10 my-2">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={20}
          slidesPerView={3}
        //   pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
        >
            <SwiperSlide>
                <div className="hover:scale-105 cursor-pointer p-2 w-11/12 h-11/12 relative rounded-xl overflow-hidden">
                    <img className="object-contain w-full h-full rounded-2xl" src={PlainImg1} alt="" />
                    {/* <div className="w-full h-full absolute  top-0 left-0 shadow-md "> </div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="hover:scale-105 cursor-pointer p-2 w-11/12 h-11/12 relative rounded-xl overflow-hidden">
                    <img className="object-contain w-full h-full rounded-2xl" src={PlainImg2} alt="" />
                    {/* <div className="w-full h-full absolute  top-0 left-0 shadow-md "> </div> */}
                </div>
            </SwiperSlide>
            <SwiperSlide>         <div className="hover:scale-105 cursor-pointer p-2 w-11/12 h-11/12 relative rounded-xl overflow-hidden">
                    <img className="object-contain w-full h-full rounded-2xl" src={PlainImg3} alt="" />
                    {/* <div className="w-full h-full absolute  top-0 left-0 shadow-md "> </div> */}
                </div>
            </SwiperSlide>

  </Swiper>
    </div>
  );
};

export default TestimonialSwiper;

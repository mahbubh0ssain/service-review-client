import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swiper.css";

// import required modules
import { Pagination } from "swiper";

export default function Slider() {
  return (
    <div className="container h-100vh">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="img-fluid rounded"
            style={{ height: "60vh" }}
            src="https://www.nextinsurance.com/wp-content/uploads/2022/02/feb-2022-5.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid rounded"
            style={{ height: "60vh" }}
            src="https://www.emergencyplumbingsquad.com/wp-content/uploads/2020/08/photo-of-a-professional-plumber.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid rounded"
            style={{ height: "60vh" }}
            src="https://www.wmhendersoninc.com/wp-content/uploads/2021/06/Local-Plumber-Broomall-WM-Henderson-Photo.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

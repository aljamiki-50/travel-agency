import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  EffectCube,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/swiper-bundle.css";

import img1 from "../img/spain-1.jpg";
import img2 from "../img/spain-2.jpg";
import img3 from "../img/spain-3.jpg";

export default function Slides() {
  const imgref = useRef(null);

  // useEffect(() => {
  // Ensure imgref is populated after component has mounted
  // if (imgref.current) {
  const ImgSize = imgref.current ? imgref.current.clientWidth : 920;
  const Imgheight = imgref.current ? imgref.current.clientHeight : 620;

  console.log(Imgheight);

  // }
  // }, []);

  return (
    <Swiper
      className="mt-10 "
      modules={[
        Navigation,
        EffectFade,
        EffectCube,
        Pagination,
        Scrollbar,
        A11y,
        EffectCoverflow,
      ]}
      effect={"fade"}
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={50}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className=" ring-1  ">
        <img
          src={img1}
          ref={imgref}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={img2}
          alt=""
          style={{ width: `${ImgSize}px`, height: `${Imgheight}px` }}

        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={img3}
          alt=""
          style={{ width: `${ImgSize}px`, height: `${Imgheight}px` }}

        />
      </SwiperSlide>
    </Swiper>
  );
}

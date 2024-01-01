import React from "react";
import Button from "./Button";
import Slides from "./slides";

import img1 from "../img/spain-1.jpg";
import img2 from "../img/spain-2.jpg";
import img3 from "../img/spain-3.jpg";
import canyon from "../img/canyon.jpg"
import vid from "../img/video (1080p).mp4";

function HeroSec() {
  return (
    <div className=" relative justify-center object-contain flex  flex-col items-center my-0 min-h-screen    -z-10  ">
      <video
        className="  absolute   object-cover bg-center   w-full     min-h-screen  -z-[1] "
        // src="/videos/video-2.mp4"
        src={vid}
        loop
        autoPlay
        muted
      />
      <h1
        className="
       md:text-[70px]
       -md:pt-[100px]
       -pt-[150px]
       font-roboto
       text-white
        text-[100px]
        s:text-[70px]
        s:text-center
        xs:text-[50px]
        xs:leading-16
        xs:text-center
        -xs:mt-[100px]
         gx:scale-90

       "
      >
        ADVENTURE AWAITS
      </h1>
      <p
        className="
         xs:text-[30px]
          gx:text-[10px]
          s:text-center
      font-poppins mt-8
       text-white text-[32px]"
      >
        WHAT ARE YOU WAITING FOR{" "}
      </p>

      <div
        className="btn xs:flex  xs:flex-col  xs:gap-y-5 xs:w-full
      justify-center  flex gap-x-4 mt-8"
      >
        <Button
          children="Get Started"
          btnStyle="bg-transparent  font-extrabold ring-1 ring-white py-3 px-9    text-white font-roboto text-[20px] uppercase rounded-none"
        />
        <Button btnStyle="bg-white   font-extrabold ring-1 ring-black py-3 px-2 text-black font-roboto text-[20px] uppercase rounded-none">
          watch trailer <i className="far ml-1 fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSec;

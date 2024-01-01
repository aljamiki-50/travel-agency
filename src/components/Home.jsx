import React from "react";
// import icon from "../img/icon-location.svg";
import img1 from "../img/spain-1.jpg";
import img2 from "../img/spain-2.jpg";
import img3 from "../img/spain-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import Slides from "./slides";
import DecorationSvg from "../img/decoration.svg";

function Home() {
  return (
    <div className=" container canyon  mb-10  bg-slate-100 text-center">
      <div className="flex flex-col items-center pt-7 gap-y-4">
        {" "}
        <h1 className="text-7xl"> it s kingdom of spain </h1>
        <p className=" ">
          <img src={DecorationSvg} alt="" />
        </p>
        <p>Republic of spain </p>
      </div>
      <div className="flex flex-col items-center   mt-6 gap-y-6">
        <p className=" text-3xl grid self-start pl-[310px] first-letter:uppercase  text-left font-bold font-roboto">
          about spain
        </p>
        <p className=" w-[50%]  text-left">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, did
          facere perferendis sed, tempore ipsa. Dolorum, aspernatur deserunt
          quos corporis voluptatem ea voluptas quod eos tenetur! Consequuntur,
          fuga quas, voluptas facere ipsam molestias cumque in saepe dolorum eum
          temporibus quam provident tempora voluptate a? Recusandae ea
          aspernatur sequi necessitatibus tempora repellendus ab eum veniam, at
          qui. Sit itaque maiores minima corporis nihil, corrupti voluptate eos
          debitis veniam perferendis alias harum incidunt assumenda, quod ea
          optio. Praesentium culpa quas consequuntur velit soluta, accusamus
          sunt labore voluptate quo? At dolorum nihil doloremque voluptate
          obcaecati molestias repellendus dolorem magnam ratione, voluptatibus
          officia ab nemo, corrupti voluptatum error voluptatem unde eum!
          Tenetur itaque odit fuga dolor exercitationem laboriosam excepturi
          ducimus. Facilis, nam amet ut neque sit explicabo labore minima odit
          exercitationem ad iure aliquid ratione itaque consequuntur, tempora ab
          atque laborum non modi? Porro, voluptatum a. Laboriosam consequatur
          assumenda exercitationem at voluptatem quod odio accusamus, nihil
          ullam natus est. Nemo.
        </p>
      </div>

    <div>
    <Slides />
    </div>
    </div>
  );
}

export default Home;

import React, { useRef } from "react";
import { Link } from "react-router-dom";

function CardItems({ onClick, src, label, text }) {
  const childref = useRef(null);

  const handleClick = () => {
    // Do something with the childRef if needed
    // console.log("Child Component Clicked");
    // if (onMouseEnter) {
    onClick(childref);
    // console.log("hover been around");
    //   }
    // onMouseEnter(childref);
  };

  return (
    <>
      <li
        //   onClick={handleClick}
        onClick={handleClick}
        ref={childref}
        className="flex    gx:bg-red-50  mx-[1rem]  rounded-3xl  gx:rounded-none scale-100   hover:shadow-cards  ring-[1px]"
      >
        <Link className=" flex flex-col w-[full]   rounded-3xl  gx:rounded-none  shadow-carditem  filter-carditem ">
          <figure className="  relative w-full pt-[67%] overflow-hidden ">
            <img
              className="absolute rounded-3xl gx:rounded-none  top-0 right-0 bottom-0 left-0 block w-full max-w-full h-full max-h-full object-cover transition-all duration-200 linear"
              src={src}
              alt="Dest"
            />
            <p className=" uppercase absolute bottom-0 text-white  font-medium p-2   rounded left-4 gx:left-1 gx:text-base text-lg gx:p-0 gx:font-light  bg-cyan-900">
              {label}
            </p>
          </figure>
          <div className="cards__items-inf pt-[20px] pr-[30px] pb-[20px] ">
            <h5 className=" text-blue-900 text-3xl gx:text-base
            font-semibold   font-roboto leading-8 ">
              {text}
            </h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItems;

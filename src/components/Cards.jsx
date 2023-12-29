import React, { useState, useRef } from "react";
import CardItems from "./CardItems";
import img from "../images/img-9.jpg";
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";
import img5 from "../images/img-5.jpg";
import img6 from "../images/img-6.jpg";
import img7 from "../images/img-7.jpg";
import img8 from "../images/img-8.jpg";
// import img9 from "../images/img-1.jpg";

function Cards() {
  const imgs = [img, img1, img3, img4, img5, img6, img7, img8];
  const clickedLink = useRef(null);
  const genrall = useRef(null);

  const handleClick = (childref) => {
    const caption = childref.current.firstChild.firstChild.lastChild.innerText;
    const main = document.getElementsByClassName("main");
    const img =
      childref.current.firstChild.firstChild.firstChild.getAttribute("src");
    const h5 = childref.current.firstChild.lastChild.firstChild;

    if (caption) {
      main[0].style.backgroundImage = `url(${img})`;
      main[0].firstChild.classList.add("text-white");
      main[0].style.transition = "background-image 0.5s ease-in-out";
      h5.classList.add("text-indigo-200");
    } else {
      main[0].style.backgroundImage = " ";
    }
  };

  const images = imgs.map((src, index) => {
    let text = "";
    switch (index) {
      case 0:
        text = "Discover the hidden gems of the Amazon Jungle 🌿";
        break;
      case 1:
        text = "Experience the breathtaking landscapes of the mountains ⛰️";
        break;
      case 2:
        text =
          "Embark on a journey through historic cities and architecture 🏰";
        break;
      // Add more cases for other images
      default:
        text = "Explore the wonders of the world 🌍";
        break;
    }
    let label = "";
    switch (index) {
      case 0:
        label = "Jungle Adventure";
        break;
      case 1:
        label = "Mountain Expedition";
        break;
      case 2:
        label = "City Exploration";
        break;
      // Add more cases for other adventures
      default:
        label = "Global Exploration";
        break;
    }

    return {
      text,
      label,
      path: "/services",
      src: src,
    };
  });

  return (
    <div ref={genrall} className=" main p-4 bg-[#d7e0eb] ">
      <h1
        // onMouseEnter={Show}
        className=" text-center py6 text-black text-6xl gx:text-2xl  font-extrabold  font-poppins first-letter:uppercase "
      >
        {" "}
        check Out The <span className=" uppercase text-cyan-700">
          epic!
        </span>{" "}
        Destiniation !!{" "}
      </h1>

      <div
        className="card__container 
       flex flex-col  text-center max-w-[1120px]  w-[90%]  mx-auto "
      >
        <div
          className="card__wrapper  relative

          mt-12 mb-12"
        >
          <ul
            className="cards__items
             grid grid-cols-2 s:grid-cols-1  gx:grid-cols-1
            
             
            
           gap-y-5   mb-6 "
          >
            {images.map((image, index) => (
              <CardItems
                // onClick={handleClick}
                onClick={handleClick} // Use onMouseEnter event
                text={image.text}
                label={image.label}
                path="/services"
                src={image.src}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

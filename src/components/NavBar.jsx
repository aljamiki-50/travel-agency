import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
// import { Button } from "bootstrap";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const swap = () => setClick(!click);
  const closeMobileMenue = () => setClick(false);

  const [height, setHeight] = useState(window.innerHeight);

  // console.log(height);

  // console.log(window.innerHeight);

  //   we adding a button her to resize and show it and disabble them
  const [button, setbutton] = useState(true);
  function btnOff() {
    if (window.innerWidth <= 960) {
      setbutton(false);
      // console.log("it s been set to false");
    } else {
      setbutton(true);
      // console.log("it s been set to true");
    }
  }

  useEffect(() => {
    // Call btnOff initially
    btnOff();
    // Add event listener for window resizing
    window.addEventListener("resize", btnOff);
    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", btnOff);
    };
  }, []);

  // window.addEventListener("resize", btnOff);

  const List = ["Home", "Services", "Products"];

  return (
    <>
      <nav className="   px-4  relative   font-poppins flex justify-between  items-center   bg-black text-white    py-4 ">
        <div className=" flex  scale-150     ">
          <Link
            to="#"
            className=" font-roboto  border-b-teal-600  border-b-2"
            onClick={closeMobileMenue}
          >
            TRVL <i className="fab fa-typo3" />
          </Link>
        </div>{" "}
        <div className="">
          <ul className={` flex items-center  gap-x-3   font-roboto      `}>
            {List.map((li) => (
              <li>{button && <Button children={li} btnStyle="btn-dark" />}</li>
            ))}
            {button && (
              <Button
                btnStyle="btn btn-light    hover:text-white  hover:bg-black font-roboto fs-3 fw-meduim"
                children="Sign-Up"
              />
            )}
          </ul>
        </div>
        {/* <div className=" hidden "> */}
        {!button && (
          <div className=" absolute right-2 " onClick={swap}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        )}
        {/* <div className="  absolute right-0 mt-28 scroll-smooth w-[100%]    "> */}
        <ul
          className={`${
            click ? "slide-in  " : "slide-out    "
          } absolute  mt-[68px] right-0 top-0 w-[100%]    flex flex-col   gap-y-24 pt-10 bg-black hover:bg-black hover:text-white text-center`}
          style={{ height: `${height}px` }}
        >
          {List.map((li) => (
            <li>
              <Button
                children={li}
                btnStyle="  bg-transparent  btn btn-light text-light "
                onClick={closeMobileMenue}
              />
            </li>
          ))}
          <li>
            <Button
              btnStyle="btn btn-light  hover:text-white  hover:bg-black font-roboto fs-3 fw-meduim"
              children="Sign-Up"
              onClick={closeMobileMenue}
            />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;

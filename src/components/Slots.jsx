import React from "react";

function Slots(props) {
  return (
    <div className="  h-screen  flex justify-center text-center  relative  canyon">
      <h1 className=" absolute top-[50%]    py-10 text-7xl px-6 bg-transparent ">
        {" "}
     {props.title}{" "}
      </h1>
    </div>
  );
}

export default Slots;

import React from "react";
import { Outlet } from "react-router-dom";

function TestLayout() {
  return (
    <>
      <div className=" p-10 bg-red-600 flex flex-row justify-between" >
        <li>home</li>
        <li>summer</li>
        <li>news</li>
        <li>whatever</li>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default TestLayout;

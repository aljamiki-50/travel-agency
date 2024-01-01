import React, { Fragment } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
// import "index.css"

function Layout() {
  return (
    <>
      <NavBar />
      <div className=" ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;

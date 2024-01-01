import { useState } from "react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import HeroSec from "./components/HeroSec";
import Cards from "./components/Cards";
import CardItems from "./components/CardItems";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeroSec />
      <Cards />
    </>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Layout from "./components/Layout.jsx";
import Products from "./components/Products.jsx";
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx";
import Test from "./components/Test.jsx";
import TestLayout from "./components/TestLayout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route  element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
          <Route  element={<TestLayout />}>
            <Route path=":test" element={<Test />} />
          </Route>
          {/* <Route path=":test" element={<Test />} /> */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

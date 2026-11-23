
import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Price from "./Price";
import Menu from "./Menu";
import Single from "./Single";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/prices" element={<Price />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/single" element={<Single />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

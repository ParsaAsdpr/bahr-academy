import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer";
import AnimatedPages from "./AnimatedPagesUnAuth.jsx";

const UnAuthApp = () => {
  return (
    <div dir="rtl">
      
      <Navbar></Navbar>
      <AnimatedPages></AnimatedPages>
      <Footer></Footer>
    </div>
  );
};

export default UnAuthApp;

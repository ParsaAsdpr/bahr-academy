import React, { useState } from "react";
import SignFlip from "../../components/Signup/SignFlip";
import signuppic from "../../assets/images/signup.png";
import { motion } from "framer-motion";

const Signup = () => {
    let url = window.location.href;
    let newUrl = url.split("/");
    const currentUrl = newUrl[newUrl.length - 1].toLowerCase();
  return (
    <motion.div
      className={`max-w-7xl mx-auto flex row h-screen`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="h-full pt-32 md:w-2/5 w-full">
        <SignFlip flipped={currentUrl === 'signup' ? true : false}></SignFlip>
      </div>
      <div className="h-full pt-28 w-3/5 md:block hidden">
        <img src={signuppic} alt="" className="w-full" />
      </div>
    </motion.div>
  );
};

export default Signup;

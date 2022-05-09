import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import "./flip.css";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

const SignFlip = (props) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (props.flipped == true) setFlipped(true);
  }, []);

  const handleFlip = () => {
    setFlipped(!flipped);
  };


  return (
    <div className="flip-container flex justify-center">
      <div className="deck">
        <div className={`${flipped ? "sign-card flipped" : "sign-card"}`}>
          <FrontCard onFlip={handleFlip}></FrontCard>
          <BackCard onFlip={handleFlip}></BackCard>
        </div>
      </div>
    </div>
  );
};

export default SignFlip;

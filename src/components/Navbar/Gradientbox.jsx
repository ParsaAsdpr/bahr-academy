import React from "react";

const GradientBox = props => {
  return (
    <div
      className={`gradient-box bg-gradient-to-r from-cyan-200 to-violet-500 rounded-br-full 
    h-full md:flex items-center justify-around lg:w-72 md:w-60 md:px-5 lg:px-8 hidden`}
    >
      {props.children}
    </div>
  );
};

export default GradientBox;

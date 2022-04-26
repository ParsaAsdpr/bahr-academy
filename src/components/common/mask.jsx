import React from "react";

const Mask = (props) => {
  return (
    <div className={`w-full h-full bg-black bg-opacity-40 absolute top-0 left-0 ${props.cName}`}>
      {props.children}
    </div>
  );
};

export default Mask;

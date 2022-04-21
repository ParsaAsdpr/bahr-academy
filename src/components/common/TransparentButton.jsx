import React from "react";

const TransparentButton = (props) => {
  return (
    <a
      href={props.path}
      className="px-7 py-2 bg-white bg-opacity-25 transition ease-in-out duration-300  text-white rounded-full hover:bg-opacity-40"
    >
      {props.title}
    </a>
  );
};

export { TransparentButton };

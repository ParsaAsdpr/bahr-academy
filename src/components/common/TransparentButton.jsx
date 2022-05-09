import React from "react";
import { Link } from "react-router-dom";

const TransparentButton = (props) => {
  return (
    <Link
      to={props.path}
      className="px-7 py-2 bg-white bg-opacity-25 transition ease-in-out duration-300  text-white rounded-full hover:bg-opacity-40"
    >
      {props.title}
    </Link>
  );
};

export default TransparentButton

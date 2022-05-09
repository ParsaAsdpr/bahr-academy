import React from "react";
import { Link } from "react-router-dom";

const LinkButton = (props) => {
  return (
    <Link to={props.path} className="text-white hover:scale-110 duration-100">
      {props.title}
    </Link>
  );
};

export default LinkButton;

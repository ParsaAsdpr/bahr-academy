import React from "react";

const LinkButton = (props) => {
  return (
    <a href={props.path} className="text-white hover:scale-110 duration-100">
      {props.title}
    </a>
  );
};

export { LinkButton };
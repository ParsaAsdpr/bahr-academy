import React from "react";
import { Link } from "react-router-dom";

const NavbarLink = (props) => {
  return (
    <a
      href={props.url}
      className={props.cName}
    >
      {props.title}
    </a>
  );
};

export { NavbarLink };

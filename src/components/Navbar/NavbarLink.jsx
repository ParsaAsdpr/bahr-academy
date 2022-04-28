import React from "react";
import { Link } from "react-router-dom";

const NavbarLink = (props) => {
  return (
    <a
      href={props.url}
      className={`border-b md:border-gray-300 lg:border-0 ${props.cName}`}
    >
      {props.title}
    </a>
  );
};

export { NavbarLink };

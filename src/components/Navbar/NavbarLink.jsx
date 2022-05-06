import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLink = (props) => {
  return (
    <NavLink
    to={props.url}
    className={`border-b md:border-gray-300 lg:border-0 ${props.cName}`}
    style={({isActive}) => isActive ? {color: '#545ee8'} : {color: '#272727'}}
  >
    {props.title}
  </NavLink>
  );
};

export { NavbarLink };

import React from "react";

const NavbarLink = (props) => {
  return (
    <a
      href={props.path}
      className="float-right text-gray-600 mx-5 cursor-pointer lg:py-5 py-3 hover:border-b-2 border-indigo-500 hover:text-indigo-500 duration-75 md:block hidden text-sm lg:text-base"
    >
      {props.title}
    </a>
  );
};

export { NavbarLink };

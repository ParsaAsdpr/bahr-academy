import React, { Fragment } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="navLogo float-right flex justify-between items-center cursor-pointer h-full">
      <img
        src={logo}
        alt="logo"
        className="w-10 h-10 block"
      />
      <p className="text-gray-900 mx-5 text-lg sm:inline hidden">
        آکادمی بحر
      </p>
    </Link>
  );
};

export default Logo;

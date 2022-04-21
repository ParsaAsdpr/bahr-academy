import React, { Fragment } from "react";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="float-right flex justify-between items-center cursor-pointer">
      <img
        src={logo}
        alt="logo"
        className="w-10 h-10 block"
      />
      <a className="text-gray-900 mx-5 text-lg sm:inline hidden">
        آکادمی بحر
      </a>
    </div>
  );
};

export { Logo };

import React, { Fragment } from "react";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="float-right flex justify-between items-center">
      <img
        src={logo}
        alt="logo"
        className="w-10 h-10 block cursor-pointer"
      />
      <a className="text-gray-900 mx-3 text-lg cursor-pointer sm:inline hidden">
        آکادمی بحر
      </a>
    </div>
  );
};

export { Logo };

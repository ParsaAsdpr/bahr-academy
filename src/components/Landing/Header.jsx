import React, { Component } from "react";
import Mask from "../common/mask";
import SearchBox from "../Header/SearchBox";
import HeaderTitle from "../Header/Title";

const Header = (props) => {
    return (
      <header className="flex justify-center w-full h-screen header-landing relative">
        <Mask cName="flex items-center flex-col flex-wrap whitespace-nowrap">
          <HeaderTitle></HeaderTitle>
          <SearchBox></SearchBox>
        </Mask>
      </header>
    );
  }

export default Header;

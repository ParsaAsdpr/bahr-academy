import React, { Component } from "react";
import Mask from "../../components/common/mask";
import SearchBox from "../../components/Header/SearchBox";
import HeaderTitle from "../../components/Header/Title";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="flex justify-center w-full h-screen header-landing relative">
        <Mask cName="flex items-center flex-col flex-wrap whitespace-nowrap">
          <HeaderTitle></HeaderTitle>
          <SearchBox></SearchBox>
        </Mask>
      </header>
    );
  }
}

export { Header };

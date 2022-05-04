import React, { Component } from "react";
import "./navbar.css";
import { NavbarLink } from "./NavbarLink";
import { GradientBox } from "./Gradientbox";
import { TransparentButton } from "../common/TransparentButton";
import { LinkButton } from "../common/LinkButton";
import { Logo } from "../Navbar/Logo";
import { MobileSign } from "./MobileSign";
import { RiCloseFill, RiMenu3Line} from "react-icons/ri"

class Navbar extends Component {
  state = {
    MenuItems: [
      { title: "دوره ها", url: "#", cName: "nav-links" },
      { title: "مدرسین", url: "#", cName: "nav-links" },
      { title: "بلاگ", url: "#", cName: "nav-links" },
      { title: "تماس با ما", url: "#", cName: "nav-links" },
    ],
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { MenuItems, clicked } = this.state;
    return (
      <header className="shadow-md">
        <nav className="NavbarItems">
          <div className="cont">
              <MobileSign></MobileSign>
            <h1 className="navbar-logo">
              <Logo></Logo>
            </h1>
            <div className="menu-icon" onClick={this.handleClick}>
              {clicked ? <RiCloseFill /> : <RiMenu3Line />}
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <NavbarLink
                      cName={item.cName}
                      url={item.url}
                      title={item.title}
                      ></NavbarLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <GradientBox>
            <TransparentButton title="ورود" path="/SignIn"></TransparentButton>
             <LinkButton title="ثبت نام" path="/SignIn"></LinkButton>
          </GradientBox>
        </nav>
      </header>
    );
  }
}
export { Navbar };

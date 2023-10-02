import React, { useState } from "react";
import "./navbar.css";
import NavbarLink from "./NavbarLink";
import GradientBox from "./Gradientbox";
import TransparentButton from "../common/TransparentButton";
import LinkButton from "../common/LinkButton";
import Logo from "../Navbar/Logo";
import MobileSign from "./MobileSign";
import { RiCloseFill, RiMenu3Line} from "react-icons/ri"


const Navbar = props => {
  const [ MenuItems, setMenuItems] = useState( [
    { title: "دوره ها", url: "courses", cName: "nav-links" },
    { title: "مدرسین", url: "tutors", cName: "nav-links" },
    { title: "بلاگ", url: "articles", cName: "nav-links" },
    { title: "درباره ما", url: "about", cName: "nav-links" },
  ]);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked( !clicked );
  };

  return ( 
  <header className="shadow-md fixed top-0 w-full z-50">
    <nav className="NavbarItems">
      <div className="cont">
          <MobileSign></MobileSign>
        <h1 className="navbar-logo">
          <Logo></Logo>
        </h1>
        <div className="menu-icon" onClick={handleClick}>
          {clicked ? <RiCloseFill /> : <RiMenu3Line />}
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
              <li key={index}>
                <NavbarLink
                  cName={item.cName}
                  url={item.url}
                  title={item.title}
                  ></NavbarLink>
              </li>
          ))}
        </ul>
      </div>
      <GradientBox>
        <TransparentButton title="ورود" path="/SignIn"></TransparentButton>
         <LinkButton title="ثبت نام" path="/SignUp"></LinkButton>
      </GradientBox>
    </nav>
  </header>

   );
}
 
export default Navbar;

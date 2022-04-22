import React, { Component } from "react";
import { GradientBox } from "./Gradientbox";
import { Logo } from "./Logo";
import { NavbarLink } from "./NavbarLink";
import { TransparentButton } from "../common/TransparentButton";
import { LinkButton } from "../common/LinkButton";

class Navbar extends Component {
  state = {
    links: [
      { title: "دوره ها", path: "/Courses" },
      { title: "مدرسین", path: "/Tutors" },
      { title: "بلاگ", path: "/Blog" },
      { title: "تماس با ما", path: "/Contact" },
    ],
  };
  render() {
    const { links } = this.state;
    return (
      <nav className="text-gray-500 h-full max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center h-full float-right px-6">
          <Logo></Logo>
          {links.map((link) => (
            <NavbarLink
              title={link.title}
              path={link.path}
              key={link}
            ></NavbarLink>
          ))}
        </div>

        <GradientBox>
          <TransparentButton title="ورود" path="/SignIn"></TransparentButton>
          <LinkButton title="ثبت نام" path="/SignIn"></LinkButton>
        </GradientBox>
      </nav>
    );
  }
}

export { Navbar };

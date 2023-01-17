import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={`container_12`}>
      <div className={`${classes.headerWrapper}`}>
        <div className={`${classes.header}`}>
          <Logo />
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Header;

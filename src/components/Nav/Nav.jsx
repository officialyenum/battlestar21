import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={`${classes.nav}`}>
      <a href="/">Home</a> / <a href="/game">Game Studio</a> /{" "}
      <a href="#contact">Contact</a>
    </div>
  );
};

export default Nav;

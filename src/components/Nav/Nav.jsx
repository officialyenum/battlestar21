import React from "react";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={`${classes.nav}`}>
      <Link to="/">Home</Link> / <Link to="/characters">Characters</Link> /{" "}
      <Link to="/battles">Battles</Link> / <Link to="/about">About</Link>
    </div>
  );
};

export default Nav;

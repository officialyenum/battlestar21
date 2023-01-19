import React from "react";
import classes from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <div className={`${classes.nav}`}>
      <Link to="/" className={pathname === "/" ? classes.active : ""}>
        Home
      </Link>{" "}
      /{" "}
      <Link
        to="/characters"
        className={pathname === "/characters" ? classes.active : ""}
      >
        Characters
      </Link>{" "}
      /{" "}
      <Link
        to="/battles"
        className={pathname === "/battles" ? classes.active : ""}
      >
        Battles
      </Link>{" "}
      /{" "}
      <Link to="/about" className={pathname === "/about" ? classes.active : ""}>
        About
      </Link>
    </div>
  );
};

export default Nav;

import React from "react";
import classes from "./Logo.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className={classes.image} />
    </Link>
  );
};
export default Logo;

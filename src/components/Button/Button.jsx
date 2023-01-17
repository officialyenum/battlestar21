import React from "react";
import classes from "./button.module.css";

export const Button = ({ fixedWidth, text, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${classes["button-default"]} ${classes[`button-${color}`]} ${
        classes["button-slanted"]
      }`}
    >
      <span className={`${classes["button-slanted-content"]}`}>
        {text ? text : "Button"}
      </span>
    </button>
  );
};

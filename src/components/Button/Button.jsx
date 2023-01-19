import React from "react";
import classes from "./button.module.css";

export const Button = ({ text, color, onClick, isLoading, opacity }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={`${classes["button-default"]} ${classes[`button-${color}`]} ${
        classes["button-slanted"]
      } ${classes[`button-${opacity}`]}`}
    >
      <span className={`${classes["button-slanted-content"]}`}>
        {text ? text : "Button"}
      </span>
    </button>
  );
};

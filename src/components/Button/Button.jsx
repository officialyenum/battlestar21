import React from "react";
import classes from "./button.module.css";

export const Button = ({
  text,
  color,
  onClick,
  isLoading,
  opacity,
  isDisabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading || isDisabled}
      className={`${classes["button-default"]} ${classes[`button-${color}`]} ${
        classes["button-slanted"]
      } ${classes[`button-${opacity}`]} ${
        classes[`button-${isDisabled || isLoading ? "disabled" : ""}`]
      }`}
    >
      <span className={`${classes["button-slanted-content"]}`}>
        {text ? text : "Button"}
      </span>
    </button>
  );
};

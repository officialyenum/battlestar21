import React from "react";
import Modal from "react-modal";
import classes from "./modal.module.css";
import { Button } from "../Button";

Modal.setAppElement("#modal");

export const GameCompleteModal = ({ selected, isOpen, onClose, winner }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Simulation Completed"
      className={classes.Modal}
      overlayClassName={classes.Overlay}
    >
      <h2>
        {winner?._id === selected
          ? "Hooray!!, You Predicted Right."
          : "Ooops!, Sorry your prediction was not correct!."}
      </h2>
      <div className={classes.winnerContainer}>
        <p>WINNER: {winner?.name}</p>
      </div>
      <div className={classes.buttonFlex}>
        <div
          className={`${
            winner?._id === selected ? classes["button-full"] : classes.button
          }`}
        >
          <Button text="Close" color="red" onClick={onClose} />
        </div>
        {winner?._id !== selected && (
          <div className={classes.button}>
            <Button text="Retry" color="orange" onClick={onClose} />
          </div>
        )}
      </div>
    </Modal>
  );
};

import React from "react";
import Modal from "react-modal";
import classes from "./modal.module.css";
import { Button } from "../Button";
import { Typewriter } from "react-simple-typewriter";

Modal.setAppElement("#modal");

export const SimulationModal = ({ simulation, winner, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Replay Simulation"
      className={classes.Modal}
      overlayClassName={classes.Overlay}
    >
      <p>
        <Typewriter
          words={[simulation]}
          loop={1}
          cursor
          typeSpeed={40}
          delaySpeed={1000}
          //   onType={handleType}
        />
      </p>
      <div className={classes.winnerContainer}>
        <p>WINNER: {winner}</p>
      </div>
      <div className={classes.buttonFlex}>
        <div className={`${classes["button-full"]}`}>
          <Button text="Close" color="red" onClick={onClose} />
        </div>
      </div>
    </Modal>
  );
};

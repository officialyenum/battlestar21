import React from "react";
import Modal from "react-modal";
import classes from "./modal.module.css";

Modal.setAppElement("#modal");

export const GameCompleteModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={onClose}
      contentLabel="Simulation Completed"
      className={classes.Modal}
      overlayClassName={classes.Overlay}
    >
      <button onClick={onClose}>close</button>
      <h1>Swesome</h1>
    </Modal>
  );
};

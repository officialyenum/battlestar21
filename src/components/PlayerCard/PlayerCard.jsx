import React from "react";
import { Button } from "../Button";
import classes from "./playercard.module.css";

export const PlayerCard = ({
  character,
  allowSelect,
  selectedCharacter,
  handleSelectCharacter,
}) => {
  return (
    <div className={classes.container}>
      <div>
        <p className={classes.playerName}>{character?.name}</p>
        <em className={classes.playerBio}>{character?.bio}</em>
        <div className={classes.winLossFlex}>
          <div className={classes.winLossContainer}>
            <p>WINS: </p>
            <span>{character?.wins}</span>
          </div>
          <div className={`${classes.winLossContainer} ${classes.winlossRed}`}>
            <p>LOSS: </p>
            <span>{character?.loss}</span>
          </div>
        </div>
        {allowSelect && (
          <div className={classes.winLossFlex}>
            <Button
              text={
                selectedCharacter === character?._id ? "SELECTED" : "SELECT"
              }
              color="orange"
              opacity={selectedCharacter === character?._id ? "01" : "02"}
              onClick={() => handleSelectCharacter(character?._id)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

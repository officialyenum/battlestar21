import React, { useState } from "react";
import { Button } from "../Button";
import classes from "./playercard.module.css";

export const PlayerCard = ({
  character,
  allowSelect,
  selectedCharacter,
  handleSelectCharacter,
  hideStatus,
}) => {
  const [showMore, setShowMore] = useState(false);
  function truncate(str, n) {
    return str.length > n ? str.slice(0, n - 1) + `...` : str;
  }
  return (
    <div className={classes.container}>
      <div>
        <p className={classes.playerName}>{character?.name}</p>
        <em className={classes.playerBio}>
          {showMore ? character?.bio : truncate(character?.bio, 300)}
          {character?.bio.length > 300 && (
            <span className={classes.readmore} onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show Less" : "Read More"}
            </span>
          )}
        </em>
        {!hideStatus && (
          <div className={classes.winLossFlex}>
            <div className={classes.winLossContainer}>
              <p>WINS: </p>
              <span>{character?.wins}</span>
            </div>
            <div
              className={`${classes.winLossContainer} ${classes.winlossRed}`}
            >
              <p>LOSS: </p>
              <span>{character?.loss}</span>
            </div>
          </div>
        )}
        {allowSelect && (
          <div className={classes.winLossFlex}>
            <Button
              isDisabled={!allowSelect}
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

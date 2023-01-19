import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useGenerateCharacter } from "../../hooks";
import { Button } from "../Button";
import { PlayerCard } from "../PlayerCard";
import classes from "./Wrapper.module.css";

const Wrapper = () => {
  const [isGenerated, setIsGenerated] = useState(false);
  const {
    character,
    generate,
    computerCharacter,
    errors,
    isLoadingComputerCharacter,
    isLoadingUserCharacter,
    handleSelectCharacter,
    userSelectedCharacter,
    simulateFight,
    simulation,
    onTypeDone,
  } = useGenerateCharacter();

  return (
    <div
      className={`${classes.wrapper} ${character && classes["wrapper-active"]}`}
    >
      <div className={`${classes["main-story"]} container_12`}>
        {simulation ? (
          <div className={classes.simulationContainer}>
            <div className={classes.simulation}>
              <Typewriter
                words={[simulation]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={40}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={onTypeDone}
                // onType={handleType}
              />
            </div>
          </div>
        ) : (
          <div style={{ width: "100%" }}>
            {character ? (
              <div className={classes.players}>
                <PlayerCard
                  selectedCharacter={userSelectedCharacter}
                  handleSelectCharacter={handleSelectCharacter}
                  allowSelect={character && computerCharacter}
                  character={character}
                />
                {isLoadingComputerCharacter ? (
                  <p className={classes.opponent_player_loading}>
                    Generating Opponent Character
                  </p>
                ) : computerCharacter ? (
                  <PlayerCard
                    selectedCharacter={userSelectedCharacter}
                    handleSelectCharacter={handleSelectCharacter}
                    allowSelect={character && computerCharacter}
                    character={computerCharacter}
                  />
                ) : null}
              </div>
            ) : (
              <div className={`${classes["user-character-container"]}`}>
                <h3 className={`${classes.generated_character_heading}`}>
                  Generate A Character to Enjoy Battlestar
                </h3>
                <div className={`${classes.generate_container}`}>
                  <Button
                    text={
                      isLoadingUserCharacter
                        ? "Generating Character..."
                        : "Generate Character Now"
                    }
                    isLoading={isLoadingUserCharacter}
                    color="orange"
                    onClick={() => generate()}
                  />
                </div>
              </div>
            )}
            {userSelectedCharacter && character && (
              <div className={classes.button_center}>
                <Button
                  text="SIMULATE FIGHT"
                  color="orange"
                  onClick={() => simulateFight()}
                />
              </div>
            )}
          </div>
        )}

        <div className={`${classes.intro}`}>
          <p className={classes.date}>{new Date().toLocaleDateString()}</p>
        </div>
        {/**<div className={`${classes.errorContainer}`}>
          <p className={classes.errorMessage}>{errors.computer}</p>
        </div> */}
        {character && computerCharacter && !simulation && (
          <div className={`${classes.infoContainer}`}>
            <p className={classes.infoMessage}>
              Predict Character to possibly win the fight!.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wrapper;

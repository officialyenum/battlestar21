import React, { useState } from "react";
import { Button } from "../Button";
import classes from "./Wrapper.module.css";

const Wrapper = () => {
  const [isGenerated, setIsGenerated] = useState(false);

  return (
    <div
      className={`${classes.wrapper} ${
        isGenerated && classes["wrapper-active"]
      }`}
    >
      <div className={`${classes["main-story"]} container_12`}>
        <div className={`${classes["user-character-container"]}`}>
          <h3 className={`${classes.generated_character_heading}`}>
            Generate Your Character to Enjoy Battlestar
          </h3>
          <div className={`${classes.generate_container}`}>
            <div className={`${classes.input_container}`}>
              <input
                type="text"
                name="username"
                placeholder="Character Name"
                className={`${classes.input}`}
              />
            </div>
            <Button
              text="Generate Character Now"
              color="orange"
              onClick={() => setIsGenerated(!isGenerated)}
            />
          </div>
        </div>
        <div className={`${classes.intro}`}>
          <p className={classes.date}>17 Jan 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;

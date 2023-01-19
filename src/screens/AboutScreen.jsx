import React from "react";
import { Footer, Header } from "../components";
import classes from "./pages.module.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { ChukwuyenumOpone, UzochukwuVictor, KennethAugustine } from "../assets";

export const AboutScreen = () => {
  const team = [
    {
      Name: "Uzochukwu Victor",
      Role: "React Frontend Developer",
      LinkedIn: "https://www.linkedin.com/in/uzochukwu-victor/",
      Github: "https://github.com/vickzuzo",
      img: UzochukwuVictor,
    },
    {
      Name: "Chukwuyenum Opone",
      Role: "Software/Game Developer",
      LinkedIn: "https://linkedin.com/in/yenum",
      Github: "https://github.com/officialyenum",
      img: ChukwuyenumOpone,
    },
    {
      Name: "Oroke Kenneth Augustine",
      Role: "Writer/Data Analyst",
      LinkedIn: "https://linkedin.com/in/oroke-kenneth",
      Github: "https://github.com/ServusPacis001",
      img: KennethAugustine,
    },
  ];
  return (
    <div className="main">
      <Header />
      <div className={`${classes.mainContainer2} container_12`}>
        <div className={classes.aboutUsContainer}>
          <h3>About The Game</h3>
          <p>
            This is a Battle Simulation Game using AI21 language model for AI21
            Labs Hackathon taking place on January 13-20 2023.
          </p>
        </div>
        <div className={classes.teamContainer}>
          {team.map((team) => (
            <div className={classes.teamItem}>
              <img src={team?.img} alt={`${team?.Name}-profile`} />
              <div>
                <h3>{team?.Name}</h3>
                <p>{team?.Role}</p>
                <div className={classes.iconsWrapper}>
                  <div
                    onClick={() =>
                      window.open(team?.LinkedIn, "_blank").focus()
                    }
                    className={classes.iconContainer}
                  >
                    <AiFillLinkedin fontSize="18px" />
                  </div>
                  <div
                    onClick={() => window.open(team?.Github, "_blank").focus()}
                    className={classes.iconContainer}
                  >
                    <AiFillGithub fontSize="18px" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

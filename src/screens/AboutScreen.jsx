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
      Name: "Opone Chukwuyenum",
      Role: "Software / Game Developer",
      LinkedIn: "https://linkedin.com/in/yenum",
      Github: "https://github.com/officialyenum",
      img: ChukwuyenumOpone,
    },
    {
      Name: "Oroke Kenneth Augustine",
      Role: "Writer / Data Analyst",
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
          <br/>
          <h3>About Battle 21</h3>
          <p>
            This is a Battle Simulation Game using AI21 language model for AI21
            Labs Hackathon taking place on January 13-20 2023.
          </p>
          <br/>
          <h4> Features </h4>
          <br/>
          <p> Generate character, Predict Who Wins a Battle, Simulate battle or story.</p>
          <p> More Features Coming like Logged in Users owning their own characters, Marketplace, Multiplayer, Character Training, etc...</p>
        </div>
        <div className={classes.aboutUsContainer}>
          <h3>The Team</h3>
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

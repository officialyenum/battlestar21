import React from "react";
import { ThemeSong } from "../assets";
import { Footer, Header, Wrapper } from "../components";

export const HomeScreen = () => {
  return (
    <div className="main">
      <audio id="audio" loop={true} autoPlay>
        <source src={ThemeSong} type="audio/mpeg" />
      </audio>
      <Header />
      <Wrapper />
      <Footer />
    </div>
  );
};

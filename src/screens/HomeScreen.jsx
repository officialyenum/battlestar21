import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { ThemeSong } from "../assets";
import { Footer, Header, Wrapper } from "../components";

export const HomeScreen = () => {
  return (
    <div className="main">
      <ReactAudioPlayer src={ThemeSong} autoPlay volume={0.3} />
      <Header />
      <Wrapper />
      <Footer />
    </div>
  );
};

import "./App.css";

import React from "react";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="main">
      <Header />
      <Wrapper />
      <Footer />
    </div>
  );
};

export default App;

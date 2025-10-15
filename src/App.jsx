import { useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import MyWork from "./components/MyWork";

const App = () => {
  
  return (
    <>
      <Header />
      <Home />
      <MyWork />
      <Contact id="contact" />
    </>
  );
};

export default App;

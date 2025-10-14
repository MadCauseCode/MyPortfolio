import { useState } from "react";

import Home from "./components/Hero";
import MyWork from "./components/MyWork";

const App = () => {
  const [sections, setSections] = useState([]);

  const scrolltoElement = (id) => {
    const element = document.getElementById(id);
    if (!element) {
      console.log(`Element with id ${id} not found`);
      return;
    }
    console.log(`Scrolling to ${id}`);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Home id="Home"  />
      <div className="hero-cta">
        <button className="cta-button" onClick={() => scrolltoElement("MyWork")}>
          My Work
        </button>
        <button className="cta-button" onClick={() => scrolltoElement("about")}>
          About Me
        </button>
        <button className="cta-button" onClick={() => scrolltoElement("contact")}>
          Contact Me
        </button>
      </div>
    </>
  );
};

export default App;

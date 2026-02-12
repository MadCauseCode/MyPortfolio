import { useState, useRef } from "react";
import {
  IconBrandAmongUs,
  IconBrandFirebase,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandPython,
  IconBrandVercel,
} from "@tabler/icons-react";
import "./Hero.css";
import AboutMe from "./AboutMe";

const Hero = () => {
  const [showSus, setShowSus] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const hoverTimerRef = useRef(null);

  const handleMouseEnter = () => {
    hoverTimerRef.current = setTimeout(() => {
      setShowSus(true);
    }, 2000);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setShowSus(false);
  };

  const handleReadMore = () => {
    setReadMore(!readMore);
    console.log(readMore);
  };

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-left">
              <div
                className="character-circle"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src="/HeadShot.webp"
                  alt="Oran Gal"
                  className="character-image"
                  loading="lazy"
                />
                {showSus && (
                  <div className="sus-indicator">
                    <IconBrandAmongUs size={20} />
                    <p>sus...</p>
                  </div>
                )}
              </div>
            </div>

            <div className="hero-right">
              <h1 className="hero-name">Oran Gal</h1>
              <p style={{ color: "#fafafaff" }}>
                Hold your mouse on headshot for an easter egg
              </p>
              <h2 className="hero-role">Full Stack Developer, Musician & Your next team player</h2>
              <div className="hero-description">
                <p>Hello there! My name is Oran, I'm a full-stack developer.</p>
                <p>
                  I specialize in modern software development, crafting both
                  robust backend systems and intuitive frontend experiences that
                  feel alive and responsive.
                </p>
                <p>
                  I'm currently looking for full time opportunities where I can
                  grow, collaborate with a team, and I also take on freelance
                  projects!
                </p>
                <p>Let's build something amazing together!</p>
                <div className="hero-tech-stack">
                  <p>My Tech Stack:</p>
                  <IconBrandJavascript title="Javascript" />
                  <IconBrandPython title="Python" />
                  <IconBrandReact title="ReactJs" />
                  <IconBrandNodejs title="Node.js" />
                  <IconBrandMongodb title="MongoDB" />
                  <IconBrandVercel title="Vercel" />
                  <IconBrandFirebase title="Firebase" />
                </div>
              </div>
            </div>
          </div>
          {readMore && <AboutMe />}
          <a className="readMore"
            onClick={() => handleReadMore()}
          >
            {readMore ? "Read Less" : "Read More"}
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;

import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container" id="about">
          <div className="hero-content">
            {/* Left side - Character illustration */}
            <div className="hero-left">
              <div className="character-circle">
                <img
                  src="/HeadShot.png"
                  alt="Oran Gal"
                  className="character-image"
                />
              </div>
            </div>
            
            {/* Right side - Text content */}
            <div className="hero-right">
              <h1 className="hero-name">Oran Gal</h1>
              <h2 className="hero-role">Full-Stack Developer & UI Designer</h2>
              <div className="hero-description">
                <p>Hello there! My name is Oran, I'm a full-stack developer and designer.</p>
                <p>I specialize in modern web development, server-side implementation and creating digital experiences that feel alive.</p>
                <p>I'm currently looking for full time opportunities where I can grow, collaborate with a team, and I also take on freelance projects!</p>
                <p>Let's build something amazing together!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div
            style={{
              padding: "2rem",
              backgroundColor: "#f4eadaff",
              borderRadius: "18px",
            }}
          >
            <div className="hero-content">
              <h1 className="hero-title">Oran Gal</h1>
              <div className="hero-image">
                <img
                  src="/HeadShot.png"
                  alt="Oran Gal"
                  className=" profile-image"
                />
              </div>
              <h2 className="hero-subtitle">Full Stack Developer</h2>
              <p className="hero-description">
                Crafting exceptional digital experiences with modern
                technologies. Passionate about creating elegant solutions that
                make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

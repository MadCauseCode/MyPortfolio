import { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [copyMessage, setCopyMessage] = useState("");

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("oran_gal@outlook.com");
      setCopyMessage("📧 Email copied to clipboard!");
      setTimeout(() => setCopyMessage(""), 3000);
    } catch (err) {
      setCopyMessage("📧 oran_gal@outlook.com");
      setTimeout(() => setCopyMessage(""), 5000);
    }
  };

  const icons = [
    { name: "LinkedIn", url: "./contactIcons/linkedin.png", link: "https://www.linkedin.com/in/oran-gal-a12984303/" },
    { name: "GitHub", url: "./contactIcons/github.png", link: "https://github.com/MadCauseCode/" },
    { name: "WhatsApp", url: "./contactIcons/whatsapp.png", link: "https://wa.me/972509042004" },
    { name: "cv", url: "./contactIcons/cv.png", link: "./OranGalCV.pdf" }
  ]

  return (
    <>
      <div id="contact" className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-text">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me via any of the platforms below!
        </p>

        {copyMessage && (
          <div className="copy-message">{copyMessage}</div>
        )}

        <div className="icon-container">

          {icons.map((icon) => (
            <a key={icon.name} href={icon.link} target="_blank" rel="noopener noreferrer">
              <img src={icon.url} alt={icon.name} className="icon" />
            </a>
          ))}
          <button onClick={handleEmailClick} className="email-button" style={{ background: "none", border: "none", cursor: "pointer" }}>
            <img src="./contactIcons/gmail.png" alt="Email" className="icon" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Contact
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp, IconFileText } from "@tabler/icons-react";
import "./Contact.css";

const Contact = () => {

  return (
    <>
      <hr style={{ width: "75%", margin:"auto", marginTop: "100px" }} />
      <div id="contact" className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-text">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out to me
          via any of the platforms below!
        </p>

        <div className="icon-container">
          <a target="_blank" href="https://github.com/MadCauseCode" style={{background:"none", border:"none"}}><IconBrandGithub size={35} className="Contact-icon" /></a>
          <a target="_blank" href="mailto:oran_gal@outlook.com"  style={{background:"none", border:"none"}}><IconMail size={35} className="Contact-icon" /></a>
          <a target="_blank" href="https://wa.me/0509042004" style={{background:"none", border:"none"}}><IconBrandWhatsapp size={35} className="Contact-icon" /></a>
          <a target="_blank" href="https://www.linkedin.com/in/oran-gal-a12984303/" style={{background:"none", border:"none"}}><IconBrandLinkedin size={35} className="Contact-icon" /></a>
          <a target="_blank" href="/OranGalCV.pdf" style={{background:"none", border:"none"}}><IconFileText size={35} className="Contact-icon" /></a>
        </div>
      </div>
    </>
  );
};
export default Contact;

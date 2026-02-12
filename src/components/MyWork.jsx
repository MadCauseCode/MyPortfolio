import "./MyWork.css";
import Gallery from "./Gallery";

const MyWork = () => {
  return (
    <>
      <div id="MyWork">
        <div className="mywork-container" style={{marginBottom:"10px"}}>
          <h2 className="mywork-title">My Work</h2>
          <p className="mywork-description">
            Here are some of the projects I've worked on recently. Click on any
            project to learn more about it!
          </p>
        </div>
        <Gallery />
      </div>
    </>
  );
};

export default MyWork;

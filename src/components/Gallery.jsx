import projectsData from "../projects.json";
import { useState } from "react";
import {
  IconBrandGithub,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projects = projectsData;

  const handleImageClick = (project) => {
    openModal(project);
  };

  const openModal = (project) => {
    setSelectedImage(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const getAllImages = (project) => {
    const images = [project.img];
    if (project.morePhotos) {
      images.push(...project.morePhotos);
    }
    return images;
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;

    const allImages = getAllImages(selectedImage);
    const maxIndex = allImages.length - 1;

    if (direction === "next") {
      setCurrentImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    } else {
      setCurrentImageIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }
  };

  return (
    <div>
      <div className="cards-stack-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card-stack"
            style={{
              '--card-index': index,
            }}
            onClick={() => handleImageClick(project)}
          >
            <div className="card-inner">
              <div className="card-image">
                <img
                  src={project.img}
                  alt={project.alt}
                  loading="lazy"
                />
                <div className="card-overlay">
                  <div className="overlay-content">
                    <span className="category-badge">{project.category}</span>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{project.name}</h3>
                <div className="tech-tags">
                  {project.TechStack?.slice(0, 4).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                  {project.TechStack?.length > 4 && (
                    <span className="tech-tag">+{project.TechStack.length - 4}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image-container">
              <img
                src={getAllImages(selectedImage)[currentImageIndex]}
                alt={selectedImage.alt}
                className="modal-image"
              />
              {getAllImages(selectedImage).length > 1 && (
                <>
                  <button
                    className="image-nav-button prev-button"
                    onClick={() => navigateImage("prev")}
                  >
                    <IconChevronLeft size={24} />
                  </button>
                  <button
                    className="image-nav-button next-button"
                    onClick={() => navigateImage("next")}
                  >
                    <IconChevronRight size={24} />
                  </button>
                  <div className="image-indicators">
                    {getAllImages(selectedImage).map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${
                          index === currentImageIndex ? "active" : ""
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <div>
              <h2 className="modal-title">{selectedImage.name}</h2>
              <p className="modal-category">{selectedImage.category}</p>
              <p className="modal-description">
                {selectedImage.TechStack.join(" | ")}
              </p>{" "}
              <br />
              <p className="modal-description">{selectedImage.description}</p>
              <div className="modal-buttons">
                {selectedImage.url && (
                  <a
                    href={selectedImage.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="open-project-button"
                  >
                    Open Project
                  </a>
                )}
                {selectedImage.github && (
                  <a
                    href={selectedImage.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="open-repo-button"
                  >
                    <IconBrandGithub size={20} />
                    Open Repo
                  </a>
                )}
              </div>
            </div>
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
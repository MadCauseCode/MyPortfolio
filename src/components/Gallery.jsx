import { useState } from "react";
import "./gallery.css";
import projectsData from "../projects.json";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const projects = projectsData; // Remove the array wrapper
    
    const handleImageClick = (project) => { // Changed parameter name for clarity
        if (project.url) {
            window.location.href = project.url;
        }
        if (!project.url) {
            openModal(project);
        }
    }

    const openModal = (project) => {
        setSelectedImage(project);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <div className="gallery-grid">
                {projects.map((project, index) => ( // Changed from 'images' to 'projects'
                    <div key={index}>
                        <img
                            className="gallery-item"
                            src={project.img}
                            alt={project.alt}
                            onClick={() => handleImageClick(project)}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage.img}
                            alt={selectedImage.alt}
                            className="modal-image"
                        />
                        <button className="close-button" onClick={closeModal}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
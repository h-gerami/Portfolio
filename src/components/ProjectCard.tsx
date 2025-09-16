'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Project } from '@/data/projects';
import { TECH_MAP } from '@/data/tech';

interface ProjectCardProps {
  project: Project;
  onImageClick: (images: string[], index: number) => void;
}

export default function ProjectCard({ project, onImageClick }: ProjectCardProps) {
  const [showTechModal, setShowTechModal] = useState(false);

  const openTechModal = () => {
    setShowTechModal(true);
  };

  const closeTechModal = () => {
    setShowTechModal(false);
  };

  const techStack = TECH_MAP[project.id] || [];

  return (
    <>
      <div className="project" data-project={project.id}>
        <div className="project-content">
          <div className="card">
            <h2>
              {project.title}
              <span className="chip" onClick={openTechModal}>
                {project.category}
              </span>
              <span 
                className="dots-icon" 
                onClick={openTechModal}
                title="Technologies"
              >
                <i className="fa-solid fa-circle-info"></i>
              </span>
            </h2>
            <p>{project.description}</p>
          </div>
        </div>
        <div>
          <div className={`gallery card gallery-${project.images.length}`}>
            {project.images.map((image, index) => (
              <img
                key={index}
                src={`/images/${image}`}
                alt={`${project.title} screenshot ${index + 1}`}
                className="gallery-image"
                loading="lazy"
                onClick={() => onImageClick(project.images, index)}
              />
            ))}
          </div>
          <div className="achievements-box">
            <div className="achievements-title">Key Achievements</div>
            <ul className="achievements">
              {project.achievements.map((achievement, index) => (
                <li key={index}>
                  <i className="fa fa-check-circle"></i>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tech Modal */}
      {showTechModal && (
        <div
          className="tech-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Technologies Used"
          onClick={(e) => e.target === e.currentTarget && closeTechModal()}
        >
          <div className="tech-modal-content">
            <span 
              className="close-modal" 
              onClick={closeTechModal}
              aria-label="Close" 
              title="Close"
            >
              &times;
            </span>
            <h2 style={{ margin: '0 0 0.6rem 0' }}>Technologies Used</h2>
            <div className="tech-tags">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ImageModal from './ImageModal';

export default function Projects() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    images: [] as string[],
    currentIndex: 0,
  });

  const openImageModal = (images: string[], index: number) => {
    setModalState({
      isOpen: true,
      images,
      currentIndex: index,
    });
  };

  const closeImageModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const navigateImage = (index: number) => {
    setModalState(prev => ({ ...prev, currentIndex: index }));
  };

  return (
    <>
      <section id="projects" className="section" aria-labelledby="projects-title">
        <div className="section-header">
          <h2 id="projects-title">Selected Mobile Apps Projects</h2>
        </div>

        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onImageClick={openImageModal} />
        ))}
      </section>

      <ImageModal
        isOpen={modalState.isOpen}
        images={modalState.images}
        currentIndex={modalState.currentIndex}
        onClose={closeImageModal}
        onNavigate={navigateImage}
      />
    </>
  );
}

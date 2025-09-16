'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Project } from '@/data/projects';
import { TECH_MAP } from '@/data/tech';
import { useTranslation } from '@/contexts/TranslationContext';

interface ProjectCardProps {
  project: Project;
  onImageClick: (images: string[], index: number) => void;
}

export default function ProjectCard({ project, onImageClick }: ProjectCardProps) {
  const { t } = useTranslation();
  const [showTechModal, setShowTechModal] = useState(false);

  const openTechModal = () => {
    setShowTechModal(true);
  };

  const closeTechModal = () => {
    setShowTechModal(false);
  };

  const techStack = TECH_MAP[project.id] || [];

  // Get translated content based on project ID
  const getProjectContent = () => {
    switch (project.id) {
      case 'gardenia':
        return {
          title: t.language === 'en' ? project.title : t.gardeniaTitle,
          category: t.language === 'en' ? project.category : t.gardeniaCategory,
          description: t.language === 'en' ? project.description : t.gardeniaDescription,
          achievements: t.language === 'en' ? project.achievements : t.gardeniaAchievements
        };
      case 'quickclaim':
        return {
          title: t.language === 'en' ? project.title : t.quickclaimTitle,
          category: t.language === 'en' ? project.category : t.quickclaimCategory,
          description: t.language === 'en' ? project.description : t.quickclaimDescription,
          achievements: t.language === 'en' ? project.achievements : t.quickclaimAchievements
        };
      case 'lerne24':
        return {
          title: t.language === 'en' ? project.title : t.lerne24Title,
          category: t.language === 'en' ? project.category : t.lerne24Category,
          description: t.language === 'en' ? project.description : t.lerne24Description,
          achievements: t.language === 'en' ? project.achievements : t.lerne24Achievements
        };
      case 'hihab':
        return {
          title: t.language === 'en' ? project.title : t.hihabTitle,
          category: t.language === 'en' ? project.category : t.hihabCategory,
          description: t.language === 'en' ? project.description : t.hihabDescription,
          achievements: t.language === 'en' ? project.achievements : t.hihabAchievements
        };
      case 'hoomqc':
        return {
          title: t.language === 'en' ? project.title : t.hoomqcTitle,
          category: t.language === 'en' ? project.category : t.hoomqcCategory,
          description: t.language === 'en' ? project.description : t.hoomqcDescription,
          achievements: t.language === 'en' ? project.achievements : t.hoomqcAchievements
        };
      default:
        return {
          title: project.title,
          category: project.category,
          description: project.description,
          achievements: project.achievements
        };
    }
  };

  const projectContent = getProjectContent();

  return (
    <>
      <div className="project" data-project={project.id}>
        <div className="project-content">
          <div className="card">
            <h2>
              {projectContent.title}
              <span className="chip" onClick={openTechModal}>
                {projectContent.category}
              </span>
              <span 
                className="dots-icon" 
                onClick={openTechModal}
                title="Technologies"
              >
                <i className="fa-solid fa-circle-info"></i>
              </span>
            </h2>
            <p>{projectContent.description}</p>
          </div>
        </div>
        <div>
          <div className={`gallery card gallery-${project.images.length}`}>
            {project.images.map((image, index) => (
              <img
                key={index}
                src={`/images/${image}`}
                alt={`${projectContent.title} screenshot ${index + 1}`}
                className="gallery-image"
                loading="lazy"
                onClick={() => onImageClick(project.images, index)}
              />
            ))}
          </div>
          <div className="achievements-box">
            <div className="achievements-title">
              {t.language === 'en' ? 'Key Achievements' : 
               t.language === 'de' ? 'Wichtige Erfolge' :
               t.language === 'zh' ? '主要成就' :
               t.language === 'ru' ? 'Ключевые достижения' :
               t.language === 'fa' ? 'دستاوردهای کلیدی' : 'Key Achievements'}
            </div>
            <ul className="achievements">
              {projectContent.achievements.map((achievement, index) => (
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
            <h2 style={{ margin: '0 0 0.6rem 0' }}>
              {t.language === 'en' ? 'Technologies Used' : 
               t.language === 'de' ? 'Verwendete Technologien' :
               t.language === 'zh' ? '使用的技术' :
               t.language === 'ru' ? 'Используемые технологии' :
               t.language === 'fa' ? 'فناوری‌های استفاده شده' : 'Technologies Used'}
            </h2>
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

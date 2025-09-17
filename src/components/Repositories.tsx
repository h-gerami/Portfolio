'use client';

import { useState, useEffect } from 'react';
import { repositories } from '@/data/repositories';
import RepositoryCard from './RepositoryCard';
import { useTranslation } from '@/contexts/TranslationContext';

export default function Repositories() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* GitHub Toggle Button */}
      <button 
        className="github-toggle-btn"
        onClick={toggleSidebar}
        aria-label="Toggle GitHub sidebar"
        title="GitHub"
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      {/* GitHub Sidebar */}
      <div className={`floating-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="section-header">
            <h2 id="repositories-title">
              <i className="fab fa-github"></i>
              {t.language === 'en' ? 'Source Code' : t.repositoriesTitle}
            </h2>
            <button className="sidebar-close" onClick={toggleSidebar}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="repos-grid">
            {repositories.map((repo) => (
              <RepositoryCard key={repo.id} repo={repo} />
            ))}
          </div>

          <div className="github-cta">
            <p>{t.language === 'en' ? 'Want to see more? Check out my GitHub profile for additional projects and contributions.' : t.repositoriesSubtitle}</p>
            <a 
              href="https://github.com/h-gerami" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-profile-btn"
            >
              <i className="fab fa-github"></i>
              {t.language === 'en' ? 'View GitHub Profile' : t.githubProfile}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

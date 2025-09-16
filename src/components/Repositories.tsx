'use client';

import { useState, useEffect } from 'react';
import { repositories } from '@/data/repositories';
import RepositoryCard from './RepositoryCard';
import { useTranslation } from '@/contexts/TranslationContext';

export default function Repositories() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show sidebar when user has scrolled past 15% of the page (sooner)
      const threshold = documentHeight * 0.15;
      setIsVisible(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* GitHub Toggle Button */}
      <button 
        className={`github-toggle-btn ${isVisible ? 'visible' : ''}`}
        onClick={toggleSidebar}
        aria-label="Toggle GitHub sidebar"
        title="GitHub"
      >
        <i className="fab fa-github"></i>
      </button>

      {/* GitHub Sidebar */}
      <div className={`floating-sidebar ${isVisible ? 'visible' : ''} ${isOpen ? 'open' : ''}`}>
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

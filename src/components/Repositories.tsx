'use client';

import { useState, useEffect } from 'react';
import { repositories } from '@/data/repositories';
import RepositoryCard from './RepositoryCard';

export default function Repositories() {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div className={`floating-sidebar ${isVisible ? 'visible' : ''}`}>
      <div className="sidebar-content">
        <div className="section-header">
          <h2 id="repositories-title">
            <i className="fab fa-github"></i>
            Source Code
          </h2>
        </div>

        <div className="repos-grid">
          {repositories.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo} />
          ))}
        </div>

        <div className="github-cta">
          <p>Want to see more? Check out my GitHub profile for additional projects and contributions.</p>
          <a 
            href="https://github.com/h-gerami" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-profile-btn"
          >
            <i className="fab fa-github"></i>
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

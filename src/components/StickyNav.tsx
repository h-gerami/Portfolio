'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/contexts/TranslationContext';
import { useIcon } from '@/contexts/IconContext';

const StickyNav = () => {
  const { t, language } = useTranslation();
  const { getIcon } = useIcon();
  const [activeSection, setActiveSection] = useState('header');
  const [isGitHubOpen, setIsGitHubOpen] = useState(false);
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['header', 'about', 'projects', 'repositories'];
      const scrollY = window.scrollY;
      let current = 'header';
      
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element && scrollY >= element.offsetTop - 100) {
          current = id;
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleGitHub = () => {
    const newState = !isGitHubOpen;
    setIsGitHubOpen(newState);
    // Dispatch event to Repositories component
    window.dispatchEvent(new CustomEvent('github-toggle', { detail: { isOpen: newState } }));
  };

  const toggleProjectsMenu = () => {
    setIsProjectsMenuOpen(!isProjectsMenuOpen);
  };

  const scrollToProjectCategory = (category: string) => {
    // Scroll to projects section and filter by category
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch event to filter projects by category
      window.dispatchEvent(new CustomEvent('filter-projects', { detail: { category } }));
    }
    setIsProjectsMenuOpen(false);
  };

  const getNavLabels = () => {
    if (language === 'en') {
      return {
        header: 'Home',
        about: 'About',
        projects: 'Projects',
        repositories: 'Code',
        github: 'GitHub'
      };
    } else {
      return {
        header: t.name,
        about: t.aboutTitle,
        projects: t.projectsTitle,
        repositories: t.repositoriesTitle,
        github: 'GitHub'
      };
    }
  };

  const navLabels = getNavLabels();

  return (
    <nav className="floating-nav">
      <div className="floating-nav-content">
        {[
          { id: 'header', label: navLabels.header, icon: 'home' },
          { id: 'about', label: navLabels.about, icon: 'info' },
          { id: 'projects', label: navLabels.projects, icon: 'diagram', hasMegaMenu: true },
          { id: 'repositories', label: navLabels.repositories, icon: 'code' },
        ].map((item) => {
          const iconString = getIcon(item.icon as keyof typeof getIcon);
          const isActive = activeSection === item.id;
          
          return (
            <div key={item.id} className="floating-nav-item-wrapper">
              <button
                onClick={() => item.hasMegaMenu ? toggleProjectsMenu() : scrollToSection(item.id)}
                className={`floating-nav-item ${isActive ? 'active' : ''} ${item.hasMegaMenu ? 'has-mega-menu' : ''}`}
                title={item.label}
              >
                <span className="floating-nav-icon">
                  {iconString.startsWith('fas') || iconString.startsWith('fab') || iconString.startsWith('fa-') ? (
                    <i className={iconString}></i>
                  ) : (
                    <span style={{ fontSize: '1rem' }}>{iconString}</span>
                  )}
                </span>
                {item.hasMegaMenu && (
                  <span className="floating-nav-arrow-small">
                    <i className={`fas ${isProjectsMenuOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </span>
                )}
              </button>
              
              {/* Projects Mega Menu */}
              {item.hasMegaMenu && isProjectsMenuOpen && (
                <div className="floating-mega-menu">
                  <div className="mega-menu-content">
                    <div className="mega-menu-item" onClick={() => scrollToProjectCategory('all')}>
                      <i className="fas fa-th"></i>
                      <span>All Projects</span>
                    </div>
                    <div className="mega-menu-item" onClick={() => scrollToProjectCategory('IoT')}>
                      <i className="fas fa-wifi"></i>
                      <span>IoT</span>
                    </div>
                    <div className="mega-menu-item" onClick={() => scrollToProjectCategory('NDIS')}>
                      <i className="fas fa-heart"></i>
                      <span>NDIS</span>
                    </div>
                    <div className="mega-menu-item" onClick={() => scrollToProjectCategory('Education')}>
                      <i className="fas fa-graduation-cap"></i>
                      <span>Education</span>
                    </div>
                    <div className="mega-menu-item" onClick={() => scrollToProjectCategory('Wellness')}>
                      <i className="fas fa-spa"></i>
                      <span>Wellness</span>
                    </div>
                    <div className="mega-menu-item" onClick={() => scrollToProjectCategory('Internal')}>
                      <i className="fas fa-building"></i>
                      <span>Internal</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        
        {/* GitHub Toggle Button - Different Style */}
        <div className="floating-nav-divider"></div>
        <button
          onClick={toggleGitHub}
          className={`floating-nav-github ${isGitHubOpen ? 'active' : ''}`}
          title={navLabels.github}
        >
          <span className="floating-nav-icon">
            <i className="fab fa-github"></i>
          </span>
          <span className="floating-nav-arrow">
            <i className={`fas ${isGitHubOpen ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default StickyNav;

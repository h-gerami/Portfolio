'use client';

import { repositories } from '@/data/repositories';
import RepositoryCard from './RepositoryCard';
import { useTranslation } from '@/contexts/TranslationContext';

export default function MobileGitHub() {
  const { t } = useTranslation();

  return (
    <section id="mobile-github" className="mobile-github-section">
      <div className="section-header">
        <h2 id="mobile-github-title">
          <i className="fab fa-github"></i>
          {t.language === 'en' ? 'Source Code' : t.repositoriesTitle}
        </h2>
      </div>

      <div className="mobile-repos-grid">
        {repositories.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))}
      </div>

      <div className="mobile-github-cta">
        <a 
          href="https://github.com/h-gerami" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mobile-github-profile-btn"
        >
          <i className="fab fa-github"></i>
{t.language === 'en' ? 'Visit GitHub Profile' : t.githubProfile}
        </a>
      </div>
    </section>
  );
}

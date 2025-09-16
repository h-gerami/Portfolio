import { Repository } from '@/data/repositories';

interface RepositoryCardProps {
  repo: Repository;
}

export default function RepositoryCard({ repo }: RepositoryCardProps) {
  return (
    <div className="repo-card">
      <div className="repo-header">
        <h3 className="repo-title">
          <i className="fab fa-github"></i>
          {repo.title}
        </h3>
        <div className="repo-category">
          <span className={`category-badge ${repo.category}`}>
            {repo.category === 'mobile' && <i className="fas fa-mobile-alt"></i>}
            {repo.category === 'web' && <i className="fas fa-globe"></i>}
            {repo.category === 'portfolio' && <i className="fas fa-user-circle"></i>}
            {repo.category}
          </span>
        </div>
      </div>
      
      <p className="repo-description">{repo.description}</p>
      
      <div className="repo-tech">
        {repo.tech.map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
      </div>
      
      <div className="repo-actions">
        <a 
          href={repo.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="repo-btn github-btn"
        >
          <i className="fab fa-github"></i>
          View Code
        </a>
        {repo.liveUrl && (
          <a 
            href={repo.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="repo-btn live-btn"
          >
            <i className="fas fa-external-link-alt"></i>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

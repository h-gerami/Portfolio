'use client';

import { skillCategories } from '@/data/skills';
import { useTranslation } from '@/contexts/TranslationContext';

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="section-header">
        <h2 id="about-title">{t.aboutTitle}</h2>
      </div>

      {/* Mobile Engineering - Full Width */}
      <article className="card" aria-labelledby="mobile-title">
        <h3 id="mobile-title">
          <i className={skillCategories[0].icon}></i> {skillCategories[0].title}
        </h3>
        <p>{skillCategories[0].description}</p>
        <ul className="list">
          {skillCategories[0].details.map((detail, index) => (
            <li key={index}>
              <i className={detail.icon}></i>
              <span>
                <strong>{detail.title}:</strong> {detail.description}
              </span>
            </li>
          ))}
        </ul>
        <div className="pillset" aria-label="Mobile skills">
          {skillCategories[0].skills.map((skill, index) => (
            <span key={index} className="pill">{skill}</span>
          ))}
        </div>
      </article>

      {/* Grid Layout for other skills */}
      <div className="about-grid" style={{ marginTop: '1rem' }}>
        {skillCategories.slice(1).map((category, index) => (
          <article 
            key={index} 
            className={`card ${index === skillCategories.length - 2 ? 'full' : ''}`}
            aria-labelledby={`${category.title.toLowerCase().replace(/\s+/g, '-')}-title`}
          >
            <h3 id={`${category.title.toLowerCase().replace(/\s+/g, '-')}-title`}>
              <i className={category.icon}></i> {category.title}
            </h3>
            <p>{category.description}</p>
            <ul className="list">
              {category.details.map((detail, detailIndex) => (
                <li key={detailIndex}>
                  <i className={detail.icon}></i>
                  <span>
                    <strong>{detail.title}:</strong> {detail.description}
                  </span>
                </li>
              ))}
            </ul>
            {index === skillCategories.length - 2 && (
              <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                Outcome: quicker fixes, fewer repeat problems, and a clearer
                picture of how the system is doing.
              </p>
            )}
            <div className="pillset" aria-label={`${category.title} skills`}>
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="pill">{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

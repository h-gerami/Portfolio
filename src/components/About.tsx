'use client';

import { skillCategories } from '@/data/skills';
import { useTranslation } from '@/contexts/TranslationContext';

export default function About() {
  const { t } = useTranslation();
  
  // Get translated content based on language
  const getTranslatedContent = () => {
    if (t.language === 'en') {
      return {
        mobileEngineering: {
          title: skillCategories[0].title,
          description: skillCategories[0].description,
          skills: skillCategories[0].skills,
          details: skillCategories[0].details
        },
        frontendEngineering: {
          title: skillCategories[1].title,
          description: skillCategories[1].description,
          skills: skillCategories[1].skills,
          details: skillCategories[1].details
        },
        integrations: {
          title: skillCategories[2].title,
          description: skillCategories[2].description,
          skills: skillCategories[2].skills,
          details: skillCategories[2].details
        },
        observability: {
          title: skillCategories[3].title,
          description: skillCategories[3].description,
          skills: skillCategories[3].skills,
          details: skillCategories[3].details
        }
      };
    } else {
      return {
        mobileEngineering: {
          title: t.mobileEngineeringTitle,
          description: t.mobileEngineeringDescription,
          skills: t.mobileEngineeringSkills,
          details: [
            { icon: "fa-solid fa-wand-magic-sparkles", title: t.uiuxTitle, description: t.uiuxDescription },
            { icon: "fa-solid fa-diagram-project", title: t.patternsTitle, description: t.patternsDescription },
            { icon: "fa-solid fa-gauge-high", title: t.performanceTitle, description: t.performanceDescription },
            { icon: "fa-solid fa-shuffle", title: t.stateDataTitle, description: t.stateDataDescription },
            { icon: "fa-solid fa-plug-circle-bolt", title: t.nativeSensorsTitle, description: t.nativeSensorsDescription },
            { icon: "fa-solid fa-vial", title: t.qualityTitle, description: t.qualityDescription }
          ]
        },
        frontendEngineering: {
          title: t.frontendEngineeringTitle,
          description: t.frontendEngineeringDescription,
          skills: t.frontendEngineeringSkills,
          details: [
            { icon: "fa-solid fa-paintbrush", title: t.stylingTitle, description: t.stylingDescription },
            { icon: "fa-solid fa-gauge-high", title: t.performanceTitle, description: t.performanceDescription },
            { icon: "fa-solid fa-database", title: t.stateDataTitle, description: t.stateDataDescription },
            { icon: "fa-solid fa-layer-group", title: t.largeFormsTitle, description: t.largeFormsDescription },
            { icon: "fa-solid fa-screwdriver-wrench", title: t.toolingTitle, description: t.toolingDescription },
            { icon: "fa-solid fa-server", title: t.nextjsRenderingTitle, description: t.nextjsRenderingDescription },
            { icon: "fa-solid fa-vial", title: t.testingTitle, description: t.testingDescription }
          ]
        },
        integrations: {
          title: t.integrationsTitle,
          description: t.integrationsDescription,
          skills: t.integrationsSkills,
          details: [
            { icon: "fa-solid fa-diagram-project", title: t.patternsTitle, description: t.patternsDescription },
            { icon: "fa-solid fa-server", title: t.servicesTitle, description: t.servicesDescription },
            { icon: "fa-solid fa-shield-halved", title: t.securityTitle, description: t.securityDescription },
            { icon: "fa-solid fa-arrows-spin", title: t.syncTitle, description: t.syncDescription },
            { icon: "fa-solid fa-sitemap", title: t.vendorsTitle, description: t.vendorsDescription }
          ]
        },
        observability: {
          title: t.observabilityTitle,
          description: t.observabilityDescription,
          skills: t.observabilitySkills,
          details: [
            { icon: "fa-solid fa-clipboard-question", title: t.intakeTitle, description: t.intakeDescription },
            { icon: "fa-solid fa-bug", title: t.reproduceTitle, description: t.reproduceDescription },
            { icon: "fa-solid fa-code-branch", title: t.fixTitle, description: t.fixDescription },
            { icon: "fa-solid fa-book", title: t.documentTitle, description: t.documentDescription }
          ]
        }
      };
    }
  };

  const content = getTranslatedContent();

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="section-header">
        <h2 id="about-title">{t.language === 'en' ? 'About & Core Expertise' : t.aboutTitle}</h2>
      </div>

      {/* Mobile Engineering - Full Width */}
      <article className="card" aria-labelledby="mobile-title">
        <h3 id="mobile-title">
          <i className={skillCategories[0].icon}></i> {content.mobileEngineering.title}
        </h3>
        <p>{content.mobileEngineering.description}</p>
        <ul className="list">
          {content.mobileEngineering.details.map((detail, index) => (
            <li key={index}>
              <i className={detail.icon}></i>
              <span>
                <strong>{detail.title}:</strong> {detail.description}
              </span>
            </li>
          ))}
        </ul>
        <div className="pillset" aria-label="Mobile skills">
          {content.mobileEngineering.skills.map((skill, index) => (
            <span key={index} className="pill">{skill}</span>
          ))}
        </div>
      </article>

      {/* Grid Layout for other skills */}
      <div className="about-grid" style={{ marginTop: '1rem' }}>
        {[
          { content: content.frontendEngineering, icon: skillCategories[1].icon },
          { content: content.integrations, icon: skillCategories[2].icon },
          { content: content.observability, icon: skillCategories[3].icon }
        ].map((item, index) => (
          <article 
            key={index} 
            className={`card ${index === 2 ? 'full' : ''}`}
            aria-labelledby={`${item.content.title.toLowerCase().replace(/\s+/g, '-')}-title`}
          >
            <h3 id={`${item.content.title.toLowerCase().replace(/\s+/g, '-')}-title`}>
              <i className={item.icon}></i> {item.content.title}
            </h3>
            <p>{item.content.description}</p>
            <ul className="list">
              {item.content.details.map((detail, detailIndex) => (
                <li key={detailIndex}>
                  <i className={detail.icon}></i>
                  <span>
                    <strong>{detail.title}:</strong> {detail.description}
                  </span>
                </li>
              ))}
            </ul>
            {index === 2 && (
              <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                {t.language === 'en' ? 'Outcome: quicker fixes, fewer repeat problems, and a clearer picture of how the system is doing.' : t.outcomeText}
              </p>
            )}
            <div className="pillset" aria-label={`${item.content.title} skills`}>
              {item.content.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="pill">{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

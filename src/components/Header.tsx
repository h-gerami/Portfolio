'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslation } from '@/contexts/TranslationContext';
import { useIcon } from '@/contexts/IconContext';

export default function Header() {
  const { t } = useTranslation();
  const { getIcon } = useIcon();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('darkmode');
    if (saved === 'false') {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('darkmode', newTheme.toString());
    document.body.classList.toggle('dark', newTheme);
  };

  return (
    <div className="intro">
      <Image
        className="avatar"
        src="/images/image001.jpg"
        alt="Hossein Gerami"
        width={112}
        height={112}
        priority
      />
      <div>
        <h1>
          <span className="gradient-text">{t.language === 'en' ? 'Hossein Gerami' : t.name}</span>
        </h1>
        <p className="tagline">
          {t.language === 'en' ? 'Software Engineer specialising in mobile (React Native) and complex integrations. I design reliable data flows between CRMs, finance systems, and government APIs, while shipping polished mobile experiences. Fast, pragmatic, and AI-assisted.' : t.subtitle}
        </p>
        <div className="contact-info">
          <a href="tel:+61435827842" className="info-item">
            <span className="icon-circle">
              {getIcon('phone').startsWith('fas') || getIcon('phone').startsWith('fab') ? (
                <i className={getIcon('phone')}></i>
              ) : (
                <span style={{ fontSize: '1rem' }}>{getIcon('phone')}</span>
              )}
            </span>
            +61 0435 827 842
          </a>
          <a href="mailto:h.gerami100@gmail.com" className="info-item">
            <span className="icon-circle">
              {getIcon('envelope').startsWith('fas') || getIcon('envelope').startsWith('fab') ? (
                <i className={getIcon('envelope')}></i>
              ) : (
                <span style={{ fontSize: '1rem' }}>{getIcon('envelope')}</span>
              )}
            </span>
            h.gerami100@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/hossein-gerami/"
            className="info-item"
            target="_blank"
            rel="noopener"
          >
            <span className="icon-circle">
              {getIcon('linkedin').startsWith('fas') || getIcon('linkedin').startsWith('fab') ? (
                <i className={getIcon('linkedin')}></i>
              ) : (
                <span style={{ fontSize: '1rem' }}>{getIcon('linkedin')}</span>
              )}
            </span>
            linkedin.com/in/hossein-gerami
          </a>
          <a href="/HoseinGerami_Resume.pdf" className="info-item" download>
            <span className="icon-circle">
              {getIcon('download').startsWith('fas') || getIcon('download').startsWith('fab') ? (
                <i className={getIcon('download')}></i>
              ) : (
                <span style={{ fontSize: '1rem' }}>{getIcon('download')}</span>
              )}
            </span>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

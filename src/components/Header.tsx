'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
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
          <span className="gradient-text">Hossein Gerami</span>
        </h1>
        <p className="tagline">
          Software Engineer specialising in mobile (React Native) and complex
          integrations. I design reliable data flows between CRMs, finance
          systems, and government APIs, while shipping polished mobile
          experiences. Fast, pragmatic, and AI-assisted.
        </p>
        <div className="contact-info">
          <a href="tel:+61435827842" className="info-item">
            <span className="icon-circle">
              <i className="fas fa-phone"></i>
            </span>
            +61 0435 827 842
          </a>
          <a href="mailto:h.gerami100@gmail.com" className="info-item">
            <span className="icon-circle">
              <i className="fas fa-envelope"></i>
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
              <i className="fab fa-linkedin"></i>
            </span>
            linkedin.com/in/hossein-gerami
          </a>
          <a href="/HoseinGerami_Resume.pdf" className="info-item" download>
            <span className="icon-circle">
              <i className="fas fa-file-arrow-down"></i>
            </span>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('darkmode');
    const shouldBeDark = saved !== 'false';
    setIsDark(shouldBeDark);
    document.body.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('darkmode', newTheme.toString());
    document.body.classList.toggle('dark', newTheme);
  };

  return (
    <button
      className="dark-toggle-btn"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title="Toggle theme"
    >
      <i className={isDark ? "fas fa-sun" : "fas fa-moon"}></i>
    </button>
  );
}

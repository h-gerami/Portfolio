'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type IconTheme = 'fontawesome' | 'doodle' | 'heroicons' | 'lucide';

export interface IconMapping {
  settings: string;
  sun: string;
  moon: string;
  arrowUp: string;
  phone: string;
  envelope: string;
  linkedin: string;
  download: string;
  info: string;
  check: string;
  github: string;
  close: string;
  prev: string;
  next: string;
  magic: string;
  diagram: string;
  gauge: string;
  shuffle: string;
  plug: string;
  vial: string;
  paintbrush: string;
  database: string;
  layer: string;
  wrench: string;
  server: string;
  clipboard: string;
  bug: string;
  code: string;
  book: string;
  shield: string;
  arrows: string;
  sitemap: string;
  globe: string;
  palette: string;
}

const iconMappings: Record<IconTheme, IconMapping> = {
  fontawesome: {
    settings: 'fas fa-cog',
    sun: 'fas fa-sun',
    moon: 'fas fa-moon',
    arrowUp: 'fas fa-arrow-up',
    phone: 'fas fa-phone',
    envelope: 'fas fa-envelope',
    linkedin: 'fab fa-linkedin',
    download: 'fas fa-file-arrow-down',
    info: 'fa-solid fa-circle-info',
    check: 'fa fa-check-circle',
    github: 'fab fa-github',
    close: 'fas fa-times',
    prev: 'fas fa-chevron-left',
    next: 'fas fa-chevron-right',
    magic: 'fa-solid fa-wand-magic-sparkles',
    diagram: 'fa-solid fa-diagram-project',
    gauge: 'fa-solid fa-gauge-high',
    shuffle: 'fa-solid fa-shuffle',
    plug: 'fa-solid fa-plug-circle-bolt',
    vial: 'fa-solid fa-vial',
    paintbrush: 'fa-solid fa-paintbrush',
    database: 'fa-solid fa-database',
    layer: 'fa-solid fa-layer-group',
    wrench: 'fa-solid fa-screwdriver-wrench',
    server: 'fa-solid fa-server',
    clipboard: 'fa-solid fa-clipboard-question',
    bug: 'fa-solid fa-bug',
    code: 'fa-solid fa-code-branch',
    book: 'fa-solid fa-book',
    shield: 'fa-solid fa-shield-halved',
    arrows: 'fa-solid fa-arrows-spin',
    sitemap: 'fa-solid fa-sitemap',
    globe: 'fas fa-globe',
    palette: 'fas fa-palette'
  },
  doodle: {
    settings: '⚙️',
    sun: '☀️',
    moon: '🌙',
    arrowUp: '⬆️',
    phone: '📞',
    envelope: '✉️',
    linkedin: '💼',
    download: '⬇️',
    info: 'ℹ️',
    check: '✅',
    github: '🐙',
    close: '❌',
    prev: '⬅️',
    next: '➡️',
    magic: '✨',
    diagram: '📊',
    gauge: '📈',
    shuffle: '🔀',
    plug: '🔌',
    vial: '🧪',
    paintbrush: '🎨',
    database: '🗄️',
    layer: '📚',
    wrench: '🔧',
    server: '🖥️',
    clipboard: '📋',
    bug: '🐛',
    code: '💻',
    book: '📖',
    shield: '🛡️',
    arrows: '🔄',
    sitemap: '🗺️',
    globe: '🌍',
    palette: '🎨'
  },
  heroicons: {
    settings: '⚙️',
    sun: '☀️',
    moon: '🌙',
    arrowUp: '⬆️',
    phone: '📞',
    envelope: '✉️',
    linkedin: '💼',
    download: '⬇️',
    info: 'ℹ️',
    check: '✅',
    github: '🐙',
    close: '❌',
    prev: '⬅️',
    next: '➡️',
    magic: '✨',
    diagram: '📊',
    gauge: '📈',
    shuffle: '🔀',
    plug: '🔌',
    vial: '🧪',
    paintbrush: '🎨',
    database: '🗄️',
    layer: '📚',
    wrench: '🔧',
    server: '🖥️',
    clipboard: '📋',
    bug: '🐛',
    code: '💻',
    book: '📖',
    shield: '🛡️',
    arrows: '🔄',
    sitemap: '🗺️',
    globe: '🌍',
    palette: '🎨'
  },
  lucide: {
    settings: '⚙️',
    sun: '☀️',
    moon: '🌙',
    arrowUp: '⬆️',
    phone: '📞',
    envelope: '✉️',
    linkedin: '💼',
    download: '⬇️',
    info: 'ℹ️',
    check: '✅',
    github: '🐙',
    close: '❌',
    prev: '⬅️',
    next: '➡️',
    magic: '✨',
    diagram: '📊',
    gauge: '📈',
    shuffle: '🔀',
    plug: '🔌',
    vial: '🧪',
    paintbrush: '🎨',
    database: '🗄️',
    layer: '📚',
    wrench: '🔧',
    server: '🖥️',
    clipboard: '📋',
    bug: '🐛',
    code: '💻',
    book: '📖',
    shield: '🛡️',
    arrows: '🔄',
    sitemap: '🗺️',
    globe: '🌍',
    palette: '🎨'
  }
};

interface IconContextType {
  iconTheme: IconTheme;
  setIconTheme: (theme: IconTheme) => void;
  getIcon: (iconName: keyof IconMapping) => string;
}

const IconContext = createContext<IconContextType | undefined>(undefined);

export const IconProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [iconTheme, setIconTheme] = useState<IconTheme>('fontawesome');

  useEffect(() => {
    // Load saved icon theme
    const savedTheme = localStorage.getItem('portfolio-icon-theme') as IconTheme;
    if (savedTheme && iconMappings[savedTheme]) {
      setIconTheme(savedTheme);
    }
  }, []);

  const handleSetIconTheme = (theme: IconTheme) => {
    setIconTheme(theme);
    localStorage.setItem('portfolio-icon-theme', theme);
  };

  const getIcon = (iconName: keyof IconMapping): string => {
    return iconMappings[iconTheme][iconName];
  };

  return (
    <IconContext.Provider value={{ iconTheme, setIconTheme: handleSetIconTheme, getIcon }}>
      {children}
    </IconContext.Provider>
  );
};

export const useIcon = (): IconContextType => {
  const context = useContext(IconContext);
  if (!context) {
    throw new Error('useIcon must be used within an IconProvider');
  }
  return context;
};

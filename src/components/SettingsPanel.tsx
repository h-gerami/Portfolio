'use client';

import { useState, useEffect } from 'react';
import { useTranslation, Language } from '@/contexts/TranslationContext';
import { useIcon, IconTheme } from '@/contexts/IconContext';

interface Settings {
  theme: 'light' | 'dark' | 'green' | 'purple' | 'orange' | 'red';
  language: Language;
}



const themeOptions = [
  { id: 'light', name: 'Light', colors: { primary: '#3b82f6', secondary: '#64748b', accent: '#f1f5f9' } },
  { id: 'dark', name: 'Dark', colors: { primary: '#60a5fa', secondary: '#94a3b8', accent: '#1e293b' } },
  { id: 'green', name: 'Forest Green', colors: { primary: '#10b981', secondary: '#34d399', accent: '#064e3b' } },
  { id: 'purple', name: 'Royal Purple', colors: { primary: '#8b5cf6', secondary: '#a78bfa', accent: '#581c87' } },
  { id: 'orange', name: 'Sunset Orange', colors: { primary: '#f97316', secondary: '#fb923c', accent: '#9a3412' } },
  { id: 'red', name: 'Crimson Red', colors: { primary: '#ef4444', secondary: '#f87171', accent: '#991b1b' } }
];

const languageOptions = [
  { id: 'en', flag: '🇺🇸' },
  { id: 'de', flag: '🇩🇪' },
  { id: 'ru', flag: '🇷🇺' },
  { id: 'fa', flag: '🇮🇷' }
];

const iconThemeOptions = [
  { id: 'fontawesome', name: 'Font Awesome', preview: 'fas fa-cog' },
  { id: 'doodle', name: 'Doodle', preview: '⚙️' }
];


export default function SettingsPanel() {
  const { language, setLanguage, t } = useTranslation();
  const { iconTheme, setIconTheme, getIcon } = useIcon();
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>({
    theme: 'light',
    language: language
  });
  const [tempSettings, setTempSettings] = useState<Settings>(settings);

  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('portfolio-settings');
    const savedLanguage = localStorage.getItem('portfolio-language');
    
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      setTempSettings(parsed);
      applySettings(parsed);
    }
    
    if (savedLanguage) {
      setLanguage(savedLanguage as Language);
    }
  }, [setLanguage]);

  // Update tempSettings when modal opens
  useEffect(() => {
    if (isOpen) {
      // Get current theme from body class
      const bodyClasses = document.body.className.split(' ');
      const currentTheme = themeOptions.find(theme => 
        bodyClasses.includes(theme.id)
      )?.id as Settings['theme'] || 'light';
      
      const currentSettings = {
        theme: currentTheme,
        language: language
      };
      setTempSettings(currentSettings);
    }
  }, [isOpen, language]);

  const applySettings = (newSettings: Settings) => {
    // Apply theme
    document.body.className = `inter_5972bc34-module__OU16Qa__className ${newSettings.theme}`;
    
    // Apply theme colors
    const theme = themeOptions.find(t => t.id === newSettings.theme);
    if (theme) {
      document.documentElement.style.setProperty('--primary-color', theme.colors.primary);
      document.documentElement.style.setProperty('--secondary-color', theme.colors.secondary);
      document.documentElement.style.setProperty('--accent-color', theme.colors.accent);
    }
  };

  const handleApply = () => {
    setSettings(tempSettings);
    setLanguage(tempSettings.language);
    applySettings(tempSettings);
    localStorage.setItem('portfolio-settings', JSON.stringify(tempSettings));
    localStorage.setItem('portfolio-language', tempSettings.language);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setTempSettings(settings);
    setIsOpen(false);
  };


  return (
    <>
      <button 
        className="settings-toggle-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Open settings"
        title="Settings"
      >
        {getIcon('settings').startsWith('fas') || getIcon('settings').startsWith('fab') ? (
          <i className={getIcon('settings')}></i>
        ) : (
          <span style={{ fontSize: '1.1rem' }}>{getIcon('settings')}</span>
        )}
      </button>

      {isOpen && (
        <div className="settings-overlay" onClick={handleCancel}>
          <div className="settings-panel" onClick={(e) => e.stopPropagation()}>
            <div className="settings-header">
              <h2>{t.language === 'en' ? 'Settings' : t.settings}</h2>
              <button className="settings-close" onClick={handleCancel}>
                {getIcon('close').startsWith('fas') || getIcon('close').startsWith('fab') ? (
                  <i className={getIcon('close')}></i>
                ) : (
                  <span style={{ fontSize: '1rem' }}>{getIcon('close')}</span>
                )}
              </button>
            </div>

            <div className="settings-content">
              {/* Language Selection */}
              <div className="setting-group">
                <label className="setting-label">
                  {getIcon('globe').startsWith('fas') || getIcon('globe').startsWith('fab') ? (
                    <i className={getIcon('globe')}></i>
                  ) : (
                    <span style={{ fontSize: '1rem' }}>{getIcon('globe')}</span>
                  )}
                  {t.language === 'en' ? 'Language' : t.language}
                </label>
                <div className="language-grid">
                  {languageOptions.map((lang) => (
                    <button
                      key={lang.id}
                      className={`language-option ${tempSettings.language === lang.id ? 'active' : ''}`}
                      onClick={() => {
                        const newSettings = {...tempSettings, language: lang.id as Settings['language']};
                        setTempSettings(newSettings);
                        setLanguage(newSettings.language);
                        localStorage.setItem('portfolio-language', newSettings.language);
                      }}
                    >
                      <span className="flag" style={{ fontSize: '1.5rem' }}>{lang.flag}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Selection */}
              <div className="setting-group">
                <label className="setting-label">
                  {getIcon('palette').startsWith('fas') || getIcon('palette').startsWith('fab') ? (
                    <i className={getIcon('palette')}></i>
                  ) : (
                    <span style={{ fontSize: '1rem' }}>{getIcon('palette')}</span>
                  )}
                  {t.language === 'en' ? 'Theme' : t.theme}
                </label>
                <div className="theme-grid">
                  {themeOptions.map((theme) => (
                    <button
                      key={theme.id}
                      className={`theme-option ${tempSettings.theme === theme.id ? 'active' : ''}`}
                      onClick={() => {
                        const newSettings = {...tempSettings, theme: theme.id as Settings['theme']};
                        setTempSettings(newSettings);
                        applySettings(newSettings);
                        localStorage.setItem('portfolio-settings', JSON.stringify(newSettings));
                      }}
                      style={{
                        '--theme-primary': theme.colors.primary,
                        '--theme-secondary': theme.colors.secondary,
                        '--theme-accent': theme.colors.accent
                      } as React.CSSProperties}
                    >
                      <div className="theme-preview">
                        <div className="theme-color primary"></div>
                        <div className="theme-color secondary"></div>
                        <div className="theme-color accent"></div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Icon Theme Selection */}
              <div className="setting-group">
                <label className="setting-label">
                  <i className={getIcon('palette')}></i>
                  {t.language === 'en' ? 'Icon Style' : 'Icon Style'}
                </label>
                <div className="icon-theme-grid">
                  {iconThemeOptions.map((theme) => (
                    <button
                      key={theme.id}
                      className={`icon-theme-option ${iconTheme === theme.id ? 'active' : ''}`}
                      onClick={() => setIconTheme(theme.id as IconTheme)}
                    >
                      <div className="icon-preview">
                        {theme.id === 'fontawesome' ? (
                          <i className={theme.preview}></i>
                        ) : (
                          <span style={{ fontSize: '1.2rem' }}>{theme.preview}</span>
                        )}
                      </div>
                      <span className="icon-theme-name">{theme.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Icon Theme Selection */}
              <div className="setting-group">
                <label className="setting-label">
                  {getIcon('palette').startsWith('fas') || getIcon('palette').startsWith('fab') ? (
                    <i className={getIcon('palette')}></i>
                  ) : (
                    <span style={{ fontSize: '1rem' }}>{getIcon('palette')}</span>
                  )}
                  {t.language === 'en' ? 'Icon Style' : 'Icon Style'}
                </label>
                <div className="icon-theme-grid">
                  {iconThemeOptions.map((theme) => (
                    <button
                      key={theme.id}
                      className={`icon-theme-option ${iconTheme === theme.id ? 'active' : ''}`}
                      onClick={() => setIconTheme(theme.id as IconTheme)}
                    >
                      <div className="icon-preview">
                        {theme.id === 'fontawesome' ? (
                          <i className={theme.preview}></i>
                        ) : (
                          <span style={{ fontSize: '1.2rem' }}>{theme.preview}</span>
                        )}
                      </div>
                      <span className="icon-theme-name">{theme.name}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            <div className="settings-footer">
              <button className="btn-secondary" onClick={handleCancel}>
                {t.language === 'en' ? 'Cancel' : t.cancel}
              </button>
              <button className="btn-primary" onClick={handleApply}>
                {t.language === 'en' ? 'Apply' : t.apply}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

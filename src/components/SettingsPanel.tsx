'use client';

import { useState, useEffect } from 'react';
import { useTranslation, Language } from '@/contexts/TranslationContext';

interface Settings {
  theme: 'light' | 'dark' | 'blue' | 'green' | 'purple' | 'orange' | 'red';
  font: 'inter' | 'roboto' | 'poppins' | 'open-sans' | 'lora' | 'playfair' | 'vazirmatn';
  language: Language;
}


const fontOptions = [
  { id: 'inter', name: 'Inter', preview: 'The quick brown fox jumps over the lazy dog' },
  { id: 'roboto', name: 'Roboto', preview: 'The quick brown fox jumps over the lazy dog' },
  { id: 'poppins', name: 'Poppins', preview: 'The quick brown fox jumps over the lazy dog' },
  { id: 'open-sans', name: 'Open Sans', preview: 'The quick brown fox jumps over the lazy dog' },
  { id: 'lora', name: 'Lora', preview: 'The quick brown fox jumps over the lazy dog' },
  { id: 'playfair', name: 'Playfair Display', preview: 'The quick brown fox jumps over the lazy dog' },
  { id: 'vazirmatn', name: 'Vazirmatn', preview: 'متن نمونه فارسی برای نمایش فونت' }
];

const themeOptions = [
  { id: 'light', name: 'Light', colors: { primary: '#3b82f6', secondary: '#64748b', accent: '#f1f5f9' } },
  { id: 'dark', name: 'Dark', colors: { primary: '#60a5fa', secondary: '#94a3b8', accent: '#1e293b' } },
  { id: 'blue', name: 'Ocean Blue', colors: { primary: '#0ea5e9', secondary: '#38bdf8', accent: '#0c4a6e' } },
  { id: 'green', name: 'Forest Green', colors: { primary: '#10b981', secondary: '#34d399', accent: '#064e3b' } },
  { id: 'purple', name: 'Royal Purple', colors: { primary: '#8b5cf6', secondary: '#a78bfa', accent: '#581c87' } },
  { id: 'orange', name: 'Sunset Orange', colors: { primary: '#f97316', secondary: '#fb923c', accent: '#9a3412' } },
  { id: 'red', name: 'Crimson Red', colors: { primary: '#ef4444', secondary: '#f87171', accent: '#991b1b' } }
];

const languageOptions = [
  { id: 'en', name: 'English', flag: '🇺🇸' },
  { id: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { id: 'zh', name: '中文', flag: '🇨🇳' },
  { id: 'ru', name: 'Русский', flag: '🇷🇺' },
  { id: 'fa', name: 'فارسی', flag: '🇮🇷' }
];

export default function SettingsPanel() {
  const { language, setLanguage, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>({
    theme: 'light',
    font: 'inter',
    language: language
  });
  const [tempSettings, setTempSettings] = useState<Settings>(settings);

  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('portfolio-settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      setTempSettings(parsed);
      applySettings(parsed);
    }
  }, []);

  const applySettings = (newSettings: Settings) => {
    // Apply theme
    document.body.className = `inter_5972bc34-module__OU16Qa__className ${newSettings.theme}`;
    
    // Apply font
    const fontMap = {
      'inter': 'Inter',
      'roboto': 'Roboto',
      'poppins': 'Poppins',
      'open-sans': 'Open Sans',
      'lora': 'Lora',
      'playfair': 'Playfair Display',
      'vazirmatn': 'Vazirmatn'
    };
    
    document.documentElement.style.setProperty('--font-family', fontMap[newSettings.font]);
    
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
        <i className="fas fa-cog"></i>
      </button>

      {isOpen && (
        <div className="settings-overlay" onClick={handleCancel}>
          <div className="settings-panel" onClick={(e) => e.stopPropagation()}>
            <div className="settings-header">
              <h2>{t.settings}</h2>
              <button className="settings-close" onClick={handleCancel}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="settings-content">
              {/* Language Selection */}
              <div className="setting-group">
                <label className="setting-label">
                  <i className="fas fa-globe"></i>
                  {t.language}
                </label>
                <div className="language-grid">
                  {languageOptions.map((lang) => (
                    <button
                      key={lang.id}
                      className={`language-option ${tempSettings.language === lang.id ? 'active' : ''}`}
                      onClick={() => setTempSettings({...tempSettings, language: lang.id as Settings['language']})}
                    >
                      <span className="flag">{lang.flag}</span>
                      <span className="name">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Selection */}
              <div className="setting-group">
                <label className="setting-label">
                  <i className="fas fa-palette"></i>
                  {t.theme}
                </label>
                <div className="theme-grid">
                  {themeOptions.map((theme) => (
                    <button
                      key={theme.id}
                      className={`theme-option ${tempSettings.theme === theme.id ? 'active' : ''}`}
                      onClick={() => setTempSettings({...tempSettings, theme: theme.id as Settings['theme']})}
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
                      <span className="theme-name">{theme.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Selection */}
              <div className="setting-group">
                <label className="setting-label">
                  <i className="fas fa-font"></i>
                  {t.font}
                </label>
                <div className="font-grid">
                  {fontOptions.map((font) => (
                    <button
                      key={font.id}
                      className={`font-option ${tempSettings.font === font.id ? 'active' : ''}`}
                      onClick={() => setTempSettings({...tempSettings, font: font.id as Settings['font']})}
                      style={{ fontFamily: font.name }}
                    >
                      <div className="font-preview">
                        {font.preview}
                      </div>
                      <span className="font-name">{font.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="settings-footer">
              <button className="btn-secondary" onClick={handleCancel}>
                {t.cancel}
              </button>
              <button className="btn-primary" onClick={handleApply}>
                {t.apply}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

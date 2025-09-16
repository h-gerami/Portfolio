'use client';

import { useState, useEffect } from 'react';

interface Settings {
  theme: 'light' | 'dark' | 'blue' | 'green' | 'purple' | 'orange' | 'red';
  font: 'inter' | 'roboto' | 'poppins' | 'open-sans' | 'lora' | 'playfair';
  language: 'en' | 'de' | 'zh' | 'ru' | 'fa';
}

const translations = {
  en: {
    settings: 'Settings',
    theme: 'Theme',
    font: 'Font',
    language: 'Language',
    preview: 'Preview',
    apply: 'Apply',
    cancel: 'Cancel',
    light: 'Light',
    dark: 'Dark',
    blue: 'Ocean Blue',
    green: 'Forest Green',
    purple: 'Royal Purple',
    orange: 'Sunset Orange',
    red: 'Crimson Red'
  },
  de: {
    settings: 'Einstellungen',
    theme: 'Design',
    font: 'Schriftart',
    language: 'Sprache',
    preview: 'Vorschau',
    apply: 'Anwenden',
    cancel: 'Abbrechen',
    light: 'Hell',
    dark: 'Dunkel',
    blue: 'Ozean Blau',
    green: 'Wald Grün',
    purple: 'Königlich Lila',
    orange: 'Sonnenuntergang Orange',
    red: 'Karmesin Rot'
  },
  zh: {
    settings: '设置',
    theme: '主题',
    font: '字体',
    language: '语言',
    preview: '预览',
    apply: '应用',
    cancel: '取消',
    light: '浅色',
    dark: '深色',
    blue: '海洋蓝',
    green: '森林绿',
    purple: '皇家紫',
    orange: '日落橙',
    red: '深红'
  },
  ru: {
    settings: 'Настройки',
    theme: 'Тема',
    font: 'Шрифт',
    language: 'Язык',
    preview: 'Предпросмотр',
    apply: 'Применить',
    cancel: 'Отмена',
    light: 'Светлая',
    dark: 'Тёмная',
    blue: 'Океан Синий',
    green: 'Лес Зелёный',
    purple: 'Королевский Фиолетовый',
    orange: 'Закат Оранжевый',
    red: 'Малиновый Красный'
  },
  fa: {
    settings: 'تنظیمات',
    theme: 'تم',
    font: 'فونت',
    language: 'زبان',
    preview: 'پیش‌نمایش',
    apply: 'اعمال',
    cancel: 'لغو',
    light: 'روشن',
    dark: 'تیره',
    blue: 'آبی اقیانوس',
    green: 'سبز جنگل',
    purple: 'بنفش سلطنتی',
    orange: 'نارنجی غروب',
    red: 'قرمز تیره'
  }
};

const fontOptions = [
  { id: 'inter', name: 'Inter', preview: 'The quick brown fox jumps over the lazy dog' },
  { id: 'roboto', name: 'Roboto', preview: 'The quick brown fox jumps over the lazy dog' },
  { id: 'poppins', name: 'Poppins', preview: 'The quick brown fox jumps over the lazy dog' },
  { id: 'open-sans', name: 'Open Sans', preview: 'The quick brown fox jumps over the lazy dog' },
  { id: 'lora', name: 'Lora', preview: 'The quick brown fox jumps over the lazy dog' },
  { id: 'playfair', name: 'Playfair Display', preview: 'The quick brown fox jumps over the lazy dog' }
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
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>({
    theme: 'dark',
    font: 'inter',
    language: 'en'
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
      'playfair': 'Playfair Display'
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
    applySettings(tempSettings);
    localStorage.setItem('portfolio-settings', JSON.stringify(tempSettings));
    setIsOpen(false);
  };

  const handleCancel = () => {
    setTempSettings(settings);
    setIsOpen(false);
  };

  const t = translations[settings.language];

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
                      <span className="theme-name">{t[theme.id as keyof typeof t]}</span>
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

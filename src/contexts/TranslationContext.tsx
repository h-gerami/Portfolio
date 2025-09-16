'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'de' | 'zh' | 'ru' | 'fa';

export const translations = {
  en: {
    // Header
    name: 'Hossein Gerami',
    title: 'Mobile & Software Engineer',
    subtitle: 'React Native • Integrations • Data Flows • AI-Assisted Engineering',
    
    // About Section
    aboutTitle: 'About & Core Expertise',
    aboutContent: 'Passionate mobile and software engineer with expertise in React Native, integrations, data flows, and AI-assisted problem solving. Specialized in NDIS SaaS solutions, AWS cloud architecture, and seamless data synchronization across platforms.',
    
    // Projects Section
    projectsTitle: 'Selected Mobile Apps Projects',
    viewProject: 'View Project',
    viewCode: 'View Code',
    
    // Repositories Section
    repositoriesTitle: 'Source Code',
    repositoriesSubtitle: 'Explore the source code for this website and its mobile companion app',
    githubProfile: 'Visit GitHub Profile',
    
    // Settings
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
    // Header
    name: 'Hossein Gerami',
    title: 'Mobile & Software Ingenieur',
    subtitle: 'React Native • Integrationen • Datenflüsse • KI-unterstütztes Engineering',
    
    // About Section
    aboutTitle: 'Über mich & Kernkompetenzen',
    aboutContent: 'Leidenschaftlicher Mobile- und Software-Ingenieur mit Expertise in React Native, Integrationen, Datenflüssen und KI-unterstützter Problemlösung. Spezialisiert auf NDIS SaaS-Lösungen, AWS-Cloud-Architektur und nahtlose Datensynchronisation über Plattformen hinweg.',
    
    // Projects Section
    projectsTitle: 'Ausgewählte Mobile App Projekte',
    viewProject: 'Projekt ansehen',
    viewCode: 'Code ansehen',
    
    // Repositories Section
    repositoriesTitle: 'Quellcode',
    repositoriesSubtitle: 'Entdecken Sie den Quellcode für diese Website und die mobile Begleit-App',
    githubProfile: 'GitHub-Profil besuchen',
    
    // Settings
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
    // Header
    name: 'Hossein Gerami',
    title: '移动和软件工程师',
    subtitle: 'React Native • 集成 • 数据流 • AI辅助工程',
    
    // About Section
    aboutTitle: '关于我和核心专长',
    aboutContent: '充满激情的移动和软件工程师，专精于React Native、集成、数据流和AI辅助问题解决。专注于NDIS SaaS解决方案、AWS云架构和跨平台无缝数据同步。',
    
    // Projects Section
    projectsTitle: '精选移动应用项目',
    viewProject: '查看项目',
    viewCode: '查看代码',
    
    // Repositories Section
    repositoriesTitle: '源代码',
    repositoriesSubtitle: '探索此网站及其移动配套应用的源代码',
    githubProfile: '访问GitHub个人资料',
    
    // Settings
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
    // Header
    name: 'Hossein Gerami',
    title: 'Мобильный и программный инженер',
    subtitle: 'React Native • Интеграции • Потоки данных • ИИ-помощь в разработке',
    
    // About Section
    aboutTitle: 'Обо мне и основные компетенции',
    aboutContent: 'Увлеченный мобильный и программный инженер с экспертизой в React Native, интеграциях, потоках данных и ИИ-помощи в решении проблем. Специализируется на NDIS SaaS решениях, AWS облачной архитектуре и бесшовной синхронизации данных между платформами.',
    
    // Projects Section
    projectsTitle: 'Избранные проекты мобильных приложений',
    viewProject: 'Посмотреть проект',
    viewCode: 'Посмотреть код',
    
    // Repositories Section
    repositoriesTitle: 'Исходный код',
    repositoriesSubtitle: 'Изучите исходный код этого веб-сайта и его мобильного приложения-компаньона',
    githubProfile: 'Посетить профиль GitHub',
    
    // Settings
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
    // Header
    name: 'حسین گرامی',
    title: 'مهندس موبایل و نرم‌افزار',
    subtitle: 'React Native • یکپارچه‌سازی • جریان داده • مهندسی با کمک هوش مصنوعی',
    
    // About Section
    aboutTitle: 'درباره من و تخصص‌های اصلی',
    aboutContent: 'مهندس پرشور موبایل و نرم‌افزار با تخصص در React Native، یکپارچه‌سازی، جریان داده و حل مسئله با کمک هوش مصنوعی. متخصص در راه‌حل‌های SaaS NDIS، معماری ابری AWS و همگام‌سازی بی‌درز داده در پلتفرم‌ها.',
    
    // Projects Section
    projectsTitle: 'پروژه‌های منتخب اپلیکیشن موبایل',
    viewProject: 'مشاهده پروژه',
    viewCode: 'مشاهده کد',
    
    // Repositories Section
    repositoriesTitle: 'کد منبع',
    repositoriesSubtitle: 'کد منبع این وب‌سایت و اپلیکیشن موبایل همراه آن را کاوش کنید',
    githubProfile: 'بازدید از پروفایل GitHub',
    
    // Settings
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

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load saved language
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const t = translations[language];

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}

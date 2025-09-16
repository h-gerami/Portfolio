export interface Repository {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  tech: string[];
  category: 'mobile' | 'web' | 'portfolio';
  featured: boolean;
}

export const repositories: Repository[] = [
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'This React/Next.js portfolio website with responsive design, dark mode, and interactive project galleries.',
    githubUrl: 'https://github.com/h-gerami/Portfolio',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    category: 'portfolio',
    featured: true
  },
  {
    id: 'portfolio-mobile',
    title: 'Portfolio Mobile App',
    description: 'Cross-platform mobile portfolio application built with Expo and React Native, featuring AI integration, industry-specific sample pages, and interactive gaming elements.',
    githubUrl: 'https://github.com/h-gerami/Portfolio-app',
    liveUrl: 'https://hosseingerami.com',
    tech: ['React Native', 'TypeScript', 'Expo', 'AI', 'Curso'],
    category: 'mobile',
    featured: true
  }
];

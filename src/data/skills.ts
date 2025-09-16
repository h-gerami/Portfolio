export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: string[];
  details: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Engineering",
    icon: "fa-solid fa-mobile-screen",
    description: "I enjoy building React Native apps with TypeScript and aim for smooth, predictable experiences. I keep screens simple, move logic into reusable hooks/services. The goal is steady performance, clear code, and fewer surprises in production.",
    skills: ["React Native", "TypeScript", "Expo", "EAS", "React Query", "Redux/Zustand", "Flipper", "Sentry"],
    details: [
      {
        icon: "fa-solid fa-wand-magic-sparkles",
        title: "UI/UX",
        description: "design systems, dark/light themes, accessible components, gesture-friendly navigation, thoughtful empty/error states."
      },
      {
        icon: "fa-solid fa-diagram-project",
        title: "Patterns",
        description: "feature-based folders, container/presentational split, custom hooks for side-effects, \"services\" for API/storage, and a simple repository adapter when talking to multiple backends."
      },
      {
        icon: "fa-solid fa-gauge-high",
        title: "Performance",
        description: "memoized lists (FlatList/FlashList), stable keys, image caching, avoiding re-renders with memo/useCallback, and profiling with Flipper/React Profiler."
      },
      {
        icon: "fa-solid fa-shuffle",
        title: "State & Data",
        description: "React Query for server data, Redux/Zustand when global state is needed, normalized entities, optimistic updates, and offline cache for spotty networks."
      },
      {
        icon: "fa-solid fa-plug-circle-bolt",
        title: "Native & Sensors",
        description: "Expo + custom modules when needed, Keychain/Secure Store, camera, BLE/Wi-Fi/UDP for IoT, background tasks where appropriate."
      },
      {
        icon: "fa-solid fa-vial",
        title: "Quality",
        description: "unit tests (Jest), simple component tests, crash reporting (Sentry), basic analytics to spot friction."
      }
    ]
  },
  {
    title: "Frontend Engineering (React)",
    icon: "fa-solid fa-code",
    description: "I build React frontends that are clear, fast, and accessible.",
    skills: ["React", "TypeScript", "Next.js", "Vite", "CSS/Tailwind", "React Query", "Redux Toolkit", "Jest/RTL", "Cypress"],
    details: [
      {
        icon: "fa-solid fa-paintbrush",
        title: "Styling",
        description: "solid base in HTML5, CSS3, SCSS, and Bootstrap for quick, consistent layouts."
      },
      {
        icon: "fa-solid fa-gauge-high",
        title: "Performance",
        description: "code-splitting, lazy routes, memoization, list virtualization when lists get large."
      },
      {
        icon: "fa-solid fa-database",
        title: "State & Data",
        description: "React Query for server data, lightweight global state (Redux Toolkit/Zustand) only when needed."
      },
      {
        icon: "fa-solid fa-layer-group",
        title: "Large forms",
        description: "break into steps, validate with schemas, autosave drafts, and use React Hook Form to keep it fast."
      },
      {
        icon: "fa-solid fa-screwdriver-wrench",
        title: "Tooling",
        description: "TypeScript, Next.js (React Router), ESLint & Prettier"
      },
      {
        icon: "fa-solid fa-server",
        title: "Next.js rendering",
        description: "choose the right mode: SSR (server-side render) for data that must be fresh, SSG (static) for mostly-static pages, and CSR (client) when it's highly interactive or user-specific."
      },
      {
        icon: "fa-solid fa-vial",
        title: "Testing",
        description: "Jest + React Testing Library for units/components"
      }
    ]
  },
  {
    title: "Integrations & Data Flows",
    icon: "fa-solid fa-plug",
    description: "I've spent a lot of time connecting apps to other systems and making sure data moves smoothly and securely between them.",
    skills: ["Node.js", "TypeScript", "AWS", "GraphQL", "Xero", "MYOB", "Dynamics", "HubSpot", "Netsuite"],
    details: [
      {
        icon: "fa-solid fa-diagram-project",
        title: "Patterns",
        description: "REST/GraphQL APIs, webhooks, and safe retry strategies."
      },
      {
        icon: "fa-solid fa-server",
        title: "Services",
        description: "built event-driven flows on AWS (Lambda, SQS/SNS, API Gateway)."
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Security",
        description: "handled logins, tokens, and sensitive data with care."
      },
      {
        icon: "fa-solid fa-arrows-spin",
        title: "Sync",
        description: "kept customer, invoice, and claim data in step across systems."
      },
      {
        icon: "fa-solid fa-sitemap",
        title: "Vendors",
        description: "worked with Xero, MYOB, Sage, Dynamics, HubSpot, and NDIS services."
      }
    ]
  },
  {
    title: "Observability & Support",
    icon: "fa-solid fa-magnifying-glass-chart",
    description: "I care about making sure the systems I build are easy to watch, understand, and fix when something goes wrong.",
    skills: ["Logging", "Monitoring", "Sentry", "Customer Support"],
    details: [
      {
        icon: "fa-solid fa-clipboard-question",
        title: "Intake",
        description: "talk through what was expected vs what happened, and capture the right details."
      },
      {
        icon: "fa-solid fa-bug",
        title: "Reproduce",
        description: "set up a simple example to confirm the issue and add tests so it stays fixed."
      },
      {
        icon: "fa-solid fa-code-branch",
        title: "Fix",
        description: "improve error messages, add safety nets, and make problems easier to track down."
      },
      {
        icon: "fa-solid fa-book",
        title: "Document",
        description: "share guides and notes so the next person can solve things faster."
      }
    ]
  }
];

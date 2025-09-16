export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  achievements: string[];
}

export const projects: Project[] = [
  {
    id: "gardenia",
    title: "Gardenia",
    category: "IoT",
    description: "IoT app controlling devices over Bluetooth and Wi-Fi with in-app shop and notifications. Built for a UK company manufacturing smart hoods and fresheners.",
    images: ["image002.png", "image003.png", "image004.png"],
    achievements: [
      "Shipped cross-platform IoT app in React Native (iOS & Android).",
      "GraphQL back-end integration with secure device pairing and commands.",
      "Connectivity via Wi-Fi, Bluetooth, and UDP protocols.",
      "Custom BLE protocol using ble-ple; robust state with Redux.",
      "Worked closely with embedded engineers on diagnostics."
    ]
  },
  {
    id: "quickclaim",
    title: "QuickClaim",
    category: "NDIS",
    description: "NDIS SaaS platform in Australia. Built mobile apps (QC Card & QC Pay) and provider dashboards with integrations to the NDIS, CRMs, and finance systems.",
    images: ["image005.png", "image006.png"],
    achievements: [
      "Developed QC Card and QC Pay in React Native (iOS & Android).",
      "Built secure REST APIs with Node.js & TypeScript on AWS.",
      "Integrated with NDIS, CRMs (Dynamics/HubSpot), and accounting (Xero/MYOB).",
      "Automated testing for critical API and mobile flows; CI/CD pipelines.",
      "Partnered with product/support/finance to streamline claims."
    ]
  },
  {
    id: "lerne24",
    title: "Lerne24",
    category: "Education",
    description: "Language learning app in Ionic React with gamified learning and multi-language support.",
    images: ["image007.png"],
    achievements: [
      "Hybrid app with custom interactive components (e.g., story UI).",
      "Real-time chat via FeathersJS + MongoDB; Firebase notifications.",
      "Detailed documentation for smooth onboarding & handover."
    ]
  },
  {
    id: "hihab",
    title: "Hihab",
    category: "Wellness",
    description: "Cross-platform habit tracker in English and Persian with custom charts and clean UX.",
    images: ["image008.png", "image009.png", "image010.png", "image011.png", "image012.png", "image013.png"],
    achievements: [
      "High-performance custom pie chart (react-native-svg).",
      "Hooks-based state and lifecycle; GraphQL APIs.",
      "Version control and clean release cycles."
    ]
  },
  {
    id: "hoomqc",
    title: "HoomQC",
    category: "Internal",
    description: "Internal tool for testing SmartHoom Bluetooth IoT devices: RSSI checks, command tests, and firmware communication via custom native modules.",
    images: ["image018.png", "image019.png", "image020.png", "image021.png", "image022.png"],
    achievements: [
      "Cross-platform app for streamlined Bluetooth device testing.",
      "Real-time signal & diagnostics; automated regression flows.",
      "Provided actionable firmware feedback to embedded teams."
    ]
  }
];

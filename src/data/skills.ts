export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Software & Automation",
    description:
      "Desktop applications, browser workflows, and reusable automation tooling.",
    skills: [
      "Python",
      "JavaScript / TypeScript",
      "React",
      "PyQt6",
      "Playwright",
      "Selenium",
    ],
  },
  {
    title: "Quality & Testing",
    description:
      "Repeatable validation across software, firmware, hardware, and connected systems.",
    skills: [
      "Functional Testing",
      "System Testing",
      "Regression Testing",
      "Exploratory Testing",
      "Release Validation",
      "Defect & Root-Cause Investigation",
      "PVT-Aligned Documentation",
    ],
  },
  {
    title: "Embedded & Integration",
    description:
      "Device communications, hardware-software integration, telemetry, and edge-platform workflows.",
    skills: [
      "Embedded Systems",
      "Windows / Linux",
      "Raspberry Pi",
      "SSH",
      "Serial / UART",
      "OpenThread",
      "Hardware–Software Integration",
      "Telemetry",
    ],
  },
  {
    title: "Data & Delivery",
    description:
      "Data processing, geospatial outputs, source control, and collaborative project delivery.",
    skills: [
      "SQL",
      "CSV / KML",
      "Geospatial Data",
      "OpenPyXL",
      "Notion API",
      "Git / GitHub",
      "Azure DevOps",
      "Jira",
    ],
  },
];
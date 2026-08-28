export type FeaturedProject = {
  slug: string
  number: string
  title: string
  ownership: 'Independent Build' | 'Collaborative Team Contribution'
  summary: string
  technologies: string[]
  repository: {
    visibility: 'private' | 'team-owned' | 'public'
    label: string
    url?: string
  }
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'quality-control-testing-application',
    number: '01',
    title: 'Quality-Control Testing Application',
    ownership: 'Independent Build',
    summary:
      'A Python/PyQt6 desktop application that automates repeatable embedded-device quality-control testing, validation, communication workflows, and structured reporting.',
    technologies: [
      'Python',
      'PyQt6',
      'PySerial',
      'OpenPyXL',
      'Selenium',
    ],
    repository: {
      visibility: 'private',
      label: 'Private Azure DevOps',
    },
  },
  {
    slug: 'bifrost-automation-system',
    number: '02',
    title: 'Bifrost Automation System',
    ownership: 'Independent Build',
    summary:
      'An operational Raspberry Pi automation system for member selection, room booking, email verification, confirmation processing, synchronization, and scheduled reporting.',
    technologies: [
      'Python',
      'Playwright',
      'Linux',
      'Raspberry Pi',
      'Notion API',
    ],
    repository: {
      visibility: 'private',
      label: 'Private Repository',
    },
  },
  {
    slug: 'radio-dnet-survey-tool',
    number: '03',
    title: 'Radio Survey Tool',
    ownership: 'Independent Build',
    summary:
      'A field-survey application that records GPS and packet-delivery data and produces CSV/KML-compatible output for colour-coded wireless-coverage visualization.',
    technologies: [
      'Python',
      'PyQt6',
      'PySerial',
      'Haversine',
      'CSV/KML',
    ],
    repository: {
      visibility: 'private',
      label: 'Private Azure DevOps',
    },
  },
  {
    slug: 'solar-car-dashboard-system',
    number: '04',
    title: 'Solar Car Dashboard System',
    ownership: 'Collaborative Team Contribution',
    summary:
      'A multidisciplinary contribution to Qt/QML vehicle dashboards, real-time telemetry, embedded-system integration, testing, and competition troubleshooting.',
    technologies: [
      'Qt/QML',
      'Telemetry',
      'Embedded Systems',
      'Systems Integration',
      'Testing',
    ],
    repository: {
      visibility: 'team-owned',
      label: 'Team-owned Source',
    },
  },
]
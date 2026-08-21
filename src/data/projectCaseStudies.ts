export type ProjectMediaAnnotation = {
  number: number;
  label: string;
  description: string;
  marker: {
    x: number;
    y: number;
  };
  target: {
    x: number;
    y: number;
  };
};

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  description: string;
  caption: string;
  poster?: string;

  annotationCanvas?: {
    width: number;
    height: number;
  };

  annotations?: ProjectMediaAnnotation[];
};

export type ProjectCaseStudy = {
  projectSlug: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  contributions: string[];
  validation: string[];
  outcome: string;
  technicalHighlights: string[];
  privacyNote: string;
  media: ProjectMedia[];
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    projectSlug: "radio-dnet-survey-tool",
    tagline:
      "A field-survey application that converts receiver and GPS data into actionable wireless-coverage evidence.",

    overview:
      "I independently designed and built this application to collect, process, and visualize field-survey measurements from Radio/DNET communication equipment. It turns raw survey information into structured reports and Google Earth-compatible coverage visualizations.",

    challenge:
      "Field testing produced receiver measurements, GPS positions, and console information that needed to be correlated before communication reliability could be understood. Reviewing these sources manually made it difficult to identify coverage patterns and compare results along a survey route.",

    solution:
      "The application records and processes survey measurements, associates observations with location data, calculates geographic distance using the Haversine formula, and produces CSV and KML-compatible output. The resulting colour-coded paths can be reviewed in Google Earth to visualize wireless performance geographically.",

    contributions: [
      "Defined the end-to-end field-survey workflow and application requirements.",
      "Built the desktop interface and survey controls with Python and PyQt6.",
      "Implemented serial communication and receiver-data collection with PySerial.",
      "Processed GPS coordinates and packet-delivery measurements.",
      "Applied Haversine distance calculations to geographic survey data.",
      "Generated structured CSV and Google Earth-compatible KML output.",
      "Conducted field trials and iterated on the application using collected results.",
    ],

    validation: [
      "Compared processed results with the original receiver and console logs.",
      "Reviewed generated CSV output for structure and measurement consistency.",
      "Opened generated KML output in Google Earth to verify route placement and colour-coded coverage visualization.",
      "Repeated field surveys to investigate communication reliability and device-connectivity behavior.",
    ],

    outcome:
      "The tool transformed separate logs and field measurements into a repeatable survey workflow and visual evidence that could support coverage analysis, installation decisions, and field troubleshooting.",

    technicalHighlights: [
      "Python and PyQt6 desktop application",
      "Serial receiver communication with PySerial",
      "GPS and packet-delivery data processing",
      "Haversine geographic-distance calculations",
      "CSV reporting and KML-compatible output",
      "Colour-coded Google Earth visualization",
    ],

    privacyNote:
      "Screenshots, recordings, coordinates, logs, and device information shown in this portfolio will use sanitized or demonstration data. Operational data and the source repository remain private.",

    media: [
        {
            type: "image",
            src: `${import.meta.env.BASE_URL}project-media/radio-dnet-survey-tool/surveyor-main.png`,
            description:
            "DNET Surveyor desktop application shown in its initial configuration state.",
            caption:
            "The application interface before a field survey begins, with connection, device-address, validation, progress, and logging controls.",

            annotationCanvas: {
            width: 1498,
            height: 939,
            },

            annotations: [
            {
                number: 1,
                label: "XBee Port",
                description:
                "Detects available serial connections and selects the COM port connected to the LTE XBee modem.",
                marker: { x: 90, y: 230 },
                target: { x: 90, y: 170 },
            },
            {
                number: 2,
                label: "DNET Port",
                description:
                "Detects available serial connections and selects the COM port connected to the DNET radio interface.",
                marker: { x: 1398, y: 250 },
                target: { x: 1398, y: 170 },
            },
            {
                number: 3,
                label: "TX and RX Addresses",
                description:
                "Specifies the IPv6 addresses of the transmitter and receiver participating in the survey.",
                marker: { x: 700, y: 205 },
                target: { x: 742, y: 110 },
            },
            {
                number: 4,
                label: "Address Validation",
                description:
                "Checks the entered address format and locks confirmed values to prevent accidental editing.",
                marker: { x: 1110, y: 78 },
                target: { x: 982, y: 78 },
            },
            {
                number: 5,
                label: "Device Role",
                description:
                "Selects whether the current survey station operates as the transmitter or receiver.",
                marker: { x: 1110, y: 180 },
                target: { x: 1015, y: 143 },
            },
            {
                number: 6,
                label: "Start",
                description:
                "Validates the required inputs, checks both device connections, and begins survey initialization.",
                marker: { x: 369, y: 320 },
                target: { x: 369, y: 242 },
            },
            {
                number: 7,
                label: "Setup Status",
                description:
                "Displays initialization progress and identifies any input or connection that requires attention.",
                marker: { x: 1100, y: 315 },
                target: { x: 744, y: 315 },
            },
            {
                number: 8,
                label: "Live Console",
                description:
                "Displays initialization feedback, communication activity, survey measurements, and operating status.",
                marker: { x: 1240, y: 500 },
                target: { x: 1000, y: 500 },
            },
            {
                number: 9,
                label: "Display Mode",
                description:
                "Switches the survey console between light and dark presentation modes.",
                marker: { x: 610, y: 900 },
                target: { x: 750, y: 913 },
            },
            {
            number: 10,
            label: "Application Version",
            description:
                "Identifies the installed software release so survey results and support information can be associated with the version used.",
            marker: { x: 160, y: 885 },
            target: { x: 60, y: 915 },
            },            
            ],            
        },
        {
            type: "image",
            src: `${import.meta.env.BASE_URL}project-media/radio-dnet-survey-tool/coverage-map-demo.webp`,
            description:
            "Google Earth visualization showing colour-coded wireless survey paths.",
            caption:
            "Sanitized demonstration of the KML output generated from processed receiver and GPS measurements.",
        },   
        ],
  },
];
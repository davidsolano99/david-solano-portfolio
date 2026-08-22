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
  layout?: "compact" | "full";
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
  workflow?: ProjectWorkflowStep[]
};

export type ProjectWorkflowStep = {
  number: number
  title: string
  description: string
}

export const projectCaseStudies: ProjectCaseStudy[] = [

  {
    projectSlug: "quality-control-testing-application",

    tagline:
      "A Windows desktop application that turns complex embedded-device quality-control procedures into a repeatable, traceable testing workflow.",

    overview:
      "I independently designed and built this Python/PyQt6 application to guide operators through device configuration, automated validation, communication testing, result review, and structured reporting. The application coordinates software, firmware, embedded hardware, serial devices, and supporting services within one desktop workflow.",

    challenge:
      "Quality-control testing varied across multiple hardware profiles and communication configurations. Operators needed to enter device-specific information, validate firmware and settings, execute lengthy test sequences, investigate failures, and preserve complete results without missing steps or applying the wrong test plan.",

    solution:
      "The application uses profile and test-plan registries to select the appropriate interface fields and validation sequence for each supported device configuration. It validates operator input, coordinates serial communication, executes phased tests through background workers, compares expected and observed values, displays progress and failures, and produces a formatted Excel report for traceability.",

    contributions: [
      "Defined the application architecture and end-to-end quality-control workflow.",
      "Designed and built the Windows desktop interface with Python and PyQt6.",
      "Created a profile-driven system that adapts the interface and testing requirements to different device configurations.",
      "Implemented input validation for firmware versions, identifiers, addresses, communication modes, and device settings.",
      "Built serial-communication workflows for configuring devices and collecting test responses.",
      "Organized automated validation into reusable, phased test plans.",
      "Used background workers and PyQt signals to run long testing operations without freezing the interface.",
      "Implemented controlled web-based communication verification with Selenium.",
      "Generated structured Excel test reports using OpenPyXL.",
      "Added progress reporting, structured logging, failure feedback, and result review.",
      "Created and maintained PVT and PVT-checklist release documentation for each software release.",
    ],

    validation: [
      "Verified that selecting a device profile displays the correct inputs, options, and test requirements.",
      "Compared expected and observed firmware, configuration, communication, and hardware values.",
      "Tested successful, failed, incomplete, and communication-loss scenarios.",
      "Reviewed operator feedback and progress reporting during each testing phase.",
      "Checked generated Excel reports for completeness, formatting, and result accuracy.",
      "Used PVT-aligned checklists and release documentation to validate application releases.",
    ],

    outcome:
      "The application converted a complex collection of device-specific procedures into a guided and repeatable quality-control workflow. It improved consistency, preserved structured evidence for each tested unit, and gave operators clearer information when a configuration or validation step failed.",

    technicalHighlights: [
      "Python and PyQt6 Windows desktop application",
      "Profile-driven dynamic interface configuration",
      "Reusable test-plan registry",
      "Serial device communication with PySerial",
      "Phased software, firmware, hardware, and connectivity validation",
      "Background workers and PyQt signal coordination",
      "Selenium-based communication verification",
      "Structured Excel reporting with OpenPyXL",
      "Input validation, logging, and failure handling",
      "PVT-aligned release documentation",
    ],

    workflow: [
      {
        number: 1,
        title: "Select Device Profile",
        description:
          "Loads the interface fields, configuration rules, and test plan required for the selected device profile.",
      },
      {
        number: 2,
        title: "Validate Unit Information",
        description:
          "Checks identifiers, firmware versions, communication settings, addresses, and other required operator inputs.",
      },
      {
        number: 3,
        title: "Establish Communication",
        description:
          "Connects to the selected serial interface and confirms that the application can communicate with the device.",
      },
      {
        number: 4,
        title: "Execute Test Plan",
        description:
          "Runs the profile-specific validation phases across configuration, firmware, communications, connectivity, and embedded hardware.",
      },
      {
        number: 5,
        title: "Review Results",
        description:
          "Presents progress, expected and observed values, failures, and diagnostic information to the operator.",
      },
      {
        number: 6,
        title: "Generate Report",
        description:
          "Produces a structured quality-control report containing the unit information, completed tests, and final result.",
      },
    ],

    privacyNote:
      "The source repository, organization and customer information, device-specific configurations, production addresses, internal URLs, credentials, email settings, and operational test records remain private. Portfolio media will use sanitized or demonstration values.",

    media: [
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}project-media/quality-control-testing-application/QCA-login.png`,
        description:
          "QCA authorization window with email and password fields.",
        caption:
          "Authorized users begin through the application’s login window.",
        layout: "compact",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}project-media/quality-control-testing-application/QCA-newUser.png`,
        description:
          "New-user access-request form with name, email, and password fields.",
        caption:
          "A built-in request form supports the controlled onboarding of new application users.",
        layout: "compact",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}project-media/quality-control-testing-application/QCA-profileNode.png`,
        description:
          "QCA profile setup window showing the initial device-type selection.",
        caption:
          "The profile-driven setup begins with guided device and communication selections.",
        layout: "compact",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}project-media/quality-control-testing-application/QCA-profileNodeSelection.png`,
        description:
          "QCA profile setup summary showing the resolved configuration node.",
        caption:
          "The completed selection resolves to a supported profile with locked defaults and required firmware fields.",
        layout: "compact",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}project-media/quality-control-testing-application/QCA-mainMenu.png`,
        description:
          "QCA main testing interface configured for a selected demonstration profile.",
        caption:
          "The profile-aware testing interface displays the inputs and configuration controls required for the selected device.",
        layout: "full",
      },
      {
        type: "video",
        src: `${import.meta.env.BASE_URL}project-media/quality-control-testing-application/QCA-demo.mp4`,
        description:
          "Sanitized demonstration of the QCA testing process and progress reporting.",
        caption:
          "Demonstration data shows the automated testing sequence, progress feedback, validation results, and successful completion.",
        layout: "full",
      },
    ],
  },  

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

  {
    projectSlug: "bifrost-automation-system",

    tagline:
      "A headless Raspberry Pi automation pipeline that coordinates member selection, room booking, email verification, confirmation processing, reporting, and schedule synchronization.",

    overview:
      "I independently designed and deployed Bifrost as an operational Raspberry Pi automation system. It manages a recurring room-booking workflow from eligible-member selection through browser-based booking, email verification, confirmation validation, persistent record updates, reporting, and Notion synchronization.",

    challenge:
      "The original workflow required repeatedly reviewing member eligibility, finding matching room availability, submitting bookings within specific time windows, responding to verification emails, validating confirmation details, and updating several records. The process was repetitive and time-sensitive, and a failure in one external system could interrupt the remaining workflow.",

    solution:
      "Bifrost organizes the work into a stage-gated pipeline. It selects eligible members for same-day and seven-day booking targets, creates structured booking jobs, runs browser-booking attempts in separate processes, applies retries and shared timeouts, verifies booking emails, validates confirmation details against expected dates and times, and then updates persistent records, generates a daily report, and synchronizes confirmed bookings with Notion.",

    contributions: [
      "Defined the end-to-end automation workflow and its stage boundaries.",
      "Implemented eligibility rules and selection logic for same-day and seven-day booking targets.",
      "Built the Playwright automation that navigates booking calendars, identifies valid two-hour room combinations, and submits booking requests.",
      "Used separate worker processes so one stalled browser session would not block every booking job.",
      "Added retry limits, shared timeouts, process termination, and safe stage-stop conditions.",
      "Automated Outlook verification-email handling and confirmation extraction.",
      "Validated confirmation details against the expected recipient, booking date, and starting time.",
      "Updated persistent member-booking records after confirmed reservations.",
      "Generated CSV reports and distributed daily booking summaries by email.",
      "Synchronized confirmed booking information with a Notion database.",
      "Deployed the workflow on Raspberry Pi OS using a virtual environment and scheduled cron execution.",
      "Documented installation, remote administration, dependencies, and recovery procedures.",
    ],

    validation: [
      "Verified that selection produces two eligible seven-day targets and two different eligible same-day targets.",
      "Checked that room selection requires two available time slots belonging to the same room and requested date.",
      "Validated confirmation emails against expected recipient, date, and time information before accepting a booking.",
      "Used bounded retries, shared timeouts, and safe stage exits to test failure handling.",
      "Reviewed pipeline summaries, generated reports, persistent records, and scheduled Raspberry Pi logs after operational runs.",
    ],

    outcome:
      "Bifrost replaced a multi-stage manual scheduling process with a repeatable weekday automation workflow. The operational Raspberry Pi deployment coordinates external web and email systems while keeping booking records, reports, and the shared Notion schedule synchronized.",

    technicalHighlights: [
      "Python automation pipeline",
      "Playwright browser automation",
      "Raspberry Pi OS and Linux deployment",
      "Parallel booking workers with multiprocessing",
      "Retry, timeout, and safe-failure handling",
      "Outlook verification and confirmation processing",
      "JSON-based persistent booking state",
      "CSV and SMTP reporting",
      "Notion API synchronization",
      "Virtual environments, cron, file locking, and SSH administration",
    ],

    workflow: [
      {
        number: 1,
        title: "Eligible Member Selection",
        description:
          "Applies scheduling and eligibility rules to select the members included in the current booking cycle.",
      },
      {
        number: 2,
        title: "Booking Job Construction",
        description:
          "Converts the selected members and target dates into structured room-booking jobs.",
      },
      {
        number: 3,
        title: "Parallel Room Booking",
        description:
          "Runs isolated Playwright workers to find matching room availability and submit booking requests.",
      },
      {
        number: 4,
        title: "Email Verification",
        description:
          "Processes the verification messages required to continue each submitted booking.",
      },
      {
        number: 5,
        title: "Confirmation Validation",
        description:
          "Checks confirmation details against the expected recipient, booking date, and starting time.",
      },
      {
        number: 6,
        title: "Records and Reporting",
        description:
          "Updates confirmed booking records, generates the daily report, and synchronizes the shared schedule.",
      },
    ],

    privacyNote:
      "The source repository, member records, authentication state, credentials, network information, email contents, and operational booking details remain private. Portfolio media will use synthetic names, addresses, room information, and demonstration results.",

    media: [
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}project-media/bifrost-automation-system/Bifrost-raspi.png`,
        description:
          "Raspberry Pi 4 inside its actively cooled enclosure.",
        caption:
          "The Raspberry Pi 4 hardware that hosts Bifrost’s scheduled, headless automation workflow.",
      },
      {
        type: "video",
        src: `${import.meta.env.BASE_URL}project-media/bifrost-automation-system/Bifrost-demo.mp4`,
        description:
          "Terminal demonstration of the Bifrost automation pipeline using entirely synthetic information.",
        caption:
          "Safe demonstration mode: no network requests, file writes, bookings, email activity, or Notion updates occur.",
      },
      {
        type: "image",
        src: `${import.meta.env.BASE_URL}project-media/bifrost-automation-system/Bifrost-notion-demo.png`,
        description:
          "Sanitized demonstration database containing four fictional booking records.",
        caption:
          "A sanitized representation of confirmed bookings synchronized to the shared schedule. All names, dates, times, and rooms are fictional.",
      },
    ],
  },  
];
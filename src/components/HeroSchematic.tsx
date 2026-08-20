const schematicNodes = [
  { x: 120, y: 360 },
  { x: 210, y: 305 },
  { x: 300, y: 250 },
  { x: 480, y: 140 },
  { x: 570, y: 85 },
]

function HeroSchematic() {
  return (
    <svg
      className="hero-schematic__svg"
      viewBox="0 0 720 480"
      aria-hidden="true"
      focusable="false"
    >
    <path
    className="schematic-path"
    d="
        M 40 410
        H 120 V 360
        H 210 V 305

        M 300 305
        V 250
        H 390 V 195
        H 480 V 140
        H 570 V 85
        H 680
    "
    />

    <path
    className="schematic-waveform"
    d="
        M 210 305
        C 217 275 225 275 232 305
        S 247 335 255 305
        S 270 275 277 305
        S 293 335 300 305
    "
    />

    <g className="schematic-validation">
    <circle
        className="schematic-validation-ring"
        cx="390"
        cy="195"
        r="38"
    />

    <circle
        className="schematic-validation-inner"
        cx="390"
        cy="195"
        r="27"
    />

    <path
        className="schematic-check"
        d="M 377 195 L 386 204 L 404 184"
    />
    </g>

    <g className="schematic-data">
    <rect x="448" y="92" width="42" height="12" rx="3" />
    <rect x="448" y="108" width="42" height="12" rx="3" />
    <rect x="448" y="124" width="42" height="12" rx="3" />
    </g>


    <g className="schematic-radio">
    <path d="M 550 70 Q 570 50 590 70" />
    <path d="M 540 60 Q 570 30 600 60" />
    <path d="M 530 50 Q 570 10 610 50" />
    </g>

    <g className="schematic-chart">
    <path
        className="schematic-chart-branch"
        d="M 570 85 H 600 V 70"
    />

    <polyline
        className="schematic-chart-line"
        points="600,70 625,62 648,64 664,46 688,18"
    />

    <circle cx="600" cy="70" r="4" />
    <circle cx="625" cy="62" r="4" />
    <circle cx="648" cy="64" r="4" />
    <circle cx="664" cy="46" r="4" />

    <path
        className="schematic-chart-arrow"
        d="M 678 20 L 688 18 L 685 28"
    />
    </g>

      {schematicNodes.map((node) => (
        <circle
          key={`${node.x}-${node.y}`}
          className="schematic-node"
          cx={node.x}
          cy={node.y}
          r="5"
        />
      ))}
    </svg>
  )
}

export default HeroSchematic
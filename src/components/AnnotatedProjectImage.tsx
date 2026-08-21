import { useId } from "react";

import type { ProjectMedia } from "../data/projectCaseStudies";

type AnnotatedProjectImageProps = {
  media: ProjectMedia;
};

function AnnotatedProjectImage({
  media,
}: AnnotatedProjectImageProps) {
  const generatedId = useId();
  const arrowMarkerId = `annotation-arrow-${generatedId.replace(/:/g, "")}`;

  const annotationCanvas = media.annotationCanvas;
  const annotations = media.annotations ?? [];

  const hasAnnotations =
    annotationCanvas !== undefined && annotations.length > 0;

  return (
    <figure className="project-annotation">
      <div className="project-annotation__image">
        <img
          src={media.src}
          alt={media.description}
          draggable={false}
          onContextMenu={(event) => event.preventDefault()}
        />

        {hasAnnotations && (
          <svg
            className="project-annotation__overlay"
            viewBox={`0 0 ${annotationCanvas.width} ${annotationCanvas.height}`}
            aria-hidden="true"
          >
            <defs>
              <marker
                id={arrowMarkerId}
                viewBox="0 0 10 6"
                refX="9"
                refY="3"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 0 L 10 3 L 0 6 Z" />
              </marker>
            </defs>

            {annotations.map((annotation) => (
              <g
                key={annotation.number}
                className="project-annotation__marker"
              >
                <line
                  className="project-annotation__arrow"
                  x1={annotation.marker.x}
                  y1={annotation.marker.y}
                  x2={annotation.target.x}
                  y2={annotation.target.y}
                  markerEnd={`url(#${arrowMarkerId})`}
                />

                <circle
                  cx={annotation.marker.x}
                  cy={annotation.marker.y}
                  r="22"
                />

                <text
                  x={annotation.marker.x}
                  y={annotation.marker.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                >
                  {annotation.number}
                </text>
              </g>
            ))}
          </svg>
        )}
      </div>
      <figcaption>{media.caption}</figcaption>

      {hasAnnotations && (
        <ol
          className="project-annotation__list"
          aria-label={`${media.description} interface annotations`}
        >
          {annotations.map((annotation) => (
            <li key={annotation.number}>
              <span className="project-annotation__list-number">
                {annotation.number}
              </span>

              <div>
                <h4>{annotation.label}</h4>
                <p>{annotation.description}</p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </figure>
  );
}

export default AnnotatedProjectImage;
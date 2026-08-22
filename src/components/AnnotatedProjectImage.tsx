import {
  useId,
  useState,
  type CSSProperties,
} from "react";

import type {
  ProjectMedia,
  ProjectMediaAnnotation,
} from "../data/projectCaseStudies";

type AnnotatedProjectImageProps = {
  media: ProjectMedia;
};

type PopoverPosition =
  | "right"
  | "left"
  | "above"
  | "above-right"
  | "above-left";

function getPopoverPosition(
  annotation: ProjectMediaAnnotation,
  canvas: NonNullable<ProjectMedia["annotationCanvas"]>,
): PopoverPosition {
  const horizontalPosition =
    annotation.marker.x / canvas.width;

  const verticalPosition =
    annotation.marker.y / canvas.height;

  if (verticalPosition > 0.75) {
    if (horizontalPosition < 0.25) {
      return "above-right";
    }

    if (horizontalPosition > 0.75) {
      return "above-left";
    }

    return "above";
  }

  if (horizontalPosition > 0.65) {
    return "left";
  }

  return "right";
}

function AnnotatedProjectImage({
  media,
}: AnnotatedProjectImageProps) {
  const generatedId = useId();
  const [activeIndex, setActiveIndex] = useState(0);

  const safeGeneratedId = generatedId.replace(/:/g, "");
  const arrowMarkerId = `annotation-arrow-${safeGeneratedId}`;
  const descriptionId = `annotation-description-${safeGeneratedId}`;

  const annotationCanvas = media.annotationCanvas;
  const annotations = media.annotations ?? [];
  const activeAnnotation =
    annotations[activeIndex] ?? annotations[0];

  if (!annotationCanvas || !activeAnnotation) {
    return (
      <figure className="project-annotation">
        <div className="project-annotation__image">
          <img
            src={media.src}
            alt={media.description}
            draggable={false}
            onContextMenu={(event) => event.preventDefault()}
          />
        </div>

        <figcaption>{media.caption}</figcaption>
      </figure>
    );
  }

  const activePopoverPosition = getPopoverPosition(
    activeAnnotation,
    annotationCanvas,
  );

  function createPositionStyle(
    annotation: ProjectMediaAnnotation,
  ): CSSProperties {
    return {
      left: `${(annotation.marker.x / annotationCanvas!.width) * 100}%`,
      top: `${(annotation.marker.y / annotationCanvas!.height) * 100}%`,
    };
  }

  function showPreviousAnnotation() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0
        ? annotations.length - 1
        : currentIndex - 1,
    );
  }

  function showNextAnnotation() {
    setActiveIndex((currentIndex) =>
      currentIndex === annotations.length - 1
        ? 0
        : currentIndex + 1,
    );
  }

  return (
    <figure className="project-annotation">
      <div className="project-annotation__image">
        <img
          src={media.src}
          alt={media.description}
          draggable={false}
          onContextMenu={(event) => event.preventDefault()}
        />

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

          {annotations.map((annotation, index) => (
            <line
              key={annotation.number}
              className={
                index === activeIndex
                  ? "project-annotation__arrow project-annotation__arrow--active"
                  : "project-annotation__arrow"
              }
              x1={annotation.marker.x}
              y1={annotation.marker.y}
              x2={annotation.target.x}
              y2={annotation.target.y}
              markerEnd={`url(#${arrowMarkerId})`}
            />
          ))}
        </svg>

        {annotations.map((annotation, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={annotation.number}
              type="button"
              className={
                isActive
                  ? "project-annotation__marker-button project-annotation__marker-button--active"
                  : "project-annotation__marker-button"
              }
              style={createPositionStyle(annotation)}
              aria-label={`Show annotation ${annotation.number}: ${annotation.label}`}
              aria-controls={descriptionId}
              aria-pressed={isActive}
              onClick={() => setActiveIndex(index)}
            >
              {annotation.number}
            </button>
          );
        })}

        <div
          id={descriptionId}
          className={`project-annotation__popover project-annotation__popover--${activePopoverPosition}`}
          style={createPositionStyle(activeAnnotation)}
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="project-annotation__popover-label">
            {String(activeAnnotation.number).padStart(2, "0")}
          </p>

          <h4>{activeAnnotation.label}</h4>

          <p className="project-annotation__popover-description">
            {activeAnnotation.description}
          </p>

          <div className="project-annotation__controls">
            <button
              type="button"
              onClick={showPreviousAnnotation}
              aria-label="Show previous annotation"
            >
              <span aria-hidden="true">←</span>
              Previous
            </button>

            <span>
              {String(activeIndex + 1).padStart(2, "0")}
              {" / "}
              {String(annotations.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={showNextAnnotation}
              aria-label="Show next annotation"
            >
              Next
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>

      <figcaption>{media.caption}</figcaption>
    </figure>
  );
}

export default AnnotatedProjectImage;
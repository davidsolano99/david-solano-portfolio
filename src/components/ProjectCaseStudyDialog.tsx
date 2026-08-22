import {
  useEffect,
  useRef,
  type MouseEvent,
} from "react";

import type { FeaturedProject } from "../data/featuredProjects";
import type { ProjectCaseStudy } from "../data/projectCaseStudies";
import AnnotatedProjectImage from "./AnnotatedProjectImage";
import ProjectWorkflow from "./ProjectWorkflow";

import "./ProjectCaseStudyDialog.css";

type ProjectCaseStudyDialogProps = {
  project: FeaturedProject;
  caseStudy: ProjectCaseStudy;
  onClose: () => void;
};

function ProjectCaseStudyDialog({
  project,
  caseStudy,
  onClose,
}: ProjectCaseStudyDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headingId = `project-dialog-${project.slug}-heading`;

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      closeDialog();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby={headingId}
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      <article className="project-dialog__panel">
        <button
          type="button"
          className="project-dialog__close"
          onClick={closeDialog}
        >
          Close
          <span aria-hidden="true">×</span>
        </button>

        <header className="project-dialog__header">
          <p>
            {project.number} / {project.ownership}
          </p>

          <h2 id={headingId}>{project.title}</h2>

          <p>{caseStudy.tagline}</p>
        </header>

        {caseStudy.media.length > 0 && (
        <section
            className="project-dialog__media-section"
            aria-labelledby={`${headingId}-media`}
        >
            <h3 id={`${headingId}-media`}>Project Media</h3>

            <div className="project-dialog__media">
            {caseStudy.media.map((media) => {
            const mediaKey = `${media.type}-${media.src}`;
            const isAnnotatedImage =
                media.type === "image" && Boolean(media.annotations?.length);

            if (isAnnotatedImage) {
                return (
                <AnnotatedProjectImage
                    key={mediaKey}
                    media={media}
                />
                );
            }

            return (
                <figure key={mediaKey}>
                {media.type === "image" ? (
                    <img
                        src={media.src}
                        alt={media.description}
                        draggable={false}
                        onContextMenu={(event) => event.preventDefault()}
                    />
                ) : (
                    <video
                    controls
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={media.poster}
                    aria-label={media.description}
                    >
                    <source src={media.src} />
                    </video>
                )}

                <figcaption>{media.caption}</figcaption>
                </figure>
            );
            })}
            </div>
        </section>
        )}

        <section aria-labelledby={`${headingId}-overview`}>
        <h3 id={`${headingId}-overview`}>Overview</h3>
        <p>{caseStudy.overview}</p>
        </section>

        <section aria-labelledby={`${headingId}-challenge`}>
        <h3 id={`${headingId}-challenge`}>Challenge</h3>
        <p>{caseStudy.challenge}</p>
        </section>

        <section aria-labelledby={`${headingId}-solution`}>
        <h3 id={`${headingId}-solution`}>Solution</h3>
        <p>{caseStudy.solution}</p>
        </section>

        {caseStudy.workflow && caseStudy.workflow.length > 0 && (
          <ProjectWorkflow steps={caseStudy.workflow} />
        )}

        <section aria-labelledby={`${headingId}-contributions`}>
        <h3 id={`${headingId}-contributions`}>My Contributions</h3>

        <ul className="project-dialog__list">
            {caseStudy.contributions.map((contribution) => (
            <li key={contribution}>{contribution}</li>
            ))}
        </ul>
        </section>

        <section aria-labelledby={`${headingId}-validation`}>
        <h3 id={`${headingId}-validation`}>Validation</h3>

        <ul className="project-dialog__list">
            {caseStudy.validation.map((validationItem) => (
            <li key={validationItem}>{validationItem}</li>
            ))}
        </ul>
        </section>

        <section aria-labelledby={`${headingId}-outcome`}>
        <h3 id={`${headingId}-outcome`}>Outcome</h3>
        <p>{caseStudy.outcome}</p>
        </section>

        <section aria-labelledby={`${headingId}-technical-highlights`}>
        <h3 id={`${headingId}-technical-highlights`}>
            Technical Highlights
        </h3>

        <ul
            className="project-dialog__tags"
            aria-label={`${project.title} technical highlights`}
        >
            {caseStudy.technicalHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
            ))}
        </ul>
        </section>

        <aside
        className="project-dialog__privacy"
        aria-labelledby={`${headingId}-privacy`}
        >
        <h3 id={`${headingId}-privacy`}>Privacy & Source</h3>
        <p>{caseStudy.privacyNote}</p>
        </aside>
      </article>
    </dialog>
  );
}

export default ProjectCaseStudyDialog;
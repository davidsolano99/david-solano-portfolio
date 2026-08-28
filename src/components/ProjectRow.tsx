import './ProjectRow.css'

type ProjectRowProps = {
  number: string
  ownership: string
  title: string
  summary: string
  technologies: string[]
  repositoryLabel: string
  onOpenCaseStudy?: () => void
}

function ProjectRow({
  number,
  ownership,
  title,
  summary,
  technologies,
  repositoryLabel,
  onOpenCaseStudy,
}: ProjectRowProps) {
  return (
    <article className="project-row">
      
    <span className="project-row__number" aria-hidden="true">
    {number}
    </span>

    <div className="project-row__content">
        <p className="project-row__eyebrow">{ownership}</p>
        <h3>
          {onOpenCaseStudy ? (
            <button
              type="button"
              className="project-row__title-button"
              onClick={onOpenCaseStudy}
              aria-haspopup="dialog"
            >
              <span>{title}</span>
              <span aria-hidden="true">+</span>
            </button>
          ) : (
            title
          )}
        </h3>
        <p className="project-row__summary">
        {summary}
        </p>

        <ul
        className="project-row__technologies"
        aria-label={`${title} technologies`}
        >
        {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
        ))}
        </ul>

        <p className="project-row__repository">
        {repositoryLabel}
        </p>        
    </div>

    </article>
  )
}

export default ProjectRow
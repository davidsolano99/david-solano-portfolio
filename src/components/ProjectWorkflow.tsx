import { useId } from "react"
import type { ProjectWorkflowStep } from "../data/projectCaseStudies"
import "./ProjectWorkflow.css"

type ProjectWorkflowProps = {
  steps: ProjectWorkflowStep[]
}

function ProjectWorkflow({ steps }: ProjectWorkflowProps) {
  const headingId = useId()

  return (
    <section
      className="project-workflow"
      aria-labelledby={headingId}
    >
      <header className="project-workflow__header">
        <p className="project-workflow__label">
          System Workflow
        </p>

        <h3 id={headingId}>
          From eligibility checks to confirmed records
        </h3>
      </header>

      <ol className="project-workflow__steps">
        {steps.map((step) => (
          <li
            className="project-workflow__step"
            key={step.number}
          >
            <span
              className="project-workflow__number"
              aria-hidden="true"
            >
              {String(step.number).padStart(2, "0")}
            </span>

            <div className="project-workflow__content">
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ProjectWorkflow
import './FeaturedProjects.css'
import ProjectRow from './ProjectRow'
import { featuredProjects } from '../data/featuredProjects'
import { useState } from 'react'
import ProjectCaseStudyDialog from './ProjectCaseStudyDialog'
import { projectCaseStudies } from '../data/projectCaseStudies'

function FeaturedProjects() {
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(
    null,
  )

  const selectedProject = featuredProjects.find(
    (project) => project.slug === selectedProjectSlug,
  )

  const selectedCaseStudy = projectCaseStudies.find(
    (caseStudy) => caseStudy.projectSlug === selectedProjectSlug,
  )

  return (
    <>
      <section
        id="projects"
        className="featured-projects"
        aria-labelledby="projects-heading"
      >
        <header className="featured-projects__header">
          <h2 id="projects-heading">Featured Projects</h2>

          <span
            className="featured-projects__line"
            aria-hidden="true"
          />
        </header>

        <div className="featured-projects__list">
          {featuredProjects.map((project) => {
            const hasCaseStudy = projectCaseStudies.some(
              (caseStudy) => caseStudy.projectSlug === project.slug,
            )

            return (
              <ProjectRow
                key={project.slug}
                number={project.number}
                ownership={project.ownership}
                title={project.title}
                summary={project.summary}
                technologies={project.technologies}
                repositoryLabel={project.repository.label}
                onOpenCaseStudy={
                  hasCaseStudy
                    ? () => setSelectedProjectSlug(project.slug)
                    : undefined
                }
              />
            )
          })}
        </div>
      </section>

      {selectedProject && selectedCaseStudy && (
        <ProjectCaseStudyDialog
          project={selectedProject}
          caseStudy={selectedCaseStudy}
          onClose={() => setSelectedProjectSlug(null)}
        />
      )}
    </>
  )
}

export default FeaturedProjects
import './FeaturedProjects.css'
import ProjectRow from './ProjectRow'
import { featuredProjects } from '../data/featuredProjects'

function FeaturedProjects() {
  return (
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

        {featuredProjects.map((project) => (
        <ProjectRow
            key={project.slug}
            number={project.number}
            ownership={project.ownership}
            title={project.title}
            summary={project.summary}
            technologies={project.technologies}
            repositoryLabel={project.repository.label}            
        />
        ))}

    </div>

    </section>
  )
}

export default FeaturedProjects
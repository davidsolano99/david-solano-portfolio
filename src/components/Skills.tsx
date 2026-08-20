import { skillGroups } from "../data/skills";
import "./Skills.css";

function Skills() {
  return (
    <section
      id="skills"
      className="skills-section"
      aria-labelledby="skills-heading"
    >
      <header className="skills-section__header">
        <h2 id="skills-heading">Skills</h2>

        <p>
          Tools and practices I use to build, validate, and support dependable
          technical systems.
        </p>
      </header>

      <div className="skills-section__grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>

            <ul aria-label={`${group.title} skills`}>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
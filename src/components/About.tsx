import './About.css'
import colombiaFlag from "../assets/flags/colombia.svg";
import canadaFlag from "../assets/flags/canada.svg";
import davidPortrait from "../assets/images/david.png";

const aboutFacts = [
  {
    label: 'Location',
    value: 'Calgary, Alberta',
  },
  {
    label: 'Education',
    value: 'BSc Natural Sciences — Computer Science & Mathematics',
  },
  {
    label: 'Experience',
    value: 'Professional testing since 2021',
  },
]

function About() {
  return (
    <section
      id="about"
      className="about-section"
      aria-labelledby="about-heading"
    >
        <header className="about-section__header">
        <h2 id="about-heading">About</h2>

        <div className="about-section__portrait">
            <img
            src={davidPortrait}
            alt="David Solano"
            width="1122"
            height="1402"
            loading="lazy"
            />
        </div>
        </header>

        <div className="about-section__body">
            <p>
            Born in Colombia{" "}
            <img
                className="country-flag"
                src={colombiaFlag}
                alt=""
                aria-hidden="true"
            />{" "}
            and raised in Canada{" "}
            <img
                className="country-flag"
                src={canadaFlag}
                alt=""
                aria-hidden="true"
            />
            , I moved here when I was 10 and have called Calgary home since I was 12. Growing up across two
            cultures shaped how I connect with people, adapt to unfamiliar
            situations, and approach new challenges with curiosity and persistence.
            </p>

            <p>
            I’m a software, automation, and systems-integration professional who
            enjoys turning complex technical processes into practical, dependable
            tools. I completed the requirements for a Bachelor of Science in Natural
            Sciences at the University of Calgary, with a primary concentration in
            Computer Science and a secondary concentration in Mathematics. 
            Since 2021, I’ve worked hands-on across software, firmware, embedded
            hardware, communications, configuration, connectivity, and field
            support. My experience combines application development with functional
            and system testing, automation, technical documentation, and the
            investigation of problems that cross multiple layers of a system.
            </p>

            <p>
            My work includes independently building a Windows quality-control
            testing application, a Raspberry Pi workflow-automation system, and a
            geospatial wireless-survey tool. I also contributed as part of the
            University of Calgary Solar Car team to real-time telemetry dashboards
            and systems-integration testing. 
            Whether I’m developing software, investigating a difficult failure, or
            improving an existing workflow, I care about building technology that is
            reliable, understandable, and genuinely useful to the people who depend
            on it.
            </p>

            <p className="about-section__closing">
            Outside of technology, I stay active through soccer, hockey, and
            football, and I enjoy taking on projects that give me something new to
            learn.
            </p>
            <dl className="about-section__facts">
            {aboutFacts.map((fact) => (
                <div className="about-section__fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
                </div>
            ))}
            </dl>            
        </div>        
    </section>
  )
}

export default About
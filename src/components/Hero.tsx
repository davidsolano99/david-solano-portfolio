import './Hero.css'
import HeroSchematic from './HeroSchematic'

function Hero() {
  return (
    <section
      className="hero-section"
      aria-labelledby="hero-heading"
    >
      <div className="hero-copy">
        <p className="hero-eyebrow">
          DEVELOPMENT • TESTING • EMBEDDED SYSTEMS
        </p>

        <h1 id="hero-heading">
          <span>Software,</span>
          <span>Automation &amp;</span>
          <span>Systems Integration</span>
        </h1>

        <p className="hero-summary">
          Calgary-based developer building reliable tools for testing,
          diagnostics, workflow automation, field data processing, and
          hardware-software integration.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View My Work
            <span aria-hidden="true">→</span>
          </a>

          <a className="button button-secondary" href="#contact">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-schematic" aria-hidden="true">
        <HeroSchematic />
      </div>
    </section>
  );
}

export default Hero
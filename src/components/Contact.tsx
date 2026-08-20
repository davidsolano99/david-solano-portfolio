import "./Contact.css";

function Contact() {
  const resumeUrl = `${import.meta.env.BASE_URL}documents/David-Solano-Resume.pdf`;

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="contact-section__heading">
        <h2 id="contact-heading">Contact</h2>
      </div>

      <div className="contact-section__content">
        <h3>Let&apos;s connect.</h3>

        <p>
          I&apos;m open to opportunities in software development, quality
          assurance, automation, embedded systems, and systems integration.
        </p>

        <a
          className="contact-section__email"
          href="mailto:david.solano0813@gmail.com"
        >
          david.solano0813@gmail.com
          <span aria-hidden="true">→</span>
        </a>

        <ul className="contact-section__links">
          <li>
            <a
              href="https://www.linkedin.com/in/david-solano99"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/davidsolano99"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </li>

          <li>
            <a href={resumeUrl} download="David-Solano-Resume.pdf">
              Download Résumé
              <span aria-hidden="true">↓</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
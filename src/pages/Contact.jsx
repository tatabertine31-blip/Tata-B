
function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* Intro */}
        <div className="contact-heading">

          <p className="contact-label">
            GET IN TOUCH
          </p>

          <h1>
            Let's build
            <span> something.</span>
          </h1>

          <p className="contact-intro">
            Have a project, internship opportunity, collaboration,
            or simply want to connect? I would love to hear from you.
          </p>

        </div>


        {/* Contact layout */}
        <div className="contact-layout">

          {/* Left side */}
          <div className="contact-message">

            <p className="contact-small-label">
              LET'S CONNECT
            </p>

            <h2>
              Have an idea?
              <br />
              Let's talk.
            </h2>

            <p>
              Whether you're looking for a developer, interested in
              collaborating on a project, or simply want to have a
              conversation about technology, feel free to reach out.
            </p>


            {/* Chat buttons */}
            <div className="contact-actions">

              <a
                href="https://wa.me/YOUR_NUMBER"
                target="_blank"
                rel="noreferrer"
                className="contact-primary-button"
              >
                Chat on WhatsApp
                <span>↗</span>
              </a>

              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="contact-secondary-button"
              >
                Send an Email
                <span>↗</span>
              </a>

            </div>

          </div>


          {/* Right side */}
          <div className="contact-details">

            <div className="contact-detail">

              <span className="contact-detail-label">
                EMAIL
              </span>

              <a href="mailto:YOUR_EMAIL@example.com">
                YOUR_EMAIL@example.com
              </a>

            </div>


            <div className="contact-detail">

              <span className="contact-detail-label">
                WHATSAPP
              </span>

              <a
                href="https://wa.me/YOUR_NUMBER"
                target="_blank"
                rel="noreferrer"
              >
                Chat with me
                <span>↗</span>
              </a>

            </div>


            <div className="contact-detail">

              <span className="contact-detail-label">
                LINKEDIN
              </span>

              <a
                href="YOUR_LINKEDIN_URL"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
                <span>↗</span>
              </a>

            </div>


            <div className="contact-detail">

              <span className="contact-detail-label">
                GITHUB
              </span>

              <a
                href="YOUR_GITHUB_URL"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile
                <span>↗</span>
              </a>

            </div>

          </div>

        </div>


        {/* Availability */}
        <div className="contact-availability">

          <span className="availability-dot"></span>

          <span>
            OPEN TO INTERNSHIP OPPORTUNITIES
          </span>

        </div>


        {/* Bottom CTA */}
        <div className="contact-bottom">

          <p>
            COMPUTER ENGINEERING • SOFTWARE • SYSTEMS
          </p>

          <a href="#home">
            Back to top ↑
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;

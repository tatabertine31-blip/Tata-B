
function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* Section heading */}
        <div className="section-intro">

          <div>
            <p className="section-label">
              ABOUT ME
            </p>

            <h2>
              Building technology with
              purpose and curiosity.
            </h2>
          </div>

        </div>


        {/* Main About content */}
        <div className="about-layout">

          <div className="about-main">

            <p className="about-lead">
              I am a Computer Engineering student with a growing
              passion for software development, systems, networking,
              and technology-driven solutions.
            </p>

            <p>
              My journey in technology has allowed me to work across
              different areas of computing, from building interfaces
              and web applications to exploring backend systems,
              networking, and computer infrastructure.
            </p>

            <p>
              I enjoy taking an idea, understanding the problem behind
              it, and turning it into a practical digital solution.
              This approach has led me to work on projects such as
              Finding The Lost and ExamGuard, where technology is used
              to address real-world problems.
            </p>

            <p>
              I am continuously developing my technical skills while
              looking for opportunities to learn from experienced
              professionals, contribute to meaningful projects, and
              grow into a well-rounded technology professional.
            </p>

          </div>


          {/* Personal details */}
          <div className="about-details">

            <div className="about-detail">
              <span className="detail-label">
                EDUCATION
              </span>

              <p>
                Computer Engineering
              </p>

              <span>
                National Higher Institute of Polytechnic
              </span>
            </div>


            <div className="about-detail">
              <span className="detail-label">
                FOCUS
              </span>

              <p>
                Software & Systems
              </p>

              <span>
                Full-stack development, networking and
                computer systems.
              </span>
            </div>


            <div className="about-detail">
              <span className="detail-label">
                LANGUAGES
              </span>

              <p>
                English & French
              </p>

              <span>
                Bilingual communication.
              </span>
            </div>


            <div className="about-detail">
              <span className="detail-label">
                CURRENT GOAL
              </span>

              <p>
                Learn. Build. Contribute.
              </p>

              <span>
                Seeking opportunities to apply technology
                to practical problems.
              </span>
            </div>

          </div>

        </div>


        {/* Technical focus */}
        <div className="about-focus">

          <div className="about-focus-heading">
            <p className="section-label">
              WHAT I WORK WITH
            </p>

            <h3>
              From interfaces to infrastructure.
            </h3>
          </div>


          <div className="about-focus-grid">

            <div className="about-focus-card">
              <span>01</span>

              <h4>
                Software Development
              </h4>

              <p>
                Building practical applications and developing
                solutions through programming and modern web
                technologies.
              </p>
            </div>


            <div className="about-focus-card">
              <span>02</span>

              <h4>
                Systems
              </h4>

              <p>
                Exploring backend architecture, computer systems,
                operating environments, and how different components
                work together.
              </p>
            </div>


            <div className="about-focus-card">
              <span>03</span>

              <h4>
                Networking
              </h4>

              <p>
                Developing knowledge in network infrastructure,
                configuration, communication, and system
                connectivity.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;

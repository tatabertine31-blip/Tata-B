function Projects() {
  return (
    <section className="page-section projects-page" id="projects">

      {/* Page heading */}
      <div className="page-heading">

        <span className="page-number">
          01
        </span>

        <div>
          <p className="page-label">
            SELECTED WORK
          </p>

          <h1>
            Projects
          </h1>

          <p className="page-intro">
            A selection of projects where I apply software,
            systems, and engineering concepts to build practical
            digital solutions.
          </p>
        </div>

      </div>


      {/* Projects */}
      <div className="projects-list">

        <article className="project-card">

          <div className="project-number">
            01
          </div>

          <div className="project-content">

            <p className="project-type">
              WEB APPLICATION
            </p>

            <h2>
              Finding The Lost
            </h2>

            <p>
              A digital platform designed to help people report,
              search for, and reconnect with lost items through
              an organized online system.
            </p>

            <div className="project-technologies">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>

          </div>

        </article>


        <article className="project-card">

          <div className="project-number">
            02
          </div>

          <div className="project-content">

            <p className="project-type">
              SYSTEM
            </p>

            <h2>
              ExamGuard
            </h2>

            <p>
              An examination management and monitoring system
              designed to improve examination security, student
              record management, and scanning workflows.
            </p>

            <div className="project-technologies">
              <span>Node.js</span>
              <span>API</span>
              <span>Database</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>

          </div>

        </article>


        <article className="project-card">

          <div className="project-number">
            03
          </div>

          <div className="project-content">

            <p className="project-type">
              SOFTWARE PROJECT
            </p>

            <h2>
              Coming Soon
            </h2>

            <p>
              Another practical project currently being developed
              as part of my journey in software and computer
              engineering.
            </p>

            <div className="project-technologies">
              <span>C++</span>
              <span>Python</span>
              <span>Systems</span>
            </div>

            <a href="#" className="project-link">
              Explore →
            </a>

          </div>

        </article>

      </div>

    </section>
  );
}

export default Projects;
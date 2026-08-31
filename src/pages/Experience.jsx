
function Experience() {
  const experiences = [
    {
      year: "2026 — PRESENT",
      type: "INTERNSHIP / PROJECT EXPERIENCE",
      role: "Full-Stack Developer",
      company: "ExamGuard Project",
      location: "Remote / Academic Project",

      description:
        "Contributing to the development of an examination management and monitoring system. Working mainly on backend functionality, APIs, student records, scanning workflows, logging, and dashboard-related features.",

      technologies: [
        "Node.js",
        "JavaScript",
        "REST API",
        "Database",
        "GitHub",
      ],
    },

    {
      year: "2025 — 2026",
      type: "ACADEMIC EXPERIENCE",
      role: "Computer Engineering Student",
      company: "National Higher Institute of Polytechnic Bamenda",
      location: "Bamenda, Cameroon",

      description:
        "Developing practical knowledge across software development, computer systems, networking, system administration, and database technologies while building academic and personal projects.",

      technologies: [
        "C",
        "C++",
        "Python",
        "HTML",
        "CSS",
        "Networking",
      ],
    },

    {
      year: "2025 — PRESENT",
      type: "PERSONAL DEVELOPMENT",
      role: "Frontend & Full-Stack Developer",
      company: "Independent Projects",
      location: "Personal Development",

      description:
        "Building practical digital solutions to strengthen my development skills. Projects include responsive websites, interactive interfaces, backend applications, and systems-focused projects.",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
      ],
    },
  ];

  return (
    <section className="experience-section" id="experience">

      <div className="experience-container">

        {/* Heading */}
        <div className="experience-heading">

          <p className="experience-label">
            EXPERIENCE
          </p>

          <h1>
            Building through
            <span> experience.</span>
          </h1>

          <p className="experience-intro">
            A collection of academic, development, and project
            experiences that have shaped the way I approach
            technology and problem solving.
          </p>

        </div>


        {/* Experience list */}
        <div className="experience-list">

          {experiences.map((experience, index) => (

            <article
              className="experience-card"
              key={`${experience.role}-${index}`}
            >

              {/* Number */}
              <div className="experience-number">
                0{index + 1}
              </div>


              {/* Main content */}
              <div className="experience-main">

                <div className="experience-meta">

                  <span className="experience-type">
                    {experience.type}
                  </span>

                  <span className="experience-year">
                    {experience.year}
                  </span>

                </div>


                <h2>
                  {experience.role}
                </h2>


                <div className="experience-company">
                  <span>
                    {experience.company}
                  </span>

                  <span>
                    {experience.location}
                  </span>
                </div>


                <p className="experience-description">
                  {experience.description}
                </p>


                <div className="experience-technologies">

                  {experience.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

              </div>


              {/* Arrow */}
              <div className="experience-arrow">
                ↗
              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;

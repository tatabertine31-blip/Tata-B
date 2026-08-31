
function Education() {
  const education = [
    {
      year: "CURRENT",
      category: "BACHELOR'S DEGREE",
      title: "Computer Engineering",
      institution: "National Higher Institute of Polytechnic Bamenda",
      description:
        "Currently pursuing a Bachelor's degree in Computer Engineering, with a focus on software development, networking, computer systems, and system maintenance.",
      tags: [
        "Computer Engineering",
        "Software",
        "Networking",
        "Systems",
      ],
    },

    {
      year: "HIGH SCHOOL",
      category: "SECONDARY EDUCATION",
      title: "General & Technical Education",
      institution: "Oxford Comprehensive High School",
      description:
        "Completed secondary education while developing the academic foundation that led to my interest in technology, computing, and engineering.",
      tags: [
        "Academic Foundation",
        "Technology",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section className="education-section" id="education">

      <div className="education-container">

        {/* Heading */}
        <div className="education-heading">

          <p className="education-label">
            EDUCATION
          </p>

          <h1>
            Learning the
            systems behind
            technology.
          </h1>

          <p className="education-intro">
            My academic journey combines computer engineering,
            software development, networking, and systems
            knowledge with practical project experience.
          </p>

        </div>


        {/* Education timeline */}
        <div className="education-list">

          {education.map((item, index) => (

            <article
              className="education-card"
              key={item.title}
            >

              <div className="education-marker">

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>


              <div className="education-content">

                <div className="education-top">

                  <span className="education-category">
                    {item.category}
                  </span>

                  <span className="education-year">
                    {item.year}
                  </span>

                </div>


                <h2>
                  {item.title}
                </h2>


                <h3>
                  {item.institution}
                </h3>


                <p className="education-description">
                  {item.description}
                </p>


                <div className="education-tags">

                  {item.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

              </div>


              <div className="education-arrow">
                ↗
              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Education;

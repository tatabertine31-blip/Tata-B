import { useState } from "react";


const skillGroups = [
    {
        number: "01",
        title: "FRONTEND DEVELOPMENT",
        skills: [
            {
                name: "HTML",
                description:
                    "Semantic markup and structured page content for accessible and well-organized web interfaces.",
                usedIn: "Portfolio projects"
            },
            {
                name: "CSS",
                description:
                    "Responsive layouts, visual styling, animations, and interfaces that adapt across different screen sizes.",
                usedIn: "Portfolio projects"
            },
            {
                name: "JavaScript",
                description:
                    "Programming logic and interactive behaviour for modern web applications.",
                usedIn: "Web development projects"
            },
            {
                name: "React",
                description:
                    "Component-based development for building interactive and maintainable user interfaces.",
                usedIn: "Tata Portfolio"
            }
        ]
    },

    {
        number: "02",
        title: "BACKEND & APIs",
        skills: [
            {
                name: "Node.js",
                description:
                    "JavaScript runtime used to build server-side applications and backend services.",
                usedIn: "Full-stack learning"
            },
            {
                name: "Express.js",
                description:
                    "Backend framework for building routes, APIs, and server-side application logic.",
                usedIn: "Full-stack learning"
            },
            {
                name: "REST APIs",
                description:
                    "A way for frontend and backend applications to communicate through HTTP requests and responses.",
                usedIn: "Tata Portfolio"
            }
        ]
    },

    {
        number: "03",
        title: "PROGRAMMING",
        skills: [
            {
                name: "Python",
                description:
                    "Programming language used for problem solving, automation, and application development.",
                usedIn: "Programming projects"
            },
            {
                name: "C",
                description:
                    "Programming language used to build a strong foundation in programming and systems concepts.",
                usedIn: "Academic projects"
            },
            {
                name: "C++",
                description:
                    "Programming language used for object-oriented programming and application development.",
                usedIn: "Academic projects"
            }
        ]
    },

    {
        number: "04",
        title: "TOOLS & DEVELOPMENT",
        skills: [
            {
                name: "Git",
                description:
                    "Version control system used to track changes and manage software development projects.",
                usedIn: "Development projects"
            },
            {
                name: "GitHub",
                description:
                    "Platform for hosting repositories, collaborating with developers, and managing project code.",
                usedIn: "Development projects"
            },
            {
                name: "VS Code",
                description:
                    "Code editor used for writing, organizing, debugging, and managing software projects.",
                usedIn: "Development projects"
            }
        ]
    },

    {
        number: "05",
        title: "NETWORKING & SYSTEMS",
        skills: [
            {
                name: "Networking",
                description:
                    "Understanding how devices, networks, protocols, and communication systems work together.",
                usedIn: "Computer Engineering studies"
            },
            {
                name: "System Administration",
                description:
                    "Managing computer systems, users, services, configurations, and networked environments.",
                usedIn: "Computer Engineering studies"
            }
        ]
    }
];


function Skills() {

    const [selectedSkill, setSelectedSkill] = useState(null);


    return (
        <section
            className="section skills-section"
            id="skills"
        >

            <div className="section-intro">

                <span className="section-number">
                    02
                </span>

                <div>

                    <p className="section-label">
                        SKILLS
                    </p>

                    <h2>
                        Technologies and
                        areas I'm developing.
                    </h2>

                </div>

            </div>


            <div className="skills-list">

                {skillGroups.map((group) => (

                    <div
                        className="skill-group"
                        key={group.number}
                    >

                        <div className="skill-group-heading">

                            <span className="skill-number">
                                {group.number}
                            </span>

                            <h3>
                                {group.title}
                            </h3>

                        </div>


                        <div className="skill-tags">

                            {group.skills.map((skill) => (

                                <button
                                    className="skill-tag"
                                    key={skill.name}
                                    onClick={() =>
                                        setSelectedSkill(skill)
                                    }
                                >
                                    {skill.name}
                                </button>

                            ))}

                        </div>

                    </div>

                ))}

            </div>


            {selectedSkill && (

                <div
                    className="skill-modal-overlay"
                    onClick={() => setSelectedSkill(null)}
                >

                    <div
                        className="skill-modal"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        <button
                            className="skill-modal-close"
                            onClick={() =>
                                setSelectedSkill(null)
                            }
                            aria-label="Close skill information"
                        >
                            ×
                        </button>


                        <div className="skill-modal-content">

                            <p className="skill-modal-category">
                                SKILL
                            </p>

                            <h3>
                                {selectedSkill.name}
                            </h3>

                            <p className="skill-modal-description">
                                {selectedSkill.description}
                            </p>


                            <div className="skill-modal-divider">
                            </div>


                            <p className="skill-modal-used-label">
                                USED IN
                            </p>

                            <span className="skill-modal-project">
                                {selectedSkill.usedIn}
                            </span>

                        </div>

                    </div>

                </div>

            )}

        </section>
    );
}


export default Skills;
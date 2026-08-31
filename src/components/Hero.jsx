import ContactDock from "./ContactDock";

function Hero() {
    return (
        <section className="hero" id="home">

            <div className="hero-background" aria-hidden="true">

                <div className="hero-grid"></div>

                <div className="hero-glow hero-glow-one"></div>

                <div className="hero-glow hero-glow-two"></div>

                <div className="hero-orbit hero-orbit-one"></div>

                <div className="hero-orbit hero-orbit-two"></div>

                <div className="hero-tech-graphics" aria-hidden="true">

                    <div className="tech-circuit tech-circuit-one">
                        <span className="circuit-line line-one"></span>
                        <span className="circuit-line line-two"></span>
                        <span className="circuit-node node-one"></span>
                        <span className="circuit-node node-two"></span>
                        <span className="circuit-node node-three"></span>
                    </div>

                    <div className="tech-circuit tech-circuit-two">
                        <span className="circuit-line line-one"></span>
                        <span className="circuit-line line-two"></span>
                        <span className="circuit-node node-one"></span>
                        <span className="circuit-node node-two"></span>
                    </div>

                    <div className="tech-window">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="tech-network">
                        <span className="network-line network-line-one"></span>
                        <span className="network-line network-line-two"></span>
                        <span className="network-line network-line-three"></span>

                        <span className="network-node network-node-one"></span>
                        <span className="network-node network-node-two"></span>
                        <span className="network-node network-node-three"></span>
                        <span className="network-node network-node-four"></span>
                    </div>

                    <div className="tech-bracket">
                        <span></span>
                        <span></span>
                    </div>

                    <div className="tech-keyboard">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="tech-mouse">
                        <span></span>
                    </div>

                    <div className="tech-server">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="tech-terminal">
                        <span className="terminal-line"></span>
                        <span className="terminal-line"></span>
                        <span className="terminal-line"></span>
                    </div>

                    <div className="hero-floating-icon icon-code">&lt;/&gt;</div>
                    <div className="hero-floating-icon icon-chip">✦</div>
                    <div className="hero-floating-icon icon-node">◌</div>
                    <div className="hero-floating-icon icon-circuit">+</div>
                    <div className="hero-star star-1"></div>
                    <div className="hero-star star-2"></div>
                    <div className="hero-star star-3"></div>
                    <div className="hero-star star-4"></div>
                    <div className="hero-star star-5"></div>

                </div>

            </div>


            <div className="hero-content">

                <div className="hero-status">
                    <span className="status-dot"></span>
                    OPEN TO INTERNSHIP OPPORTUNITIES
                </div>

                <p className="hero-category">
                    COMPUTER ENGINEERING • SOFTWARE • SYSTEMS
                </p>

                <h1 className="hero-title">
                    Tata Bertine Kumla
                </h1>

                <p className="hero-role">
                    Full-Stack Developer Intern
                </p>

                <p className="hero-description">
                    Computer Engineering student building practical
                    digital solutions across frontend development,
                    backend systems, networking, and software.
                </p>

                <div className="hero-actions">

                    <a href="/projects" className="primary-button">
                        View My Work
                    </a>

                    <a href="/contact" className="secondary-button">
                        Let's Connect
                    </a>

                </div>

                <div className="hero-socials">
                    <ContactDock home />
                </div>

            </div>

        </section>
    );
}

export default Hero;
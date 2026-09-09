function Services() {
  return (
    <section className="page-section services-section" id="services">
      <div className="page-heading">
        <span className="page-number">01</span>
        <div>
          <p className="page-label">WHAT I OFFER</p>
          <h1>Services</h1>
          <p className="page-intro">
            I offer several services across different departments
            these services are stated below. feel free to contact me
          </p>
        </div>
      </div>

      <div className="services-list">
        <article className="service-card"><span>01</span><h2>Websites and Apps</h2><p>Custom responsive websites modern web interfaces and apps.</p></article>
        <article className="service-card"><span>02</span><h2>graphic Designing</h2><p>Realistic fliers, invitation cards and many others.</p></article>
        <article className="service-card"><span>03</span><h2>Sysem Admin</h2><p>Building VM wares that support system maintainance where necessary.</p></article>
        <article className="service-card"><span>04</span><h2>Systems & Networking</h2><p>Practical support around computer systems, networks, and technical projects.</p></article>
      </div>
    </section>
  );
}

export default Services;

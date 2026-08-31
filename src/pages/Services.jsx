function Services() {
  return (
    <section className="page-section services-section" id="services">
      <div className="page-heading">
        <span className="page-number">01</span>
        <div>
          <p className="page-label">WHAT I OFFER</p>
          <h1>Services</h1>
          <p className="page-intro">
            This is your services page. The content here is independent from Projects,
            so you can replace these cards with the services you want to offer.
          </p>
        </div>
      </div>

      <div className="services-list">
        <article className="service-card"><span>01</span><h2>Web Development</h2><p>Custom responsive websites and modern web interfaces.</p></article>
        <article className="service-card"><span>02</span><h2>Backend Development</h2><p>APIs, application logic, databases, and backend services.</p></article>
        <article className="service-card"><span>03</span><h2>UI & Responsive Design</h2><p>Clean, responsive interfaces designed for phones, tablets, and desktop.</p></article>
        <article className="service-card"><span>04</span><h2>Systems & Networking</h2><p>Practical support around computer systems, networks, and technical projects.</p></article>
      </div>
    </section>
  );
}

export default Services;

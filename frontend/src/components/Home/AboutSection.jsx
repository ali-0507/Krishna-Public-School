export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-header">
        <span className="about-badge">About KPS</span>

        <h2 data-aos="fade-right">Welcome to Krishna Public School</h2>

        <p className="about-description"data-aos="fade-right">
          Established in 1995, Krishna Public School Tendua has been a beacon of
          educational excellence in Raipur, shaping young minds for over 25
          years. Our commitment to holistic development, academic rigor, and
          character building has made us one of the most trusted educational
          institutions in the region.
        </p>
      </div>

      <div className="about-cards"data-aos="fade-down">
        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            To be a center of excellence that nurtures globally competitive
            learners with strong moral values.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To provide quality education that develops critical thinking,
            creativity, and leadership skills.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Values</h3>
          <p>
            Integrity, Excellence, Respect, Innovation, and Compassion guide
            everything we do.
          </p>
        </div>
      </div>
    </section>
  );
}
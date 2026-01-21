 export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <span className="hero-tag">Welcome To</span>

          <h1>
            Krishna Public School <br />
            <span>Tendua</span>
          </h1>

          <p>
            Nurturing young minds with excellence in education since 1995.
            Where every child's potential is discovered and developed.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Apply Now →</button>
            <button className="secondary-btn">Explore More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const navigate = useNavigate();
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

      {/* <div className="about-cards"data-aos="fade-down">
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
      </div> */}

      <div className="clubs-section">
        {/* LEFT */}
        <div className="clubs-left" data-aos="fade-right">
          <span className="clubs-badge">🎓 Student Life</span>
          <h3>Discover Our Vibrant Clubs</h3>
          <p>
            At Krishna Public School, we believe in nurturing talents beyond the
            classroom. Our diverse range of clubs offers students the perfect
            platform to explore their passions, develop leadership skills, and
            build lasting friendships.
          </p>

          <button className="clubs-btn"
            onClick={() => navigate("/clubs")}
          >
            Explore All Clubs →
          </button>
        </div>

        {/* RIGHT */}
        <div className="clubs-right" data-aos="fade-left">
          <div className="club-card blue">
            <span>🔬</span>
            <h4>Science & Robotics Club</h4>
          </div>

          <div className="club-card yellow">
            <span>📚</span>
            <h4>Literary & Debate Society</h4>
          </div>

          <div className="club-card green">
            <span>🎨</span>
            <h4>Art & Craft Workshop</h4>
          </div>

          <div className="club-card peach">
            <span>🎵</span>
            <h4>Music & Dance Academy</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const navigate = useNavigate();
  return (
    <section className="about-section">
      <div className="about-header">
        <span className="about-badge">About KPS</span>

        <h2 data-aos="fade-right">Welcome to Krishna Public School</h2>

        <p className="about-description"data-aos="fade-right">
        Krishna Public School, Tendua, Raipur, established in 2018 is a forward-thinking 
        educational institution dedicated to delivering high-quality education blended with strong values 
        and contemporary learning methods, including AI readiness. We strive to nurture academically robust, 
        socially responsible, and confident individuals who are ready to face future challenges. 
        Our Higher Secondary section emphasizes academic excellence, career readiness, 
        and character development, providing a supportive, inspiring environment where every student 
        can uncover their true potential and thrive.
        </p>
      </div>

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
            {/* <span>🔬</span> */}
            <h4>Sports Club</h4>
          </div>

          <div className="club-card yellow">
            {/* <span>📚</span> */}
            <h4>G K Club</h4>
          </div>

          <div className="club-card green">
            {/* <span>🎨</span> */}
            <h4>English Club</h4>
          </div>

          <div className="club-card peach">
            {/* <span>🎵</span> */}
            <h4>Photography Club</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function ProgramsSection() {
  return (
    <section className="programs-section">
      <div className="programs-header">
        <span className="section-badge">Our Programs</span>

        <h2>Academic Excellence at Every Level</h2>

        <p>
          From kindergarten to senior secondary, we offer comprehensive
          programs designed to bring out the best in every student.
        </p>
      </div>

      <div className="programs-grid">
        {/* Kids Academy */}
        <div className="program-card">
          <div className="program-icon yellow">
            <i class="fa-solid fa-face-smile"></i>
          </div>
          <h3>Kids Academy</h3>
          <span className="program-sub">Nursery - KG</span>
          <p>
            Play-based learning in a nurturing environment that builds strong
            foundations for lifelong learning.
          </p>
          <a href="#">Learn More →</a>
        </div>

        {/* Primary School */}
        <div className="program-card">
          <div className="program-icon green">
            <i class="fa-solid fa-book"></i>
          </div>
          <h3>Primary School</h3>
          <span className="program-sub">Classes I - V</span>
          <p>
            Building fundamental skills in reading, writing, and mathematics
            with activity-based learning.
          </p>
          <a href="#">Learn More →</a>
        </div>

        {/* Middle School */}
        <div className="program-card">
          <div className="program-icon blue">
            <i class="fa-solid fa-school"></i>
          </div>
          <h3>Middle School</h3>
          <span className="program-sub">Classes VI - VIII</span>
          <p>
            Developing critical thinking and analytical skills through an
            integrated curriculum approach.
          </p>
          <a href="#">Learn More →</a>
        </div>

        {/* High School */}
        <div className="program-card">
          <div className="program-icon orange">
            <i class="fa-solid fa-graduation-cap"></i>
          </div>
          <h3>High School</h3>
          <span className="program-sub">Classes IX - XII</span>
          <p>
            Preparing students for board examinations and higher education
            with focused academic programs.
          </p>
          <a href="#">Learn More →</a>
        </div>
      </div>

      <div className="programs-cta">
        <button className="cta-btn">
          Explore Kids Academy →
        </button>
      </div>
    </section>
  );
}
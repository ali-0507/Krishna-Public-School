import "../styles/about.css";

export default function About() {
  return (
    <>
       {/* ABOUT HERO SECTION */}
    <section className="about-hero-section">
      <span className="about-pill">About Us</span>

      <h1>
        Shaping Minds,
        <br />
        Building Futures
      </h1>

      <p>
        For over 25 years, Krishna Public School Tendua has been committed to
        providing exceptional education that develops well-rounded individuals
        ready to lead and serve.
      </p>
    </section>

{/* VISION / MISSION / VALUES */}
      <section className="about-vmv">
        <div className="vmv-container">
          <div className="vmv-card">
            <div className="vmv-icon"><i class="fa-solid fa-eye-low-vision"></i></div>
            <h3>Our Vision</h3>
            <p>
              To be a center of excellence that nurtures globally competitive
              learners with strong moral values.
            </p>
          </div>

          <div className="vmv-card">
            <div className="vmv-icon"><i class="fa-solid fa-bullseye"></i></div>
            <h3>Our Mission</h3>
            <p>
              To provide quality education through innovative teaching and
              modern facilities.
            </p>
          </div>

          <div className="vmv-card">
            <div className="vmv-icon"><i class="fa-solid fa-heart"></i></div>
            <h3>Our Values</h3>
            <p>
              Integrity, Excellence, Respect, Innovation, and Compassion guide
              everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY + STATS SECTION */}
      <section className="about-dark-stats">
  <div className="dark-stats-container">

    <div className="dark-stat">
      <div className="dark-icon"><i class="fa-solid fa-children"></i></div>
      <h3>2500+</h3>
      <p>Students</p>
    </div>

    <div className="dark-stat">
      <div className="dark-icon"><i class="fa-solid fa-graduation-cap"></i></div>
      <h3>120+</h3>
      <p>Teachers</p>
    </div>

    <div className="dark-stat">
      <div className="dark-icon"><i class="fa-solid fa-trophy"></i></div>
      <h3>150+</h3>
      <p>Awards</p>
    </div>

    <div className="dark-stat">
      <div className="dark-icon"><i class="fa-solid fa-star"></i></div>
      <h3>98%</h3>
      <p>Success Rate</p>
    </div>

  </div>
</section>


{/* TIMELINE SECTION */}
<section className="timeline-section">
  <span className="section-pill center">Our Journey</span>

  <h2 className="timeline-title">Milestones of Excellence</h2>

  <div className="timeline">

    <div className="timeline-item">
      <div className="timeline-year">1995</div>
      <div className="timeline-dot"></div>
      <div className="timeline-card">
        <h3>Foundation</h3>
        <p>
          Krishna Public School was established with a vision to provide quality
          education.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-year">2005</div>
      <div className="timeline-dot"></div>
      <div className="timeline-card">
        <h3>Expansion</h3>
        <p>
          Added senior secondary classes and new infrastructure.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-year">2015</div>
      <div className="timeline-dot"></div>
      <div className="timeline-card">
        <h3>Recognition</h3>
        <p>
          Received state-level awards for academic excellence.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-year">2025</div>
      <div className="timeline-dot"></div>
      <div className="timeline-card">
        <h3>Today</h3>
        <p>
          Over 2500 students and a legacy of 30 years of educational excellence.
        </p>
      </div>
    </div>

  </div>
</section>


{/* LEADERSHIP SECTION */}
<section className="leadership-section">
  <span className="section-pill center">Our Team</span>

  <h2 className="leadership-title">Leadership</h2>

  <div className="leadership-grid">

    <div className="leader-card">
      <div className="leader-icon">
        <i class="fa-solid fa-graduation-cap"></i>
      </div>
      <h3>Dr. Ramesh Kumar</h3>
      <span className="leader-role">Principal</span>
      <p>25+ years in education, Ph.D. in Educational Leadership</p>
    </div>

    <div className="leader-card">
      <div className="leader-icon">
        <i class="fa-solid fa-graduation-cap"></i>
      </div>
      <h3>Mrs. Sunita Sharma</h3>
      <span className="leader-role">Vice Principal</span>
      <p>20+ years of teaching experience, M.Ed.</p>
    </div>

    <div className="leader-card">
      <div className="leader-icon">
        <i class="fa-solid fa-graduation-cap"></i>
      </div>
      <h3>Mr. Anil Verma</h3>
      <span className="leader-role">Academic Director</span>
      <p>Expert in curriculum development and teacher training</p>
    </div>

  </div>
</section>
    </>
  );
}
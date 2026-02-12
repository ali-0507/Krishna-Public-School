 import "../styles/about.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ABOUT HERO SECTION */}
      <section className="about-hero-section">
        <span className="about-pill">About Us</span>

        <h1 data-aos="fade-up">
          Shaping Minds,
          <br />
          Building Futures
        </h1>

        <p data-aos="fade-right" data-aos-delay="900">
          Krishna Public School, Tendua, Raipur, established in 2018 is a
          forward-thinking educational institution dedicated to delivering
          high-quality education blended with strong values and contemporary
          learning methods, including AI readiness.We strive to nurture
          academically robust, socially responsible, and confident individuals
          who are ready to face future challenges. Our Higher Secondary section
          emphasizes academic excellence, career readiness, and character
          development, providing a supportive, inspiring environment where every
          student can uncover their true potential and thrive.
        </p>
      </section>

      {/* VISION / MISSION / VALUES */}
      <section className="about-vmv">
        <div className="vmv-container">
          <div className="vmv-card" data-aos="fade-left" data-aos-delay="100">
            <div className="vmv-icon">
              <i class="fa-solid fa-eye"></i>
            </div>
            <h3>Our Vision</h3>
            <p className="mt-3">
              We are committed towards our journey on building the block of
              nation by working on holistic development of child. We believe in
              building the value system of our children on priority, We strive
              for high quality education by developing adjustable, adaptive and
              integrated personalities.
            </p>
          </div>

          <div className="vmv-card" data-aos="fade-left" data-aos-delay="500">
            <div className="vmv-icon">
              <i class="fa-solid fa-bullseye"></i>
            </div>
            <h3>Our Mission</h3>
            <p className="mt-3">
              To be a revered institution which works on holistic development of
              children by making them rational and responsible citizens,
              decision makers, trustworthy in character, ownership oriented, and
              compassionate individuals by creating a mature learning
              environment along with the parental and teaching community.
            </p>
          </div>

          <div className="vmv-card" data-aos="fade-left" data-aos-delay="900">
            <div className="vmv-icon">
              <i class="fa-solid fa-heart"></i>
            </div>
            <h3>Our Values</h3>
            <p style={{textAlign:"justify"}}>
              <strong>Respect –</strong> We value people, diversity, and the environment with empathy and courtesy. <br/>
              <strong>Ownership –</strong> We take responsibility for our actions, learning, and growth. <br/>
              <strong>Trust –</strong> We build honest, reliable, and supportive relationships. <br/>
              <strong>Integrity – </strong>We act ethically and do the right thing always. <br/>
              <strong>Progressive Learning –</strong> We embrace innovation, curiosity, and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNEY + STATS SECTION */}
      {/* <section className="about-dark-stats">
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
</section> */}

      {/* TIMELINE SECTION */}
      <section className="timeline-section">
        <span className="section-pill center">Our Journey</span>

        <h2 className="timeline-title">Milestones of Excellence</h2>

        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="timeline-year">1995</div>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h3>Foundation</h3>
              <p>
                Krishna Public School was established with a vision to provide
                quality education.
              </p>
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-year">2005</div>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h3>Expansion</h3>
              <p>Added senior secondary classes and new infrastructure.</p>
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-year">2015</div>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h3>Recognition</h3>
              <p>Received state-level awards for academic excellence.</p>
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-year">2025</div>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h3>Today</h3>
              <p>
                Over 2500 students and a legacy of 30 years of educational
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="leadership-section">
        <span className="section-pill center">Our Team</span>

        <h2
          className="leadership-title"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Leadership
        </h2>

        <div className="leadership-grid">
          <div
            className="leader-card"
            data-aos="fade-right"
            data-aos-delay="900"
          >
            <div className="leader-icon">
              <img src="./images/md.jpg" />
            </div>
            <h3>Nagendra Tripathi</h3>
            <span className="leader-role">Managing Director, KPS Tendua</span>
            <p>
              We believe there can be no higher calling than to deliver an
              outstanding education for your child and we have an excellent
              faculty and staff who are committed to that very purpose. .
            </p>
          </div>

          <div
            className="leader-card"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            <div className="leader-icon">
              {/* <i class="fa-solid fa-graduation-cap"></i> */}
              <img src="/DirectorPhoto.jpeg" />
            </div>
            <h3>Mrs. Shipra Tripathi</h3>
            <span className="leader-role">Director, KPS Tendua</span>
            <p>
              KPS Tendua stands for structure, stability and it’s commitment to
              discipline. We also ceaselessly strive to keep abreast of our
              times to be able to create an environment at school that nurtures
              all the faculties of our children: social, physical, intellectual
              and emotional.
            </p>
          </div>

          <div
            className="leader-card"
            data-aos="fade-right"
            data-aos-delay="700"
          >
            <div className="leader-icon">
              <img src="./images/principal.jpg" />
            </div>
            <h3>Mrs. Deepika Agarwal</h3>
            <span className="leader-role">Principal, KPS Tendua</span>
            <p>
              I strongly believe that education is a collaborative effort that
              involves professional administrators committed teachers and
              motivated students. We dedicate ourselves as professional
              administrators in creating a dynamic education programme
              empowering the students in a global perspective.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
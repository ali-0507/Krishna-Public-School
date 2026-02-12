import { useNavigate } from "react-router-dom";
import "../styles/programs.css";

export default function ProgramsOffered() {
  const navigate = useNavigate();

  return (
    <div className="programs-page">

      {/* HERO SECTION */}
      <section className="programs-hero">
        <div className="programs-hero-content">
          <span className="program-tag">Academic Programs</span>
          <h1 data-aos="fade-down">Programs Offered</h1>
          <p data-aos="fade-left">
            <b style={{color:"#f4b400"}}>Krishna Public School Tendua </b><br/>offers a well-rounded education that nurtures
            every child’s potential.
          </p>
        </div>
      </section>

      {/* PRE PRIMARY */}
      <section className="program-section">
        <div className="program-container">

          <div className="program-image" data-aos="fade-right">
            <img src="/kids.jpg" alt="Pre Primary" />
          </div>

          <div className="program-content">
            <span className="program-badge" data-aos="fade-left">Play Group • Nursery • LKG • UKG</span>
            <h2  data-aos="fade-left">Pre-Primary</h2>
            <p  data-aos="fade-left">
              Our Pre-Primary program lays the foundation for a child’s
              educational journey through a joyful, play-based curriculum.
              Children aged 3–6 explore the world through storytelling, art,
              music, and hands-on activities.
            </p>

            <ul  data-aos="fade-left">
              <li>Play-based & activity-driven learning</li>
              <li>Development of motor & social skills</li>
              <li>Introduction to numbers, alphabets & rhymes</li>
              <li>Safe, child-friendly classrooms</li>
            </ul>

            <button
              className="apply-btn"
              onClick={() => navigate("/admission")}  data-aos="fade-up"
            >
              Apply Now →
            </button>
          </div>
        </div>
      </section>

      {/* PRIMARY */}
      <section className="program-section alt">
        <div className="program-container reverse">

          <div className="program-image" data-aos="fade-left">
            <img src="/images/primary.jpg" alt="Primary School" />
          </div>

          <div className="program-content" >
            <span className="program-badge"data-aos="fade-right">Classes I – V</span>
            <h2 data-aos="fade-right">Primary School</h2>
            <p data-aos="fade-right">
              The Primary School program builds strong academic foundations in
              English, Hindi, Mathematics, Environmental Studies, and Computer
              Science through interactive and experiential learning.
            </p>

            <ul data-aos="fade-right">
              <li>CBSE-aligned NCERT curriculum</li>
              <li>Activity-based & experiential learning</li>
              <li>Computer education from Class I</li>
              <li>Co-curricular: Art, Music, Yoga & Sports</li>
            </ul>

            <button
              className="apply-btn"
              onClick={() => navigate("/admission")} data-aos="fade-up"
            >
              Apply Now →
            </button>
          </div>
        </div>
      </section>

      {/* MIDDLE SCHOOL */}
      <section className="program-section">
        <div className="program-container">

          <div className="program-image"data-aos="fade-right">
            <img src="/images/middle.jpg" alt="Middle School" />
          </div>

          <div className="program-content">
            <span className="program-badge"data-aos="fade-left">Classes VI – VIII</span>
            <h2 data-aos="fade-left">Middle School</h2>
            <p data-aos="fade-left">
              Designed to deepen subject knowledge and ignite intellectual
              curiosity through laboratory work and collaborative projects.
            </p>

            <ul data-aos="fade-left">
              <li>In-depth Science & Mathematics curriculum</li>
              <li>Dedicated Science & Computer labs</li>
              <li>Olympiad & competitive exam preparation</li>
              <li>Leadership through clubs & student council</li>
            </ul>

            <button
              className="apply-btn"
              onClick={() => navigate("/admission")}data-aos="fade-up"
            >
              Apply Now →
            </button>
          </div>
        </div>
      </section>

      {/* HIGH SCHOOL */}
      <section className="program-section alt">
        <div className="program-container reverse">

          <div className="program-image"data-aos="fade-left">
            <img src="/images/highschool.jpg" alt="High School" />
          </div>

          <div className="program-content">
            <span className="program-badge"data-aos="fade-right">Classes IX – XII</span>
            <h2 data-aos="fade-right">High School</h2>
            <p data-aos="fade-right">
              Our High School program prepares students for CBSE Board
              Examinations and competitive entrance tests with a rigorous
              academic framework.
            </p>

            <ul data-aos="fade-right">
              <li>Science, Commerce & Arts streams</li>
              <li>Board exam & entrance test coaching</li>
              <li>Career guidance & counselling</li>
              <li>Modern labs, library & smart classrooms</li>
            </ul>

            <button
              className="apply-btn"
              onClick={() => navigate("/admission")}data-aos="fade-up"
            >
              Apply Now →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

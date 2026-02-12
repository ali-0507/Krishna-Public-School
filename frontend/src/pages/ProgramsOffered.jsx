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
              <li>English, Hindi, Mathematics.</li>
              <li>Environmental Awareness, Art & Craft, Music & Dance.</li>
              <li>Focus on play-based and activity based learning.</li>
              
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
            <img src="/PrimaryClasses.JPG" alt="Primary School" />
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
              <li>English, Hindi, Mathematics,</li>
              <li>Environmental Studies (EVS)/Science & Social Studies.</li>
              <li>Computer Science, General knowledge, Art & Craft</li>
              <li>Music, Abacus, Yoga, Self Defence, Games, Robotics.</li>
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
            <img src="/MiddleClasses.JPG" alt="Middle School" />
          </div>

          <div className="program-content">
            <span className="program-badge"data-aos="fade-left">Classes VI – VIII</span>
            <h2 data-aos="fade-left">Middle School</h2>
            <p data-aos="fade-left">
              Designed to deepen subject knowledge and ignite intellectual
              curiosity through laboratory work and collaborative projects.
            </p>

            <ul data-aos="fade-left">
              <li>English, Hindi, Mathematics</li>
              <li>Science (Physics, Chemistry, Biology)</li>
              <li>Social Science (History, Civics, Geography)</li>
              <li>Sanskrit (as Third Language), Computer Science, General knowledge</li>
              <li>Art Education, Yoga, Games, Robotics.</li>
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
            <img src="/HighClasses.JPG" alt="High School" />
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
              <strong>IX - X</strong>
              <li>Language I (English), Language II (Hindi), Mathematics</li>
             <li>Science (Physics, Chemistry, Biology)</li>
              <li>Social Science (History, Civics, Geography, Economics)</li>
              <li>Artificial Intelligence / Computer Applications (Skill Subject)</li>
              <li>Yoga, Games.</li>
            </ul>
             <ul data-aos="fade-right">
              <strong>XI - XII</strong>
              <ol>
                <li><strong>Science Stream:</strong>
                <ul>
                  <li>English, Physics, Chemistry, Mathematics / Biology</li>
                  <li>Computer Science / Physical Education(Optional).</li>
                </ul>
                </li>
               
         
                <li><strong>Commerce Stream:</strong>
                <ul>
                  <li>English, Accountancy, Business Studies</li>
                  <li>Economics, Mathematics / Applied Mathematics / Physical Education (Optional).</li>
                </ul>
                </li>
              </ol>
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

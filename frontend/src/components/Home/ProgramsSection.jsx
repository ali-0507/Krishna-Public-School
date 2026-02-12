import { Link } from "react-router-dom";
export default function ProgramsSection() {
  return (
    <section className="programs-section">
      <div className="programs-header">
        <span className="section-badge">Our Programs</span>

        <h2 data-aos="fade-up">Academic Excellence at Every Level</h2>

        <p data-aos="fade-up">
           Our school is structured to cater to the specific developmental needs of students at every stage.
        </p>
      </div>

      <div className="programs-grid" data-aos="fade-right">
        {/* Kids Academy */}
        <div className="program-card">
          <div className="program-icon yellow">
            <i class="fa-solid fa-face-smile"></i>
          </div>
          <h3>Tendua Krishna Kids Academy</h3>
          <span className="program-sub">PlayGroup, Nursery, KG-I, KG-II (UKG)</span>
          <p>
            <strong>Pre-Primary Wing Situauted At UDAYA Society: </strong>Play-based learning in a nurturing environment that builds strong
            foundations for lifelong learning.
          </p>
          {/* <a href="#">Learn More →</a> */}
        </div>

        {/* Primary School */}
        <div className="program-card">
          <div className="program-icon green">
            <i class="fa-solid fa-book"></i>
          </div>
          <h3>Primary School</h3>
          <span className="program-sub">Class I - V</span>
          <br/>
          <p>
            Building fundamental skills in reading, writing, and mathematics
            with activity-based learning.
          </p>
          {/* <a href="#">Learn More →</a> */}
        </div>

        {/* Middle School */}
        <div className="program-card">
          <div className="program-icon blue">
            <i class="fa-solid fa-school"></i>
          </div>
          <h3>Middle School</h3>
          <span className="program-sub">Class VI - VIII</span>
           <br/>
          <p>
            Developing critical thinking and analytical skills through an
            integrated curriculum approach.
          </p>
          {/* <a href="#">Learn More →</a> */}
        </div>

        {/* High School */}
        <div className="program-card">
          <div className="program-icon orange">
            <i class="fa-solid fa-graduation-cap"></i>
          </div>
          <h3>High School</h3>
          <span className="program-sub">Class IX - XII</span>
           <br/>
          <p>
            Preparing students for board examinations and higher education
            with focused academic programs.
          </p>
          {/* <a href="#">Learn More →</a> */}
        </div>
      </div>
      
    </section>
  );
}
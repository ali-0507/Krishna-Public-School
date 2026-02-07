import { NavLink } from "react-router-dom";
// import { useState } from "react";

export default function Navbar() {

  // const [showAcademics, setShowAcademics] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo-box">
          🎓
        </div>
        <div className="school-name">
          <h2>Krishna Public School</h2>
          <p>Tendua</p>
        </div>
      </div>

      <nav className="navbar-center">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/admission">Admission</NavLink>

        {/* <div
          className="academics-wrapper"
          onMouseEnter={() => setShowAcademics(true)}
          onMouseLeave={() => setShowAcademics(false)}
        >
          <button className="academics-btn">
            Academics <i className="fa-solid fa-chevron-down"></i>
          </button>

          {showAcademics && (
            <div className="academics-dropdown">
              <NavLink to="/academics/courses">
                <i className="fa-solid fa-book-open"></i>
                Courses Offered
              </NavLink>

              <NavLink to="/academics/syllabus">
                <i className="fa-solid fa-clipboard-list"></i>
                Syllabus
              </NavLink>

              <NavLink to="/academics/exam-policy">
                <i className="fa-solid fa-file-circle-check"></i>
                Exam Policy
              </NavLink>

              <NavLink to="/academics/school-timing">
                <i className="fa-regular fa-clock"></i>
                School Timing
              </NavLink>

              <NavLink to="/academics/ptm">
                <i className="fa-solid fa-users"></i>
                Parent-Teacher Meeting
              </NavLink>

              <NavLink to="/academics/policy">
                <i className="fa-solid fa-file-lines"></i>
                Policy Documentation
              </NavLink>

              <NavLink to="/academics/book-list">
                <i className="fa-solid fa-book"></i>
                Book List 2026-27
              </NavLink>

              <NavLink to="/academics/co-scholastic">
                <i className="fa-solid fa-trophy"></i>
                Co-Scholastic
              </NavLink>
            </div>
          )}
        </div> */}
        <div className="nav-dropdown">
          <span className="nav-link">
            Academics <i className="fa-solid fa-chevron-down"></i>
          </span>

          <div className="dropdown-menu">
            <NavLink to="/academics/courses-offered">
              <i className="fa-solid fa-book-open"></i> Courses Offered
            </NavLink>
            <NavLink to="/academics/syllabus">
              <i className="fa-solid fa-clipboard-list"></i> Syllabus
            </NavLink>
            <NavLink to="/academics/exam-policy">
              <i className="fa-solid fa-file-circle-check"></i> Exam Policy
            </NavLink>
            <NavLink to="/academics/school-timing">
              <i className="fa-solid fa-clock"></i> School Timing
            </NavLink>
            <NavLink to="/academics/ptm">
              <i className="fa-solid fa-users"></i> Parent-Teacher Meeting
            </NavLink>
            <NavLink to="/academics/policy-docs">
              <i className="fa-solid fa-file"></i> Policy Documentation
            </NavLink>
            <NavLink to="/academics/book-list">
              <i className="fa-solid fa-book"></i> Book List 2026–27
            </NavLink>
            <NavLink to="/academics/co-scholastic">
              <i className="fa-solid fa-trophy"></i> Co-Scholastic
            </NavLink>
          </div>
        </div>

        <a href="/kids-academy"target="_blank"rel="noopener noreferrer"
        className="nav-link">
        Kids Academy</a>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/mandatory-public-disclosure">Mandatory Public Disclosure</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
       
        {/* <button className="enroll-btn">Enroll Now</button> */}
      
    </header>
  );
}
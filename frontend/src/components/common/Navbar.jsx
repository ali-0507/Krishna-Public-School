<<<<<<< HEAD
import { NavLink } from "react-router-dom";
// import { useState } from "react";
=======
import { NavLink, Link } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { FaUsers,FaTrophy, FaFolderOpen } from "react-icons/fa";
import { RiBookShelfFill } from "react-icons/ri";
>>>>>>> 7045ca5d63f7fea1c402e36a832063dc81fdc9bb

export default function Navbar() {

  // const [showAcademics, setShowAcademics] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo-box">
          🎓
        </div>
        <div className="school-name">
          <h2>Krishna Public School Tendua</h2>
          <p >Raipur (C.G.) - 492099</p>
        </div>
      </div>

      <nav className="navbar-center">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/admission">Admission</NavLink>
<<<<<<< HEAD

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
=======
        {/* <NavLink to="/kids-academy">Kids Academy</NavLink> */}
           {/* ACADEMICS DROPDOWN */}
        <div className="nav-dropdown">
         <NavLink to="/academics/courses-offered" className="nav-link">
              Academics <span className="arrow">▾</span>
          </NavLink> 
          <div className="dropdown-menu-custom">
            <Link to="/academics/courses-offered"><IoBookOutline /> Courses Offered</Link>
            <Link to="/academics/syllabus"><i class="fa-solid fa-file-lines"></i>Syllabus</Link>
            <Link to="/academics/exam-policy"><i class="fa-solid fa-clipboard"></i>Exam Policy</Link>
            <Link to="/academics/school-timing"><i class="fa-solid fa-clock"></i>School Timing</Link>
            <Link to="/academics/parent-teacher-meeting"><FaUsers/> Parent-Teacher-Meeting</Link>
            <Link to="/academics/policy-documentation"><FaFolderOpen />Policy Documentation</Link>
            <Link to="/academics/book-list"><RiBookShelfFill />Book List 2026–27</Link>
            <Link to="/academics/co-scholastic"><FaTrophy />Co-Scholastic</Link>
>>>>>>> 7045ca5d63f7fea1c402e36a832063dc81fdc9bb
          </div>
        </div>

        <a href="/kids-academy"target="_blank"rel="noopener noreferrer"
        className="nav-link">
        Kids Academy</a>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/mandatory-public-disclosure">Mandatory Public Disclosure</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
       
<<<<<<< HEAD
        {/* <button className="enroll-btn">Enroll Now</button> */}
      
=======
>>>>>>> 7045ca5d63f7fea1c402e36a832063dc81fdc9bb
    </header>
  );
}
import { NavLink, Link } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
import { useState } from "react";
import { GoPeople } from "react-icons/go";
import { FaUsers,FaTrophy, FaFolderOpen } from "react-icons/fa";
import { RiBookShelfFill } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-left">
          <img src="/SCHOOL LOGO.png" className="school-logo"></img>
        <div className="school-name">
          <h2>Krishna Public School Tendua</h2>
          <p >Raipur (C.G.) - 492099</p>
        </div>
      </div>

          {/* HAMBURGER ICON */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiX /> : <HiMenu />}
      </div>


      <nav className={`navbar-center ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
        <NavLink to="/admission" onClick={() => setMenuOpen(false)}>Admission</NavLink>
        {/* <NavLink to="/kids-academy">Kids Academy</NavLink> */}
        
           {/* ACADEMICS DROPDOWN */}
        <div className="nav-dropdown"
        onClick={(e) => {
           e.stopPropagation();
         e.currentTarget.classList.toggle("active");
          }}
        >
          <span className="nav-link">
            Academics <span className="arrow">▼</span>
          </span>
          <div className="dropdown-menu-custom">
            <Link to="/academics/courses-offered"><IoBookOutline /> Courses Offered</Link>
            <Link to="/academics/syllabus"><i class="fa-solid fa-file-lines"></i>Syllabus</Link>
            <Link to="/academics/exam-policy"><i class="fa-solid fa-clipboard"></i>Exam Policy</Link>
            <Link to="/academics/school-timing"><i class="fa-solid fa-clock"></i>School Timing</Link>
            <Link to="/academics/academic-calendar"><i class="fa-solid fa-calendar"></i>Academic Calendar</Link>
            <Link to="/academics/parent-teacher-meeting"><FaUsers/> Parent-Teacher-Meeting</Link>
            <Link to="/academics/policy-documentation"><FaFolderOpen />Rules & Regulations</Link>
            <Link to="/academics/book-list"><RiBookShelfFill />Book List 2026–27</Link>
            <Link to="/academics/co-scholastic"><FaTrophy />Co-Scholastic</Link>
          </div>
        </div>

        <a href="/kids-academy" target="_blank" rel="noopener noreferrer"
        className="nav-link">
        Kids Academy</a>
        <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink>
        <NavLink to="/mandatory-public-disclosure" className="nav-special">Mandatory Public Disclosure</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
      </nav>
    </header>
  );
}

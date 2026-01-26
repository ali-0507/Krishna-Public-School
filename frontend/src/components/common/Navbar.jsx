import { NavLink, Link } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { FaUsers,FaTrophy, FaFolderOpen } from "react-icons/fa";
import { RiBookShelfFill } from "react-icons/ri";

export default function Navbar() {
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
          </div>
        </div>

        <a href="/kids-academy"target="_blank"rel="noopener noreferrer"
        className="nav-link">
        Kids Academy</a>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
        <button className="enroll-btn">Enroll Now</button>
    </header>
  );
}
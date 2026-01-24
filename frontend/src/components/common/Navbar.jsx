import { NavLink } from "react-router-dom";

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
        <a href="/kids-academy"target="_blank"rel="noopener noreferrer"
        className="nav-link">
        Kids Academy</a>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>

      <div className="navbar-right">
        <button className="enroll-btn">Enroll Now</button>
      </div>
    </header>
  );
}
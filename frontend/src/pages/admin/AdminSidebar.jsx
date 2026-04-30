 
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaImages,
  FaFileAlt,
  FaShieldAlt,
  FaTrophy,
  FaSchool,
  FaUsers,
  FaTimes,
  FaHome,
  FaPhone,
  FaPhoneAlt
} from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function AdminSidebar({ sidebarOpen, setSidebarOpen }) {
    const { user } = useContext(AuthContext);
  return (
    <div className={`admin-sidebar ${sidebarOpen ? "open" : "closed"}`}>

      <div className="admin-brand">
        <div className="brand-icon">
          <img src="/SCHOOL LOGO.png" className="school-logo"></img>

        </div>
        <div>
          <h6>Krishna Public School Tendua</h6>
          <small>Admin panel</small>
        </div>
      </div>

      <nav>
        <NavLink to="/admin/dashboard" end className={({ isActive }) =>
          isActive ? "admin-link active" : "admin-link"
        }>
          <FaTachometerAlt /> Dashboard
        </NavLink>

         <NavLink to="/admin/admissions">
          <FaSchool /> Admission Info
        </NavLink>

        <NavLink to="/admin/contacts">
          <FaPhoneAlt /> Contact Info 
        </NavLink>


        <NavLink to="/admin/enquiry">
          <FaUsers /> Kids Enquiry Info
        </NavLink>

          <NavLink to="/admin/gallery">
          <FaImages /> Gallery
        </NavLink>
            
        <NavLink to="/admin/documents">
          <FaFileAlt /> Documents
        </NavLink>

         <NavLink to="/admin/achievements">
          <FaTrophy /> Achievements
        </NavLink>

      </nav>
    
    <hr/>
      <div className="sidebar-bottom">

  <div className="admin-profile">
   <div className="avatar">
  {user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()}
</div>
    <div>
      <p>{user?.name}</p>
      <span>Principal</span>
    </div>
  </div>

  <a href="/" className="back-site">
    ← Back to Site
  </a>

</div>

    </div>
  );
}
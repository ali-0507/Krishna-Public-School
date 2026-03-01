// import { NavLink } from "react-router-dom";
// import {
//   FaTachometerAlt,
//   FaImages,
//   FaFileAlt,
//   FaShieldAlt,
//   FaTrophy,
//   FaSchool,
//   FaUsers
// } from "react-icons/fa";

// export default function AdminSidebar() {
//   return (
//     <div className="admin-sidebar">

//       <div className="admin-brand">
//         <div className="brand-icon">🏫</div>
//         <div>
//           <h6>Krishna Public</h6>
//           <span>ADMIN PANEL</span>
//         </div>
//       </div>

//       <nav>
//         <NavLink to="/admin" end>
//           <FaTachometerAlt /> Dashboard
//         </NavLink>

//         <NavLink to="/admin/gallery">
//           <FaImages /> Gallery
//         </NavLink>

//         <NavLink to="/admin/documents">
//           <FaFileAlt /> Documents
//         </NavLink>

//         <NavLink to="/admin/disclosure">
//           <FaShieldAlt /> Mandatory Disclosure
//         </NavLink>

//         <NavLink to="/admin/achievement">
//           <FaTrophy /> Achievements
//         </NavLink>

//         <NavLink to="/admin/school-info">
//           <FaSchool /> School Info
//         </NavLink>

//         <NavLink to="/admin/staff">
//           <FaUsers /> Staff Management
//         </NavLink>
//       </nav>
//     </div>
//   );
// }

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
  FaHome
} from "react-icons/fa";

export default function AdminSidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className={`admin-sidebar ${sidebarOpen ? "open" : "closed"}`}>

      <div className="admin-brand">
        <div className="brand-icon">🏫</div>
        <div>
          <h5 style={{marginBottom:"0px"}}>Krishna Public School Tendua</h5>
          <span style={{color:"#1f2f56",fontSize:"20px",marginTop:"0px"}}>Admin panel</span>
        </div>
        <FaTimes
          className="close-btn"
          onClick={() => setSidebarOpen(false)}
        />
      </div>

      <nav>
        <NavLink to="/admin/dashboard" end className={({ isActive }) =>
          isActive ? "admin-link active" : "admin-link"
        }>
          <FaTachometerAlt /> Dashboard
        </NavLink>

        <NavLink to="/admin/gallery">
          <FaImages /> Gallery
        </NavLink>

        <NavLink to="/admin/documents">
          <FaFileAlt /> Documents
        </NavLink>

        <NavLink to="/admin/disclosure">
          <FaShieldAlt /> Mandatory Disclosure
        </NavLink>

        <NavLink to="/admin/achievement">
          <FaTrophy /> Achievements
        </NavLink>

        <NavLink to="/admin/school-info">
          <FaSchool /> School Info
        </NavLink>

        <NavLink to="/admin/staff">
          <FaUsers /> Staff Management
        </NavLink>
      </nav>
    
    <hr/>
      <a href="/" className="go-back">
        <FaHome /> Go Back To Site
      </a>

    </div>
  );
}
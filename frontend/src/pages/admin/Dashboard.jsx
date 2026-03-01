// export default function Dashboard() {
//   return (
//     <div className="dashboard-wrapper">

//       <h2 className="welcome-title">
//         Welcome back
//       </h2>

//       <div className="stats-grid">

//         <div className="stat-card">
//           <h6>Gallery Photos</h6>
//           <h3>148</h3>
//           <span>+12 this month</span>
//         </div>

//         <div className="stat-card">
//           <h6>Documents</h6>
//           <h3>34</h3>
//           <span>3 pending update</span>
//         </div>

//         <div className="stat-card">
//           <h6>Achievements</h6>
//           <h3>27</h3>
//           <span>+5 this session</span>
//         </div>

//         <div className="stat-card">
//           <h6>Staff Members</h6>
//           <h3>62</h3>
//           <span>All profiles updated</span>
//         </div>

//       </div>

//       <div className="quick-actions">
//         <h5>Quick Actions</h5>

//         <div className="actions-grid">
//           <button>Upload Photos</button>
//           <button>Update Documents</button>
//           <button>Add Achievement</button>
//           <button>Manage Staff</button>
//         </div>
//       </div>

//     </div>
//   );
// }

import {
  FaImages,
  FaFileAlt,
  FaTrophy,
  FaUsers,
  FaPlus
} from "react-icons/fa";

export default function Dashboard() {

  return (
    <div className="dashboard-wrapper">

      <h2 className="welcome-title">
        Welcome back
      </h2>

      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon blue">
            <FaImages />
          </div>
          <h6>Gallery Photos</h6>
          <h3>148</h3>
          <span>+12 this month</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            <FaFileAlt />
          </div>
          <h6>Documents</h6>
          <h3>34</h3>
          <span>3 pending update</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <FaTrophy />
          </div>
          <h6>Achievements</h6>
          <h3>27</h3>
          <span>+5 this session</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">
            <FaUsers />
          </div>
          <h6>Staff Members</h6>
          <h3>62</h3>
          <span>All profiles updated</span>
        </div>

      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>

        <div className="actions-grid">
          <button><FaPlus /> Upload Photos</button>
          <button><FaPlus /> Update Documents</button>
          <button><FaPlus /> Add Achievement</button>
          <button><FaPlus /> Manage Staff</button>
        </div>
      </div>

    </div>
  );
}
import { FaImages, FaFileAlt, FaTrophy, FaUsers, FaPlus } from "react-icons/fa"; 
import { AuthContext } from "../../context/AuthContext";
import {useContext, useEffect, useState } from "react";
import { getDashboardStats } from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  const fetchStats = async () => {
    try {
      const res = await getDashboardStats();
      setStats(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchStats();
}, []);


const getIcon = (type) => {
  if (type === "gallery") return <FaImages />;
  if (type === "document") return <FaFileAlt />;
  if (type === "achievement") return <FaTrophy />;
  if (type === "admission") return <FaUsers />;
};

  return (
    <div className="dashboard-wrapper">
      <h2 className="welcome-title">Welcome back</h2>
      <p>Here's an overview of your school's digital presence.</p>
      <div className="role-badges">
        <span>Director</span>
        <span>Principal</span>
        <span>Managing Director</span>
      </div>
      <div className="stats-grid">
      <div className="stat-card">
          <div className="stat-icon purple">
            <FaUsers />
          </div>
          <h6>No. of Students</h6>
          <h3>{stats?.studentCount || 0}</h3>
          <span>All profiles updated</span>
        </div>
        <div className="stat-card">
          <div className="stat-icon blue">
            <FaImages />
          </div>
          <h6>Gallery Photos</h6>
          <h3>{stats?.galleryCount || 0}</h3>
          <span>+12 this month</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            <FaFileAlt />
          </div>
          <h6>Documents</h6>
          <h3>{stats?.documentCount || 0}</h3>
          <span>3 pending update</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <FaTrophy />
          </div>
          <h6>Achievements</h6>
          <h3>{stats?.achievementCount || 0}</h3>
          <span>+5 this session</span>
        </div>
      </div>



 <div className="quick-actions">
    <h3>Quick Actions</h3>
    <div className="actions-grid">
    {/* Staff */}
    <div
      className="action-card"
      onClick={() => navigate("/admin/admissions")}
      style={{ cursor: "pointer" }}>
      <div className="action-icon gold">
        <FaUsers />
      </div>
      <p>Manage Students</p>
    </div>
    {/* Upload Photos */}
    <div
      className="action-card"
      onClick={() => navigate("/admin/gallery")}
      style={{ cursor: "pointer" }}
    >
      <div className="action-icon blue">
        <FaImages />
      </div>
      <p>Upload Photos</p>
    </div>

    {/* Documents */}
    <div
      className="action-card"
      onClick={() => navigate("/admin/documents")}
      style={{ cursor: "pointer" }}>
      <div className="action-icon yellow">
        <FaFileAlt />
      </div>
      <p>Update Documents</p>
    </div>

    {/* Achievements */}
    <div
      className="action-card"
      onClick={() => navigate("/admin/achievements")}
      style={{ cursor: "pointer" }}>
      <div className="action-icon navy">
        <FaTrophy />
      </div>
      <p>Add Achievement</p>
    </div>

    
  </div>
</div>



{/* Recent activity */}
       
<div className="recent-activity">
      <h4>Recent Activity</h4>
      {stats?.recentActivity?.map((item, index) => (
  <div className="activity-item" key={index}>
    {getIcon(item.type)}
    <div>
      <p>{item.text}</p>
      <span>{item.time}</span>
    </div>
  </div>
))}
   
 </div>
</div>
  );
}

import { Link, useLocation } from "react-router-dom";
import {
  FaBook,
  FaClipboardList,
  FaFileAlt,
  FaClock,
  FaUsers,
  FaFolderOpen,
  FaBookOpen,
  FaTrophy
} from "react-icons/fa";

const exploreLinks = [
  { to: "/academics/courses-offered", label: "Courses Offered", icon: <FaBook /> },
  { to: "/academics/syllabus", label: "Syllabus", icon: <FaClipboardList /> },
  { to: "/academics/exam-policy", label: "Exam Policy", icon: <FaFileAlt /> },
  { to: "/academics/school-timing", label: "School Timing", icon: <FaClock /> },
  { to: "/academics/parent-teacher-meeting", label: "PTM", icon: <FaUsers /> },
  { to: "/academics/policy-documentation", label: "Rules & Regulations", icon: <FaFolderOpen /> },
  { to: "/academics/book-list", label: "Book List", icon: <FaBookOpen /> },
  { to: "/academics/co-scholastic", label: "Co-Scholastic", icon: <FaTrophy /> }
];

export default function ExploreMore() {
  const location = useLocation();

  return (
    <section className="explore-more">
      <h3 className="explore-title">Explore More</h3>

      <div className="container">
        <div className="row g-3">
          {exploreLinks.map((item, index) => {
            const isActive = location.pathname === item.to;

            return (
              <div
                className="col-md-3 col-sm-6"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <Link
                  to={item.to}
                  className={`explore-card ${isActive ? "active" : ""}`}
                >
                  <span className="explore-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

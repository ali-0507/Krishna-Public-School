import { useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import "../styles/floatingAdmission.css";

export default function FloatingAdmissionButton() {
  const navigate = useNavigate();
   const handleClick = () => {
    navigate("/admission", { state: { scrollToForm: true } });
  };

  return (
    <div className="floating-admission" onClick={handleClick}>
      <FaGraduationCap className="floating-icon" />
      <span className="floating-label">Admission Open</span>
      <span className="floating-text">Click to Enroll</span>
    </div>
  );
}
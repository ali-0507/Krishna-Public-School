import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdmissionCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="admission-cta">
      <div className="cta-content">
        <div className="cta-text">
          <h2>Have Questions About Admission?</h2>
          <p>Our admission team is here to help you.</p>
        </div>

        <button className="cta-btn" onClick={()=> navigate("/contact")}>
          <FaPhoneAlt />
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default AdmissionCTA;

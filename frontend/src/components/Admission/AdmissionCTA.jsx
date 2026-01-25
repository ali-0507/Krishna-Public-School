import { FaPhoneAlt } from "react-icons/fa";

const AdmissionCTA = () => {
  return (
    <section className="admission-cta">
      <div className="cta-content">
        <div className="cta-text">
          <h2>Have Questions About Admission?</h2>
          <p>Our admission team is here to help you.</p>
        </div>

        <button className="cta-btn">
          <FaPhoneAlt />
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default AdmissionCTA;

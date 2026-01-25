import { FaArrowRight, FaDownload } from "react-icons/fa";

const AdmissionHero = () => {
  return (
    <section className="admission-hero">
      <div className="admission-hero-content">
        <span className="admission-badge">
          Admissions Open 2025–26
        </span>

        <h1 className="admission-title">
          Begin Your Child&apos;s <br /> Journey With Us
        </h1>

        <p className="admission-subtitle">
          Join the KPS family and give your child the gift of quality education.
          Limited seats available for all classes.
        </p>

        <div className="admission-hero-buttons">
          <button className="btn-primary">
            Apply Online <FaArrowRight />
          </button>

          <button className="btn-outline">
            <FaDownload /> Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionHero;

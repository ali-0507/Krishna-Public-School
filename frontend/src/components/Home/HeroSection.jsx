import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const heroImages = [
  "/Home/SCHOOL.jpeg",
  "/Home/BoardAchievers.jpeg",
  "/Home/assembly.jpeg",
  "/Home/Classroom.jpeg",
  "/Home/ChemLab.jpeg",
  "/Home/complab.jpeg",
  "/Home/Sport2.jpeg",
  "/Home/Dance.jpeg",
];

export default function HeroSection() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      {/* CURTAIN SLIDER */}
      <div
        className="hero-slider"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="hero-slide"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* DARK OVERLAY + CONTENT */}
      <div className="hero-overlay">
        <div className="hero-content">

          {/* LEFT LOGO */}
          <div className="hero-logo" >
             <img src="/SCHOOL LOGO.png" alt="School logo" 
                  className="hero-school-logo" data-aos="fade-up" data-aos-delay="1200"/>
          </div>
         
          <div className="hero-text mt-3"> 
          <span className="hero-tag" data-aos="fade-up">Welcome To</span>
          {/* <h1 data-aos="fade-left" data-aos-delay="1000"> 
             Krishna Public School 
            <span>Tendua</span>
          </h1> */}
          <h1 data-aos="fade-left" data-aos-delay="200">
            <span className="school-name" style={{color:"#fff"}}>Krishna Public School</span>
            <span className="school-location">Tendua</span>
          </h1>
           
          <p data-aos="fade-left" data-aos-delay="900">
            Nurturing young minds with excellence in education since 2018.
            Where every child's potential is discovered and developed.
          </p>

          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="900">
            <button
              className="primary-btn"
              onClick={() => navigate("/admission")}
            >
              Apply Now →
            </button>
            <button
              className="secondary-btn"
              onClick={() => navigate("/programs-offered")}
            >
              Programs Offered
            </button>
          </div>
          </div>

        </div>
        <div className="cbse-no">
           <p>CBSE Affiliation no : 3330397  <br/>
           School code : 15954</p>
        </div>
      </div>
    </section>
  );
}

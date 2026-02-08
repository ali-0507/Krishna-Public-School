import { useEffect, useState } from "react";
import kidsHeroImg from "/kids.jpg";

const KidsHero = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 50;
    const end = 300;
    const duration = 3000; // total animation time in ms
    const incrementTime = 3;
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="kids-hero-modern">
      <div className="kids-hero-container"data-aos="fade-up">

        {/* LEFT CONTENT */}
        <div className="kids-hero-text">
          <span className="kids-badge">Krishna Kids Academy Tendua</span>

          <h1 data-aos="fade-left">
            Where Little Minds <br />
            <span>Bloom & Grow</span>
          </h1>

          <p data-aos="fade-right">
            Our Kids Academy provides a warm, nurturing environment where
            young children discover the joy of learning through play,
            creativity, and exploration.
          </p>

          <div className="kids-hero-buttons"data-aos="fade-down">
            <a href="/admission" className="btn-primary">
              Enroll Your Child →
            </a>
            <a href="/contact" className="btn-secondary">
              Schedule a Visit
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="kids-hero-image">
          <img src={kidsHeroImg} alt="Kids learning happily" />

          <div className="kids-stats">
            <strong>{count}+</strong>
            <span>Happy Kids</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default KidsHero;


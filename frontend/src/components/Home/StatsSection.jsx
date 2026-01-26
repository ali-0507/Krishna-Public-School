import { useEffect, useRef, useState } from "react";
import useCountUp from "../../hooks/useCountUp";


export default function StatsSection() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const students = useCountUp(2500, 1800, startCount);
  const years = useCountUp(25, 1200, startCount);
  const awards = useCountUp(150, 1600, startCount);
  const success = useCountUp(98, 1400, startCount);

  return (
    <section className="stats-wrapper" ref={sectionRef}>
      <div className="stats-card" data-aos="fade-up">
        <div className="stats-grid">

          <div className="stat-item">
            <div className="stat-icon">
              <i className="fa-solid fa-children"></i>
            </div>
            <h3 className="stat-number">{students}+</h3>
            <p className="stat-label">Students Enrolled</p>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <i className="fa-solid fa-trophy"></i>
            </div>
            <h3 className="stat-number">{years}+</h3>
            <p className="stat-label">Years of Excellence</p>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <i className="fa-solid fa-medal"></i>
            </div>
            <h3 className="stat-number">{awards}+</h3>
            <p className="stat-label">Awards Won</p>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <i className="fa-solid fa-star"></i>
            </div>
            <h3 className="stat-number">{success}%</h3>
            <p className="stat-label">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}


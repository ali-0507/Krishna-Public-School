import { FaTrophy, FaMusic, FaPaintBrush, FaRunning } from "react-icons/fa";
import AcademicHero from "../../components/Academics/AcademicHero";
import ExploreMore from "../../components/Academics/ExploreMore";
import "../../styles/academics.css";

const coData = [
  {
    title: "Sports & Games",
    desc: "Physical fitness through indoor and outdoor sports.",
    icon: <FaRunning />
  },
  {
    title: "Arts & Craft",
    desc: "Creative expression through drawing and craft activities.",
    icon: <FaPaintBrush />
  },
  {
    title: "Music & Dance",
    desc: "Training in vocal, instrumental, and dance forms.",
    icon: <FaMusic />
  },
  {
    title: "Competitions",
    desc: "Inter-school and intra-school competitions.",
    icon: <FaTrophy />
  }
];

export default function CoScholastic() {
  return (
    <> 
     <AcademicHero
        icon={<FaTrophy />}
        title="Co-Scholastic Activities"
        subtitle="Encouraging creativity, sports, and holistic development"
      />
    <section className="academics-section">
      <div className="container">
        <div className="row g-4">
          {coData.map((item, index) => (
            <div
              className="col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card academics-card h-100">
                <div className="card-body d-flex gap-3">
                  <div className="icon-box">{item.icon}</div>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        <ExploreMore />   
    </>    
  );
}

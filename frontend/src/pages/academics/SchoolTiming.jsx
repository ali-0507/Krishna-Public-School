import { FaClock, FaSun, FaMoon } from "react-icons/fa";
import AcademicHero from "../../components/Academics/AcademicHero";
import ExploreMore from "../../components/Academics/ExploreMore";
import "../../styles/academics.css";

const timingData = [
  {
    title: "Regular School Hours",
    desc: "Monday to Saturday: 8:00 AM – 3:00 PM",
    icon: <FaClock />
  },
  {
    title: "Morning Assembly",
    desc: "Daily assembly and activities begin at 7:45 AM",
    icon: <FaSun />
  },
  {
    title: "Sunday",
    desc: "School remains closed on Sundays",
    icon: <FaMoon />
  }
];

export default function SchoolTiming() {
  return (
     <>
      <AcademicHero
        icon={<FaClock />}
        title="School Timing"
        subtitle="Structured daily schedule ensuring discipline and balance"
      />
    <section className="academics-section">
      <div className="container">
        <div className="row g-4">
          {timingData.map((item, index) => (
            <div
              className="col-md-4"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 120}
            >
              <div className="card academics-card h-100 text-center">
                <div className="card-body">
                  <div className="icon-box mx-auto mb-3">{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
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

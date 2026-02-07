import { FaUsers, FaComments, FaCalendarCheck } from "react-icons/fa";
import AcademicHero from "../../components/Academics/AcademicHero";
import ExploreMore from "../../components/Academics/ExploreMore";
import "../../styles/academics.css";

const ptmData = [
  {
    title: "Regular PTM",
    desc: "Scheduled parent-teacher meetings every academic term.",
    icon: <FaUsers />
  },
  {
    title: "Student Progress Review",
    desc: "Detailed discussion of academic and behavioral performance.",
    icon: <FaComments />
  },
  {
    title: "Appointment Based",
    desc: "Parents can request additional meetings if required.",
    icon: <FaCalendarCheck />
  }
];

export default function ParentTeacherMeeting() {
  return (
     <>
      <AcademicHero
        icon={<FaUsers />}
        title="Parent-Teacher Meeting"
        subtitle="Strengthening communication between parents and educators"
      />
    <section className="academics-section">
      <div className="container">
        <div className="row g-4">
          {ptmData.map((item, index) => (
            <div
              className="col-md-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card academics-card h-100">
                <div className="card-body text-center">
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

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


      {/* PTM FULL DESCRIPTION */}
    <section className="ptm-description-section" data-aos="fade-up">
      <div className="container">
        <div className="ptm-description-card">

          <h4 className="ptm-description-title">About Parent–Teacher Meeting</h4>
            <p>
              The Parents–Teachers Meet was a productive and insightful event, fostering a strong bond between home and school. Our school conducts PTMs seven times in a month, providing regular opportunities for parents to interact with teachers,discuss their child’s progress, and gain valuable insights into their academic and personal growth.
            </p>

            <p>
              Teachers shared detailed feedback on students’ strengths, areas for improvement, and suggested ways to support their development. The open and honest exchange of ideas helped build trust and understanding, enabling parents and teachers to work together.
            </p>

            <p>
              Each meeting concludes with a renewed sense of collaboration and commitment to students’ overall growth and well-being.
            </p>
        </div>
      </div>
    </section>

    {/* Cards */}
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

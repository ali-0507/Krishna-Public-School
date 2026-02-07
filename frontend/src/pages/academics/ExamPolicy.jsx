import { FaClipboardCheck, FaBalanceScale, FaChartLine, FaUserShield, FaFileAlt } from "react-icons/fa";
import AcademicHero from "../../components/Academics/AcademicHero";
import ExploreMore from "../../components/Academics/ExploreMore";
import "../../styles/academics.css";

const examPolicyData = [
  {
    title: "Continuous Assessment",
    desc: "Regular evaluations through class tests, assignments, and activities.",
    icon: <FaChartLine />
  },
  {
    title: "Periodic Examinations",
    desc: "Scheduled unit tests and term-end examinations as per CBSE guidelines.",
    icon: <FaClipboardCheck />
  },
  {
    title: "Fair Evaluation",
    desc: "Transparent and unbiased assessment system for all students.",
    icon: <FaBalanceScale />
  },
  {
    title: "Student Support",
    desc: "Remedial classes and guidance provided based on performance.",
    icon: <FaUserShield />
  }
];

export default function ExamPolicy() {
  return (
    <>
    <AcademicHero
        icon={<FaFileAlt />}
        title="Exam Policy"
        subtitle="Transparent and fair assessment system for students"
      />
    
    <section className="academics-section">
      <div className="container">
        <div className="row g-4">
          {examPolicyData.map((item, index) => (
            <div
              className="col-md-6"
              key={index}
              data-aos="fade-right"
              data-aos-delay={index * 120}
            >
              <div className="card exam-policy-card h-100">
                <div className="card-body d-flex gap-3">
                  <div className="icon-box">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.desc}</p>
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

import { FaFileAlt, FaShieldAlt, FaGavel, FaFolderOpen } from "react-icons/fa";
import AcademicHero from "../../components/Academics/AcademicHero";
import ExploreMore from "../../components/Academics/ExploreMore";
import "../../styles/academics.css";

const policyData = [
  {
    title: "Academic Policy",
    desc: "Guidelines for curriculum, evaluation, and promotion.",
    icon: <FaFileAlt />
  },
  {
    title: "Discipline Policy",
    desc: "Rules ensuring a safe and respectful learning environment.",
    icon: <FaShieldAlt />
  },
  {
    title: "Examination Policy",
    desc: "Transparent and fair examination procedures.",
    icon: <FaGavel />
  }
];

export default function PolicyDocumentation() {
  return (
    <>
      <AcademicHero
        icon={<FaFolderOpen />}
        title="Rules & Regulations"
        subtitle="Guidelines and policies ensuring a safe learning environment"
      />
    <section className="academics-section">
      <div className="container">
        <div className="row g-4">
          {policyData.map((item, index) => (
            <div
              className="col-md-4"
              key={index}
              data-aos="fade-left"
              data-aos-delay={index * 120}
            >
              <div className="card academics-card h-100">
                <div className="card-body">
                  <div className="icon-box mb-3">{item.icon}</div>
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

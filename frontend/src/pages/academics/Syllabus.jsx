import { FaClipboardList, FaPalette, FaDesktop, FaLanguage } from "react-icons/fa";
import AcademicHero from "../../components/Academics/AcademicHero";
import ExploreMore from "../../components/Academics/ExploreMore";
import "../../styles/academics.css";

const syllabusData = [
  {
    title: "CBSE Curriculum",
    desc: "Following the latest NCERT syllabus for all classes",
    icon: <FaClipboardList />
  },
  {
    title: "Co-curricular Activities",
    desc: "Integrated arts, music, and physical education",
    icon: <FaPalette />
  },
  {
    title: "Computer Education",
    desc: "Compulsory computer classes from Class 1 onwards",
    icon: <FaDesktop />
  },
  {
    title: "Language Programs",
    desc: "Hindi, English, and optional Sanskrit",
    icon: <FaLanguage />
  }
];

export default function Syllabus() {
  return (
    <>
    <AcademicHero
        icon={<FaClipboardList />}
        title="Syllabus"
        subtitle="Excellence in education through comprehensive academic programs"
      />
    <section className="academics-section">
      <div className="container">
        <div className="row g-4">
          {syllabusData.map((item, index) => (
            <div
              className="col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card syllabus-card h-100">
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

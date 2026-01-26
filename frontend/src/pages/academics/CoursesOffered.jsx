import { FaBookOpen, FaBookReader } from "react-icons/fa";
import AcademicHero from "../../components/Academics/AcademicHero";
import ExploreMore from "../../components/Academics/ExploreMore";
import "../../styles/academics.css";


const courses = [
  {
    title: "Primary Education (Class 1–5)",
    desc: "Foundation building with focus on core subjects and holistic development."
  },
  {
    title: "Middle School (Class 6–8)",
    desc: "Comprehensive curriculum with science, mathematics, social studies, and languages."
  },
  {
    title: "Secondary Education (Class 9–10)",
    desc: "CBSE affiliated curriculum preparing students for board examinations."
  },
  {
    title: "Senior Secondary (Class 11–12)",
    desc: "Science, Commerce, and Arts streams with specialized subjects."
  }
];

const CoursesOffered = () => {
  return (
     <>
      <AcademicHero
        icon={<FaBookOpen />}
        title="Courses Offered"
        subtitle="Structured academic programs for every stage"
      />

    <div className="row g-4">
      {courses.map((course, index) => (
        <div className="col-md-6" key={index} data-aos="fade-up">
          <div className="card academic-card h-100">
            <div className="card-body d-flex gap-3">
              <div className="academic-icon">
                <FaBookReader />
              </div>

              <div>
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
       <ExploreMore />
    </>
  );
};

export default CoursesOffered;

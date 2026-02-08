import {useState} from "react";
import { FaBookOpen, FaBookReader,FaChevronDown } from "react-icons/fa";
import AcademicHero from "../../components/Academics/AcademicHero";
import ExploreMore from "../../components/Academics/ExploreMore";
import "../../styles/academics.css";


const courses = [

   {
    title: "Pre-Primary (playgroup - UKG)",
    desc: "Focus on play-based and activity-based learning.",
    subjects:[
      ["English", "Hindi", "Mathematics"], 
      ["Environmental Awareness","Art & Craft", "Music & Dance"] 
    ]
  },
  {
    title: "Primary Education (Class 1–5)",
    desc: "Foundation building with focus on core subjects and holistic development.",
    subjects:[
      ["English","Hindi","Mathematics","Environmental Studies(EVS)"],
      ["Computer Science", "Art & craft", "Physical Education"]
    ]
  },
  {
    title: "Middle School (Class 6–8)",
    desc: "Comprehensive curriculum with science, mathematics, social studies, and languages.",
    subjects:[
      ["English","Hindi","Mathematics","Science (Physics, CHemistry, Biology)"],
      ["Social Science (History, Civics, Geography)", "Sanskrit (as third language)"], 
      ["Computer Scirnce","General Knowledge", "Art Education"], 
      ["Yoga", "Games","Robotics","Financial Literacy"]
    ]
  },
  {
    title: "High School (Class 9–10)",
    desc: "CBSE affiliated curriculum preparing students for board examinations.",
    subjects:[
      ["Language I (English)","Language II (Hindi)","Mathematics"],
      ["Science (Physics, CHemistry, Biology)"],
      ["Social Science (History, Civics, Geography, Economics)"], 
      ["Artificial Intelligence/Computer Applications (Skill Subject)"],
      ["Yoga","Games"]
    ]
  },
  {
    title: "Senior Secondary (Class 11–12)",
    desc: "Science, Commerce, and Arts streams with specialized subjects.",
    subjects:[
      ["Science Stream: English,Physics,Chemistry,Mathematics/Biology,Computer Science/Physical Education(optional)"],
      ["Commerce Stream: English, Accountancy, Business Studies, Economics, Mathematics/Applied Mathematics/Physical Education(optional)"]
    ]
  }
];

const CoursesOffered = () => {

  const [activeIndex, setActiveIndex] = useState();

  const toggleCard = (index) =>{
    setActiveIndex(activeIndex === index ? null : index);
  };

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
          <div className="card academic-card">

          <div
          className="card-body d-flex justify-content-between align-items-start course-header"
          onClick={(e)=>{
            e.stopPropagation();
            toggleCard(index);
          }}
          >
            <div className="card-body d-flex">
              <div className="academic-icon">
                <FaBookReader />
              </div>

              <div>
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.desc}</p>
              </div>
            </div>
            
          <FaChevronDown
                  className={`dropdown-icon ${
                    activeIndex === index ? "rotate" : ""
                  }`}
                />
          </div>
        {activeIndex === index && (
          <div className="course-dropdown">
            <h6>Core Subjects:</h6>
            <ul>
              {course.subjects.map((group,i)=>(
                <li key={i}>{group.join(" , ")}</li>
              ))}
            </ul>
          </div>
        )}

        </div>
        </div>
      ))}
    </div>
       <ExploreMore />
    </>
  );
};

export default CoursesOffered;

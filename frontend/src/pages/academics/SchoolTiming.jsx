import { FaClock, FaSun, FaMoon } from "react-icons/fa";
import AcademicHero from "../../components/Academics/AcademicHero";
import ExploreMore from "../../components/Academics/ExploreMore";
import "../../styles/academics.css";

const timingData = [
  {
    title: "Regular School Hours",
    desc: "Monday to Friday: 7:30 AM – 1:15 PM",
    icon: <FaClock />
  },
  {
    title: "Regular School Hours",
    desc: "Saturday: 7:30 AM – 11:30 AM",
    icon: <FaClock />
  },
  {
    title: "Working Hours of the School Office",
    desc: "Monday to Saturday: 7:30 AM to 2:30 PM",
    icon: <FaSun />
  },
  {
    title: "Holidays",
    desc: "The School office remains closed on Sundays & Public holidays.",
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




       {/* SESSION / TERMS */}
    <div className="session-terms" data-aos="fade-up">
      <h3 className="session-title">SESSION / TERMS</h3>

      <p>
        The school session starts from <b>1st April</b> to <b>31st March</b> of the next year.
        There will be two terms as under:
      </p>

      <table className="session-table">
        <tbody>
          <tr>
            <td><strong>FIRST TERM</strong></td>
            <td>1st April to 04th Oct.</td>
          </tr>
          <tr>
            <td><strong>SECOND TERM</strong></td>
            <td>05th Oct. to 31st March</td>
          </tr>
          <tr>
            <td><strong>EXAM</strong></td>
            <td>Half Yearly – Mid week of Sept.</td>
          </tr>
          <tr>
            <td><strong>ANNUAL</strong></td>
            <td>Mid week of February</td>
          </tr>
          <tr>
            <td><strong>VACATION</strong></td>
            <td>1st May to 15th June</td>
          </tr>
        </tbody>
      </table>
    </div> 







        <div className="row g-4">
          {timingData.map((item, index) => (
            <div
              className="col-md-6"
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

      {/* NOTE */}
        <div className="school-timing-note" data-aos="fade-up">
          <h6><strong>Note- </strong>  
            From Monday to Friday : Office will be closed from 01:00 PM to 01:30 PM for lunch </h6>
        </div>
    </section>

   
      <ExploreMore />
    </>
  );
}

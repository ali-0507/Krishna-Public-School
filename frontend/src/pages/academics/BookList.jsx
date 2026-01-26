import { FaBookOpen, FaDownload, FaListUl } from "react-icons/fa";
import { RiBookShelfFill } from "react-icons/ri";
import AcademicHero from "../../components/Academics/AcademicHero";
import ExploreMore from "../../components/Academics/ExploreMore";
import "../../styles/academics.css";

const bookListData = [
  {
    title: "Primary Section",
    desc: "Book list for Nursery to Class V (2026–27)",
    icon: <FaBookOpen />
  },
  {
    title: "Middle & Senior",
    desc: "Book list for Class VI to XII",
    icon: <FaListUl />
  },
  {
    title: "Download PDF",
    desc: "Download complete book list in PDF format.",
    icon: <FaDownload />
  }
];

export default function BookList() {
  return (
     <>
      <AcademicHero
        icon={<RiBookShelfFill />}
        title="Book List 2026–27"
        subtitle="Prescribed textbooks for all academic levels"
      />
    <section className="academics-section">
      <div className="container">
        <div className="row g-4">
          {bookListData.map((item, index) => (
            <div
              className="col-md-4"
              key={index}
              data-aos="flip-up"
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

import { useState } from "react";
import {
  FaTrophy,
  FaPaintBrush,
  FaRunning,
  FaChevronDown,
  FaUsers,
} from "react-icons/fa";
import AcademicHero from "../../components/Academics/AcademicHero";
import ExploreMore from "../../components/Academics/ExploreMore";
import "../../styles/academics.css";

const coData = [
  {
    title: "Sports & Games",
    desc: "Physical fitness through indoor and outdoor sports.",
    icon: <FaRunning />,
    isSports: true,
  },
  {
    title: "Co-Curricular Activities",
    desc: "Creative expression through drawing and craft activities.",
    icon: <FaPaintBrush />,
    isActivities: true,
  },
  {
    title: "Leadership & Activities",
    desc: "Leadership development, governance, and student engagement programs.",
    icon: <FaUsers />,
    isLeadership: true,
  },
  {
    title: "Competitions",
    desc: "Academic, creative, and skill-based competitions for holistic growth.",
    icon: <FaTrophy />,
    isCompetition: true,
  },
];

export default function CoScholastic() {
  const [openCard, setOpenCard] = useState(null);

  return (
    <>
      <AcademicHero
        icon={<FaTrophy />}
        title="Co-Scholastic Activities"
        subtitle="Encouraging creativity, leadership, sports, and holistic development"
      />

      <section className="academics-section">
        <div className="container">
          <div className="row g-4">
            {coData.map((item, index) => (
              <div className="col-md-12" key={index}>
                <div
                  className="card academic-card"
                  onClick={() =>
                    setOpenCard(openCard === item.title ? null : item.title)
                  }
                  style={{ cursor: "pointer" }}
                >
                  <div className="card-body d-flex gap-3">
                    <div className="icon-box">{item.icon}</div>

                    <div>
                      <h5 className="sports-title">
                        {item.title}
                        <span>
                          <FaChevronDown 
                          className={`dropdowns-icon ${
                            openCard === item.title ? "open" : ""
                          }`}
                          />
                          </span>
                      </h5>

                      {openCard !== item.title && <p>{item.desc}</p>}

                      {/* SPORTS */}
                      {item.isSports && openCard === item.title && (
                        <div className="sports-details">
                          <h6>PRIMARY GROUP (I to V)</h6>
                          <p>
                            Sprint, Speed Walk, Sac Race, Spoon–Marble Race,
                            3-Legged Race, Relay Race, Football, Cricket,
                            Basketball, Kabaddi, Kho-Kho, PT Drill & Yoga.
                          </p>

                          <h6>MIDDLE GROUP (VI to VIII)</h6>
                          <p>
                            Sprint, Skipping Race, Chess, Carrom, Athletics,
                            Cricket, Football, Basketball, Taekwondo, Karate,
                            Judo, Badminton, Kho-Kho, Table Tennis, PT Drill &
                            Yoga, Gymnastics, First Aid.
                          </p>

                          <h6>SECONDARY GROUP (IX to XII)</h6>
                          <p>
                            Sprint, Chess, Carrom, Athletics, Cricket, Football,
                            Basketball, Taekwondo, Karate, Judo, Badminton,
                            Kho-Kho, Table Tennis, PT Drill & Yoga, Gymnastics,
                            First Aid.
                          </p>

                          <div className="sports-note">
                            <strong>Note:</strong> Minimum 2 events compulsory.
                          </div>
                        </div>
                      )}

                      {/* CO-CURRICULAR */}
                      {item.isActivities && openCard === item.title && (
                        <div className="sports-details">
                          <h6>CLASSES I & II</h6>
                          <p>
                            Drawing & Painting, Clay Modelling, Story Telling,
                            Fancy Dress, Paper Craft, Music, Dance, Memory
                            Contest.
                          </p>

                          <h6>CLASSES III – V</h6>
                          <p>
                            Music, Dance, Debate, Extempore, Craft, Painting,
                            Gardening, Rangoli, Quiz, Essay Writing.
                          </p>

                          <h6>CLASSES VI – VIII</h6>
                          <p>
                            Debate, Quiz, Craft, Computer, Yoga, Photography,
                            Scientific & Mathematical Skill Development.
                          </p>

                          <h6>CLASSES IX – XII</h6>
                          <p>
                            Debate, Quiz, Public Speaking, Computer,
                            Photography, Gardening, Advertisement Making.
                          </p>
                        </div>
                      )}
                      {/* LEADERSHIP & SCHOOL ACTIVITIES */}
                      {item.isLeadership && openCard === item.title && (
                        <div className="sports-details">
                          <h6>Students Council Election</h6>
                          <p>
                            <em>
                              “A leader is one who knows the way, goes the way
                              and shows the way.”
                            </em>
                          </p>
                          <p>
                            KPS Tendua conducted school elections with
                            enthusiastic participation from Classes VI to XII.
                            Students contested for positions such as Captain,
                            Vice-Captain, Discipline Incharge, Head Boy, and Head
                            Girl through a rigorous screening and panel review
                            process. The elections promoted leadership,
                            teamwork, and responsibility.
                          </p>

                          <h6 className="mt-3">Special Assembly</h6>
                          <p>
                            Special assemblies play a vital role in fostering
                            unity, cultural awareness, and confidence. During
                            the academic year 2025–26, students actively
                            participated in assemblies featuring speeches,
                            skits, songs, poems, and presentations aligned with
                            national events and values.
                          </p>
                        </div>
                      )}
                       {/* COMPETITIONS */}
                      {item.isCompetition && openCard === item.title && (
                        <div className="sports-details">
                          <p>
                            Krishna Public School (KPS) Tendua hosted a wide
                            range of academic, creative, and sports competitions
                            to nurture students’ talents and skills.
                          </p>

                          <ul>
                            <li>
                              <strong>Personality Development:</strong> Speech,
                              Extempore, Recitation, Fancy Dress, Solo Dance,
                              Solo Song, Shloka Recitation, Master Chef.
                            </li>
                            <li>
                              <strong>Problem Solving Skills:</strong> Quiz,
                              Memory Contest, Word Puzzle, Object Identification.
                            </li>
                            <li>
                              <strong>Creative Thinking:</strong> Creative
                              Writing, Story Writing, Handwriting, Sorting.
                            </li>
                            <li>
                              <strong>Critical Thinking:</strong> Debate and Ad
                              Making.
                            </li>
                            <li>
                              <strong>Creative Development:</strong> Rangoli,
                              Drawing, Jewelry Making, Poster Making, Best Out
                              of Waste, Origami, Rakhi Making, Diya Decoration.
                            </li>
                          </ul>

                          <p>
                            Every year more than <strong>100 competitions</strong>{" "}
                            are conducted and over <strong>300 prizes</strong>{" "}
                            are awarded, promoting all-round development.
                          </p>
                        </div>
                      )}
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

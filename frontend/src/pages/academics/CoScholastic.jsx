import { useState } from "react";
import { FaTrophy, FaMusic, FaPaintBrush, FaRunning } from "react-icons/fa";
import AcademicHero from "../../components/Academics/AcademicHero";
import ExploreMore from "../../components/Academics/ExploreMore";
import "../../styles/academics.css";

const coData = [
  {
    title: "Sports & Games",
    desc: "Physical fitness through indoor and outdoor sports.",
    icon: <FaRunning />,
    isSports: true
  },
  {
    title: "Co-Curricular Activities",
    desc: "Creative expression through drawing and craft activities.",
    icon: <FaPaintBrush />,
    isActivities: true
  },
  {
    title: "Music & Dance",
    desc: "Training in vocal, instrumental, and dance forms.",
    icon: <FaMusic />
  },
  {
    title: "Competitions",
    desc: "Inter-school and intra-school competitions.",
    icon: <FaTrophy />
  }
];

export default function CoScholastic() {
  const [openCard, setOpenCard] = useState(null);

  return (
    <>
      <AcademicHero
        icon={<FaTrophy />}
        title="Co-Scholastic Activities"
        subtitle="Encouraging creativity, sports, and holistic development"
      />

      <section className="academics-section">
        <div className="container">
          <div className="row g-4">

            {coData.map((item, index) => (
              <div className="col-md-12" key={index}>
                <div
                  className="card academics-card h-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    if(item.isSports || item.isActivities){
                      setOpenCard(openCard === item.title ? null : item.title);
                    }
                  }}
                  style={{
                    cursor:
                      item.isSports || item.isActivities
                        ? "pointer"
                        : "default"
                  }}
                >
                  <div className="card-body d-flex gap-3">
                    <div className="icon-box">{item.icon}</div>

                    <div>
                      <h5 className="sports-title">
                        {item.title}

                        {(item.isSports || item.isActivities) && (
                          <span className="dropdown-icon">
                            {openCard === item.title ? "<" : ">"}
                          </span>
                        )}
                      </h5>

                      {/* NORMAL CARDS */}
                        {item.isSports && openCard !== item.title && <p>{item.desc}</p>}
                        {item.isActivities && openCard !== item.title && <p>{item.desc}</p>}
                        {!item.isSports && !item.isActivities && <p>{item.desc}</p>}
      

                      {/* SPORTS DROPDOWN */}
                      {item.isSports && openCard === item.title && (
                        <div className="sports-details">
                          <h6>PRIMARY GROUP (I to V)</h6>
                          <p>
                            Sprint, Speed Walk, Sac Race, Spoon–Marble Race, 3-Legged Race, Relay Race, Football, Cricket, Basketball, Kabaddi, Kho-Kho, PT Drill & Yoga.
                          </p>

                          <h6>MIDDLE GROUP (VI to VIII)</h6> 
                          <p> 
                            Sprint, Skipping Race, Chess, Carrom, Athletics, Cricket, Football, Basketball, Taekwondo, Karate, Judo, Badminton, Kho-Kho, Table Tennis, PT Drill & Yoga, Gymnastics, First Aid. 
                          </p>

                          <h6>SECONDARY GROUP (IX to XII)</h6> 
                          <p> 
                            Sprint, Chess, Carrom, Athletics, Cricket, Football, Basketball, Taekwondo, Karate, Judo, Badminton, Kho-Kho, Table Tennis, PT Drill & Yoga, Gymnastics, First Aid. 
                          </p>

                          <div className="sports-note">
                            <strong>Note:</strong> Minimum 2 events compulsory.
                          </div>
                        </div>
                      )}

                      {/* CO-CURRICULAR DROPDOWN */}
                      {item.isActivities && openCard === item.title && (
                        <div className="sports-details">
                          <h6>CLASSES I & II</h6>
                          <p>
                            Drawing & Painting, Clay/Plasticine Modelling, Playing in Sand-Pit, Splashing in the Kids Pool, Story-Telling, Group Games, Collage/Cutting & Pasting, Origamy, Greeting Card Making, Recitation, Literary Activities, Fancy Dress, Paper Craft, Music, Dance, Memory Contest
                          </p>

                          <h6>CLASSES III – V</h6>
                          <p>
                            Music, Dance, Dramatics Debate, Extempore, Craft, Water & Oil Painting, Embroidery, Calligraphy Science Club, Gardening, Flower Decoration, Salad Decoration, Rangoli, Computer Programming, Public Speaking, Quiz Programme, Essay Writing, Recitation, Elocution, Mono Act Play, Word Building.
                          </p>

                          <h6>CLASSES VI – VIII</h6>
                          <p>
                            Music, Dance, Dramatics, Debate, Quiz, Extempore, Craft, Drawing, Rangoli, Computer, Cooking without fire, Public speaking, calligraphy, Yoga, Election, Photography, Scientific skill development, Mathematical skill development, Quiz, Rock band, Gardening, Newspaper – making, Word building, Advertisement – making
                          </p>

                          <h6>CLASSES IX – XII</h6>
                          <p>
                            Music, Dance, Dramatics, Debate, Quiz, Extempore, Craft, Drawing, Rangoli, Computer, Cooking without fire, public speaking, calligraphy, Yoga, Election, Photography, Scientific skill development, Mathematical skill development, Quiz, Rock band, Gardening, Newspaper – making, Word building, Advertisement – making
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

      {/*Explore More*/} 
      <ExploreMore />
    </>
  );
}
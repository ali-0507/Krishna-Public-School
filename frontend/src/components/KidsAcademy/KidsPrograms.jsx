
const programs = [
  {
    image:"/kids/kids13.jpeg",
    title: "Play Group",
    age: "2 - 3 years",
    desc:
      "Introduction to school environment through play and social interactions.",
    activities: [
      "Sensory Play",
      "Story Time",
      "Basic Motor Skills",
      "Music & Movement",
    ],
  },
  {
    image:"/kids/kids1.jpeg",
    title: "Nursery",
    age: "3 - 4 years",
    desc:
      "Building foundational skills through structured play-based activities.",
    activities: [
      "Pre-Reading",
      "Number Recognition",
      "Art & Craft",
      "Rhymes",
    ],
  },
  {
    image:"/kids/kids7.jpeg",
    title: "LKG",
    age: "4 - 5 years",
    desc:
      "Developing literacy and numeracy skills with interactive learning.",
    activities: [
      "Phonics",
      "Basic Math",
      "Environmental Studies",
      "Creative Expression",
    ],
  },
  {
    image:"/kids/kids9.jpeg",
    title: "UKG",
    age: "5 - 6 years",
    desc:
      "Preparing for primary school with comprehensive skill development.",
    activities: [
      "Reading Fluency",
      "Math Concepts",
      "Science Discovery",
      "Writing Skills",
    ],
  },
];

const KidsPrograms = () => {
  return (
    <section className="kids-programs-modern"data-aos="fade-up">
      <span className="badge">Our Classes</span>

      <h2>Programs Designed for Every Stage</h2>
      <p className="section-subtitle">
        Age-appropriate curriculum that nurtures cognitive, social, and
        emotional development.
      </p>

      <div className="program-grid-modern"data-aos="fade-left">
        {programs.map((program, index) => (
          <div className="program-card-modern" key={index}>
            <img className ="image" src={program.image} alt={program.title} />
            
            <h3>{program.title}</h3>
            <span className="age-text">Age: {program.age}</span>

            <p className="program-desc">{program.desc}</p>
            <div className="activity-tags">
              {program.activities.map((activity, i) => (
                <span key={i}>{activity}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KidsPrograms;

import { useState } from "react";
import "../styles/achievementTwo.css";


const achievementsData = [
  {
    title: "Academic Achievements",
    desc: "Outstanding academic performance and board results achieved by our students.",
    images: [
      "/Achievement/academic1.jpeg",
      "/Achievement/academic2.jpeg",
      "/Achievement/academic3.jpeg",
      "/Achievement/academic4.jpeg"
    ],
  },
  {
    title: "Sports Achievements",
    desc: "State and district level victories in athletics and team sports.",
    images: [
      "/Achievement/sports1.jpeg"
    ],
  },
  {
    title: "Special Achievements",
    desc: "Award-winning performances in music, dance, drama, and arts.",
    images: [
      "/Achievement/special1.jpeg",
      "/Achievement/special2.jpeg",
      "/Achievement/special3.jpeg",
      "/Achievement/special4.jpeg"
    ],
  },
  {
    title: "Olympiads",
    desc: "National and regional level success in Olympiads and quiz competitions.",
    images: [
      "/Achievement/olympiad1.jpeg",
      "/Achievement/olympiad2.jpeg",
      "/Achievement/olympiad3.jpeg",
      "/Achievement/olympiad4.jpeg",
      "/Achievement/olympiad5.jpeg",
      "/Achievement/olympiad6.jpeg",
      "/Achievement/olympiad7.jpeg"
       
    ],
  },
];

export default function Achievements() {
  return (
    <>
      {/* HERO */}
      <section className="ach-hero">
        <span className="ach-badge"data-aos="fade-up">Our Pride</span>
        <h1 data-aos="fade-left">Achievements & Excellence</h1>
        <p style={{marginTop:"40px"}}data-aos="fade-left">
          Celebrating the remarkable accomplishments of our students across academics,
          sports, and cultural activities.
        </p>
      </section>

      {/* ACHIEVEMENT SECTIONS */}
      {achievementsData.map((item, index) => (
        <AchievementSection key={index} data={item}/>
      ))}
    </>
  );
}

function AchievementSection({ data }) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current - 1 + data.images.length) % data.images.length);
  const next = () =>
    setCurrent((current + 1) % data.images.length);

  return (
    <section className="achievement-section">
      <div className="achievement-header">
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
      </div>

      <div className="achievement-slider">
        <button className="slide-btn left" onClick={prev}
        data-aos="fade-down">‹</button>

        <img
          src={data.images[current]}
          alt={data.title}
          className="achievement-image"
        />

        <button className="slide-btn right" onClick={next}
        data-aos="fade-down">›</button>
      </div>
    </section>
  );
}

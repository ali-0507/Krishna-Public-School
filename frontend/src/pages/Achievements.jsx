import { useState } from "react";
import "../styles/achievementTwo.css";


const achievementsData = [
  {
    title: "Academic Achievements",
    desc: "Outstanding academic performance and board results achieved by our students.",
    images: [
      "/award.jpeg",
      "/academic.jpeg",
    ],
  },
  {
    title: "Sports Achievements",
    desc: "State and district level victories in athletics and team sports.",
    images: [
      "/sportClub.webp",
      "/sportClub2.webp",
    ],
  },
  {
    title: "Cultural Achievements",
    desc: "Award-winning performances in music, dance, drama, and arts.",
    images: [
      "/assets/achievements/cultural1.jpg",
    ],
  },
  {
    title: "Olympiads & Competitions",
    desc: "National and regional level success in Olympiads and quiz competitions.",
    images: [
      "/olympiad.jpeg",
      "/olympiad2.jpeg",
       
    ],
  },
];

export default function Achievements() {
  return (
    <>
      {/* HERO */}
      <section className="ach-hero">
        <span className="ach-badge">Our Pride</span>
        <h1>Achievements & Excellence</h1>
        <p>
          Celebrating the remarkable accomplishments of our students across academics,
          sports, and cultural activities.
        </p>
      </section>

      {/* ACHIEVEMENT SECTIONS */}
      {achievementsData.map((item, index) => (
        <AchievementSection key={index} data={item} />
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
        <button className="slide-btn left" onClick={prev}>‹</button>

        <img
          src={data.images[current]}
          alt={data.title}
          className="achievement-image"
        />

        <button className="slide-btn right" onClick={next}>›</button>
      </div>
    </section>
  );
}

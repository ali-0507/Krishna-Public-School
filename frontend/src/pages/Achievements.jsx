// import { useState } from "react";
// import "../styles/achievementTwo.css";


// const achievementsData = [
//   {
//     title: "Academic Achievements",
//     desc: "Outstanding academic performance and board results achieved by our students.",
//     images: [
//       "/award.jpeg",
//       "/academic.jpeg",
//     ],
//   },
//   {
//     title: "Sports Achievements",
//     desc: "State and district level victories in athletics and team sports.",
//     images: [
//       "/sportClub.webp",
//       "/sportClub2.webp",
//     ],
//   },
//   {
//     title: "Cultural Achievements",
//     desc: "Award-winning performances in music, dance, drama, and arts.",
//     images: [
//       "/assets/achievements/cultural1.jpg",
//     ],
//   },
//   {
//     title: "Olympiads & Competitions",
//     desc: "National and regional level success in Olympiads and quiz competitions.",
//     images: [
//       "/olympiad.jpeg",
//       "/olympiad2.jpeg",
       
//     ],
//   },
// ];

// export default function Achievements() {
//   return (
//     <>
//       {/* HERO */}
//       <section className="ach-hero">
//         <span className="ach-badge">Our Pride</span>
//         <h1>Achievements & Excellence</h1>
//         <p>
//           Celebrating the remarkable accomplishments of our students across academics,
//           sports, and cultural activities.
//         </p>
//       </section>

//       {/* ACHIEVEMENT SECTIONS */}
//       {achievementsData.map((item, index) => (
//         <AchievementSection key={index} data={item} />
//       ))}
//     </>
//   );
// }

// function AchievementSection({ data }) {
//   const [current, setCurrent] = useState(0);

//   const prev = () =>
//     setCurrent((current - 1 + data.images.length) % data.images.length);
//   const next = () =>
//     setCurrent((current + 1) % data.images.length);

//   return (
//     <section className="achievement-section">
//       <div className="achievement-header">
//         <h2>{data.title}</h2>
//         <p>{data.desc}</p>
//       </div>

//       <div className="achievement-slider">
//         <button className="slide-btn left" onClick={prev}>‹</button>

//         <img
//           src={data.images[current]}
//           alt={data.title}
//           className="achievement-image"
//         />

//         <button className="slide-btn right" onClick={next}>›</button>
//       </div>
//     </section>
//   );
// }


import { useEffect, useState } from "react";
import "../styles/achievementTwo.css";
import { getAchievements } from "../services/api";

export default function Achievements() {
  const [grouped, setGrouped] = useState({});

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const res = await getAchievements();

      // 🔥 group by category
      const groupedData = res.data.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
      }, {});

      setGrouped(groupedData);
    } catch (err) {
      console.error(err);
    }
  };

  const formatCategory = (cat) => {
  switch (cat) {
    case "sports":
      return "Sports Achievements";
    case "academic":
      return "Academic Achievements";
    case "olympiad":
      return "Olympiad Achievements";
    case "special":
      return "Special Achievements";
    default:
      return cat;
  }
};

  return (
    <>
      <section className="ach-hero">
        <span className="ach-badge">Our Pride</span>
        <h1>Achievements & Excellence</h1>
        <p>
          Celebrating student success across academics, sports, and culture.
        </p>
      </section>

      {Object.keys(grouped).map((category) => (
        <AchievementSection
            key={category}
            title={formatCategory(category)}
            data={grouped[category]}
          />
      ))}
    </>
  );
}

function AchievementSection({ title, data }) {
  const [current, setCurrent] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
  setImgIndex(0);
}, [current]);

const prev = () =>
    setCurrent((current - 1 + data.length) % data.length);

const next = () =>
    setCurrent((current + 1) % data.length);

 const nextImg = () => {
  const images = data[current]?.images || [];
  setImgIndex((prev) => (prev + 1) % images.length);
};

const prevImg = () => {
  const images = data[current]?.images || [];
  setImgIndex((prev) =>
    prev === 0 ? images.length - 1 : prev - 1
  );
};



  return (
    <section className="achievement-section">
      <div className="achievement-header">
        <h2>{title}</h2>
        <p>{data[current]?.description}</p>
      </div>

      <div className="achievement-slider">
        <button className="slide-btn left" onClick={prevImg}>‹</button>

        <img
         src={data[current]?.images?.[imgIndex]?.url}
          alt={data[current]?.title}
          className="achievement-image"
        />
           
        <button className="slide-btn right" onClick={nextImg}>›</button>
      </div>
    </section>
  );
}
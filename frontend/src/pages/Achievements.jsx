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
        <span className="ach-badge"data-aos="fade-up">Our Pride</span>
        <h1 data-aos="fade-left">Achievements & Excellence</h1>
        <p style={{marginTop:"40px"}}data-aos="fade-left">
          Celebrating the remarkable accomplishments of our students across academics,
          sports, and cultural activities.
        </p>
      </section>

       {Object.keys(grouped).map((category, index) => (
  <AchievementSection
    key={index}
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
        <button className="slide-btn left" onClick={prevImg}
        data-aos="fade-down">‹</button>

        <img
         src={data[current]?.images?.[imgIndex]?.url}
          alt={data[current]?.title}
          className="achievement-image"
        />

        <button className="slide-btn right" onClick={nextImg}
        data-aos="fade-down">›</button>
      </div>
    </section>
  );
}

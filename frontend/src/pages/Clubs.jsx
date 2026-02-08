import "../styles/clubs.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from "react";


// ---------- Image Slider ----------
function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + images.length) % images.length);
  const next = () =>
    setIndex((index + 1) % images.length);

  return (
    <div className="club-slider">
      <img src={images[index]} alt="club activity" />
      <button className="slider-btn left" onClick={prev}>
        <FaArrowLeft/>
      </button>
      <button className="slider-btn right" onClick={next}>
        <FaArrowRight />
      </button>
    </div>
  );
}

// ---------- Club Section ----------
function ClubSection({ title, icon, text, images, reverse }) {
  return (
    <section className={`club-section ${reverse ? "reverse" : ""}`}>
      <div className="club-text">
        <div className="club-title">
          <span className="club-icon">{icon}</span>
          <h2>{title}</h2>
        </div>
        <p>{text}</p>
      </div>

      <ImageSlider images={images} />
      
    </section>
  );
}

// ---------- MAIN PAGE ----------
export default function Clubs() {
  return (
    <>
      {/* HERO */}
      <section className="clubs-hero">
        <h1>Students & Clubs</h1>
        <p>
          Empowering students beyond academics through leadership, creativity,
          teamwork, and innovation.
        </p>
      </section>

      {/* ABOUT */}
      <section className="clubs-about">
        <h2>About Our Clubs</h2>
        <p>
          Our diverse range of clubs provides students opportunities to explore<br/>
          interests, develop skills, and discover hidden talents.From literature<br/>
          to science, sports to arts — there is something for everyone.
        </p>
      </section>

      {/* CLUBS */}
      <ClubSection
        title="Literary Club"
        text="The Literary Club nurtures the love for language and literature through debates, poetry, essay writing, and creative workshops."
        images={[
          "/Lclub.webp",
          "/Lclub2.jpg",
        ]}
      />
      <hr/>
      <ClubSection
        reverse
        title="Science Club"
        text="A hub for curious minds where students engage in experiments, exhibitions, robotics, and science olympiads."
        images={[
          "/Sclub.webp",
          "/Sclub2.avif",
        ]}
      />
      <hr/>
      <ClubSection
        title="Sports Club"
        text="Promotes fitness, teamwork, and sportsmanship through cricket, football, athletics, and yoga."
        images={[
          "/sportClub.webp",
          "/sportClub2.webp",
        ]}
      />
      <hr/>
      <ClubSection
        reverse
        title="Art & Craft Club"
        text="Encourages creativity through painting, sketching, clay modelling, and craft activities."
        images={[
          "/AandC.jpg",
          "/AandC2.webp",
        ]}
      />
      <hr/>
      <ClubSection
        title="Music & Dance Club"
        text="Celebrates cultural heritage through classical and modern music and dance performances."
        images={[
          "/MandD.jpeg",
          "/MandD2.webp",
        ]}
      />
      <hr/>
      <ClubSection
        reverse
        title="Eco Club"
        text="Builds environmental awareness through tree plantation drives, cleanliness campaigns, and eco initiatives."
        images={[
          "/ecoClub.avif",
          "/ecoClub2.webp",
        ]}
      />

      {/* HOUSES */}
      <section className="houses-section">
        <h2>School Houses</h2>
        <p>
          <i>Our house system promotes leadership, teamwork, and healthy
          competition.</i>
        </p>

        <div className="houses-grid">
          <div className="house-card red">
            <h3>Shaurya House</h3>
            <span>Motto: Courage & Valour</span>
          </div>
          <div className="house-card blue">
            <h3>Pragya House</h3>
            <span>Motto: Wisdom & Knowledge</span>
          </div>
          <div className="house-card green">
            <h3>Ekta House</h3>
            <span>Motto: Unity & Harmony</span>
          </div>
          <div className="house-card yellow">
            <h3>Tej House</h3>
            <span>Motto: Brilliance & Energy</span>
          </div>
        </div>
      </section>

      {/* COMPETITIONS */}
      <section className="competitions">
        <h2 style={{color:"#fbbc05",fontStyle:"bold"}}>Inter-House Competitions</h2>
        <div className="competition-grid">
          <div>Annual Sports Meet</div>
          <div>Quiz & Debate</div>
          <div>Cultural Fest</div>
          <div>Art Exhibition</div>
        </div>
      </section>
    </>
  );
}


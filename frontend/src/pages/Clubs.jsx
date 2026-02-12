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
function ClubSection({ title, icon, text,objective,images, reverse }) {
  return (
    <section className={`club-section ${reverse ? "reverse" : ""}`}>
      <div className="club-text">
        <div className="club-title">
          <span className="club-icon">{icon}</span>
          <h2>{title}</h2>
        </div>
        <p>{text}</p>
        <p>{objective}</p>
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
        title="Photography Club "
        text=""
        objective="Objective: To nurture creativity and technical skills in photography, encouraging students to capture and express their perspectives, while exploring various genres like nature, portrait, and documentary photography."
        images={[
          "/Club/PhotoClub.jpeg",
          "/Club/PhotoClub2.jpeg",
        ]}
      />
      <hr/>
      <ClubSection
        reverse
        title="Heritage Club "
        text=""
        objective="Objective: To instill a sense of pride and appreciation for our cultural heritage, promoting awareness, preservation, and exploration of India's rich history, art, and traditions through interactive activities and visits."
        images={[
          "/Club/HeritageClub.jpeg",
          "/Club/HeritageClub2.jpeg",
        ]}
      />
      <hr/>
      <ClubSection
        title="Sports Club"
        text= ""
        objective=
        "Objective: To promote physical fitness, teamwork, and sportsmanship among students, while identifying and nurturing talent in various sports disciplines."
        images={[
          "/Club/Sport4.JPG",
          "/Club/Sport5.JPG",
          "/Club/Sport6.JPG",
          "/Club/Sport7.JPG",
           "/Club/Sport8.jpeg",
            "/Club/Sport9.jpeg"
        ]}
      />
      <hr/>
      <ClubSection
        reverse
        title="G K Club "
        text=""
        objective="Objective: To spark curiosity and broaden knowledge horizons! The G K Club aims to foster a culture of general awareness, encouraging students to stay updated, think critically, and explore diverse subjects."
        images={[
          "/Club/GKClub1.JPG",
          "/Club/GKClub2.JPG",
          "/Club/GKClub3.JPG",
        ]}
      />
      <hr/>
      <ClubSection
        title="Events Club "
        text=""
        objective="Objective: The Events Club plans and executes engaging activities, fostering teamwork, leadership, and fun, making school life memorable for all."
        images={[
          "/Club/Dance3.JPG",
          "/Club/Fest1.jpeg",
          "/Club/Elec4.jpeg",  
        ]}
      />
      <hr/>
      <ClubSection
        reverse
        title="Hindi Club"
        text=""
        objective="Objective: To celebrate the beauty of Hindi language and culture! The Hindi Club promotes linguistic pride, creativity, and expression through literature, debates, and cultural activities."
        images={[
          "/Club/HindiClub.jpeg",
          "/Club/HindiClub2.jpeg",
        ]}
      />
      <hr/>
      <ClubSection
        title="English Club "
        text=""
        objective="Objective: To enhance language skills and confidence! The English Club fosters effective communication, creative expression, and literary appreciation through discussions, debates, and writing workshops."
        images={[
          "/Club/EnglishClub.jpeg",
          "/MandD2.webp",
        ]}
      />
      <hr/>
     
      <ClubSection
        reverse
        title="Eco Club"
        text=""
        objective="Objective: To nurture environmental stewards! The Eco Club promotes sustainability, conservation, and eco-awareness through activities like tree planting, clean-ups, and eco-friendly initiatives."
        images={[
          "/Club/EcoClub.jpeg",
          "/Club/EcoClub2.jpeg",
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
            <h3>AGNI HOUSE</h3>
            <span>Motto: Courage & Valour</span>
          </div>
          <div className="house-card blue">
            <h3>JAL HOUSE</h3>
            <span>Motto: Wisdom & Knowledge</span>
          </div>
          <div className="house-card green">
            <h3>PRITHVI HOUSE</h3>
            <span>Motto: Unity & Harmony</span>
          </div>
          <div className="house-card yellow">
            <h3>VAYU HOUSE</h3>
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


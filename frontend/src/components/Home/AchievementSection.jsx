import {useState} from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "../../styles/achievements.css";
import { useNavigate } from "react-router-dom";

const achievements = [
    {
        title: "Best School Award",
        subtitle: "Recognized for excellence",
        tag: "District Level Recognition",
        image:"src/assets/award.jpeg"
    },
    {
        title: "Academic Excellence",
        subtitle: "Outstanding CBSE board results",
        tag: "Academic Achievement",
        image:"src/assets/academic.jpeg"
    },
     {
        title: "Sports Excellence",
        subtitle: "Champions in inter-school sports events",
        tag: "Sports Achievement",
        image:"src/assets/sports.jpeg"
    },  
];

export default function AchievementSection (){
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    const next = () =>
        setIndex((prev) => (prev + 1) % achievements.length);
    const prev = () =>
        setIndex((prev)=> prev === 0 ? achievements.length -1 : prev -1);
    
    const current = achievements[index];

    return(
        <section className ="achievements-section">
            <span className="section-pill" data-aos="fade-up"> Our Pride</span>
            <h2 data-aos="fade-left">Achievements and Excellence</h2>
            <p className="section-subtitle" data-aos="fade-right">
                Celebrating the outstanding accomplishments of our students in
                academics, sports, and beyond.
            </p>


            <div className="achievement-carousel"data-aos="fade-up">
                <button className="nav-btn left"
                onClick={prev}> <FaArrowLeft/></button>

                <div className="achievement-card">
                    <div className="ach-image">
                        <img src={current.image} alt="image"/>
                    </div>

                    <div className="achievement-content">
                        <h4>{current.title}</h4>
                        <p>{current.subtitle}</p>
                        <span className="achieve-tag">{current.tag}</span>
                    </div>
                </div>
                <button className="nav-btn right"
                onClick={next}>  <FaArrowRight /></button>
            </div>

            <div className="dots">
                {achievements.map((_,i) =>(
                    <span
                    key={i}
                    className={i === index ? "dot active": "dot"}
                    />
                ))}
            </div>
            
            <button className="view-all-btn"data-aos="fade-right"
            onClick={() => navigate("/achievements")}>
                Explore All Achievements →
            </button>
        </section>
    );
}
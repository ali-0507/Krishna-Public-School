import "./academics.css";

export default function AcademicHero({ icon, title, subtitle }) {
  return (
    <section className="academics-hero">
      <div className="container text-center">
        <div className="hero-icon" data-aos="zoom-in">
          {icon}
        </div>

        <h1 className="hero-title" data-aos="fade-up">
          {title}
        </h1>

        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="120">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

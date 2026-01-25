const dates = [
  {
    title: "Jan 15 - Mar 31",
    desc: "Online Application Period"
  },
  {
    title: "Apr 1 - Apr 15",
    desc: "Entrance Assessment"
  },
  {
    title: "Apr 20 onwards",
    desc: "Result & Admission"
  }
];

const ImportantDates = () => {
  return (
    <section className="important-dates">
      <span className="section-badge">Calendar</span>
      <h2 className="section-title">Important Dates</h2>

      <div className="dates-grid">
        {dates.map((item, index) => (
          <div className="card date-card" key={index}  data-aos="zoom-in"
            data-aos-delay={index * 120}>
            <div className="card-body">
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImportantDates;

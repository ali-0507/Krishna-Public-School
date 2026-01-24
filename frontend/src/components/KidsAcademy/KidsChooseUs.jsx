const features = [
  {
    icon: "fa-heart",
    title: "Caring Environment",
    desc: "Warm and nurturing atmosphere for young learners",
  },
  {
    icon: "fa-star",
    title: "Play-Based Learning",
    desc: "Learning through structured play and exploration",
  },
  {
    icon: "fa-palette",
    title: "Creative Activities",
    desc: "Art, music, and craft to foster creativity",
  },
  {
    icon: "fa-users",
    title: "Small Class Sizes",
    desc: "Individual attention for every child",
  },
  {
    icon: "fa-music",
    title: "Co-curricular Focus",
    desc: "Dance, music, and physical activities",
  },
  {
    icon: "fa-clock",
    title: "Flexible Timings",
    desc: "Half-day options available for younger children",
  },
];

const KidsChooseUs = () => {
  return (
    <section className="kids-why-modern">
      <span className="badge">Why Choose Us</span>

      <h2>The KPS Kids Advantage</h2>

      <div className="why-grid-modern">
        {features.map((item, index) => (
          <div className="why-card-modern" key={index}>
            <div className="why-icon">
              <i className={`fa-solid ${item.icon}`}></i>
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KidsChooseUs;

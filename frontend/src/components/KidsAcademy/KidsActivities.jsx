const activities = [
  "Art & Craft",
  "Storytelling",
  "Music & Dance",
  "Outdoor Play",
  "Rhymes & Phonics"
];

const KidsActivities = () => {
  return (
    <section className="kids-activities">
      <h2>
        Fun Learning Activities
      </h2>

      <div className="activities-list">
        {activities.map((activity, index) => (
          <span
            key={index}
            className="activity-item"
          >
            {activity}
          </span>
        ))}
      </div>
    </section>
  );
};

export default KidsActivities;

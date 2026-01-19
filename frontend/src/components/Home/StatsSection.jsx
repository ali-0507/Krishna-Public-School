export default function StatsSection() {
  return (
    <section className="stats-wrapper">
      <div className="stats-card">
        <div className="stats-grid">

          <div className="stat-item">
            <div className="stat-icon">
              👥
            </div>
            <h3 className="stat-number">2500+</h3>
            <p className="stat-label">Students Enrolled</p>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              🏆
            </div>
            <h3 className="stat-number">25+</h3>
            <p className="stat-label">Years of Excellence</p>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              🎖️
            </div>
            <h3 className="stat-number">150+</h3>
            <p className="stat-label">Awards Won</p>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              ⭐
            </div>
            <h3 className="stat-number">98%</h3>
            <p className="stat-label">Success Rate</p>
          </div>

        </div>
      </div>
    </section>
  );
}
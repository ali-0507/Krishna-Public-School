const AgeCriteria = () => {
  return (
    <section className="admission-section light-bg">
      <div className="container">
        <span className="section-badge">Eligibility</span>
        <h2 className="section-title">Age Criteria for Admission</h2>

        <p className="section-desc">
          Admission eligibility is determined by the age limits set by the State Government
          and CBSE guidelines (as of <strong>31st March 2026</strong>).
          <br/>
          The expected age for admission to the following classes is:
        </p>

        <div className="age-table-wrapper">
          <table className="age-table">
            <thead>
              <tr>
                <th>Class</th>
                <th>Minimum Age</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Playgroup</td><td>2+ years</td></tr>
              <tr><td>Nursery</td><td>3+ years</td></tr>
              <tr><td>KG-I (LKG)</td><td>4+ years</td></tr>
              <tr><td>KG-II (UKG)</td><td>5+ years</td></tr>
              <tr><td>Class I</td><td>6+ years</td></tr>
            </tbody>
          </table>
        </div>

        <p className="note-text">
          For all other classes, age criteria will be as per norms applicable to the preceding class.
          <br /> <br />
          <strong>Note:</strong> Final age requirements are subject to changes by governing bodies. Please confirm with the admission office at the time of application.
        </p>
      </div>
    </section>
  );
};

export default AgeCriteria;

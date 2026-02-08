const InternalAssessment = () => {
  return (
    <section className="exam-section">
      <h2>Internal Assessment Structure (Classes VI – X)</h2>

      <table className="exam-table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Annual / Board Examination</td>
            <td>80</td>
          </tr>
          <tr>
            <td>Internal Assessment</td>
            <td>20</td>
          </tr>
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>100</strong></td>
          </tr>
        </tbody>
      </table>

      <h3>Internal Assessment Breakdown</h3>
      <ul>
        <li>
          <strong>Periodic Tests (10 Marks):</strong> Best two out of Pre-Mid,
          Mid-Term and Post-Mid tests considered.
        </li>
        <li>
          <strong>Notebook Submission (5 Marks):</strong> Assessed on regularity,
          neatness, assignment completion and upkeep.
        </li>
        <li>
          <strong>Subject Enrichment (5 Marks):</strong> Subject-specific oral,
          practical or project-based activities.
        </li>
      </ul>

      <h3>Subject Enrichment Activities</h3>
      <ul>
        <li><strong>Languages (Hindi, English & Sanskrit)</strong>: Activities conducted for subject enrichment in languages will aim at equipping the learner to develop effective speaking and listening skills.</li>
        <li><strong>Mathematics</strong>: The laboratory activities and projects will be given by the teacher as per CBSE/NCERT syllabus.</li>
        <li><strong>Science</strong>: The listed practical works/activities will be carried out as prescribed by the CBSE in the curriculum.</li>
        <li><strong>Social Science</strong>: Map and project work will be undertaken as prescribed by the CBSE in the curriculum.</li>
      </ul>
    </section>
  );
};

export default InternalAssessment;

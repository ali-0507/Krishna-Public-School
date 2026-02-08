const ResultCalculationTable = () => {
  return (
    <section className="exam-section">
      <h2>Tabular Structure of Result Calculation (Classes VI – X)</h2>

      <table className="exam-table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Annual / Board Examination (80 Marks)</td>
            <td>Final examination covering 100% syllabus. Minimum 33% marks required.</td>
          </tr>
          <tr>
            <td>Internal Assessment (20 Marks)</td>
            <td>Minimum 33% marks required out of total internal assessment.</td>
          </tr>
        </tbody>
      </table>

      <h3>Internal Assessment Breakup</h3>
      <table className="exam-table">
        <thead>
          <tr>
            <th>Component</th>
            <th>Marks</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Periodic Test & Multiple Assessment</td>
            <td>10</td>
            <td>Periodic written Test, restricted to three in each subject in an Academic Year. Average of the best two tests to be taken for final marks submission.</td>
          </tr>
          <tr>
            <td>Notebook Submission</td>
            <td>5</td>
            <td>This will include : Regularity, Assignment Completion, Neatness & up keep of notebook.</td>
          </tr>
          <tr>
            <td>Subject Enrichment</td>
            <td>5</td>
            <td>Application-based activities.</td>
          </tr>
        </tbody>
      </table>

      <h3>Subject-wise Enrichment Activities</h3>
      <table className="exam-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Enrichment Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Language 1</td><td>Speaking and Listening Skills</td></tr>
          <tr><td>Language 2</td><td>Speaking and Listening Skills</td></tr>
          <tr><td>Language 3</td><td>Speaking and Listening Skills</td></tr>
          <tr><td>Science</td><td>Practical Laboratory Work</td></tr>
          <tr><td>Mathematics</td><td>Mathematics Lab Practical</td></tr>
          <tr><td>Social Science</td><td>Map Work and Project Work</td></tr>
          <tr><td>6th Additional Subject (Applicable for IX & X class only)</td><td>Scheme of studies for 6th additional subject is detailed in Annexure – 1</td></tr>
        </tbody>
      </table>

      <p className="exam-note">
        Note: In case student opts a language as 6th additional subject, the modalities defined for 
          Languages 1 and 2 shall be followed.
      </p>
    </section>
  );
};

export default ResultCalculationTable;

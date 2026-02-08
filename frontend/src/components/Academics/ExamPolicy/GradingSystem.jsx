const GradingSystem = () => {
  return (
    <section className="exam-section">
      <h2>Grading System</h2>

      <h3>Class IX (Marks to Grades)</h3>
      <table className="exam-table">
        <tbody>
          <tr><td>91 – 100</td><td>A1</td></tr>
          <tr><td>81 – 90</td><td>A2</td></tr>
          <tr><td>71 – 80</td><td>B1</td></tr>
          <tr><td>61 – 70</td><td>B2</td></tr>
          <tr><td>51 – 60</td><td>C1</td></tr>
          <tr><td>41 – 50</td><td>C2</td></tr>
          <tr><td>33 – 40</td><td>D</td></tr>
          <tr><td>Below 33</td><td>E</td></tr>
        </tbody>
      </table>

      <h3>Class X (CBSE Percentile Grading)</h3>
      <ul>
        <li>A1: Top 1/8th of passed candidates</li>
        <li>A2: Next 1/8th of passed candidates</li>
        <li>B1: Next 1/8th of passes candidates</li>
        <li>B2: Next 1/8th of passes candidates</li>
        <li>C1: Next 1/8th of passes candidates</li>
        <li>C2: Next 1/8th of passes candidates</li>
        <li>D1: Next 1/8th of passes candidates</li>
        <li>D2: Next 1/8th of passes candidates</li>
        <li>E: Failed candidates</li>
        <li>To pass the examination, a candidate must obtain at least Grade D-2 in all subjects of written exam.</li>
      </ul>
    </section>
  );
};

export default GradingSystem;

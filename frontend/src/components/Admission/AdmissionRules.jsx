const AdmissionRules = () => {
  return (
    <section className="admission-section">
      <div className="container">
        <span className="section-badge">Guidelines</span>
        <h2 className="section-title">Admissions: General Rules & Regulations</h2>

        <p className="section-desc">
          To ensure a smooth and transparent admission process, all applicants are required to
          adhere to the guidelines set forth by the CBSE and school management. A student seeking admission is eligible only if he/she:
        </p>
        <div className="rules-box mt-0">
          <h4>General Conditions</h4>
          <ul className="check-list">
            <li>Has been studying in a school affiliated with CBSE or any other recognized Board of Secondary Education in India.</li>
            <li>Has passed the qualifying examination, making them eligible for admission to the desired class.</li>
            <li>Satisfies the age limit requirements as determined by the State/U.T. Government.</li>
            <li>Produces the School Leaving Certificate/Transfer Certificate (TC) signed by the Head of the previous institution.</li>
          </ul>

          <h4 className="mt-4">Specific Requirements by Class</h4>

          <p className="mb-1"><strong>Admission up to Class VIII: </strong></p>
           <p>Admissions are regulated by the rules and orders of the State Government. Eligibility is based on the successful completion of the previous class.</p>
          
          <p className="mb-1"><strong>Admission to Class IX: </strong></p>
          <p> Open to students who have passed the Class VIII examination from an institution affiliated with CBSE or any other recognized board.</p>

          <p className="mb-0"><strong>Admission to Class X:</strong></p>
          <p className="mt-0">Admission to Class X is granted only in special cases, such as transfer of parent(s) or shifting of family. The student must have:</p>
          <ul className="check-list">
            <li>Completed a regular course of study for Class IX from a CBSE-affiliated institution.</li>
            <li>Obtained a minimum of 50% marks in Class IX from a recognized board.</li>
            <li>Post-facto approval from the CBSE board is required.</li>
          </ul>

          <p className="mb-1"><strong>Admission to Class XI:</strong></p>
          <p>Open to students who have passed the Secondary School (Class X) examination from CBSE or an equivalent examination from any other recognized board with a minimum of 50% marks.</p>

          <p className="mb-1"><strong>Admission to Class XII:</strong></p>
          <p>Similar to Class X, admission is granted on grounds of transfer of parents or shifting of family. The student must have completed a regular course of study for Class XI and passed the Class XI examination from a CBSE-affiliated or recognized board. The Transfer Certificate must be duly countersigned by the educational authorities of the concerned board.</p>
        </div>
      </div>
    </section>
  );
};

export default AdmissionRules;

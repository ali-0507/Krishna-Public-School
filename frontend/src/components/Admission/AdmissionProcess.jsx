const steps = [
  {
    step: "01",
    title: "Submit Application",
    desc: "Fill out the online application form with required details and documents."
  },
  {
    step: "02",
    title: "Entrance Assessment",
    desc: "Students appear for an age-appropriate assessment to understand their learning level."
  },
  {
    step: "03",
    title: "Parent Interaction",
    desc: "Meet with our admission counselor to discuss your child's educational journey."
  },
  {
    step: "04",
    title: "Admission Confirmation",
    desc: "Upon selection, complete the formalities and welcome your child to KPS family."
  }
];

const AdmissionProcess = () => {
  return (
    <section className="admission-process">
      <span className="section-badge">How to Apply</span>
      <h2 className="section-title">Admission Process</h2>

      <div className="process-grid">
        {steps.map((item, index) => (
          <div className="process-card" key={index}>
            <span className="process-step">{item.step}</span>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdmissionProcess;

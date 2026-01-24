import { FaCheckCircle } from "react-icons/fa";

const DocumentsAndFees = () => {
  return (
    <section className="documents-fees">
      <div className="documents">
        <span className="section-badge">Checklist</span>
        <h2 className="section-title">Documents Required</h2>
        <p className="section-desc">
          Please ensure you have the following documents ready before starting the admission process.
        </p>

        <ul className="doc-list">
           <li>
            <FaCheckCircle className="check-icon" />
            Birth Certificate (original and copy)
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            Aadhaar Card of student and parents
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            Previous school Transfer Certificate (if applicable)
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            Report card of previous class
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            4 passport-sized photographs
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            Address proof
          </li>
          <li>
            <FaCheckCircle className="check-icon" />
            Caste certificate (if applicable)
          </li>
        </ul>
      </div>

      <div className="fees">
        <h3>Fee Structure</h3>

        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Admission Fee</th>
              <th>Annual Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Play Group - UKG</td>
              <td>₹15,000</td>
              <td>₹45,000</td>
            </tr>
            <tr>
              <td>Class I - V</td>
              <td>₹20,000</td>
              <td>₹55,000</td>
            </tr>
            <tr>
              <td>Class VI - VIII</td>
              <td>₹25,000</td>
              <td>₹65,000</td>
            </tr>
            <tr>
              <td>Class IX - XII</td>
              <td>₹30,000</td>
              <td>₹75,000</td>
            </tr>
          </tbody>
        </table>

        <p className="fee-note">
          * Fee structure is subject to change. Transport and other facilities charged separately.
        </p>
      </div>
    </section>
  );
};

export default DocumentsAndFees;

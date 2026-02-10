import { FaCheckCircle } from "react-icons/fa";

const DocumentsAndFees = () => {
  return (
    <section className="documents-fees" data-aos="fade-right">
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

      <div className="fees" data-aos="fade-left">
        <h3>Tuition Fee Structure - 2026-27</h3>

        <table>
          <thead>
            <tr style={{textDecoration:"underline"}}>
              <th >INSTALLMENT</th>
              <th>Class - I TO V</th>
              <th>Class - VI TO VIII</th>
              <th>Class - IX TO XII</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I INSTALLMENT - 30% <br/>(APRIL)</td>
              <td>₹15,770/-</td>
              <td>₹17,990/-</td>
              <td>₹20,000/-</td>
            </tr>
            <tr>
              <td>II INSTALLMENT - 25%  <br/>(JULY) </td>
              <td>₹13,140/-</td>
              <td>₹14,995/-</td>
              <td>₹16,670/-</td>
            </tr>
            <tr>
              <td>III INSTALLMENT - 25% (OCTOBER)</td>
              <td>₹13,140/-</td>
              <td>₹14,995/-</td>
              <td>₹16,670/-</td>
            </tr>
            <tr>
              <td>IV INSTALLMENT - 20% (JANUARY)</td>
              <td>₹10,510/-</td>
              <td>₹11,995/-</td>
              <td>₹13,330/-</td>
            </tr>
            <tr>
            
              <td><strong>TOTAL</strong></td>
              <td><strong>₹52,560/-</strong></td>
              <td><strong>₹59,975/-</strong></td>
              <td><strong>₹66,670/-</strong></td>
             
            </tr>
          </tbody>
        </table>

        <p className="fee-note mt-3">
          * Fee structure is subject to change. Transport and other facilities charged separately.
        </p>
      </div>
    </section>
  );
};

export default DocumentsAndFees;

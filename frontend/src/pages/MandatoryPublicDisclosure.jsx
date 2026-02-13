import "../styles/disclosure.css";

export default function MandatoryDisclosure() {
  return (
    <section className="mpd-page mt-5">

      <p className="mpd-appendix mt-5">APPENDIX – IX</p>

      <div className="mpd-header mt-2">
        Mandatory Public Disclosure
      </div>

      <p className="mpd-intro">
        As per CBSE guidelines, the following information is disclosed for public reference.
        This document is updated annually as per the norms laid down by the Central Board
        of Secondary Education.
      </p>

      <div className="mpd-tabs">
       <button onClick={() => document.getElementById("general").scrollIntoView()}>
            General Information
       </button>

       <button onClick={() => document.getElementById("documents").scrollIntoView()}>
            Documents and Information
       </button>

       <button onClick={() => document.getElementById("results").scrollIntoView()}>
            Results and Academics
       </button>

       <button onClick={() => document.getElementById("staff").scrollIntoView()}>
            Staff (Teaching)
       </button>

       <button onClick={() => document.getElementById("infrastructure").scrollIntoView()}>
            School Infrastructure
       </button>
    </div>


{/* GENERAL INFORMATION TABLE */}
<div id="general" className="mpd-section">

  <h3 className="mpd-section-title">A: GENERAL INFORMATION</h3>

  <div className="mpd-table-wrapper">
    <table className="mpd-table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Information</th>
          <th>Details</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Name of the School</td>
          <td>Krishna Public School Tendua, Raipur (CG)</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Affiliation Number</td>
          <td>3330397</td>
        </tr>
        <tr>
          <td>3</td>
          <td>School Code</td>
          <td>12456</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Complete Address with Pin Code</td>
          <td>Tendua, Raipur, Chhattisgarh - 492001</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Principal Name</td>
          <td>Dr. Rajesh Kumar Sharma</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Principal Qualification</td>
          <td>M.A., M.Ed., Ph.D. (Education)</td>
        </tr>
        <tr>
          <td>7</td>
          <td>School Email ID</td>
          <td>info@krishnapublicschool.edu.in</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Contact Details</td>
          <td>+91 771 123 4567 / +91 98765 43210</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


{/* DOCUMENTS & INFORMATION */}
<div id="documents" className="mpd-section">

  <h3 className="mpd-section-title">B: DOCUMENTS AND INFORMATION</h3>

  <div className="mpd-table-wrapper">
    <table className="mpd-table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Information</th>
          <th>Details</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>
            Copies of Affiliation/Upgradation Letter and Recent Extension of
            Affiliation, if any
          </td>
          <td><a href="#" className="doc-link">View Document</a></td>
        </tr>

        <tr>
          <td>2</td>
          <td>
            Copies of Societies/Trust/Company Registration/Renewal Certificate
          </td>
          <td><a href="#" className="doc-link">View Document</a></td>
        </tr>

        <tr>
          <td>3</td>
          <td>
            Copy of No Objection Certificate (NOC) issued by the State Govt/UT
          </td>
          <td><a href="#" className="doc-link">View Document</a></td>
        </tr>

        <tr>
          <td>4</td>
          <td>
            Copies of Recognition Certificate under RTE Act, 2009 and Renewal
          </td>
          <td><a href="#" className="doc-link">View Document</a></td>
        </tr>

        <tr>
          <td>5</td>
          <td>
            Copy of Valid Building Safety Certificate as per National Building Code
          </td>
          <td><a href="#" className="doc-link">View Document</a></td>
        </tr>

        <tr>
          <td>6</td>
          <td>
            Copy of Valid Fire Safety Certificate issued by Competent Authority
          </td>
          <td><a href="#" className="doc-link">View Document</a></td>
        </tr>

        <tr>
          <td>7</td>
          <td>
            Copy of DEO Certificate submitted by the school for affiliation/upgradation
          </td>
          <td><a href="#" className="doc-link">View Document</a></td>
        </tr>

        <tr>
          <td>8</td>
          <td>
            Copies of Valid Water, Health and Sanitation Certificates
          </td>
          <td><a href="#" className="doc-link">View Document</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


{/* RESULTS & ACADEMICS */}
<div id="results" className="mpd-section">

  <h3 className="mpd-section-title">C: RESULTS AND ACADEMICS</h3>

  <div className="mpd-table-wrapper">
    <table className="mpd-table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Information</th>
          <th>Details</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Fee Structure of the School</td>
          <td><a href="#" className="doc-link">View Details</a></td>
        </tr>

        <tr>
          <td>2</td>
          <td>Annual Academic Calendar</td>
          <td><a href="#" className="doc-link">View Calendar</a></td>
        </tr>

        <tr>
          <td>3</td>
          <td>List of School Management Committee (SMC)</td>
          <td><a href="#" className="doc-link">View List</a></td>
        </tr>

        <tr>
          <td>4</td>
          <td>List of Parents Teachers Association (PTA) Members</td>
          <td><a href="#" className="doc-link">View List</a></td>
        </tr>

        <tr>
          <td>5</td>
          <td>
            Last Three-Year Result of the Board Examination (as per applicability)
          </td>
          <td><a href="#" className="doc-link">View Results</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>



{/* STAFF (TEACHING) */}
<div id="staff" className="mpd-section">

  <h3 className="mpd-section-title">D: STAFF (TEACHING)</h3>

  <div className="mpd-table-wrapper">
    <table className="mpd-table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Information</th>
          <th>Details</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Principal</td>
          <td>01</td>
        </tr>

        <tr>
          <td>2</td>
          <td>Total No. of Teachers (PGT)</td>
          <td>12</td>
        </tr>

        <tr>
          <td>3</td>
          <td>Total No. of Teachers (TGT)</td>
          <td>18</td>
        </tr>

        <tr>
          <td>4</td>
          <td>Total No. of Teachers (PRT)</td>
          <td>25</td>
        </tr>

        <tr>
          <td>5</td>
          <td>Teachers Section Ratio</td>
          <td>1 : 1.5</td>
        </tr>

        <tr>
          <td>6</td>
          <td>Details of Special Educator</td>
          <td>02</td>
        </tr>

        <tr>
          <td>7</td>
          <td>Details of Counsellor and Wellness Teacher</td>
          <td>02</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>



{/* SCHOOL INFRASTRUCTURE */}
<div id="infrastructure" className="mpd-section">

  <h3 className="mpd-section-title">E: SCHOOL INFRASTRUCTURE</h3>

  <div className="mpd-table-wrapper">
    <table className="mpd-table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Information</th>
          <th>Details</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Total Campus Area of the School (in sq. mtr.)</td>
          <td>15,000 sq. mtr.</td>
        </tr>

        <tr>
          <td>2</td>
          <td>No. and Size of the Class Rooms (in sq. mtr.)</td>
          <td>45 Classrooms (50 sq. mtr. each)</td>
        </tr>

        <tr>
          <td>3</td>
          <td>No. and Size of Laboratories (in sq. mtr.)</td>
          <td>5 Labs (80 sq. mtr. each)</td>
        </tr>

        <tr>
          <td>4</td>
          <td>Internet Facility (Y/N)</td>
          <td>Yes</td>
        </tr>

        <tr>
          <td>5</td>
          <td>No. of Girls Toilets</td>
          <td>25</td>
        </tr>

        <tr>
          <td>6</td>
          <td>No. of Boys Toilets</td>
          <td>25</td>
        </tr>

        <tr>
          <td>7</td>
          <td>
            Link of YouTube Video of the Inspection of School Infrastructure
          </td>
          <td>
            <a href="#" className="doc-link">View Video</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* NOTE BOX */}
  <div className="mpd-note">
    <strong>Note:</strong> The information provided above is true to the best of our
    knowledge and belief. Any discrepancy found may be reported to the Principal
    or the School Management Committee. This disclosure is in compliance with the
    CBSE Affiliation Bye-Laws and is updated as of the current academic year.
  </div>
</div>

</section>
 );
}

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
          <td>KRISHNA PUBLIC SCHOOL TENDUA ,RAIPUR (CG)</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Affiliation Number</td>
          <td>3330397</td>
        </tr>
        <tr>
          <td>3</td>
          <td>School Code</td>
          <td>15954</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Complete Address with Pin Code</td>
          <td>KRISHNA PUBLIC SCHOOL TENDUA, ON NANDANVAN ROAD, NEAR BANGLAMUKHI MANDIR, <br/>(VILG:TENDUA) RAIPUR CHATTISGARH ,RAIPUR , 492099</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Principal Name</td>
          <td>MRS. DEEPIKA AGRAWAL</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Principal Qualification</td>
          <td>M.SC. BOTANY, B.ED</td>
        </tr>
        <tr>
          <td>7</td>
          <td>School Email ID</td>
          <td>kpshirapur18@gmail.com</td>
        </tr>
        <tr>
          <td>8</td>
          <td>Contact Details</td>
          <td>0771-2572015, 8871018515</td>
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
          <td><a href="/pdf/AFFILIATION_AND_UPGRADATION_LETTER.pdf"target="_blank" rel="noopener noreferrer" className="doc-link">View Document</a></td>
        </tr>

        <tr>
          <td>2</td>
          <td>
            Copies of Societies/Trust/Company Registration/Renewal Certificate
          </td>
          <td><a href="/pdf/SOCIETY_RENEWAL.pdf"target="_blank" rel="noopener noreferrer" className="doc-link">View Document</a></td>

        </tr>

        <tr>
          <td>3</td>
          <td>
            Copy of No Objection Certificate (NOC) issued by the State Govt/UT
          </td>
          <td><a href="/pdf/NOC.pdf"target="_blank" rel="noopener noreferrer" className="doc-link">View Document</a></td>
        </tr>

        <tr>
          <td>4</td>
          <td>
            Copies of Recognition Certificate under RTE Act, 2009 and Renewal
          </td>
          <td><a href="/pdf/RECOGNITION_CERTIFICATE.pdf"target="_blank" rel="noopener noreferrer" className="doc-link">View Document</a></td>
        </tr>

        <tr>
          <td>5</td>
          <td>
            Copy of Valid Building Safety Certificate as per National Building Code
          </td>
          <td><a href="/pdf/Building_Safety_Certificate.pdf"target="_blank" rel="noopener noreferrer" className="doc-link">View Document</a></td>
        </tr>

        <tr>
          <td>6</td>
          <td>
            Copy of Valid Fire Safety Certificate issued by Competent Authority
          </td>
          <td><a href="/pdf/FIRE_SAFATY_CERTIFICATE.pdf"target="_blank" rel="noopener noreferrer" className="doc-link">View Document</a></td>
        </tr>

        <tr>
          <td>7</td>
          <td>
            Copy of DEO Certificate submitted by the school for affiliation/upgradation
          </td>
          <td><a href="/pdf/DEO_Certificate.pdf"target="_blank" rel="noopener noreferrer" className="doc-link">View Document</a></td>
        </tr>

        <tr>
          <td>8</td>
          <td>
            Copies of Valid Water, Health and Sanitation Certificates
          </td>
          <td><a href="/pdf/HEALTH_&_WATER_CERTIFICATE.pdf"target="_blank" rel="noopener noreferrer" className="doc-link">View Document</a></td>
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
          <td><a href="/pdf/FEE_STRUCTURE_2026-27.pdf"target="_blank" rel="noopener noreferrer" className="doc-link">View List</a></td>
        </tr>

        <tr>
          <td>2</td>
          <td>Annual Academic Calendar</td>
          <td><a href="/pdf/ACADEMIC_CALANDER_2025-26.pdf"target="_blank" rel="noopener noreferrer" className="doc-link">View List</a></td>
        </tr>

        <tr>
          <td>3</td>
          <td>List of School Management Committee (SMC)</td>
          <td><a href="/pdf/LIST_OF_SMC.pdf"target="_blank" rel="noopener noreferrer" className="doc-link">View List</a></td>
        </tr>

        <tr>
          <td>4</td>
          <td>List of Parents Teachers Association (PTA) Members</td>
          <td><a href="/pdf/PARENT_TEACHER_MEMBERS_ASSOCIATION.pdf"target="_blank" rel="noopener noreferrer" className="doc-link">View List</a></td>
        </tr>
          <tr>
          <td>5</td>
          <td>
            Last Three-Year Result of the Board Examination (as per applicability)
          </td>
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
          <td>MRS. DEEPIKA AGRAWAL</td>
        </tr>

        <tr>
          <td>2</td>
          <td>Total No. of Teachers</td>
          <td>24</td>
        </tr>


        <tr>
          <td>3</td>
          <td>PGT</td>
          <td>8</td>
        </tr>

        <tr>
          <td>4</td>
          <td>TGT</td>
          <td>8</td>
        </tr>

        <tr>
          <td>5</td>
          <td>PRT</td>
          <td>8</td>
        </tr>

        <tr>
          <td>6</td>
          <td>Teachers Section Ratio</td>
          <td>1 : 1.5</td>
        </tr>

        <tr>
          <td>7</td>
          <td>Details of Special Educator</td>
          <td>MRS. RITU GUPTA- (B. Ed. SPECIAL EDUCATION)</td>
        </tr>

        <tr>
          <td>8</td>
          <td>Details of Counsellor and Wellness Teacher</td>
          <td>JATIN LOHANA- B.B.A.</td>
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
          <td>TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE METRE)</td>
          <td>11230</td>
        </tr>

        <tr>
          <td>2</td>
          <td>NUMBER AND SIZE OF THE CLASS ROOM (IN SQUARE METRE)</td>
          <td>14 ROOMS, 48 SQUARE METRE</td>
        </tr>

        <tr>
          <td>3</td>
          <td>NUMBER AND SIZE OF LABORATORIES INCLUDING COMPUTER LAB</td>
          <td>5 LABORATORIES, 55 SQUARE METRE</td>
        </tr>

        <tr>
          <td>4</td>
          <td>INTERNET FACILITY</td>
          <td>YES</td>
        </tr>

        <tr>
          <td>5</td>
          <td>NO. OF GIRLS TOILET</td>
          <td>15</td>
        </tr>

        <tr>
          <td>6</td>
          <td>NO. OF BOYS TOILET</td>
          <td>15</td>
        </tr>

        <tr>
          <td>7</td>
          <td>LINK OF YOU TUBE VIDEO OF INSPECTION OF SCHOOL</td>
          <td>
            <a href="https://www.youtube.com/watch?v=vUqZ8iY3rxM&t=7s" className="doc-link">View Video</a>
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

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
          <th>INFORMATION</th>
          <th>DETAILS</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>NAME OF THE SCHOOL</td>
          <td>KRISHNA PUBLIC SCHOOL TENDUA ,RAIPUR (CG)</td>
        </tr>
        <tr>
          <td>2</td>
          <td>AFFILIATION NUMBER</td>
          <td>3330397</td>
        </tr>
        <tr>
          <td>3</td>
          <td>SCHOOL CODE</td>
          <td>15954</td>
        </tr>
        <tr>
          <td>4</td>
          <td>COMPLETE ADDRESS WITH PIN CODE</td>
          <td>KRISHNA PUBLIC SCHOOL TENDUA, ON NANDANVAN ROAD, NEAR BANGLAMUKHI MANDIR, <br/>(VILG:TENDUA) RAIPUR CHATTISGARH ,RAIPUR , 492099</td>
        </tr>
        <tr>
          <td>5</td>
          <td>PRINCIPAL NAME & QUALIFICATION</td>
          <td>MRS. DEEPIKA AGRAWAL  (M.SC. BOTANY, B.ED)</td>
        </tr>
         
        <tr>
          <td>7</td>
          <td>SCHOOL EMAIL ID</td>
          <td>kpshirapur18@gmail.com</td>
        </tr>
        <tr>
          <td>8</td>
          <td>CONTACT DETAILS</td>
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
          <th>DOCUMENTS / INFORMATION</th>
          <th>DOCUMENTS LINKS</th>
        </tr>
      </thead>

       <tbody>
        <tr>
          <td>1</td>
          <td>
            COPIES OF AFFILIATION/UPGRADATION LETTER ANDRECENT
             EXTENSION OF AFFILIATION, IF ANY
          </td>
          <td><a href="https://kpstendua.com/MD/AFFILIATION AND UPGRADATION LETTER.pdf" target="blank">https://kpstendua.com/MD/AFFILIATION AND UPGRADATION LETTER.pdf</a></td>
        </tr>

        <tr>
          <td>2</td>
          <td>
            COPIES OF SOCIETIES/TRUST/COMPANYREGISTRATION/RENEWAL
CERTIFICATE, AS APPLICABLE
          </td>
          <td><a href="https://kpstendua.com/MD/SOCIETY-RENEWAL.pdf" target="blank">https://kpstendua.com/MD/SOCIETY-RENEWAL.pdf</a></td>

        </tr>

        <tr>
          <td>3</td>
          <td>
            COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED,
IFAPPLICABLE, BY THE STATE GOVT./UT
          </td>
          <td><a href="https://kpstendua.com/MD/NOC.pdf" target="blank">https://kpstendua.com/MD/NOC.pdf</a></td>
        </tr>

        <tr>
          <td>4</td>
          <td>
            COPIES OF RECOGNITION CERTIFICATE UNDER RTE
ACT,2009, AND IT’S RENEWAL IF APPLICABLE
          </td>
          <td><a href="https://kpstendua.com/MD/Recognition-Certificate.pdf" target="blank">https://kpstendua.com/MD/Recognition-Certificate.pdf</a></td>
        </tr>

        <tr>
          <td>5</td>
          <td>
            COPY OF VALID BUILDING SAFETY CERTIFICATE AS
PER THE NATIONAL BUILDING CODE
          </td>
          <td><a href="https://kpstendua.com/MD/Building-Safety-Certificate.pdf" target="blank">https://kpstendua.com/MD/Building-Safety-Certificate.pdf</a></td>
        </tr>

        <tr>
          <td>6</td>
          <td>
           COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY
THECOMPETENT AUTHORITY
          </td>
          <td><a href="https://kpstendua.com/MD/FIRE-SAFETY-CERTIFICATE.pdf" target="blank">https://kpstendua.com/MD/FIRE-SAFETY-CERTIFICATE.pdf</a></td>
        </tr>

        <tr>
          <td>7</td>
          <td>
            COPY OF THE DEO CERTIFICATE SUBMITTED BY THESCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATIONOR SELF
CERTIFICATION BY SCHOOL

          </td>
          <td><a href="https://kpstendua.com/MD/DEO-Certificate.pdf" target="blank">https://kpstendua.com/MD/DEO-Certificate.pdf</a></td>
        </tr>

        <tr>
          <td>8</td>
          <td>
            COPIES OF VALID DRINKING WATER, HEALTH AND SANITATION 
CERTIFICATES AND WATER TESTING REPORT
          </td>
          <td><a href="https://kpstendua.com/MD/HEALTH-WATER-CERTIFICATE.pdf" target="blank">https://kpstendua.com/MD/HEALTH-WATER-CERTIFICATE.pdf</a></td>
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
          <th>DOCUMENTS / INFORMATION</th>
          <th>UPLOAD DOCUMENTS</th>
        </tr>
      </thead>

       <tbody>
        <tr>
          <td>1</td>
          <td>FEE STRUCTURE OF THE SCHOOL</td>
          <td><a href="https://kpstendua.com/MD/FEE-STRUCTURE 2026-27.pdf" target="blank">https://kpstendua.com/MD/FEE-STRUCTURE 2026-27.pdf</a></td>
        </tr>

        <tr>
          <td>2</td>
          <td>ANNUAL ACADEMIC CALENDAR</td>
          <td><a href="https://kpstendua.com/MD/ACADEMIC-CALENDER 2026-27.pdf" target="blank">https://kpstendua.com/MD/ACADEMIC-CALENDAR 2026-27.pdf</a></td>
        </tr>

        <tr>
          <td>3</td>
          <td>LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td>
          <td><a href="https://kpstendua.com/MD/LIST-OF-SMC.pdf" target="blank">https://kpstendua.com/MD/LIST-OF-SMC.pdf</a></td>
        </tr>

        <tr>
          <td>4</td>
          <td>LIST OF PARENT TEACHER ASSOCIATION (PTA) MEMBERS</td>
          <td><a href="https://kpstendua.com/MD/PARENT-TEACHER-MEMBERS-ASSOCIATION.pdf" target="blank">https://kpstendua.com/MD/PARENT-TEACHER-MEMBERS-ASSOCIATION.pdf</a></td>
        </tr>

  <tr>
        <td>5</td>
      <td colSpan="2">
        <strong>
         LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION  
(AS PER APPLICABLILITY)
        </strong>

    <div className="inner-table-wrapper">
      <table className="inner-table">
        <thead >
          <tr>
            <th className="tab-headings">S.NO.</th>
            <th className="text-center tab-headings">YEAR</th>
            <th className="text-center tab-headings">NO. OF REGISTERED STUDENTS</th>
            <th className="text-center tab-headings">NO. OF STUDENTS PASSED</th>
            <th className="text-center tab-headings">PASS PERCENTAGE</th>
            <th className="text-center tab-headings">REMARKS</th>
          </tr>
        </thead>

        <tbody>
          <tr className="text-center">
            <td>1</td>
            <td>2021-22</td>
            <td>8</td>
            <td>8</td>
            <td>100</td>
            <td>-</td>
          </tr>

          <tr className="text-center">
            <td>2</td>
            <td>2022-23</td>
            <td>12</td>
            <td>12</td>
            <td>100</td>
            <td>-</td>
          </tr>

          <tr className="text-center">
            <td>3</td>
            <td>2023-24</td>
            <td>19</td>
            <td>19</td>
            <td>100</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </td>
</tr>
      </tbody>
    </table>
  </div>
</div>



{/* STAFF (TEACHING) */}
<div id="staff" className="mpd-section">

  <h3 className="mpd-section-title">D: STAFF (TEACHING):</h3>

  <div className="mpd-table-wrapper">
    <table className="mpd-table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>INFORMATION</th>
          <th>DETAILS</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>PRINCIPAL</td>
          <td>MRS. DEEPIKA AGRAWAL</td>
        </tr>
         <tr>
          <td>2</td>
          <td>VICE PRINCIPAL</td>
          <td>MRS. MONIKA VYAS</td>
        </tr>

       <tr>
        <td>3</td>
        <td>HEADMISTRESS/HEADMASTER</td>
        <td></td>
       </tr>

        <tr>
          <td>4</td>
          <td>Total NO. OF TEACHERS</td>
          <td>24 <br></br><a href="https://kpstendua.com/MD/STAFF.pdf" target="blank">https://kpstendua.com/MD/STAFF.pdf</a></td>
        </tr>


        <tr>
          <td>3</td>
          <td>PGT</td>
          <td>8 <br></br><a href="https://kpstendua.com/MD/PGT.pdf" target="blank">https://kpstendua.com/MD/PGT.pdf</a></td>
        </tr>

        <tr>
          <td>4</td>
          <td>TGT</td>
          <td>8 <br></br><a href="https://kpstendua.com/MD/TGT.pdf" target="blank">https://kpstendua.com/MD/TGT.pdf</a></td>
        </tr>

        <tr>
          <td>5</td>
          <td>PRT</td>
          <td>8 <br></br><a href="https://kpstendua.com/MD/PRT.pdf" target="blank">https://kpstendua.com/MD/PRT.pdf</a></td>
        </tr>

        <tr>
          <td>6</td>
          <td>TEACHER SECTION RATIO</td>
          <td>1 : 1.5</td>
        </tr>

        <tr>
          <td>7</td>
          <td>DETAIL OF SPECIAL EDUCATOR</td>
          <td>MRS. RITU GUPTA - (B.A., B.Ed., SPECIAL EDUCATION)</td>
        </tr>

        <tr>
          <td>8</td>
          <td>DETAIL OF COUNSELLOR AND WELLNESS TEACHER</td>
          <td>MR. JATIN LOHANA - B.B.A., DIPLOMA IN CAREER COUNSELING PSYCHOLOGY</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>



{/* SCHOOL INFRASTRUCTURE */}
<div id="infrastructure" className="mpd-section">

  <h3 className="mpd-section-title">E: SCHOOL INFRASTRUCTURE:</h3>

  <div className="mpd-table-wrapper">
    <table className="mpd-table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>INFORMATION</th>
          <th>DETAILS</th>
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
          <td>14 ROOMS, 48 SQUARE METRE [EACH]</td>
        </tr>

        <tr>
          <td>3</td>
          <td>NUMBER AND SIZE OF LABORATORIES INCLUDING COMPUTER LAB</td>
          <td>6 LABORATORIES, 55 SQUARE METRE [EACH]</td>
        </tr>

        <tr>
          <td>4</td>
          <td>NO. AND SIZE OF LIBRARY (IN SQR MTR)</td>
          <td>1 LIBRARY, 111 SQUARE METRE</td>
        </tr>

        <tr>
          <td>5</td>
          <td>INTERNET FACILITY</td>
          <td>YES</td>
        </tr>

        <tr>
          <td>6</td>
          <td>NO. OF GIRLS TOILETS</td>
          <td>15</td>
        </tr>

        <tr>
          <td>7</td>
          <td>NO. OF BOYS TOILETS</td>
          <td>15</td>
        </tr>

         <tr>
          <td>8</td>
          <td>NO. OF CWSN TOILETS</td>
          <td>4</td>
        </tr>

        <tr>
          <td>9</td>
          <td>LINK OF YOU TUBE VIDEO OF INSPECTION OF SCHOOL</td> 
          <td>
            <a href="https://www.youtube.com/watch?v=vUqZ8iY3rxM&t=7s" target="blank">https://www.youtube.com/watch?v=vUqZ8iY3rxM&t=7s</a>
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

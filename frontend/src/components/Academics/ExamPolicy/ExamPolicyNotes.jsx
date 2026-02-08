import { FaExclamationTriangle } from "react-icons/fa";

const ExamPolicyNotes = () => {
  return (
    <section className="exam-section">
      <div className="exam-note-box">
        <div className="exam-note-header">
          <FaExclamationTriangle className="note-icon" />
          <h2>Important Notes & Regulations</h2>
        </div>

        <ul className="exam-note-list">
          <li>
            Promotion is granted on the basis of the whole year’s performance of
            the pupil; hence regular attendance is imperative.
          </li>
          <li>
            Results declared at the end of the academic session are final and
            will not be reconsidered.
          </li>
          <li>
            No class ranking will be awarded if a student does not appear in any
            subject. No ranking is given for Classes Nursery to V.
          </li>
          <li>
            No re-test or re-examination is permitted. Course of tests is decided
            by the subject teacher.
          </li>
          <li>
            A minimum of <strong>90% attendance</strong> is mandatory for
            promotion to the next higher class.
          </li>
          <li>
            Up to 15% attendance relaxation may be granted by the
            Principal/Management only under special circumstances such as
            serious illness or death of close relatives.
          </li>
          <li>
            Students of Classes VI to XI failing in any subject will be allowed
            one chance for re-examination for marks improvement.
          </li>
          <li>
            If a student is absent in any examination for any reason, they must
            appear for re-examination.
          </li>
          <li>
            A student must pass the Supplementary / Grade Improvement Examination
            by securing the required passing marks. No grace marks will be given.
          </li>
          <li>
            Grade Improvement / Supplementary Examinations will be conducted on
            the syllabus of the final examination.
          </li>
          <li>
            Any student found using unfair means or cheating during examinations
            may be awarded zero marks and may face expulsion or withdrawal from
            the school.
          </li>
          <li>
            Students with attendance below 90% will not be permitted to appear
            for Annual / Board Examinations. Reports of short attendance will be
            sent to CBSE.
          </li>
          <li>
            Periodic Test and Annual Examination answer sheets for Classes I to
            XI will be shown to parents.
          </li>
          <li>
            Students must attend examinations in neat, well-ironed, complete
            school uniform. Boys must maintain a short and decent haircut.
          </li>
          <li>
            Practical and Oral examinations will neither be preponed nor
            postponed under any circumstances.
          </li>
          <li>
            Records of Internal Assessment answer sheets will be retained by the
            school for three months after result declaration for CBSE
            verification. Records related to RTI or disputed cases may be kept
            for a longer duration as directed by the Board.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExamPolicyNotes;

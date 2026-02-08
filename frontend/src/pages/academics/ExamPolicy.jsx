import { FaClipboardCheck, FaBalanceScale, FaChartLine, FaUserShield, FaFileAlt } from "react-icons/fa";
import AcademicHero from "../../components/Academics/AcademicHero";
import ExploreMore from "../../components/Academics/ExploreMore";
import ExamPolicyOverview from "../../components/Academics/ExamPolicy/ExamPolicyOverview";
import ExamPolicyByClass from "../../components/Academics/ExamPolicy/ExamPolicyByClass";
import InternalAssessment from "../../components/Academics/ExamPolicy/InternalAssessment";
import GradingSystem from "../../components/Academics/ExamPolicy/GradingSystem";
import AdditionalSubjects from "../../components/Academics/ExamPolicy/AdditionalSubjects";
import ResultCalculationTable from "../../components/Academics/ExamPolicy/ResultCalculationTable";
import ExamPolicyNotes from "../../components/Academics/ExamPolicy/ExamPolicyNotes";
import "../../styles/academics.css";
import "../../styles/examPolicy.css";



const examPolicyData = [
  {
    title: "Continuous Assessment",
    desc: "Regular evaluations through class tests, assignments, and activities.",
    icon: <FaChartLine />
  },
  {
    title: "Periodic Examinations",
    desc: "Scheduled unit tests and term-end examinations as per CBSE guidelines.",
    icon: <FaClipboardCheck />
  },
  {
    title: "Fair Evaluation",
    desc: "Transparent and unbiased assessment system for all students.",
    icon: <FaBalanceScale />
  },
  {
    title: "Student Support",
    desc: "Remedial classes and guidance provided based on performance.",
    icon: <FaUserShield />
  }
];

export default function ExamPolicy() {
  return (
    <>
    <AcademicHero
        icon={<FaFileAlt />}
        title="Exam Policy"
        subtitle="Transparent and fair assessment system for students"
      />
      <ExamPolicyOverview />
      <ExamPolicyByClass />
      <InternalAssessment />
      <ResultCalculationTable/>
      <GradingSystem />
      <AdditionalSubjects />
      <ExamPolicyNotes/>
      <ExploreMore />
    </>
  );
}


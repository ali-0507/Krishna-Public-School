import AdmissionHero from "../components/Admission/AdmissionHero.jsx";
import AdmissionProcess from "../components/Admission/AdmissionProcess";
import DocumentsAndFees from "../components/Admission/DocumentsandFees";
import ImportantDates from "../components/Admission/ImportantDates";
import AdmissionForm from "../components/Admission/AdmissionForm.jsx";
import AdmissionCTA from "../components/Admission/AdmissionCTA.jsx";

import "../styles/admission.css"

 
const Admission = () => {
  return (
    <>
      <AdmissionHero />
      <AdmissionProcess />
      <DocumentsAndFees />
      <ImportantDates />
      <AdmissionForm />
      <AdmissionCTA />
    </>
  );
};

export default Admission;
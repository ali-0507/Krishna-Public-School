import AdmissionHero from "../components/Admission/AdmissionHero.jsx";
import AdmissionProcess from "../components/Admission/AdmissionProcess";
import DocumentsAndFees from "../components/Admission/DocumentsandFees";
import ImportantDates from "../components/Admission/ImportantDates";
import AdmissionForm from "../components/Admission/AdmissionForm.jsx";
import AdmissionCTA from "../components/Admission/AdmissionCTA.jsx";
import AdmissionRules from "../components/Admission/AdmissionRules.jsx";
import AgeCriteria from "../components/Admission/AgeCriteria.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/admission.css"

 
const Admission = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollToForm) {
      const form = document.getElementById("admission-form");
      if (form) {
        form.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <AdmissionHero />
      <AgeCriteria/>
      <AdmissionProcess />
      <AdmissionRules/>
      <DocumentsAndFees />
      <ImportantDates />
      <AdmissionForm />
      <AdmissionCTA />
    </>
  );
};

export default Admission;
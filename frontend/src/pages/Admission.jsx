import AdmissionHero from "../components/Admission/AdmissionHero.jsx";
import AdmissionProcess from "../components/Admission/AdmissionProcess";
import DocumentsAndFees from "../components/Admission/DocumentsandFees";
import ImportantDates from "../components/Admission/ImportantDates";
import AdmissionForm from "../components/Admission/AdmissionForm.jsx";
import AdmissionCTA from "../components/Admission/AdmissionCTA.jsx";
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
      <AdmissionProcess />
      <DocumentsAndFees />
      <ImportantDates />
      <AdmissionForm />
      <AdmissionCTA />
    </>
  );
};

export default Admission;
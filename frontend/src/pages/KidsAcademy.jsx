// import PageHeader from "../components/common/PageHeader";
import "../styles/kidsAcademy.css";
import KidsHero from "../components/KidsAcademy/KidsHero";
import KidsPrograms from "../components/KidsAcademy/KidsPrograms";
import KidsActivities from "../components/KidsAcademy/KidsActivities";
import KidsChooseUs from "../components/KidsAcademy/KidsChooseUs";
import KidsEnquiry from "../components/KidsAcademy/KidsEnquiry";

const KidsAcademy =()=> {
  return(
    <div className="kids-academy">
      <KidsHero />
      <KidsPrograms />
      <KidsActivities />
      <KidsChooseUs />
      <KidsEnquiry />
    </div>
  )
}

export default KidsAcademy;
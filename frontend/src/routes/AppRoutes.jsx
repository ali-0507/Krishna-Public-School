import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Admission from "../pages/Admission";
import KidsAcademy from "../pages/KidsAcademy";
import Gallery from "../pages/Gallery";
import MandatoryPublicDisclosure from "../pages/MandatoryPublicDisclosure";
import Contact from "../pages/Contact";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/common/ProtectedRoute";

import CoursesOffered from "../pages/academics/CoursesOffered";
import Syllabus from "../pages/academics/Syllabus";
import ExamPolicy from "../pages/academics/ExamPolicy";
import SchoolTiming from "../pages/academics/SchoolTiming";
import ParentTeacherMeeting from "../pages/academics/ParentTeacherMeeting";
import PolicyDocumentation from "../pages/academics/PolicyDocumentation";
import BookList from "../pages/academics/BookList";
import CoScholastic from "../pages/academics/CoScholastic";
import AcademicsLayout from "../pages/academics/AcademicsLayout";
import Clubs from "../pages/Clubs/";
import Achievements from "../pages/Achievements";
import ProgramsOffered from "../pages/ProgramsOffered";
import AcademicCalendar from "../pages/academics/AcademicCalendar";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";

import AdminLogin from "../pages/admin/AdminLogin";
import AdminRegister from "../pages/admin/AdminRegister";
import AdminLayout from "../pages/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import AdminGallery from "../pages/admin/AdminGallery"; 

import AdminAdmissions from "../pages/AdminAdmissions";
import AdminEnquiry from "../pages/AdminEnquiry";
import AdminContacts from "../pages/AdminContacts";
import AdminDocuments from "../pages/admin/AdminDocuments";
import AdminAchievement from "../pages/admin/AdminAchievement";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admission" element={<Admission />} />

      <Route path="/academics" element={<AcademicsLayout />}>
        <Route path="courses-offered" element={<CoursesOffered />} />
        <Route path="syllabus" element={<Syllabus />} />
        <Route path="exam-policy" element={<ExamPolicy />} />
        <Route path="school-timing" element={<SchoolTiming />} />
        <Route path="academic-calendar" element={<AcademicCalendar />} />
        <Route path="parent-teacher-meeting" element={<ParentTeacherMeeting />} />
        <Route path="policy-documentation" element={<PolicyDocumentation />} />
        <Route path="book-list" element={<BookList />} />
        <Route path="co-scholastic" element={<CoScholastic />} />
      </Route>
      <Route path="/kids-academy" element={<KidsAcademy />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/mandatory-public-disclosure" element={<MandatoryPublicDisclosure />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/clubs" element={<Clubs />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/programs-offered" element={<ProgramsOffered />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />



{/* ---------------- ADMIN AUTH ROUTES ---------------- */}
<Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin/register" element={<AdminRegister />} />
{/* ---------------- ADMIN PROTECTED ROUTES ---------------- */}
<Route
  path="/admin"
  element={
    <ProtectedRoute allowedRoles={["director", "principal", "managing_director"]}>
      <AdminLayout />
    </ProtectedRoute>
  }
>

  {/* Redirect /admin → /admin/dashboard */}
  <Route index element={<Dashboard />} />

  <Route path="dashboard" element={<Dashboard />} />
  <Route path="gallery" element={<AdminGallery />} />
  <Route path="admissions" element={<AdminAdmissions />} />
  <Route path="enquiry" element={<AdminEnquiry />} />
  <Route path="contacts" element={<AdminContacts />} />
  <Route path="documents" element={<AdminDocuments/>}/>
   <Route path="achievements" element={<AdminAchievement/>}/>
   
</Route>

      

    </Routes>
  );
}

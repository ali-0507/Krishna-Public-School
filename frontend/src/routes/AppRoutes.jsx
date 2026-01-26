import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Admission from "../pages/Admission";
import KidsAcademy from "../pages/KidsAcademy";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
// import AcademicsLayout from "../pages/academics/AcademicsLayout";
import { FaBook } from "react-icons/fa";
import CoursesOffered from "../pages/academics/CoursesOffered";
import Syllabus from "../pages/academics/Syllabus";
import ExamPolicy from "../pages/academics/ExamPolicy";
import SchoolTiming from "../pages/academics/SchoolTiming"; 
import ParentTeacherMeeting from "../pages/academics/ParentTeacherMeeting";
import PolicyDocumentation from "../pages/academics/PolicyDocumentation";
import BookList from "../pages/academics/BookList";
import CoScholastic from "../pages/academics/CoScholastic";
import AcademicsLayout from "../pages/academics/AcademicsLayout";
 

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admission" element={<Admission />} />

      <Route path="/academics" element={<CoursesOffered/>}>
        <Route path="courses-offered" element={<CoursesOffered />} />
        <Route path="syllabus" element={<Syllabus />} />
        <Route path="exam-policy" element={<ExamPolicy />} />
        <Route path="school-timing" element={<SchoolTiming />} />
        <Route path="parent-teacher-meeting" element={<ParentTeacherMeeting />} />
        <Route path="policy-documentation" element={<PolicyDocumentation />} />
        <Route path="book-list" element={<BookList />} />
        <Route path="co-scholastic" element={<CoScholastic />} />
      </Route>

      <Route path="/kids-academy" element={<KidsAcademy />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
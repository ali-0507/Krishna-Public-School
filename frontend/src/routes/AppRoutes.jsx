import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Admission from "../pages/Admission";
import KidsAcademy from "../pages/KidsAcademy";
import Gallery from "../pages/Gallery";
import MandatoryPublicDisclosure from "../pages/MandatoryPublicDisclosure";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/kids-academy" element={<KidsAcademy />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/mandatory-public-disclosure" element={<MandatoryPublicDisclosure />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import FloatingAdmissionButton from "./components/FloatingAdmissionButton";
import "../src/App.css";
import "../src/styles/clubs.css";
import ScrollToTop from "./ScrollToTop";

function App() {
  const location = useLocation();
    const isAdminRoute = location.pathname.startsWith("/admin");
    
  return (
    <>
      <ScrollToTop/>
      {!isAdminRoute && <Navbar />}

      <AppRoutes />

      {!isAdminRoute && <FloatingAdmissionButton />}
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;

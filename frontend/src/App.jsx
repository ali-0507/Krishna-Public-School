import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import FloatingAdmissionButton from "./components/FloatingAdmissionButton";
import "../src/App.css";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
       <FloatingAdmissionButton />
      <Footer />
    </>
  );
}

export default App;
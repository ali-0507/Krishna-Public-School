import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import "../src/App.css";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
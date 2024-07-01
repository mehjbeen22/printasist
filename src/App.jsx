import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrinterSetup from "./setupPages/PrinterSetup";
import PrinterOffline from "./setupPages/PrinterOffline";
import ScannerSetup from "./setupPages/ScannerSetup";
import PrivacyPolicy from "./setupPages/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/printeroffline" element={<PrinterOffline />} />
        <Route path="/printersetup" element={<PrinterSetup />} />
        <Route path="/scannersetup" element={<ScannerSetup />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;

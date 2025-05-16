import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { BestSellers } from "./components/Best sellers.jsx";
import LivingRoomPage from "./pages/LivingRoomPage";
import BedroomPage from "./pages/BedroomPage";
import HospitalityPage from "./pages/HospitalityPage";
import ContactPage from "./pages/ContactPage";
import OutdoorPage from "./pages/OutdoorPage"; // Make sure to import if you have this
import OfficePage from "./pages/OfficePage"; // Make sure to import if you have this

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <BestSellers />
              </>
            }
          />
          <Route path="/living-room" element={<LivingRoomPage />} />
          <Route path="/bedroom" element={<BedroomPage />} />
          <Route path="/hospitality" element={<HospitalityPage />} />
          <Route path="/outdoor" element={<OutdoorPage />} />
          <Route path="/office" element={<OfficePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </Router>
  );
}
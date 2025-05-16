import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { BestSellers } from "./components/BestSellers";
import WelcomeSection  from "./components/WelcomeSection";
import FeaturedCollections from "./components/FeaturedCollections";
import Footer from "./components/Footer";
import LivingRoomPage from "./pages/LivingRoomPage";
import BedroomPage from "./pages/BedroomPage";
import HospitalityPage from "./pages/HospitalityPage";
import ContactPage from "./pages/ContactPage";
import OutdoorPage from "./pages/OutdoorPage";
import OfficePage from "./pages/OfficePage";


export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <BestSellers />
                  <WelcomeSection />
                  <FeaturedCollections />
                  <Footer />
                </>
              }
            />
            <Route path="/living-room" element={<LivingRoomPage />} />
            <Route path="/bedroom" element={<BedroomPage />} />
            <Route path="/hospitality" element={<HospitalityPage />} />
            <Route path="/outdoor" element={<OutdoorPage />} />
            <Route path="/office" element={<OfficePage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Add these routes if you implement these sections */}
            {/* <Route path="/collections/:id" element={<CollectionPage />} /> */}
            {/* <Route path="/design-services" element={<DesignServicesPage />} /> */}
          </Routes>
        </main>
    
      </div>
    </Router>
  );
}
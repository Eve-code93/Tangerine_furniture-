import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { NewArrivalsOnSale } from "./components/NewArrivalsOnSale";

import LivingRoomPage from "./pages/LivingRoomPage";
import BedroomPage from "./pages/BedroomPage";
import HotelsPage from "./pages/HotelsPage";
import AirbnbPage from "./pages/AirbnbPage";
import ContactPage from "./pages/ContactPage";

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
                <NewArrivalsOnSale />
              </>
            }
          />
          <Route path="/living-room" element={<LivingRoomPage />} />
          <Route path="/bedroom" element={<BedroomPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/airbnb" element={<AirbnbPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </Router>
  );
}

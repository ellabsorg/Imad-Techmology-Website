import React from "react";
import "./evenement.css";
import Navbar from "../Components/shared/Navbar";
import Footer from "../Components/shared/Footer";
import HeroSection from "../Components/shared/HeroSection";
import EventSection from "../Components/Events/EventSection";
import eventData from "../constants/EventsData";

function Evenement() {
  return (
    <div>
      <Navbar />
      <HeroSection
        title={"Nos Evènements"}
        description={
          "Organisation de manifestations scientifiques et culturelles !"
        }
      />
      <EventSection eventData={eventData} />

      <Footer />
    </div>
  );
}

export default Evenement;

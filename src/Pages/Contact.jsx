import React from "react";
import Footer from "../Components/shared/Footer";
import Navbar from "../Components/shared/Navbar";
import HeroSection from "../Components/shared/HeroSection";
import ContactSection from "../Components/Contact/ContactSection";
import MapSection from "../Components/Contact/MapSection";

function Contact() {
  return (
    <div>
      <Navbar />
      <HeroSection title={"Toujours a votre écoute"} />
      <ContactSection />
      <MapSection />
      <Footer />
    </div>
  );
}

export default Contact;

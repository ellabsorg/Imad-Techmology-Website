import React from "react";
import "./Home.css";
import Navbar from "../Components/shared/Navbar";
import Footer from "../Components/shared/Footer";
import HeroSection from "../Components/home/HeroSection";
import FeedniSection from "../Components/home/FeedniSection";
import OurPartnersSection from "../Components/home/OurPartnersSection";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeedniSection />
      <OurPartnersSection />
      <Footer />
    </div>
  );
}

export default Home;

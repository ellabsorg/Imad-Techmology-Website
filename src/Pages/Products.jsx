import React from "react";
import "./Products.css";
import Navbar from "../Components/shared/Navbar";
import Footer from "../Components/shared/Footer";
import HeroSection from "../Components/shared/HeroSection";
import MobotSection from "../Components/Products/MobotSection";
import GallerySection from "../Components/Products/GallerySection";

function Products() {
  return (
    <div>
      <Navbar />
      <HeroSection title={"Nos Produits"} />
      <MobotSection />
      <GallerySection />
      <Footer />
    </div>
  );
}

export default Products;

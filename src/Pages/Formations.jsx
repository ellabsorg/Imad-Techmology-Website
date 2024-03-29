import React from "react";
import "./Formations.css";
import Navbar from "../Components/shared/Navbar";
import Footer from "../Components/shared/Footer";
import HeroSection from "../Components/shared/HeroSection";
import DropDown from "../Components/Formations/DropDown";
import FormationsSwiper from "../Components/Formations/FormationsSwiper";
import PourquoiNous from "../Components/Formations/PourquoiNous";
import FormMapSection from "../Components/Formations/FormMapSection";
function Formations() {
  const description =
    "Nous sommes convaincus de l'importance du partage des connaissances. C'est pour cela que nous formons des jeunes motivés pour les aider à acquérir de nouvelles compétences qui leur permettront d'exceller dans leur vie professionnelle et de se construire un meilleur avenir.";
  return (
    <div>
      <Navbar />
      <HeroSection description={description} title={"Nos Formations"} />
      <DropDown />
      <FormationsSwiper />
      <PourquoiNous />
      <FormMapSection />
      <Footer />
    </div>
  );
}

export default Formations;

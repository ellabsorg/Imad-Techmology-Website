import React, { useState } from "react";
import "./GallerySection.css";
import GalleryImage1 from "../../Assets/Photo-Mobbo-1.jpg";
import GalleryImage2 from "../../Assets/Photo-Mobbo-2.jpg";
import GalleryImage3 from "../../Assets/Photo-Mobbo-3.jpg";
import GalleryImage4 from "../../Assets/Photo-Mobbo-4.jpg";
import GalleryImage5 from "../../Assets/Photo-Mobbo-5.jpg";
import GallerySwiper from "./GallerySwiper";

function GallerySection() {
  const [SelectedImageId, setSelectedImageId] = useState(0);
  const [isVisible, SetIsVisible] = useState(false);
  const GalleryImages = [
    GalleryImage1,
    GalleryImage2,
    GalleryImage3,
    GalleryImage4,
    GalleryImage5,
  ];
  // console.log(GalleryImages);
  const handleLeftArrow = () => {
    setSelectedImageId((prev) => prev - 1);
  };
  const handleRightArrow = () => {
    setSelectedImageId((prev) => prev + 1);
  };
  const handleExitButton = () => {
    SetIsVisible(false);
  };
  const handleImageClick = (index) => {
    SetIsVisible(true);
    setSelectedImageId(index);
  };
  return (
    <div className="GallerySectionComponent">
      <div className="gallery-container">
        <div className="gallery-wrapper">
          <div className="gallery-left-section">
            <div className="title">MoBot-1</div>
            <div className="description">
              Un kit de robot suiveur de ligne pour débutant sans programmation.
              Avec ses formations et tutoriels inclus, ce kit va vous permettre
              d'apprendre facilement son principe de fonctionnement ainsi que
              les connaissances en physiques, mécaniques et électroniques
              requises pour le faire fonctionner. Amusez-vous en construisant le
              MoBot et commencez votre exploration dans le monde de la
              robotique!
            </div>
            <div className="gallery">
              <div className="gallery-grid">
                {GalleryImages.map((GallerImage, index) => (
                  <div
                    key={index}
                    className={`gallery-grid-item item${index + 1}`}
                    onClick={() => handleImageClick(index)}
                  >
                    <img src={GallerImage} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="gallery-right-section">
            <iframe
              width="560"
              height="515"
              src="https://www.youtube-nocookie.com/embed/khtyy3sG8I0?si=5FjEnWHO6C_7Ppbh"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <br />
      {isVisible && (
        <GallerySwiper
          handleLeftArrow={handleLeftArrow}
          handleRightArrow={handleRightArrow}
          handleExitButton={handleExitButton}
          imageToPreview={GalleryImages[SelectedImageId]}
          GalleryImages={GalleryImages}
          SelectedImageId={SelectedImageId}
        />
      )}
    </div>
  );
}
export default GallerySection;

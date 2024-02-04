import React from "react";
import "./GallerySwiper.css";
import image from "../../Assets/Photo-Mobbo-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
function GallerySwiper({
  handleLeftArrow,
  handleRightArrow,
  handleExitButton,
  imageToPreview,
  isVisible,
  GalleryImages,
}) {
  return (
    <>
      {isVisible ? (
        <div className="Gallery-Swiper-Component">
          <div className="Gallery-Swiper-Container">
            {/* ================================== <--- =========*/}
            {GalleryImages.indexOf(imageToPreview) ? (
              <FontAwesomeIcon
                className="Left-Arrow"
                icon={faArrowLeft}
                onClick={handleLeftArrow}
              />
            ) : null}
            {/* ================================= Image =========*/}
            <img src={imageToPreview} />
            {/* ================================= ---> =========*/}
            {GalleryImages.indexOf(imageToPreview) < GalleryImages.length -1? (
              <FontAwesomeIcon
                className="Right-Arrow"
                icon={faArrowRight}
                onClick={handleRightArrow}
              />
            ) : null}
            {/* ==================================== X =========*/}
            <FontAwesomeIcon
              className="Xmark"
              icon={faXmark}
              onClick={handleExitButton}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
export default GallerySwiper;

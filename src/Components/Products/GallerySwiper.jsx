import React from "react";
import "./GallerySwiper.css";
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
  GalleryImages,
  SelectedImageId,
}) {
  console.log({ imageToPreview });
  return (
    <>
      <div className="Gallery-Swiper-Component">
        <div className="Gallery-Swiper-Container">
          {/* ================================== <--- =========*/}
          <FontAwesomeIcon
            className="Left-Arrow"
            style={{ visibility: !SelectedImageId && "hidden" }}
            icon={faArrowLeft}
            onClick={handleLeftArrow}
          />
          {/* ================================= Image =========*/}
          <img src={String(imageToPreview)} alt={imageToPreview} />
          {/* ================================= ---> =========*/}
          <FontAwesomeIcon
            className="Right-Arrow"
            style={{
              visibility:
                SelectedImageId === GalleryImages.length - 1 ? "hidden" : null,
            }}
            icon={faArrowRight}
            onClick={handleRightArrow}
          />
          {/* ==================================== X =========*/}
          <FontAwesomeIcon
            className="Xmark"
            icon={faXmark}
            onClick={handleExitButton}
          />
        </div>
      </div>
    </>
  );
}
export default GallerySwiper;

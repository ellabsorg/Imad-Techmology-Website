import React from "react";
// import SwiperPicture from "../../Assets/SwiperPicture.png";
import "./FeedniSection.css";
// Importing Swiper
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper";
SwiperCore.use([Navigation]);

function FeedniSection() {
  return (
    <div className="feedni-description-container">
      <div className="feedni-description">
        <div className="feedni-left-section-wrapper2">
          <div className="feedni-left-section-wrapper">
            <h1 className="feedni-big-title">Feedni</h1>
            <h1 className="feedni-small-title">A JOURNEY OF KNOWLEDGE</h1>
          </div>
        </div>
        <div className="feedni-right-section-wrapper">
          <div className="feedni-right-section">
            <div className="feedni-right-section-text">
              <h1>Feedni</h1>
              <p>
                Un voyage de connaissances sous forme de série vidéos dans
                lequel nous abordons une thématique différente pour chaque
                épisode avec nos aimables invités. Son but est de vulgariser
                cette thématique afin de la rendre plus accessible et plus
                simplifiée pour le grand publique.
              </p>
              {/* ================ SWIPER IMAGE ================== */}
              <div className="feedni-swiper-holder">
                <Swiper
                  spaceBetween={2}
                  slidesPerView={1}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                >
                  <SwiperSlide>
                    <iframe
                      width="500"
                      height="315"
                      src="https://www.youtube.com/embed/qPPEb9YAJco?si=c69a7Ka-1P8u0CEv"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </SwiperSlide>
                  <SwiperSlide>
                    <iframe
                      width="460"
                      height="315"
                      src="https://www.youtube.com/embed/qPPEb9YAJco?si=c69a7Ka-1P8u0CEv"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </SwiperSlide>
                  <SwiperSlide>
                    <iframe
                      width="460"
                      height="315"
                      src="https://www.youtube.com/embed/qPPEb9YAJco?si=c69a7Ka-1P8u0CEv"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </SwiperSlide>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </Swiper>
              </div>
              {/* ================ SWIPER IMAGE ================== */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedniSection;

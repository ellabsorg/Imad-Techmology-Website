import React from "react";
import SwiperPicture from "../../Assets/SwiperPicture.png";
import "./FeedniSection.css";

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
                <img src={SwiperPicture} alt="" />
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

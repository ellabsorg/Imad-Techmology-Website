import React from "react";
import "./FormationsSwiper.css";
// Importing Partner Pictures
import Image1 from "../../Assets/MNC1.JPG";
import Image2 from "../../Assets/MNC2.JPG";
import Image3 from "../../Assets/MNC3.JPG";
import Image4 from "../../Assets/MNC4.JPG";
import Image5 from "../../Assets/MNC5.JPG";
import Image6 from "../../Assets/MNC6.JPG";

// Importing Swiper
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper";
SwiperCore.use([Navigation]);

function FormationsSwiper() {
  return (
    <div>
      <div className="Formations-Slider-Container">
        <div className="Formations-Slider-Wrapper">
          <Swiper
            className="Swiper"
            spaceBetween={115}
            slidesPerView={3}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            <SwiperSlide className="Swiper-Slide">
              <div className="slide-img-holder">
                <img src={Image1} alt="" className="formations-slide-item" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <div className="slide-img-holder">
                <img src={Image2} alt="" className="formations-slide-item" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <div className="slide-img-holder">
                <img src={Image3} alt="" className="formations-slide-item" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <div className="slide-img-holder">
                <img src={Image4} alt="" className="formations-slide-item" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <div className="slide-img-holder">
                <img src={Image5} alt="" className="formations-slide-item" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <div className="slide-img-holder">
                <img src={Image6} alt="" className="formations-slide-item" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <div className="slide-img-holder">
                <img src={Image1} alt="" className="formations-slide-item" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="Swiper-Slide">
              <div className="slide-img-holder">
                <img src={Image2} alt="" className="formations-slide-item" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  );
}

export default FormationsSwiper;

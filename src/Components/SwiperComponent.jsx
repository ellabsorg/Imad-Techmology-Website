import React from "react";
// Importing Partner Pictures
import EllabsLogo from "../Assets/Artboard 4.png";
import SonatrachLogo from "../Assets/sonatrach.png";
import HuaweiLogo from "../Assets/huawei-logo.png";
import USTHBLogo from "../Assets/USTHB.png";
import TropicoLogo from "../Assets/tropico.png";
import LondonShopLogo from "../Assets/LondonShop.png";

// Importing Swiper
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper";
SwiperCore.use([Navigation]);

function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={4}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      <SwiperSlide>
        <img src={EllabsLogo} alt="" className="PartnersSliderItem" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={SonatrachLogo} alt="" className="PartnersSliderItem" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={TropicoLogo} alt="" className="PartnersSliderItem" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={HuaweiLogo} alt="" className="PartnersSliderItem" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={USTHBLogo} alt="" className="PartnersSliderItem" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={LondonShopLogo} alt="" className="PartnersSliderItem" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={EllabsLogo} alt="" className="PartnersSliderItem" />
      </SwiperSlide>

      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
}

export default SwiperComponent;

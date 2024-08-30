"use client";

import React from "react";
import "./IntroBlock.scss";

// импорт Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, EffectFade } from "swiper/modules";

import { IntroBlockImg } from "../../Imgs/ImgsIndex";

// импорт Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const IntroBlock = () => {
  return (
    <div className="IntroBlock">
      <div className="IntroBlock_right_content">
        <Swiper
          modules={[Pagination, A11y, Autoplay, EffectFade]}
          autoplay={true}
          effect="fade"
          rewind
          onSlideChange={() => console.log("slide change")}
          className="swiper-intro"
        >
          <SwiperSlide className="swiper__slide">
          <video loop muted autoPlay src={"/Banner.mp4"} style={{ width: "100%", borderRadius: "30px" }} className="swiper-intro__video" />
          <video loop muted autoPlay src={"/Banner_mini.mp4"} style={{ width: "100%", borderRadius: "30px" }} className="swiper-intro__video_mini" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
  // Да да, у нас картинка лежит в свайпере, не удивляйтесь
};

export default IntroBlock;

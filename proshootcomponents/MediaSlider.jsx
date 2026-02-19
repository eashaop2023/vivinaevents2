import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import pro from "../assets/photos/pro.jpg";
import pro1 from "../assets/photos/pro1.jpg";
import video5 from "../assets/videos/video5.mp4";

export const mediaData = [
  { type: "image", src: pro },
  { type: "image", src: pro1 },
  { type: "video", src: video5},
];


const MediaSlider = () => {
  return (
    <div className="relative  h-[60vh] md:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full w-full z-0"
      >
        {mediaData.map((item, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            {item.type === "image" ? (
              <div
                className="h-full w-full bg-cover bg-center scale-100"
                style={{ backgroundImage: `url(${item.src})` }}
              />
            ) : (
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* dark overlay */}
      {/* <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none" /> */}
    </div>
  );
};

export default MediaSlider;

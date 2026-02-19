import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import phone1 from "../assets/photos/img8.png";
import phone2 from "../assets/photos/img9.png";
import phone3 from "../assets/photos/img10.png";
import phone4 from "../assets/photos/img11.png";
import phone5 from "../assets/photos/img12.png";
import phone6 from "../assets/photos/img13.png";

const data = [
  { id: 1, title: "Customer Support", text: "24/7 Support to keep your day running smoothly.", img: phone1 },
  { id: 2, title: "Female Reel-Maker", text: "Female users can confidently get skilled female reel-makers for their shoots.", img: phone2 },
  { id: 3, title: "Pick a Partner", text: "Personalized partner selection for every shoot.", img: phone3 },
  { id: 4, title: "Content Storage", text: "We securely store your content for up to 6 months so you can download or revisit anytime.", img: phone4 },
  { id: 5, title: "Instant Booking", text: "Get immediate confirmation as soon as you book. Fast and hassle-free.", img: phone5 },
  { id: 6, title: "Live Tracking", text: "Track your reel-maker in real time from arrival to wrap-up.", img: phone6 },
];

const KnowProShoot = () => {
  const [active, setActive] = useState(null); // ONLY click based

  return (
    <>
      {/* Swiper Styles */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: red !important;
        }

        .swiper-pagination-bullet {
          background: red !important;
          opacity: 0.4;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>

      <section className="w-full bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-black py-20">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <div className="flex justify-center mb-4">
              <span className="flex items-center gap-2 px-4 py-2 text-sm text-white rounded-full border border-orange-500 bg-orange-500/10">
                <AutoAwesomeOutlinedIcon className="text-red-500" />
                Get to know Flashoot
              </span>
            </div>

            <h2 className="text-2xl lg:text-5xl font-bold text-white">
              Features That Make Us{" "}
              <span className="text-red-500">Stand Out</span>
            </h2>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id} className="flex justify-center">
                <div
                  onClick={() => setActive(item.id)}
                  className="group max-w-[260px] w-full p-9 text-center rounded-[2rem]
                             cursor-pointer bg-white/10"
                >
                  {/* TITLE */}
                  <h3
                    className={`font-bold text-lg md:text-xl transition-colors duration-300
                      ${
                        active === item.id
                          ? "text-red-500"
                          : "text-white group-hover:text-red-500"
                      }
                    `}
                  >
                    {item.title}
                  </h3>

                  <p className="text-white/70 mt-2 text-sm md:text-base">
                    {item.text}
                  </p>

                  {/* IMAGE ONLY COMES FRONT */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className={`mt-16 h-72 md:h-80 object-contain mx-auto
                      transition-all duration-500 relative
                      ${
                        active === item.id
                          ? "scale-110 z-20"
                          : "scale-100"
                      }
                      group-hover:scale-110
                      group-hover:z-20
                    `}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>
    </>
  );
};

export default KnowProShoot;
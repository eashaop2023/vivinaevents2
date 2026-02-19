import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import pro from "../assets/photos/pro.jpg";
import pro1 from "../assets/photos/pro1.jpg";
import video5 from "../assets/videos/video5.mp4";
import weddingphoto from "../assets/photos/weddingphoto.jpg";
import prewedding from "../assets/photos/prewedding.jpg";
import parties from "../assets/photos/parties.jpg";
import corporateevent from "../assets/photos/corporateevent.jpg";
import anniversaryevent from "../assets/photos/anniversaryevent.jpg";
import catering from "../assets/photos/catering.jpg";
import decor from "../assets/photos/decor.jpg"

export const mediaData = [
  { type: "image", src: pro },
  { type: "image", src: pro1 },
  { type: "video", src: video5 },
];

const eventsData = [
  {
    id: "weddingevent",
    title: "Wedding Events",
    subtitle: "Elegant & stress-free wedding planning",
    img: weddingphoto,
    includes: ["Sangeeth", "Mehndi", "Haldi", "Reception"],
  },
  {
    id: "preweddingevent",
    title: "Pre-Wedding Shoot",
    subtitle: "Beautifully curated pre-wedding shoots",
    img:prewedding ,
    includes: ["Costume Themes", "Destination Shoots", "Location Preference", "Makeup Services"],
  },
  {
    id: "partieservices",
    title: "Parties",
    subtitle: " Where every party turns into a celebration",
    img: parties,
    includes: ["Birthday Party", "Bachelor’s Party", "Baby Shower","Naming Ceremony"],
  },
  {
    id: "corporateservices",
    title: "Corporate Events",
    subtitle: "Seamless planning for impactful corporate experiences",
    // Professional corporate event planning
    img:corporateevent,
    includes: ["App Launch", "Award Function", "Get Together", "Company Anniversary"],
  },
  {
    id: "anniversaryservices",
    title: "Anniversary Celebration",
    subtitle: "Celebrate love & togetherness",
    img: anniversaryevent,
    includes: ["Venue", "Decor", "Catering", "Entertainment"],
  },
  {
    id: "proshootservices",
    title: "ProShoot (Instant Video)",
    subtitle: "Instant professional videos for live events",
    img: pro,
    includes: [
      "10-minute professional video",
      "Shoot + edit instantly",
      "High-quality output",
      "Perfect for live events",
    ],
  },
  {
    id: "pro1",
    title: "Event Decor",
    subtitle: "Stunning decor that transforms your venue",
    img: decor,
    includes: [
      "Wedding decor",
      "Party decor",
      "Corporate decor",
      "Theme-based floral setups",
    ],
  },
  {
    id: "catering",
    title: "Catering Services",
    subtitle: "Delicious menus crafted for every occasion",
    img: catering,
    includes: [
      "Veg & Non-Veg menus",
      "Traditional & international cuisine",
      "Customizable event menu",
      "Professional serving staff",
    ],
  },
  {
    id: "entertainment",
    title: "Entertainment",
    subtitle: "High-energy entertainment that keeps guests engaged",
    img: parties,
    includes: [
      "DJs & live bands",
      "Anchors & emcees",
      "Dance performances",
      "Interactive games",
    ],
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] text-white">

      {/* FULL WIDTH SLIDER */}
      <div className="w-full">
                  {/* Slider Section */}
          <div className="relative h-72 md:h-96 w-full">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              className="h-full w-full"
            >
              {mediaData.map((item, index) => (
                <SwiperSlide key={index} className="h-full w-full">
                  {item.type === "image" ? (
                    <div
                      className="h-full w-full bg-cover bg-center"
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

            {/* Text on top */}
            <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
              {/* Overlay for better visibility */}
              <div className="absolute inset-0 bg-black/50 z-0" />

              <h1 className="text-4xl md:text-5xl font-bold text-red-500 z-20">
                Vivina Events Services
              </h1>
              <p className="text-sm md:text-base mt-2 text-white z-20">
                Best event planning services for all occasions
              </p>
              <div className="flex justify-center pt-6 gap-5">
                <button type="submit" onClick={() => navigate("/eventbooking")}
                className="px-6 py-3 bg-red-600 z-20 hover:bg-red-700 rounded-xl font-semibold transition"
                >Book Event
              </button>
              <button type="submit" onClick={() => navigate("/proshootbooking")}
                className="px-5 py-3 bg-red-600 z-20 hover:bg-red-700 rounded-xl font-semibold transition"
                >Book ProShoot
              </button>
              <button type="submit" onClick={() => navigate("/contactus")}
                className="px-6 py-3 bg-red-600 z-20 hover:bg-red-700 rounded-xl font-semibold transition"
                >Contact Us
              </button>
              </div>
            </div>
          </div>

      </div>
            
      {/* CONTENT WITH PADDING */}
      <div className="px-20 py-30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 rounded-2xl shadow-xl overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-center text-red-500">
                  {item.title}
                </h2>
                <p className="text-sm mt-2 text-center text-gray-300">{item.subtitle}</p>

                 {/* Divider */}
                <div className="h-px bg-white/20 my-5" />

                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-red-400">What’s Included</h3>
                </div>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-left">
                  {item.includes.map((point, idx) => (
                    <li key={idx} className="text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate(`/services/${item.id}`)}
                  className="mt-4  px-4 py-2 text-center item-center border border-white rounded-[10px] bg-red-500 text-white hover:bg-red-600 transition"
                >
                  More<KeyboardDoubleArrowRightIcon/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
export default Services;


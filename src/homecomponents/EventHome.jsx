import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// images
import weddingphoto from "../assets/photos/weddingphoto.jpg";
import prewedding from "../assets/photos/prewedding.jpg";
import parties from "../assets/photos/parties.jpg";
import corporateevent from "../assets/photos/corporateevent.jpg";
import anniversaryevent from "../assets/photos/anniversaryevent.jpg";

const eventsData = [
  {
    id: "wedding",
    title: "Wedding Events",
    subtitle: "Elegant & stress-free wedding planning",
    img: weddingphoto,
    includes: ["Sangeeth", "Mehndi", "Haldi", "Reception"],
  },
  {
    id: "prewedding",
    title: "Pre-Wedding Shoot",
    subtitle: "Beautifully curated pre-wedding shoots",
    img: prewedding,
    includes: [
      "Costume Themes",
      "Destination Shoots",
      "Location Preference",
      "Makeup Services",
    ],
  },
  {
    id: "parties",
    title: "Parties",
    subtitle: "Where every party turns into a celebration",
    img: parties,
    includes: [
      "Birthday Party",
      "Bachelor’s Party",
      "Baby Shower",
      "Naming Ceremony",
    ],
  },
  {
    id: "corporate",
    title: "Corporate Events",
    subtitle: "Seamless planning for impactful corporate experiences",
    img: corporateevent,
    includes: [
      "App Launch",
      "Award Function",
      "Get Together",
      "Company Anniversary",
    ],
  },
  {
    id: "anniversary",
    title: "Anniversary Celebration",
    subtitle: "Celebrate love & togetherness",
    img: anniversaryevent,
    includes: ["Venue", "Décor", "Catering", "Entertainment"],
  },
];

const EventHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] text-white px-6 md:px-50 py-20">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-red-500 mb-12">
         Events
      </h1>

      {/* SLIDER WRAPPER */}
      <div className="relative">

        {/* LEFT ARROW */}
        <button
          className="event-prev absolute left-[-18px] top-1/2 -translate-y-1/2
                     z-20 w-12 h-12 rounded-full
                     bg-white/30 border border-red-500
                     flex items-center justify-center
                     hover:bg-red-500 transition"
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </button>

        {/* RIGHT ARROW */}
        <button
          className="event-next absolute right-[-18px] top-1/2 -translate-y-1/2
                     z-20 w-12 h-12 rounded-full
                     bg-white/30 border border-red-500
                     flex items-center justify-center
                     hover:bg-red-500 transition"
        >
          <ArrowForwardIosIcon fontSize="small" />
        </button>

        {/* EVENTS SLIDER */}
        <Swiper
          modules={[Autoplay, Navigation]}
          loop
          spaceBetween={24}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".event-prev",
            nextEl: ".event-next",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {eventsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white/5 rounded-2xl shadow-xl overflow-hidden h-full">

                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />

                {/* Content */}
                <div className="p-5 flex flex-col h-full">
                  <h2 className="text-xl font-bold text-center text-red-500">
                    {item.title}
                  </h2>

                  <p className="text-sm mt-2 text-center text-gray-300">
                    {item.subtitle}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-white/20 my-4" />

                  <h3 className="font-semibold text-red-400">
                    What’s Included
                  </h3>

                  <ul className="list-disc ml-5 mt-2 space-y-1 text-sm flex-grow">
                    {item.includes.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>

                  {/* LEFT ALIGNED BUTTON */}
                  <button
                    onClick={() => navigate(`/events/${item.id}`)}
                    className="mt-5 flex items-center gap-1
                               w-fit px-4 py-2
                               rounded-lg border border-white
                               bg-red-500 text-white
                               hover:bg-red-600 transition"
                  >
                    More <KeyboardDoubleArrowRightIcon fontSize="small" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default EventHome;


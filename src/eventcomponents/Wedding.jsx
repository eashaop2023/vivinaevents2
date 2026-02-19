import React, { useEffect, useState } from "react";

// Slider assets
 import sangeetimg from "../assets/photos/sangeetimg.jpg";
import wedding1 from "../assets/photos/wedding1.jpg";
import weddingimg from "../assets/photos/weddingimg.jpg";
import weddingphoto from "../assets/photos/weddingphoto.jpg";

// Card images
import sangeet from "../assets/photos/sangeet.jpg";
import mehndi from "../assets/photos/mehndi.jpg";
import haldi from "../assets/photos/haldi.jpg";
import reception from "../assets/photos/reception.jpg";
import WeddingPackagePlan from "./WeddingPackagePlan";

const Wedding = () => {
  const slides = [
    {
      type: "image",
      src: weddingimg,
      title: "Wedding Events",
      desc: "Elegant & stress-free celebrations crafted with perfection"
    },
    {
      type: "image",
      src: sangeetimg,
      title: "Luxury Wedding Planning",
      desc: "Every ritual designed with elegance & care"
    },
    {
      type: "image",
      src: weddingphoto,
      title: "Bespoke Celebrations",
      desc: "Turning dreams into unforgettable moments"
    },
    {
      type: "image",
      src: wedding1,
      title: "Grand Reception Nights",
      desc: "Where love meets luxury"
    }
  ];

  const events = [
    {
      title: "Sangeeth",
      image: sangeet,
      points: [
        "Stage décor & designer backdrop",
        "Professional lighting & sound",
        "Live performances "
      ]
    },
    {
      title: "Mehndi",
      image: mehndi,
      points: [
        "Theme-based decor setup",
        "Mehndi artist coordination",
        "Comfortable seating arrangements"
      ]
    },
    {
      title: "Haldi",
      image: haldi,
      points: [
        "Traditional décor concepts",
        "Floral setup",
        "ritual arrangements"
      ]
    },
    {
      title: "Reception",
      image: reception,
      points: [
        "Grand luxury décor",
        "Catering & makeup services",
        "Entertainment & guest coordination"
      ]
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]">

      {/*  SLIDER */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        {slides[current].type === "image" ? (
          <img
            src={slides[current].src}
            className="w-full h-full object-cover md:object-cover"
            alt="Wedding Slide"
          />
        ) : (
          <video
            src={slides[current].src}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {slides[current].title}
            </h1>
            <p className="text-sm md:text-lg text-gray-200">
              {slides[current].desc}
            </p>
          </div>
        </div>
      </div>

      {/* 💍 WEDDING EVENTS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-red-500">
          Wedding Events
        </h2>

        <p className="text-center text-gray-300 max-w-4xl mx-auto mb-14">
          We offer bespoke wedding event planning with meticulous attention to
          detail, ensuring elegant and stress-free celebrations.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border hover:shadow-2xl transition bg-white/10"
            >
              {/* Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  {event.title}
                </h3>
                <ul className="text-gray-300 text-sm list-disc list-inside pl-5">
                  {event.points.map((point, i) => (
                    <li key={i} className="mb-2 text-gray-300 marker:text-red-500"> {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <WeddingPackagePlan/>
    </div>
  );
};

export default Wedding;

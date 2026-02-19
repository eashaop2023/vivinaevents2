import React, { useEffect, useState } from "react";

// Slider assets
 import pro from "../assets/photos/pro.jpg";
import pro1 from "../assets/photos/pro1.jpg";
import celebration from "../assets/photos/celebration.jpg";

// Card images
import costume from "../assets/photos/costume.jpg";
import destination from "../assets/photos/destination.jpg";
import locationshoot from "../assets/photos/locationshoot.jpg";
import makeup from "../assets/photos/makeup.jpg";

const PreWeddingEvents = () => {
  const slides = [
    {
      src: pro,
      title: "Pre-Wedding Shoots",
      desc: "Timeless love stories captured with artistic perfection"
    },
    {
      src: pro1,
      title: "Creative Concepts",
      desc: "From traditional elegance to modern themed shoots"
    },
    {
      src: celebration,
      title: "Celebrations & Parties",
      desc: "Moments that deserve to be remembered forever"
    }
  ];

  const sections = [
    {
      title: "Costume Themes",
      image: costume,
      points: [
        "Traditional",
        "Western",
        "Vintage",
        "Customized themed concepts"
      ]
    },
    {
      title: "Destination Shoots",
      image: destination,
      points: [
        "Beach locations",
        "Mountain backdrops",
        "City aesthetics",
        "Heritage locations"
      ]
    },
    {
      title: "Location Preference",
      image: locationshoot,
      points: [
        "Local locations",
        "Outstation shoots",
        "Overseas destinations"
      ]
    },
    {
      title: "Makeup Services",
      image:makeup,
      points: [
        "Bridal makeup",
        "Groom makeup",
        "Family makeup services"
      ]
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]">

      {/* 🔥 SLIDER */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img
          src={slides[current].src}
          alt="Pre Wedding Slide"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
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

      {/*  CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-red-500">
          Pre-Wedding Shoots & Parties
        </h2>

        <p className="text-center text-gray-300 max-w-4xl mx-auto mb-14">
          Beautifully curated pre-wedding shoots and celebrations designed to
          capture emotions, elegance, and unforgettable memories.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {sections.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border hover:shadow-2xl transition bg-white/10"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  {item.title}
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside pl-5">
                  {item.points.map((point, i) => (
                    <li key={i} className="mb-2 text-gray-300 marker:text-red-500">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PreWeddingEvents;

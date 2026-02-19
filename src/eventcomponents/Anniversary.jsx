import React, { useEffect, useState } from "react";

// Slider images
 import pro from "../assets/photos/pro.jpg";
import pro1 from "../assets/photos/pro1.jpg";
import weddingphoto from "../assets/photos/weddingphoto.jpg";

// Card images
import anniversaryvenue from "../assets/photos/anniversaryvenue.jpg";
import decoraniversary from "../assets/photos/decoraniversary.jpg";
import catering from "../assets/photos/catering.jpg";
import enterrinement from "../assets/photos/enterrinement.jpg";

const Anniversary = () => {
  const slides = [
    {
      src: weddingphoto ,
      title: "Anniversary Celebration",
      desc: "Celebrating love, memories, and togetherness"
    },
    {
      src: pro,
      title: "Elegant & Meaningful Moments",
      desc: "Thoughtfully planned celebrations for every milestone"
    },
    {
      src: pro1,
      title: "Timeless Celebrations",
      desc: "Where love stories continue beautifully"
    }
  ];

  const services = [
    {
      title: "Venue Arrangement",
      image: anniversaryvenue,
      points: [
        "Romantic & elegant venue selection",
        "Indoor & outdoor options",
        "Complete setup management"
      ]
    },
    {
      title: "Decor & Ambience",
      image: decoraniversary,
      points: [
        "Theme-based decor concepts",
        "Floral & lighting arrangements",
        "Personalized celebration styling"
      ]
    },
    {
      title: "Catering Services",
      image: catering,
      points: [
        "Customized menu planning",
        "Professional catering team",
        "Quality food & presentation"
      ]
    },
    {
      title: "Entertainment",
      image: enterrinement,
      points: [
        "Music & live performances",
        "Anchoring & activities",
        "Memorable guest engagement"
      ]
    }
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

      {/* mobile-FIRST SLIDER */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={slides[current].src}
          alt="Anniversary Slide"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-2xl md:text-5xl font-bold mb-3">
              {slides[current].title}
            </h1>
            <p className="text-xs md:text-lg text-gray-200">
              {slides[current].desc}
            </p>
          </div>
        </div>
      </div>

      {/* ANNIVERSARY CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14 ">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 text-red-500">
          Anniversary Celebration
        </h2>

        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 text-sm md:text-base">
          Celebrate love and togetherness with elegantly planned anniversary
          events including venue, décor, catering, and entertainment.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border hover:shadow-xl transition bg-white/10"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 sm:h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg md:text-xl font-semibold text-red-600 mb-3">
                  {item.title}
                </h3>

                <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside pl-5">
                  {item.points.map((point, i) => (
                    <li key={i} className="mb-2 text-gray-300 marker:text-red-500"> {point}</li>
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

export default Anniversary;

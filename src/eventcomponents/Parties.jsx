import React, { useEffect, useState } from "react";

// Slider images
 import celebration from "../assets/photos/celebration.jpg";
import pro1 from "../assets/photos/pro1.jpg";
import parties1 from "../assets/photos/parties1.jpg";

// Card images
import birthadayparty from "../assets/photos/birthadayparty.webp";
import Bachelorsparty from "../assets/photos/Bachelorsparty.jpg";
import babyshower from "../assets/photos/babyshower.jpg";
import namingceremony from "../assets/photos/namingceremony.jpg";

const Parties = () => {
  const slides = [
    {
      src:celebration,
      title: "Parties & Celebrations",
      desc: "Joyful moments crafted with creativity and care"
    },
    {
      src: parties1,
      title: "Birthday & Bachelor Parties",
      desc: "Fun-filled events with style and entertainment"
    },
    {
      src: pro1,
      title: "Traditional & Modern Events",
      desc: "From rituals to celebrations, perfectly managed"
    }
  ];

  const parties = [
    {
      title: "Birthday Party",
      image: birthadayparty,
      points: [
        "Creative themed décor",
        "Catering & custom cakes",
        "Games, activities & entertainment"
      ]
    },
    {
      title: "Bachelor’s Party",
      image: Bachelorsparty,
      points: [
        "Stylish venue selection",
        "Stylish and energetic bachelor celebrations",
        "Fun activities & entertainment",
        "Food & drinks arrangement"
      ]
    },
    {
      title: "Baby Shower",
      image: babyshower,
      points: [
        "Elegant theme décor",
        "Catering & refreshments",
        "Joyful celebration setup"
      ]
    },
    {
      title: "Naming Ceremony",
      image: namingceremony,
      points: [
        "Traditional ritual setup",
        "Decor & floral arrangements",
        "Catering & guest management"
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

      {/* 🔥 MOBILE-FIRST SLIDER */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={slides[current].src}
          alt="Party Slide"
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

      {/* 🎉 PARTIES CONTENT */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 text-red-500">
          Parties
        </h2>

        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 text-sm md:text-base">
          We design memorable celebrations for every occasion, combining
          creativity, elegance, and seamless execution.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {parties.map((party, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border hover:shadow-xl transition bg-white/10"
            >
              <img
                src={party.image}
                alt={party.title}
                className="w-full h-44 sm:h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg md:text-xl font-semibold text-red-600 mb-3">
                  {party.title}
                </h3>

                <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside pl-5">
                  {party.points.map((point, i) => (
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

export default Parties;

import React, { useEffect, useState } from "react";

// Slider images
 import corporateevent from "../assets/photos/corporateevent.jpg";
import corporateevent1 from "../assets/photos/corporateevent1.jpg";
import corporate from "../assets/photos/corporate.jpg";

// Card images
import applaunch from "../assets/photos/applaunch.jpg";
import awardfunction from "../assets/photos/awardfunction.jpg";
import gettogether from "../assets/photos/gettogether.jpg";
import cmpanversary from "../assets/photos/cmpanversary.jpg";


const CorporateEvent = () => {
  const slides = [
    {
      src: corporate,
      title: "Corporate Events",
      desc: "Professional events crafted with precision and impact"
    },
    {
      src: corporateevent,
      title: "Brand & Business Celebrations",
      desc: "Launching ideas, honoring success, building connections"
    },
    {
      src: corporateevent1,
      title: "Seamless Corporate Planning",
      desc: "From concept to execution, perfectly managed"
    }
  ];

  const events = [
    {
      title: "App Launch",
      image: applaunch,
      points: [
        "Professional venue setup",
        "Marketing & branding support",
        "Professional and impactful launch events",
        "Presentation & stage management"
      ]
    },
    {
      title: "Award Function",
      image: awardfunction,
      points: [
        "Well-organized award ceremonies with venue management",
        "Host & program coordination",
        "Awards & stage setup"
      ]
    },
    {
      title: "Get Together",
      image: gettogether,
      points: [
        "Engaging corporate gatherings with Team-building activities",
        "Games & engagement programs",
        "Food & refreshments"
      ]
    },
    {
      title: "Company Anniversary",
      image: cmpanversary,
      points: [
        "Celebrate company milestones with Themed decor concepts",
        "Entertainment arrangements",
        "End-to-end event planning"
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

      {/* MOBILE-FIRST SLIDER */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={slides[current].src}
          alt="Corporate Slide"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35 flex items-center justify-center text-center px-4">
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

      {/* CORPORATE EVENTS */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 text-red-500">
          Corporate Events
        </h2>

        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 text-sm md:text-base">
          We deliver professional corporate events that strengthen brands,
          celebrate achievements, and create meaningful connections.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border hover:shadow-xl transition bg-white/10"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-44 sm:h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg md:text-xl font-semibold text-red-600 mb-3">
                  {event.title}
                </h3>

                <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside pl-5">
                  {event.points.map((point, i) => (
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

export default CorporateEvent;

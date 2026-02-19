import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Wedding Events",
    path: "/services/weddingevent",
    items: [
      "Sangeeth ",
      "Mehndi",
      "Haldi",
      "Reception",
    ],
  },
  {
    title: "Pre-Wedding Shoot",
    path: "/services/preweddingevent", 
    items: [
      "Costume Themes",
      "Destination Shoots",
      "Location Preference",
      "Makeup Services",
    ],
  },
  {
    title: "Parties",
    path: "/services/partieservices",
    items: [
      "Birthday party",
      "Baby shower events",
      "Naming ceremony",
      "Bachelor’s Party",
    ],
  },
  {
    title: "Corporate Events",
    path: "/services/corporateservices",
    items: [
      "Product & app launches",
      "Award functions",
      "Get Together",
      "Company Anniversary",
    ],
  },
  {
    title: "Anniversary Events",
    path: "/services/anniversaryservices",
    items: [
      "Venue Arrangement",
      "Decor & Ambience",
      "Catering Services",
      "Entertainment",
    ],
  },
  {
    title: "ProShoot (Instant Video)",
    path:"/services/proshootservices",
    items: [
      "10-minute professional video",
      "Shoot + edit instantly",
      "High-quality output",
      "Perfect for live events",
    ],
  },
  {
    title: "Event Decor",
    path: "/services/decor",
    items: [
      "Wedding décor",
      "Party decor",
      "Corporate decor",
      "Theme-based floral setups",
    ],
  },
  {
    title: "Catering Services",
    path: "/services/catering",
    items: [
      "Veg & Non-Veg menus",
      "Traditional & international cuisine",
      "Customizable event menu",
      "Professional serving staff",
    ],
  },
  {
    title: "Entertainment",
    path: "/services/entertainment",
    items: [
      "DJs & live bands",
      "Anchors & emcees",
      "Dance performances",
      "Interactive games",
    ],
  },
  
];

 const OurServices=()=> {
     const navigate = useNavigate();
  return (
    <section className="min-h-screen px-5 py-24 text-white bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]">
      
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-red-500 mb-16">
        Our Services
      </h2>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-8 max-w-7xl mx-auto"
      >{services.map((service, index) => (
          <div
            key={index}
            className=" bg-white/10 rounded-xl p-6 min-h-[260px] shadow-lg
              transition-all duration-300 hover:-translate-y-2 hover:bg-white/5"
          >
            <h3 className="text-lg font-semibold mb-4 text-red-500">
              {service.title}
            </h3>

            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              {service.items.map((item, i) => (
                <li key={i}>
                  {String(i + 1).padStart(2, "0")}. {item}
                </li>
              ))}
            </ul>

            <button  onClick={() => navigate(service.path)}
            className=" border border-red-500 text-red-500  text-sm font-medium
             px-4 py-2 rounded-full hover:bg-red-500 hover:text-white
            transition-all duration-300">
              — More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
export default OurServices;
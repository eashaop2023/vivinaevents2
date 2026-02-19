
import React from "react";
import logo from "../assets/photos/logo.png"
import { useNavigate } from "react-router-dom";

const HomeLuxue = () => {
    const navigate = useNavigate();
  return (
    <section className="h-[75vh] md:h-[80vh] w-full bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-black flex items-center px-6 md:px-16">
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* left side */}
        <div className="text-[#f5e6c8] space-y-4">
          <p className="uppercase tracking-[0.3em] text-xs text-[#d6b36a]">
            For premium and luxury feel
          </p>

          <h1 className="text-4xl md:text-5xl ">
            Luxe
          </h1>

          <p className="text-lg md:text-base text-[#e7d9b8] max-w-md leading-relaxed">
            Experience premium wedding coverage with our Luxe Package blending
            traditional and modern Indian aesthetics to create elegant,
            timeless memories of your celebration.
          </p>
          {/* 
          <div className="flex items-end gap-3">
            <span className="text-4xl md:text-5xl font-bold text-[#f5e6c8]">
              ₹1,99,999
            </span>
            <span className="text-sm text-[#d6b36a] mb-1">
              + GST
            </span>
          </div> */}

          <button  onClick={() => navigate("/eventbooking")}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e5c37a] to-[#c9a24f] text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform">
            Book Now
            <span>→</span>
          </button>
        </div>

        {/* Right side */}
        {/* <div className="flex justify-center md:justify-end">
          <div className="text-center md:text-right">
            <h2 className="text-xl md:text-6xl font-extrabold tracking-wide text-white">
              FLASHOOT
            </h2>
            <p className="mt-2 text-xl tracking-[0.4em] text-[#d6b36a] font-semibold">
              LUXE
            </p>
          </div>
        </div> */}
        <div className="flex justify-center md:justify-end">
          <div className="text-center md:text-right flex flex-col items-center md:items-end">
            
            {/* LOGO */}
            <img
              src={logo}
              alt="Flashoot Luxe Logo"
              className="w-44 sm:w-56 md:w-72 lg:w-80 object-contain invert brightness-200"
            />
          </div>
        </div>


      </div>
    </section>
  );
};

export default HomeLuxue;

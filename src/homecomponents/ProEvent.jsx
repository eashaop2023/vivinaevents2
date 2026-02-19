import React from "react";
import { useNavigate } from "react-router-dom";

const ProEvent = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden
      bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]">

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6
        flex flex-col justify-center items-center text-center">

        {/* Brand */}
        <div className="mb-6">
          <p className="text-sm tracking-widest text-gray-300 uppercase">
            Luxury Event Planning
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-red-500 mt-2">
            Vivina Events
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl leading-relaxed">
            ProShoot • Decor • Catering • Entertainment
          </p>
        </div>

        {/* Hero Heading */}
        <div className="mt-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white
            leading-tight max-w-3xl mx-auto">
            Creating Timeless Celebrations,
            <span className="block text-red-500">
              Perfectly Curated
            </span>
          </h2>

          <p className="mt-6 text-gray-300 max-w-2xl text-lg mx-auto">
            From intimate moments to grand events, Vivina Events designs
            experiences that last forever.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-row gap-4">
          <button
            onClick={() => navigate("/events")}
            className="px-8 py-3 bg-red-600 hover:bg-red-700
              text-white rounded-full text-lg font-semibold transition"
          >
            Events
          </button>

          <button
            onClick={() => navigate("/proshoot")}
            className="px-8 py-3 border border-white/40
              text-white hover:bg-white hover:text-black
              rounded-full text-lg font-semibold transition"
          >
            ProShoot
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProEvent;


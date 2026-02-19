
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProShootMobile = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-black text-white flex items-center justify-center px-4 sm:px-6 py-20 sm:py-24 ">
      <div className="max-w-6xl w-full text-center relative">

       
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-red-800 mb-2 mt-10">
          WORLD’S FIRST QUICK CONTENT SERVICE
        </p>

        <h1 className="text-[20px] sm:text-5xs md:text-1lg font-medium text-gray-100 mb-1">
          We Shoot • Edit • Deliver Reels in
        </h1>

    
        <h2 className="text-[56px] sm:text-[72px] md:text-[110px] font-bold text-red-400 leading-none mb-6">
          10 Minutes<span className="text-sm sm:text-lg align-top">*</span>
        </h2>

        {/* Phone mockup */}
        <div className="flex justify-center mb-16 sm:mb-24">
          <div
            className="w-[180px] h-[360px] sm:w-[220px] sm:h-[440px] md:w-[250px] md:h-[500px]
                       bg-[#0b0b12] rounded-[26px] border border-gray-700 shadow-2xl 
                       flex items-center justify-center"
            style={{
              transform: `perspective(1000px)
                translateY(${Math.min(-40 + (scrollY / 300) * 80, 40)}px)
                rotateX(${Math.max(20 - (scrollY / 300) * 20, 0)}deg)`,
              transformOrigin: "top center",
            }}
          >
            <img
              src="https://www.flashoot.com/assets/web_application-CKt-GzbF.png"
              alt="App Preview"
              className="w-[160px] h-[330px] sm:w-[190px] sm:h-[400px] md:w-[220px] md:h-[460px] object-cover rounded"
            />
          </div>
        </div>

        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {["Shot on ITF iPhone", "Backed by ISB", "Reel Makers"].map((item) => (
            <span
              key={item}
              className="px-4 sm:px-5 py-1.5 rounded-full border border-gray-500/50 text-xs sm:text-sm  text-gray-300 bg-gray-500/30 backdrop-blur"
            >
              {item}
            </span>
          ))}
        </div>

  
        <div className="flex flex-row sm:flex-row justify-center gap-4 sm:gap-6 mb-14">
          <button onClick={() => navigate("/proshootbooking")}
          className="bg-red-700 hover:bg-red-600 text-black font-semibold px-8 sm:px-10 py-3 rounded-xl transition">
            Book Now
          </button>
          <button onClick={() => navigate("/partner")}
          className="border border-gray-600 hover:border-gray-400 px-8 sm:px-10 py-3 rounded-xl transition">
            Become a Partner
          </button>
        </div>

        <div className="flex items-center justify-center divide-x divide-white/30 mb-12">
          <Stat value="50,000+" label="Reels Delivered" />
          <Stat value="4.9/5" label="Rating" />
          <Stat value="500+" label="Reel Makers" />
        </div>

  
        <p className="text-gray-400 text-xs sm:text-sm tracking-wide">
          FEATURED IN{" "}
          <span className="text-white font-semibold">Outlook</span> •{" "}
          <span className="text-white font-semibold">Entrepreneur Magazine</span> •{" "}
          <span className="text-white font-semibold">Hindustan Times</span>
        </p>

      </div>
    </section>
  );
};

const Stat = ({ value, label }) => (
  <div className="px-3 sm:px-6 text-center">
    <p className="text-xl sm:text-2xl font-bold text-orange-700">{value}</p>
    <p className="text-gray-400 text-xs sm:text-sm">{label}</p>
  </div>
);

export default ProShootMobile;
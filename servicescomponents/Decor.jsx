import React, { useEffect, useState } from "react";

// Slider images
import decor1 from "../assets/photos/decor1.jpg";
import decor2 from "../assets/photos/decor2.jpg";
import decor3 from "../assets/photos/decor3.jpg";

// Card images
import weddingdecor from "../assets/photos/weddingdecor.jpg";
import partydecor from "../assets/photos/partydecor.jpg";
import corporatedecor from "../assets/photos/corporatedecor.jpg";
import floraldecor from "../assets/photos/floraldecor.jpg";

const EventDecor = () => {
  const slides = [
    {
      src: decor1,
      title: "Event Decor",
      desc: "Luxury decor solutions that transform venues into unforgettable spaces",
    },
    {
      src: decor2,
      title: "Customized Decor Concepts",
      desc: "Designed to match your theme, style, and vision",
    },
    {
      src: decor3,
      title: "Elegant & Creative Setups",
      desc: "From minimal elegance to grand celebrations",
    },
  ];

  const decorEvents = [
    {
      title: "Wedding Decor",
      image: weddingdecor,
      points: [
        "Traditional & modern wedding décor themes",
        "Stage, mandap & entrance decorations",
        "Premium lighting & floral arrangements",
      ],
    },
    {
      title: "Party Decor",
      image: partydecor,
      points: [
        "Birthday & private party decor",
        "Balloon styling & custom props",
        "Theme-based party arrangements",
      ],
    },
    {
      title: "Corporate Decor",
      image: corporatedecor,
      points: [
        "Professional corporate décor solutions",
        "Brand-focused stage & backdrop designs",
        "Conference & launch event styling",
      ],
    },
    {
      title: "Floral & Theme Decor",
      image: floraldecor,
      points: [
        "Fresh floral decorations",
        "Theme-based creative setups",
        "Indoor & outdoor décor solutions",
      ],
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

      {/* SLIDER */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={slides[current].src}
          alt="Decor Slide"
          className="w-full h-full object-cover"
          style={{ imageRendering: "auto" }}
        />

        <div className="absolute inset-0 bg-black/10 flex items-center justify-center text-center px-4">
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

      {/* EVENT DECOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 text-red-500">
          Event Decor Services
        </h2>

        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 text-sm md:text-base">
          Luxury and customized decor solutions that bring life, elegance,
          and creativity to every celebration.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {decorEvents.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/10 hover:shadow-xl transition"
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
                    <li
                      key={i}
                      className="marker:text-red-500"
                    >
                      {point}
                    </li>
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
export default EventDecor;



// import React from "react";

// import img1 from "../assets/photos/img1.png";
// import img2 from "../assets/photos/img2.png";
// import img3 from "../assets/photos/img3.png";
// import img4 from "../assets/photos/img4.png";

// const Decor=() =>{
//   return (
//     <div
//       className="
//         min-h-screen w-full px-5 pt-28 pb-20
//         bg-gradient-to-br from-[#1f2a44] via-[#2b2f6f] to-[#1f2a44]
//       "
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* ================= TITLE ================= */}
//         <h2 className="text-center text-3xl md:text-[38px] font-bold text-white mb-3 mt-10">
//           Event Décor
//         </h2>

//         {/* ================= SUBTITLE ================= */}
//         <p className="text-center max-w-3xl mx-auto mb-14 text-sm md:text-base leading-relaxed text-[#e0e3ff]">
//           Luxury and customized décor solutions that transform venues into unforgettable spaces.
//         </p>

//         {/* ================= GRID ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
//           {/* Wedding */}
//           <div
//             className="
//               bg-white rounded-2xl overflow-hidden
//               shadow-[0_20px_45px_rgba(0,0,0,0.35)]
//               transition-all duration-300
//               hover:-translate-y-2
//               hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)]
//             "
//           >
//             <div className="w-full h-[230px]">
//               <img
//                 src={img1}
//                 alt="Wedding Decor"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="text-center text-xl md:text-[22px] font-semibold text-[#1f2a44] mt-5 mb-3 px-4">
//               Wedding Décor
//             </h3>
//             <ul className="text-center px-7 pb-7 list-inside space-y-2">
//               <li className="text-sm text-gray-700">Stage & mandap décor</li>
//               <li className="text-sm text-gray-700">Floral arrangements</li>
//               <li className="text-sm text-gray-700">Entrance & pathway styling</li>
//               <li className="text-sm text-gray-700">Theme-based wedding décor</li>
//             </ul>
//           </div>

//           {/* Party */}
//           <div
//             className="
//               bg-white rounded-2xl overflow-hidden
//               shadow-[0_20px_45px_rgba(0,0,0,0.35)]
//               transition-all duration-300
//               hover:-translate-y-2
//               hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)]
//             "
//           >
//             <div className="w-full h-[230px]">
//               <img
//                 src={img2}
//                 alt="Party Decor"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="text-center text-xl md:text-[22px] font-semibold text-[#1f2a44] mt-5 mb-3 px-4">
//               Party Décor
//             </h3>
//             <ul className="text-center px-7 pb-7 list-inside space-y-2">
//               <li className="text-sm text-gray-700">Birthday party themes</li>
//               <li className="text-sm text-gray-700">Balloon & lighting décor</li>
//               <li className="text-sm text-gray-700">Custom props & backdrops</li>
//               <li className="text-sm text-gray-700">Luxury party styling</li>
//             </ul>
//           </div>

//           {/* Corporate */}
//           <div
//             className="
//               bg-white rounded-2xl overflow-hidden
//               shadow-[0_20px_45px_rgba(0,0,0,0.35)]
//               transition-all duration-300
//               hover:-translate-y-2
//               hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)]
//             "
//           >
//             <div className="w-full h-[230px]">
//               <img
//                 src={img3}
//                 alt="Corporate Decor"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="text-center text-xl md:text-[22px] font-semibold text-[#1f2a44] mt-5 mb-3 px-4">
//               Corporate Décor
//             </h3>
//             <ul className="text-center px-7 pb-7 list-inside space-y-2">
//               <li className="text-sm text-gray-700">Stage branding</li>
//               <li className="text-sm text-gray-700">Conference & seminar décor</li>
//               <li className="text-sm text-gray-700">Product launch setups</li>
//               <li className="text-sm text-gray-700">Corporate event themes</li>
//             </ul>
//           </div>

//           {/* Floral */}
//           <div
//             className="
//               bg-white rounded-2xl overflow-hidden
//               shadow-[0_20px_45px_rgba(0,0,0,0.35)]
//               transition-all duration-300
//               hover:-translate-y-2
//               hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)]
//             "
//           >
//             <div className="w-full h-[230px]">
//               <img
//                 src={img4}
//                 alt="Floral Decor"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="text-center text-xl md:text-[22px] font-semibold text-[#1f2a44] mt-5 mb-3 px-4">
//               Floral & Theme Décor
//             </h3>
//             <ul className="text-center px-7 pb-7 list-inside space-y-2">
//               <li className="text-sm text-gray-700">Fresh flower arrangements</li>
//               <li className="text-sm text-gray-700">Theme-based décor concepts</li>
//               <li className="text-sm text-gray-700">Customized color palettes</li>
//               <li className="text-sm text-gray-700">Luxury floral installations</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Decor;
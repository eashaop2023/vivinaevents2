import React, { useEffect, useState } from "react";

// Slider images
import catering1 from "../assets/photos/catering1.jpg";
import catering2 from "../assets/photos/catering2.jpg";
import catering3 from "../assets/photos/catering3.jpg";

// Card images
import vegnonveg from "../assets/photos/vegnonveg.jpg";
import cuisines from "../assets/photos/cuisines.jpg";
import custommenu from "../assets/photos/custommenu.jpg";
import servicestaff from "../assets/photos/servicestaff.jpg";

const Catering = () => {
  const slides = [
    {
      src: catering1,
      title: "Catering Services",
      desc: "Premium catering designed to delight every palate",
    },
    {
      src: catering2,
      title: "Delicious & Hygienic Food",
      desc: "Perfect taste, quality ingredients, and professional presentation",
    },
    {
      src: catering3,
      title: "Menus Crafted for Every Event",
      desc: "From intimate gatherings to grand celebrations",
    },
  ];

  const cateringOptions = [
    {
      title: "Veg & Non-Veg Menus",
      image: vegnonveg,
      points: [
        "Wide variety of vegetarian & non-vegetarian dishes",
        "Fresh ingredients with authentic taste",
        "Hygienic cooking & presentation",
      ],
    },
    {
      title: "Traditional & International Cuisines",
      image: cuisines,
      points: [
        "South & North Indian traditional cuisines",
        "Continental & global menu options",
        "Experienced chefs for authentic flavors",
      ],
    },
    {
      title: "Customizable Event Menus",
      image: custommenu,
      points: [
        "Menu planning based on your event type",
        "Customized dishes as per preferences",
        "Flexible menu combinations",
      ],
    },
    {
      title: "Professional Service Staff",
      image: servicestaff,
      points: [
        "Well-trained & courteous service staff",
        "On-time food service management",
        "Guest-friendly & professional handling",
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
          alt="Catering Slide"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-center px-4">
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

      {/* CATERING SERVICES */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 text-red-500">
          Catering Services
        </h2>

        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 text-sm md:text-base">
          Premium catering services crafted with quality, taste, and
          professionalism to make every event memorable.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cateringOptions.map((item, index) => (
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
                    <li key={i} className="marker:text-red-500">
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

export default Catering;



// import { useState } from "react";

// // import vegImg from "../assets/menu.png";
// // import cuisineImg from "../assets/cuisine.png";
// // import customImg from "../assets/custom-menu.png";
// // import staffImg from "../assets/staff.png";
// import img1 from "../assets/photos/img1.png";
// import img2 from "../assets/photos/img2.png";
// import img3 from "../assets/photos/img3.png";
// import img4 from "../assets/photos/img4.png";

// const Catering=()=> {
//   const [openIndex, setOpenIndex] = useState(null);

//   const data = [
//     {
//       title: "Veg & Non-Veg Menus",
//       short: "Wide range of delicious vegetarian and non-vegetarian dishes.",
//       full:
//         "Wide range of delicious vegetarian and non-vegetarian dishes prepared by expert chefs using premium ingredients.",
//       image: img1,
//     },
//     {
//       title: "Traditional & International Cuisine",
//       short: "Taste the best of Indian & global flavors.",
//       full:
//         "Taste the best of Indian & global flavors including Mughlai, Continental, Chinese, Italian and fusion cuisine.",
//       image: img2,
//     },
//     {
//       title: "Customizable Event Menus",
//       short: "Menus customized as per event needs.",
//       full:
//         "Menus can be fully customized based on guest preferences, theme, budget, dietary needs and seasonal specialties.",
//       image: img3,
//     },
//     {
//       title: "Professional Service Staff",
//       short: "Well-trained and polite service team.",
//       full:
//         "Our professional service staff ensures smooth service, hygiene, etiquette and guest satisfaction.",
//       image: img4,
//     },
//   ];

//   const handleToggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen px-5 pt-24 pb-16 bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-[#2b2b2b] font-[Poppins]">
      
//       {/* Title */}
//       <h2 className="text-center text-3xl md:text-[38px] font-bold text-gray-100 mb-3">
//         Catering Services
//       </h2>
//       <p className="text-center text-gray-300 text-sm md:text-base mb-14">
//         Premium catering designed to delight every palate.
//       </p>

//       {/* Cards Grid */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-9">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.25)] 
//                        transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(0,0,0,0.35)]"
//           >
//             {/* Image */}
//             <div className="w-full h-[180px] md:h-[220px] bg-black flex items-center justify-center overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Content */}
//             <h3 className="text-xl font-semibold text-gray-900 px-6 mt-6 mb-3">
//               {item.title}
//             </h3>

//             <p className="text-sm text-gray-600 leading-relaxed px-6 mb-6">
//               {openIndex === index ? item.full : item.short}
//             </p>

//             {/* Button */}
//             <div className="px-6 pb-7">
//               <button
//                 onClick={() => handleToggle(index)}
//                 className="px-7 py-3 rounded-full text-sm font-medium text-white
//                            bg-gradient-to-br from-[#c89b3c] to-[#a87c25]
//                            transition-all duration-300 hover:scale-105
//                            hover:bg-gradient-to-br hover:from-[#a87c25] hover:to-[#8f651c]"
//               >
//                 {openIndex === index ? "See Less" : "See More"}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Catering;
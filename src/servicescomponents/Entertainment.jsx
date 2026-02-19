import React, { useEffect, useState } from "react";

// Slider images
import entertainment1 from "../assets/photos/entertainment1.jpg";
import entertainment2 from "../assets/photos/entertainment2.jpg";
import entertainment3 from "../assets/photos/entertainment3.jpg";

// Card images
import djband from "../assets/photos/djband.jpg";
import anchor from "../assets/photos/anchor.jpg";
import dance from "../assets/photos/dance.jpg";
import games from "../assets/photos/games.jpg";

const Entertainment = () => {
  const slides = [
    {
      src: entertainment1,
      title: "Entertainment Services",
      desc: "Curated entertainment to energize and elevate every event",
    },
    {
      src: entertainment2,
      title: "Live Performances & Music",
      desc: "Engaging experiences that keep your audience entertained",
    },
    {
      src: entertainment3,
      title: "Fun, Energy & Engagement",
      desc: "Creating moments your guests will always remember",
    },
  ];

  const entertainmentOptions = [
    {
      title: "DJs & Live Bands",
      image: djband,
      points: [
        "Professional DJs for all event types",
        "Live bands with versatile music genres",
        "High-quality sound & stage setup",
      ],
    },
    {
      title: "Anchors & Emcees",
      image: anchor,
      points: [
        "Experienced anchors for smooth event flow",
        "Engaging hosting & audience interaction",
        "Multilingual emcees available",
      ],
    },
    {
      title: "Dance Performances",
      image: dance,
      points: [
        "Professional dance troupes & solo acts",
        "Classical, folk & contemporary styles",
        "Customized performances as per theme",
      ],
    },
    {
      title: "Games & Interactive Activities",
      image: games,
      points: [
        "Fun games for corporate & social events",
        "Audience engagement activities",
        "Team-building & interactive sessions",
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
          alt="Entertainment Slide"
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

      {/* ENTERTAINMENT SERVICES */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 text-red-500">
          Entertainment Services
        </h2>

        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 text-sm md:text-base">
          Curated entertainment services designed to energize your event,
          engage your guests, and create unforgettable experiences.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {entertainmentOptions.map((item, index) => (
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
export default Entertainment;



// import { useNavigate } from "react-router-dom";

// import img1 from "../assets/photos/img1.png";
// import img2 from "../assets/photos/img2.png";
// import img3 from "../assets/photos/img3.png";
// import img4 from "../assets/photos/img4.png";
// import img5 from "../assets/photos/img5.png";
// import img6 from "../assets/photos/img6.png";

// const Entertainment=() =>{
//   const navigate = useNavigate();

//   return (
//     <div
//       className="
//         min-h-screen text-white
//         bg-[radial-gradient(120%_120%_at_50%_-20%,rgba(150,20,20,0.35),transparent_60%),linear-gradient(180deg,#240404_0%,#0b0101_100%)]
//       "
//     >
//       {/* ================= HERO ================= */}
//       <section className="text-center px-5 pt-32 pb-20">
//         <h1 className="text-3xl md:text-5xl font-bold">
//           Entertainment Services
//         </h1>
//         <p className="mt-4 text-base md:text-xl text-[#f2dede]">
//           Curated entertainment to energize and elevate every event.
//         </p>
//       </section>

//       {/* ================= INTRO ================= */}
//       <section className="max-w-4xl mx-auto text-center px-5 pb-20 text-base md:text-lg text-gray-200">
//         <p>
//           From high-energy performances to elegant live acts, we bring
//           world-class entertainment that turns moments into memories.
//         </p>
//       </section>

//       {/* ================= SERVICES ================= */}
//       <section
//         className="
//           grid grid-cols-1
//           md:grid-cols-2
//           xl:grid-cols-3
//           gap-12
//           px-[6%] pb-24
//         "
//       >
//         {[
//           {
//             img: img1,
//             title: "DJs & Live Bands",
//             desc: "High-energy DJs and live bands to keep your guests dancing all night.",
//           },
//           {
//             img: img2,
//             title: "Anchors & Emcees",
//             desc: "Professional hosts ensuring smooth flow and engaging moments.",
//           },
//           {
//             img: img3,
//             title: "Dance Performances",
//             desc: "Bollywood, folk, classical & contemporary performances.",
//           },
//           {
//             img: img4,
//             title: "Celebrity Appearances",
//             desc: "Exclusive celebrity acts that add glamour and excitement.",
//           },
//           {
//             img: img5,
//             title: "Games & Interactive Activities",
//             desc: "Audience engagement games for all age groups.",
//           },
//           {
//             img: img6,
//             title: "Kids Entertainment",
//             desc: "Magicians, clowns & cartoon characters kids absolutely love.",
//           },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="
//               flex flex-col h-full overflow-hidden rounded-3xl
//               bg-white/10
//               shadow-[0_22px_55px_rgba(0,0,0,0.6)]
//               transition-all duration-300
//               hover:-translate-y-3
//               hover:shadow-[0_34px_85px_rgba(0,0,0,0.75)]
//             "
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="
//                 w-full
//                 h-[230px] sm:h-[260px] md:h-[280px]
//                 object-cover object-top
//               "
//             />

//             <h3 className="mt-7 mb-3 px-7 text-center text-xl md:text-2xl font-semibold text-[#ffdede]">
//               {item.title}
//             </h3>

//             <p className="px-8 pb-10 text-center text-sm md:text-base leading-relaxed text-gray-100">
//               {item.desc}
//             </p>
//           </div>
//         ))}
//       </section>

//       {/* ================= WHY ================= */}
//       <section className="text-center px-5 py-24 bg-black/45">
//         <h2 className="text-2xl md:text-4xl font-semibold mb-8">
//           Why Choose Our Entertainment
//         </h2>
//         <ul className="space-y-4 text-sm md:text-lg text-[#ffecec]">
//           <li>✔ Premium curated artists</li>
//           <li>✔ Customized performances</li>
//           <li>✔ Seamless coordination</li>
//           <li>✔ Luxury sound & stage setup</li>
//         </ul>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="text-center px-5 py-28 bg-gradient-to-br from-[#7a0c0c] to-[#2a0202]">
//         <h2 className="text-2xl md:text-4xl font-semibold mb-10">
//           Make Your Event Unforgettable
//         </h2>
//         <button
//           onClick={() => navigate("/book-entertainment")}
//           className="
//             px-12 py-4 text-base md:text-lg font-semibold
//             text-[#2a0202]
//             bg-[#ffd6d6]
//             rounded-full
//             transition-all duration-300
//             hover:scale-105 hover:bg-white
//           "
//         >
//           Book Entertainment
//         </button>
//       </section>
//     </div>
//   );
// }
// export default Entertainment;
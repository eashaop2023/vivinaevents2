import React from "react";
import { useNavigate } from "react-router-dom";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';

const HomeProShootSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="text-white">
          <span className="inline-block mb-3 px-4 py-1 text-xs tracking-widest rounded-full bg-red-600/20 text-red-400">
             PREMIUM EVENT REELS
          </span>
         <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Pro<span className="text-red-500">Shoot</span>
          </h2>

          <p className="mt-3 text-gray-300 text-sm sm:text-base max-w-xl">
            Get professionally shot & edited event videos delivered within
            just <span className="text-red-400 font-semibold">10 minutes</span>.
          </p>

          {/* QUICK POINTS */}
          <ul className="mt-6 space-y-3 text-sm sm:text-base">
            <li className="flex gap-3 items-center">
              <CheckOutlinedIcon className="text-red-500" />
              Instant 10-minute video delivery
            </li>
            <li className="flex gap-3 items-center">
              <CheckOutlinedIcon className="text-red-500" />
              Shoot + edit done on the spot
            </li>
            <li className="flex gap-3 items-center">
              <CheckOutlinedIcon className="text-red-500" />
              Perfect for weddings, parties & events
            </li>
          </ul>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-row gap-3 md:gap-4">
            <button
              onClick={() => navigate("/proshoot")}
              className="px-8 py-3 border border-white/40 rounded-full text-white 
              hover:bg-white hover:text-black transition font-semibold"
            >
              More Details →
            </button>

            <button
              onClick={() => navigate("/proshootbooking")}
              className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full 
              font-semibold text-white"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* RIGHT CARD (VISUAL SUMMARY) */}
        <div className="bg-white/10 border border-white/20 rounded-2xl p-10 text-white backdrop-blur-lg">
          <h3 className="text-3xl font-bold mb-6 text-center text-red-500">
            Why ProShoot?
          </h3>

          <div className="space-y-4 text-base sm:text-base text-gray-200">
            <p><ElectricBoltOutlinedIcon className="text-red-500"/> Ultra-fast delivery</p>
            <p><CameraAltOutlinedIcon className="text-red-500"/> Professional quality reels</p>
            <p><PhoneIphoneOutlinedIcon className="text-red-500"/> Shot on latest iPhones</p>
            <p><CelebrationOutlinedIcon className="text-red-500"/> Ideal for all events</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeProShootSection;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

// const HomeProShootSection = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="relative w-full py-20 px-4 overflow-hidden">

//       {/* BACKGROUND IMAGE */}
//       <img
//         src="/assets/proshoot/parties.jpg"
//         alt="ProShoot Background"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#4b000a]/80 to-black/90"></div>

//       {/* CONTENT */}
//       <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//         {/* LEFT CONTENT */}
//         <div className="text-white">
//           <span className="inline-block mb-3 px-4 py-1 text-xs tracking-widest rounded-full bg-red-600/20 text-red-400">
//             PREMIUM EVENT REELS
//           </span>

//           <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
//             Pro<span className="text-red-500">Shoot</span>
//           </h2>

//           <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-xl">
//             Professionally shot & edited event videos delivered in just{" "}
//             <span className="text-red-400 font-semibold">10 minutes</span>.
//             No waiting. No stress.
//           </p>

//           {/* FEATURES */}
//           <ul className="mt-8 space-y-4 text-sm sm:text-base">
//             <li className="flex gap-3 items-center">
//               <CheckOutlinedIcon className="text-red-500" />
//               Instant on-the-spot video delivery
//             </li>
//             <li className="flex gap-3 items-center">
//               <CheckOutlinedIcon className="text-red-500" />
//               Shoot + edit during the event
//             </li>
//             <li className="flex gap-3 items-center">
//               <CheckOutlinedIcon className="text-red-500" />
//               Perfect for weddings, parties & launches
//             </li>
//           </ul>

//           {/* BUTTONS */}
//           <div className="mt-10 flex flex-col sm:flex-row gap-5">
//             <button
//               onClick={() => navigate("/proshoot")}
//               className="px-9 py-3 rounded-full border border-white/40 text-white
//               hover:bg-white hover:text-black transition-all font-semibold"
//             >
//               Explore ProShoot →
//             </button>

//             <button
//               onClick={() => navigate("/booking")}
//               className="px-9 py-3 rounded-full bg-red-600 hover:bg-red-700 
//               transition-all font-semibold text-white shadow-lg shadow-red-600/30"
//             >
//               Book Now
//             </button>
//           </div>
//         </div>

//         {/* RIGHT GLASS CARD */}
//         <div className="bg-white/10 backdrop-blur-2xl border border-white/20 
//         rounded-3xl p-8 text-white shadow-2xl">

//           <h3 className="text-2xl font-bold text-center mb-6">
//             Why ProShoot?
//           </h3>

//           <div className="grid grid-cols-2 gap-6 text-center text-sm sm:text-base">
//             <div className="bg-white/10 rounded-2xl py-6">
//               <p className="text-3xl font-bold text-red-500">10 min</p>
//               <p className="text-gray-300 mt-1">Delivery</p>
//             </div>

//             <div className="bg-white/10 rounded-2xl py-6">
//               <p className="text-3xl font-bold text-red-500">4K</p>
//               <p className="text-gray-300 mt-1">Quality</p>
//             </div>

//             <div className="bg-white/10 rounded-2xl py-6">
//               <p className="text-3xl font-bold text-red-500">Live</p>
//               <p className="text-gray-300 mt-1">Editing</p>
//             </div>

//             <div className="bg-white/10 rounded-2xl py-6">
//               <p className="text-3xl font-bold text-red-500">All</p>
//               <p className="text-gray-300 mt-1">Events</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HomeProShootSection;

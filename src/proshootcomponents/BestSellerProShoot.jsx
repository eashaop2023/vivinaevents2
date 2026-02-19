import React from "react";
import { useNavigate } from "react-router-dom";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const BestSellerProShoot= () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-24">
        {/* Heading */}
        <h1 className="pt-6 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 md:mb-16">
          Bestsellers
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          
          {/* Hourly Plan */}
          <div  className="relative rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-6 sm:p-7 text-white shadow-2xl 
          flex flex-col cursor-pointer transition-all duration-300 ease-out hover:scale-105
          hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] hover:border-red-500/60">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              Hourly Plan
            </h2>

            <p className="text-center text-red-400 mt-2 font-medium">
              Quickest Content
            </p>

            <p className="text-center text-white/70 mt-3 text-sm sm:text-base">
              Perfect for anyone who wants a single, fast, high-quality reel.
            </p>

            {/* Divider */}
            <div className="h-px bg-white/20 my-5" />

            {/* Features */}
            <p className="text-center text-red-400 text-xs sm:text-sm mb-4">
              WHAT'S INCLUDED
            </p>

            <ul className="space-y-3 text-sm sm:text-base flex-1">
              <li className="flex gap-3">
                <CheckOutlinedIcon className="text-red-500" /> 1 Hour Shoot
              </li>
              <li className="flex gap-3">
                <CheckOutlinedIcon className="text-red-500" /> 1 Edited Reel Delivered
              </li>
              <li className="flex gap-3">
                <CheckOutlinedIcon className="text-red-500" /> Shot on Latest iPhone
              </li>
              <li className="flex gap-3">
                <CheckOutlinedIcon className="text-red-500" /> Fast Delivery (10 mins post shoot)
              </li>
              <li className="flex gap-3">
                <CheckOutlinedIcon className="text-red-500" /> Trained & Certified Reel Maker
              </li>
              <li className="flex gap-3">
                <CheckOutlinedIcon className="text-red-500" /> Flashoot Branding Included
              </li>
            </ul>

            {/* Button */}
            <button
              onClick={() => navigate("/proshootbooking")}
              className="mt-6 mx-auto w-full sm:w-[200px] rounded-xl bg-red-700 hover:bg-red-800 transition py-3 sm:py-4 font-semibold text-base sm:text-lg flex items-center justify-center gap-2"
            >
              ₹ Book Now →
            </button>
          </div>

          {/* Half-Day Plan */}
          <div className="relative rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-6 sm:p-7 text-white shadow-2xl 
          flex flex-col cursor-pointer transition-all duration-300 ease-out hover:scale-105
          hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] hover:border-red-500/60">
            
            {/* Badge */}
            <span className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-orange-700 text-[9px] sm:text-xs px-2 py-1 rounded-full border border-red-800">
              MOST POPULAR
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              Half-Day Plan
            </h2>

            <p className="text-center text-yellow-400 mt-2 font-medium">
              Event Essential
            </p>

            <p className="text-center text-white/70 mt-3 text-sm sm:text-base">
              Ideal for events and creators who need more time and more content.
            </p>

            {/* Divider */}
            <div className="h-px bg-white/20 my-5" />

            {/* Features */}
            <p className="text-center text-red-400 text-xs sm:text-sm mb-4">
              WHAT'S INCLUDED
            </p>

            <ul className="space-y-3 text-sm sm:text-base flex-1">
              <li className="flex gap-3">
                <CheckOutlinedIcon className="text-red-500" /> Up to 3 Hours Shoot
              </li>
              <li className="flex gap-3">
                <CheckOutlinedIcon className="text-red-500" /> 2 Edited Reels
              </li>
              <li className="flex gap-3">
                <CheckOutlinedIcon className="text-red-500" /> Shot on Latest iPhone
              </li>
              <li className="flex gap-3">
                <CheckOutlinedIcon className="text-red-500" /> Fast Delivery (10 mins post shoot)
              </li>
              <li className="flex gap-3">
                <CheckOutlinedIcon className="text-red-500" /> Trained & Certified Reel Maker
              </li>
              <li className="flex gap-3">
                <CheckOutlinedIcon className="text-red-500" /> Flashoot Branding Included
              </li>
            </ul>

            {/* Button */}
            <button
              onClick={() => navigate("/proshootbooking")}
              className="mt-6 mx-auto w-full sm:w-[200px] rounded-xl bg-red-700 hover:bg-red-800 transition py-3 sm:py-4 font-semibold text-base sm:text-lg flex items-center justify-center gap-2"
            >
              ₹ Book Now →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
export default BestSellerProShoot;
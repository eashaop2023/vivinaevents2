import React from "react";
import { useNavigate } from "react-router-dom";

const WeddingPackagePlan = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] text-white px-4 sm:px-6 lg:px-12 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-xs sm:text-sm rounded-full bg-red-900/40 text-red-400 border-1 border-orange-900/100">
            ₹ <span className="text-white">Pricing Plans</span>
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Choose Your <span className="text-red-700">Perfect Plan</span>
          </h1>

          <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-sm sm:text-base">
            Professional content creation services tailored to your needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Wedding Packages */}
          <div className="rounded-2xl border border-red-900/40 bg-black/40 p-4 sm:p-6">
            <p className="text-[50px] sm:text-xs tracking-widest text-red-500 mb-2">
              FOR YOUR SPECIAL DAY
            </p>

            <h2 className="text-1xl sm:text-3xl font-bold mb-3">
              Wedding Packages
            </h2>

            <p className="text-gray-400 text-1sm mb-8  mx-auto">
              Professional coverage for your wedding celebrations, specializing in
              traditional and modern Indian ceremonies with elegant, timeless captures.
            </p>

            <div className="mb-14">
              <p className="text-lg text-gray-400">Starting from:</p>
              {/* <p className="text-3xl sm:text-4xl font-bold text-red-500">₹14,999
                 <span className="text-xs text-gray-400">/package</span></p> */}
            </div>

            {/* Package buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 text-red-500">
              <Package label="Single Event" name="Basic" />
              <Package label="Three Events" name="Silver" />
              <Package label="Four Events" name="Gold" />
              <Package label="Complete Wedding" name="Platinum" />
            </div>

            <button
              onClick={() => navigate("/knowmore")}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-medium"
            >
              Know More →
            </button>
          </div>

          {/* Business Packages */}
          <div className="rounded-2xl border border-red-900/40 bg-black/40 p-4 sm:p-6 ">
            <p className="text-[20px] sm:text-xs tracking-widest text-red-400 mb-2">
              FOR BUSINESS AND BRANDS
            </p>

            <h2 className="text-1xl sm:text-3xl font-bold mb-3">
              Business
            </h2>

            <p className="text-gray-400 text-1sm mb-6  mx-auto">
              Professional coverage for your business events, delivering polished
              content that aligns with your brand identity and marketing goals.
            </p>

            <p className="text-2xl sm:text-3xl font-bold text-red-500 mb-6">
              Customised Pricing <span className="text-sm text-gray-400">+ GST</span>
            </p>

            <div className="mb-10">
              <h2 className="text-base sm:text-lg font-semibold text-white mb-4 text-left">
                Package Inclusion:
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400 text-left">
                <ul className="space-y-3">
                  <li>• Cinematic visuals for premium brands & events</li>
                  <li>• Refined, brand-aligned storytelling</li>
                  <li>• Professional production with expert direction</li>
                  <li>• Hassle-free booking & coordination</li>
                </ul>

                <ul className="space-y-3">
                  <li>• Quick turnaround – Cut. Polish. Launch.</li>
                  <li>• Ideal for campaigns, launches & showcases</li>
                  <li>• Elevate your brand with visual storytelling</li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => navigate("/booking")}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-medium"
            >
              Book Now →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

function Package({ label, name }) {
  return (
    <div className="rounded-xl border border-red-900/40 bg-black/40 px-3 py-4 text-center">
      <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-400 mb-1">
        {label}
      </p>
      <p className="font-semibold text-sm">{name}</p>
    </div>
  );
}

export default WeddingPackagePlan;
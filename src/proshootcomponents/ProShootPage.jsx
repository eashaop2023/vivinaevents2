import React from "react";
import { useNavigate } from "react-router-dom";


const ProShootPage = () => {
    const navigate = useNavigate();
    
  return (
    <>
      {/* SEO Meta */}
      {/* <Helmet>
        <title>ProShoot by Vivina Events | 10-Minute Instant Event Videos</title>
        <meta
          name="description"
          content="Get professionally shot and edited 10-minute event videos delivered instantly with ProShoot by Vivina Events."
        />
      </Helmet> */}

      <section className="min-h-screen bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">

          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-500">
              ProShoot by Vivina Events
            </h1>
            <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Professionally shot and edited videos delivered within just 10 minutes.
            </p>
          </div>

          {/* Hero Section */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold ">
                Instant Video Delivery
              </h2>
              <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                ProShoot gives you a professional event video in just 10 minutes.
                Perfect for weddings, parties, and highlights.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigate("/proshootbooking")}
                className="px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold">
                  Book Now
                </button>
                <button onClick={() => navigate("/contactus")}
                className="px-8 py-3 border border-white/40 hover:bg-white hover:text-black rounded-full font-semibold">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right - Card */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4">Highlights</h3>
              <ul className="space-y-3 text-gray-200 list-disc list-inside pl-5">
                <li className="mb-2 text-gray-300 marker:text-red-500"> 10-minute professional video</li>
                <li className="mb-2 text-gray-300 marker:text-red-500"> Shoot + editing completed in 10 minutes</li>
                <li className="mb-2 text-gray-300 marker:text-red-500"> High-quality output</li>
                <li className="mb-2 text-gray-300 marker:text-red-500"> Ideal for weddings, parties & event highlights</li>
              </ul>
            </div>
          </div>
          {/* Features Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-red-500 text-center">
              Why ProShoot?
            </h3>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
                <h4 className="font-bold">Fast Delivery</h4>
                <p className="mt-2 text-gray-300">
                  Get your edited video in just 10 minutes after shooting.
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
                <h4 className="font-bold">Professional Quality</h4>
                <p className="mt-2 text-gray-300">
                  High-resolution output with expert editing.
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
                <h4 className="font-bold">Perfect for Events</h4>
                <p className="mt-2 text-gray-300">
                  Weddings, parties, corporate events, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProShootPage;

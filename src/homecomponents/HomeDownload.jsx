import React from "react";
import img15 from "../assets/photos/img15.png"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const HomeDownload = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#2b0005] via-[#4b0008] to-[#1a0003] text-white flex items-center  pt-20 sm:pt-24 lg:pt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        
        {/* Left Content */}
        <div>
          <button className="mb-6 flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 text-sm hover:bg-white/20 transition border-1 border-orange-900/100">
            <FileDownloadOutlinedIcon className="text-red-500"/> Download Now
          </button>

          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Download The{" "}
            <span className="text-red-600">ProShoot App</span>{" "}
            Now
          </h1>

          <p className="mt-4 text-gray-300 max-w-xl">
            Book a Reel-Maker, as easy as booking a Cab.
          </p>

          {/* Discount Card */}
          <div className="mt-8 w-full max-w-md mx-auto sm:mx-0 rounded-2xl bg-white/10 backdrop-blur-md p-5 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 border-1 border-orange-900/100">
                <LockOutlinedIcon className="text-red-500"/>
              </div>
              <div>
                <h4 className="font-semibold">
                  Get Upto 50% Discount
                </h4>
                <p className="text-sm text-gray-300">
                  On Your First Booking
                </p>
              </div>
            </div>
          </div>

          {/* App Buttons */}
          <div className="mt-6 w-full max-w-md mx-auto sm:mx-0 rounded-2xl bg-white/10 backdrop-blur-md p-5 border border-white/10">
            <h4 className="font-semibold mb-3">Get The App</h4>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2 p-2 cursor-pointer hover:text-white transition">
                <FileDownloadOutlinedIcon/> Download on the App Store
              </div>
              <div className="flex items-center gap-2 p-2 cursor-pointer hover:text-white/10 transition">
                <FileDownloadOutlinedIcon/> Get it on Google Play
              </div>
            </div>
          </div>
        </div>

        {/* Right Mobile Mockups */}
        <div className="relative flex justify-center items-center">
          <div className="relative z-10">
            <img
              src={img15}
              alt="Flashoot App Screen"
              className="h-[500px] rounded-3xl shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeDownload;

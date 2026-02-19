import React, { useState } from "react";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

// import axios from "axios";
import ProShootBokkingForm from './ProShootBokkingForm';

 const ProshootBookingPage=()=> {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] text-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto py-10 sm:py-14 lg:py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs sm:text-sm mb-5 border-1 border-orange-800/100">
            <LocalSeeOutlinedIcon className="text-red-500"/>Book Reel-Makers™ Instantly
          </span>

          <h1 className="font-bold leading-tight text-2xl sm:text-4xl lg:text-5xl">
            Transform Your Vision into <br />
            <span className="text-red-500">Stunning Reels</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-white/80 max-w-xl sm:max-w-2xl mx-auto">
            Connect with professional content creators and transform your vision
            into stunning reels.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {[
            {
              
              title: "High-Quality Content",
              desc: "Shot on latest iPhones for cinematic-quality short videos with top-tier clarity and stabilisation.",
              icon: <LocalSeeOutlinedIcon />
            },
            {
              title: "Instant Delivery",
              desc: "No waiting, no hassle! 24/7 service — because events don’t wait.",
              icon: <QueryBuilderOutlinedIcon />
            },
            {
              title: "Professional Editing",
              desc: "Expert editing to make your content stand out with perfect transitions and effects.",
              icon: <AutoAwesomeOutlinedIcon />
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center w-[280px] h-[180px]"
            >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-red-500 text-2xl">
                {item.icon}
              </span>
              <h3 className="font-semibold text-base sm:text-2xl">
                {item.title}
              </h3>
            </div>
              <p className="text-xs sm:text-sm text-white/80">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 mt-8 text-xs sm:text-sm text-white/80">
          <div><span className="text-red-700 mr-1"><CheckOutlinedIcon/></span>100% Satisfaction Guaranteed</div>
          <div><span className="text-red-700 mr-1"><CheckOutlinedIcon/></span>Professional Equipment</div>
          <div><span className="text-red-700 mr-1"><CheckOutlinedIcon/></span>Quick Turnaround</div>
        </div>
        <ProShootBokkingForm/>
      </div>
    </div>
  );
}
export default ProshootBookingPage;
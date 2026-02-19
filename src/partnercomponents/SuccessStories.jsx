import React from "react";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const stories = [
  {
    quote: "Started as a student, now making ₹25K+ every month part-time.",
    name: "Aarav",
    city: "Hyderabad",
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    quote:"ProShoot gave me freedom and high-paying gigs. All I needed was my iPhone.",
    name: "Riya",
    city: "Dubai",
    icon: <PersonOutlineOutlinedIcon />,
  },
];

const SuccessStories = () => {
  return (
    <section className="min-h-screen py-24 px-5 text-white text-center  bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]">

      {/* BADGE */}
      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm mb-6 bg-white/10 text-white-500 border border-white/20">
        <AutoAwesomeOutlinedIcon className="text-red-500" />
        ProShooter Success Stories
      </div>

      {/* HEADING */}
      <h1 className="text-[32px] md:text-[42px] font-bold">
        Real Stories, Real Success
      </h1>

      <p className="mt-3 text-[18px] md:text-[18px] text-gray-300">
        See how ProShooters are turning their iPhones into income
      </p>

      {/* GRID */}
      <div className="mt-16 max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {stories.map((item, index) => (
          <div
            key={index}
            className="group relative p-9 rounded-2xl text-left
              border border-white/5 bg-white/5 transition-colors duration-300
              hover:bg-red-500/10 hover:border-red-400/25"
          >
            {/* QUOTE ICON */}
            <div className="absolute -top-4 left-6 w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center">
              <FormatQuoteOutlinedIcon className="text-red-500" />
            </div>

            {/* QUOTE */}
            <p className="text-[16px] leading-relaxed text-[#f1d6d6] mb-7">
              “{item.quote}”
            </p>

            {/* USER */}
            <div className="flex items-center gap-4">
              {/* AVATAR ICON */}
              <div className="w-11 h-11 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                {item.icon}
              </div>

              <div>
                {/* NAME */}
                <h4 className="text-[22px] font-medium transition-colors duration-300 group-hover:text-red-500">
                  {item.name}
                </h4>

                {/* CITY */}
                <div className="flex items-center gap-1 text-[15px] text-gray-400">
                  {item.city}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SuccessStories;

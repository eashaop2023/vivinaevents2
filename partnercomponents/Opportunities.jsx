import React from "react";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

const data = [
  {
    title: "Influencers & Solo Creators",
    desc: "Work with content creators and build your network",
    icon: <CameraAltOutlinedIcon />,
  },
  {
    title: "Small Businesses & Startups",
    desc: "Help growing businesses showcase their products",
    icon: <BusinessOutlinedIcon />,
  },
  {
    title: "Restaurants, Cafes, Salons",
    desc: "Capture the essence of local businesses",
    icon: <RestaurantOutlinedIcon />,
  },
  {
    title: "Colleges, Events, Communities",
    desc: "Document special moments and gatherings",
    icon: <SchoolOutlinedIcon />,
  },
  {
    title: "Global Brand Campaigns",
    desc: "Work with international brands and expand your reach",
    icon: <PublicOutlinedIcon />,
  },
];

const Opportunities = () => {
  return (
    <section className="relative min-h-screen py-24 px-5 text-white text-center overflow-hidden bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]">

      {/* BADGE */}
      <div className="inline-flex items-center gap-2 mx-auto mb-6 px-5 py-1 rounded-full text-sm bg-white/10 border border-white/20">
        <SupervisorAccountOutlinedIcon className="text-red-500" />
        Who You&apos;ll Work With
      </div>

      {/* TITLE */}
      <h2 className="text-3xl md:text-[54px] font-bold mb-3">
        Diverse Opportunities
      </h2>

      <p className="mb-14 text-lg text-gray-400">
        Connect with amazing clients and grow your Events
      </p>

      {/* CARDS */}
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-7">
        {data.map((item, i) => (
          <div
            key={i}
            className="group flex gap-4 items-start p-6 rounded-2xl text-left
              border border-white/5 bg-white/5 transition-colors duration-300
              hover:bg-red-500/10 hover:border-red-400/25"
          >
            {/* ICON */}
            <div className="w-12 h-12 min-w-[48px] rounded-xl bg-red-500/20 flex items-center justify-center text-red-500">
              {item.icon}
            </div>

            {/* TEXT */}
            <div>
              <h4 className="text-lg md:text-xl mb-1 transition-colors duration-300 group-hover:text-red-500">
                {item.title}
              </h4>
              <p className="text-sm md:text-base text-rey-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Opportunities;

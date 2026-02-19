
import React, { useEffect, useState } from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

const journeyData = [
  {
    date: "October 2023",
    title: "The Beginning",
    desc: "Found a painpoint and came up with this idea.",
    icon:<StarBorderOutlinedIcon/>,
  },
  {
    date: "November 2023",
    title: "Team Foundation",
    desc: "Formed our Xmen Army. Voleti Karthik, Manikanta Bukka and Shreyak Singh joined hands.",
    icon:<GroupOutlinedIcon/>,
  },
  {
    date: "December 2023",
    title: "Research Phase",
    desc: "Research and UX started on the app.Dinesh Bolla(our UI/UX designer joined us during this phase).",
    icon: <CodeOutlinedIcon/>,
  },
   {
    date: "February 2024",
    title: "First Prototypee",
    desc: "First Prototype was ready.",
    icon: <RocketLaunchOutlinedIcon/>,
  },
   {
    date: "March 2024",
    title: "fresh Start",
    desc: "We weree still not happy. so we scrapped the working prototype and started again.",
    icon: <ArrowCircleRightOutlinedIcon/>,
  },
   {
    date: "May 2024",
    title: "Development Phase",
    desc: "Things started falling in to place. Thanks to our developer Aman Singh.",
    icon:<CodeOutlinedIcon/>,
  },
   {
    date: "July 2024",
    title: "Pre Seed Funding",
    desc: "We close a Pre Seed Funding round of ₹6M valuating the company at ₹55M.",
    icon:<TrackChangesIcon/>,
  },
   {
    date: "August 2024",
    title: "Grand Launch",
    desc: "Grand Launch of the Product. Launch Party held at Akan.",
    icon: <CardGiftcardOutlinedIcon/>,
  },
   {
    date: "September 2024",
    title: "Community Growth",
    desc: "Onboarded First 100 Partners to start shooting with Proshoot building a community.",
    icon:<GroupOutlinedIcon/>,
  },
   {
    date: "February 2025",
    title: "Expansion Plans",
    desc: "Proshoot plans on expanding to 10+ cities and create a strong brand presence.",
    icon: <CalculateOutlinedIcon/>,
  },
  {
    date: "March 2025",
    title: "Seed Funding",
    desc: "Closed another round of funding of ₹25M valuating the company at ₹220M. ",
    icon: <TrendingUpOutlinedIcon/>,
  },
];

const OurJourneySlider = () => {
  const [index, setIndex] = useState(0);
   const [visibleCount, setVisibleCount] = useState(3);

  /* Resopnsive logic */
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setVisibleCount(1); //mobile
      else setVisibleCount(3);//laptop
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  /* card width(match Tailwind min-w) */
  const cardWidth = visibleCount === 1 ? 340 : 360;
  const gap = 24; // gap-6 = 24px
  const moveX = cardWidth + gap;

  /*navigation*/
  const next = () => {
    if (index < journeyData.length - visibleCount) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6
                        bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]">

      {/* header */}
      <span className="mb-4 px-4 py-1 rounded-full border border-red-500/40 text-white text-sm">
        <HistoryOutlinedIcon className="text-red-500 mr-1" />
        Our Journey
      </span>

      <h2 className="whitespace-nowrap text-3xl md:text-5xl font-bold text-white mb-3">
        From Vision to <span className="text-red-500">Reality</span>
      </h2>

      <p className="text-[15px] sm:text-base text-gray-400 max-w-lg text-center mb-14">
        Follow our journey of innovation, growth, and success as we transform the way content is created
      </p>

      {/*slider*/}
      <div className="relative w-full max-w-6xl overflow-hidden">

        {/* left arrow*/}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3
                     rounded-full bg-red-900 text-white hover:bg-red-700">
          <ArrowBackOutlinedIcon />
        </button>

        <div
          className="flex gap-6 transition-transform duration-700"
          style={{ transform: `translateX(-${index * moveX}px)` }}
        >
          {journeyData.map((item, i) => (
            <div
              key={i}
              className="group min-w-[340px] md:min-w-[360px] h-[220px]
                         rounded-2xl bg-black/40 backdrop-blur-md
                         border border-white/10 p-6 text-white
                         hover:scale-[1.04] hover:border-red-500/40 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-black/60 text-red-500">
                  {item.icon}
                </div>
                <span className="px-3 py-1 text-xs rounded-full bg-red-500/20 text-red-400">
                  {item.date}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-red-500">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* right arrow */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3
                     rounded-full bg-red-900 text-white hover:bg-red-700">
          <ArrowForwardOutlinedIcon />
        </button>
      </div>

      {/*pagination*/}
      <div className="flex justify-center gap-2 sm:gap-3 mt-10 px-3">
        {Array.from({
          length: journeyData.length - visibleCount + 1,
        }).map((_, i) => (
          <span
            key={i}
            className={`w-5 h-1.5 sm:w-8 sm:h-2 rounded-full transition
              ${i === index ? "bg-red-500" : "bg-white/20"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default OurJourneySlider;



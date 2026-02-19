import React from "react";
import pro from "../assets/photos/pro.jpg"; 
import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const AboutHomeSection = () => {
    const navigate = useNavigate();
  return (
    <section className="w-full bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-red-500 text-sm font-semibold uppercase tracking-wider">
            About Us
          </span>

          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold">
            Welcome to <br /><span className="text-red-500">Vivina Events</span>
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed text-sm sm:text-base">
            Vivina Events was founded with a simple yet powerful vision — to
            transform ordinary occasions into extraordinary experiences. What
            began as a passion for celebrations has grown into a premium event
            management brand known for elegance, creativity, and flawless
            execution.We believe every event tells a story. At Vivina Events, we listen carefully, design
            thoughtfully, and execute passionately to ensure each celebration reflects our client’s
            personality and purpose.
          </p>

          <button onClick={() => navigate("/ourjourney")}
           className="mt-8 inline-block rounded-full bg-red-600 px-6 py-3 text-sm font-[30px] hover:bg-red-700 transition">
            Read More<KeyboardDoubleArrowRightIcon/>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="absolute inset-0 bg-red-600/20 rounded-2xl blur-2xl"></div>
          <img
            src={pro}
            alt="About Vivina Events"
            className="relative rounded-2xl w-full h-[280px] sm:h-[350px] lg:h-[420px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutHomeSection;

import React from "react";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const steps = [
  { 
    no: "1", 
    title: "Apply", 
    desc: "Fill the form below with your details & reel samples"
  },
  { 
    no: "2", 
    title: "Workshop", 
    desc: "Attend live orientation on Zoom or in-person" 
  },
  { 
    no: "3", 
    title: "Demo Shoots", 
    desc: "Complete 3–4 sample shoots with instant editing" 
  },
  { 
    no: "4", 
    title: "Get Rated", 
    desc: "Based on creativity, speed, professionalism" 
  },
  { 
    no: "5", 
    title: "Onboarded", 
    desc: "Get app access, partner kit, and start earning" 
  },
];

 const Journey=()=> {
  return (
    <section
      className="bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] min-h-screen
        py-24 px-4 text-white text-center">
      {/* Badge */}
      <span
        className="inline-block mb-6 px-4 py-1 rounded-full bg-white/10
          text-white-500 text-bold text-sm border border-white/20"
      >
        <ArrowForwardOutlinedIcon className="text-red-500"/> How It Works
      </span>

      {/* Title */}
      <h1 className="text-3xl md:text-[42px] font-bold">
        Your Journey to Becoming a ProShooter
      </h1>

      <p className="mt-3 text-gray-400 text-base md:text-lg">
        Simple steps to start your creative journey
      </p>

      {/* Timeline */}
      <div className="mt-16 max-w-[1100px] mx-auto flex flex-col md:flex-row gap-10">
        
        {/* LINE (hidden on mobile) */}
        <div className="relative hidden md:block w-[2px] bg-gradient-to-b from-red-500 to-red-500/20">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_rgba(255,60,60,0.8)]" />
        </div>

        {/* STEPS */}
        <div className="flex-1 flex flex-col gap-6">
          {steps.map((step) => (
            <div key={step.no}
              className="flex items-start gap-4"
            >
              {/* number*/}
              <div className="min-w-[40px] md:min-w-[48px] h-[40px] md:h-[48px]
                  rounded-xl bg-red-500/20 text-red-300 font-semibold
                  flex items-center justify-center text-base md:text-lg"
              >
                {step.no}
              </div>

              {/* CARD */}
              <div
                className="group w-full p-5 md:p-6 rounded-2xl text-left
                  bg-white/5 border border-white/5 transition-all duration-300 
                  hover:border-red-400/25 hover:bg-red-500/10"
              >
                <h3 className="text-lg md:text-xl mb-1 transition-colors duration-300 group-hover:text-red-400">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-[#d2b2b2] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Journey;

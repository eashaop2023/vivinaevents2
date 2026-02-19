import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined"
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";


const items = [
  { 
    icon: <PhoneIphoneOutlinedIcon fontSize="large"/>,
    title: "Powered by Your iPhone",
    desc: "No DSLR. No fancy gear. Just your iPhone 13 Pro or newer." 
  },
  {
     icon: <CurrencyRupeeOutlinedIcon fontSize="large"/>, 
     title: "Earn Per Shoot", 
     desc: "Get paid instantly for every shoot you complete." 
  },
  { 
    icon:<AccessTimeOutlinedIcon fontSize="large"/>, 
    title: "Super Flexible", 
    desc: "Choose your own schedule. Work on weekends, evenings, or full-time." 
  },
  { 
    icon:<PublicOutlinedIcon fontSize="large"/>, 
    title: "Global Exposure", 
    desc: "Work with influencers, startups, cafes, events, and brands--locally and internationally." 
  },
  { 
    icon: <SchoolOutlinedIcon fontSize="large"/>, 
    title: "Free Training & Certification", 
    desc: "Learn everything from our team. No fees. Just skills, practice, and growth." 
  },
  { 
    icon:<WorkspacePremiumOutlinedIcon fontSize="large"/>, 
    title: "Flashooter Partner Kit", 
    desc: "Get your official T-shirt,partner badge, and exclusive access to the Proshoot App." 
  },
  { 
    icon:<PsychologyOutlinedIcon fontSize="large"/>, 
    title: "Creative Community", 
    desc: "Join a high-performance creator network.Share ideas. Get inspired. Grow together." },
  { 
    icon:<TrendingUpOutlinedIcon fontSize="large"/>, 
    title: "Growth Path & Campaigns", 
    desc: "Top performers get featured in paid brand shoots, international collaabs, and more." }
];

const WhyJoin=()=>{
  return (
    <section
      className="bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]
        py-24 px-[10%] text-white text-center">
      {/* TITLE */}
      <h2 className="text-3xl md:text-[38px] font-semibold mb-3 ">
        Why Join Event&apos;s?
      </h2>

      <p className="text-gray-300 mb-16">
        Turn your iPhone into a creative business
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((i, idx) => (
          <div
            key={idx}
            className="group bg-red-200/10 border border-white/10 rounded-2xl p-8 text-left "
          >
            <div className="flex items-start gap-4">
              {/* ICON */}
              <span
                className="text-2xl flex items-center justify-center
                  min-w-[48px] h-12 rounded-xl bg-red-500/20 text-red-500"
              >{i.icon}
              </span>

              {/* TEXT */}
              <div>
                <h3
                  className="text-lg md:text-xl font-bold mb-1 group-hover:text-red-500
                  ">{i.title}
                </h3>

                <p
                  className="text-gray-300 text-base"
                >{i.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default WhyJoin



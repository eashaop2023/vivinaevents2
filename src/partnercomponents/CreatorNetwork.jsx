import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const CreatorNetwork = () => {
  return (
    <section className="bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] py-20 px-6 md:px-[8%] text-white text-center">

      {/* TOP PILL */}
      <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 text-sm rounded-full bg-white/10 border border-white/20">
        <AutoAwesomeOutlinedIcon className="text-red-500" />
        Who Can Apply?
      </span>

      {/* HEADING */}
      <h1 className="text-3xl md:text-[42px] mb-2">
        Join Our Creator Network
      </h1>

      <p className="text-gray-300 mb-14 text-base">
        If you're creative and hungry to grow—you're in.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px] mx-auto">

        {/* CARD */}
        {[
          {
            icon: <PhoneOutlinedIcon />,
            title: "iPhone 13 Pro or newer",
            desc: "No DSLR. No fancy gear. Just your iPhone",
          },
          {
            icon: <CameraAltOutlinedIcon />,
            title: "Strong Reel Knowledge",
            desc: "Understanding of reels, editing, and trends",
          },
          {
            icon: <LocationOnOutlinedIcon/>,
            title: "Local Availability",
            desc: "Ready to take up local shoots",
          },
          {
            icon: <AccessTimeOutlinedIcon />,
            title: "Work Ethic",
            desc: "Clean and punctual work ethic",
          },
          {
            icon: <InstagramIcon />,
            title: "Instagram Profile",
            desc: "Public profile or reel samples",
          },
          {
            icon: <AutoAwesomeOutlinedIcon />,
            title: "Creativity",
            desc: "Creative mindset and hunger to grow",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-start text-left
            transition-colors duration-300 hover:bg-red-500/5 hover:border-red-400/40"
          >
            <div className="min-w-[46px] h-[46px] rounded-xl bg-red-500/20 flex items-center justify-center text-red-500">
              {item.icon}
            </div>

            <div>
              {/* TITLE COLOR CHANGE ON HOVER */}
              <h3 className="text-lg md:text-xl leading-snug transition-colors duration-300 group-hover:text-red-500">
                {item.title}
              </h3>

              <p className="text-base text-gray-300 mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* NOTE */}
      <span className="inline-flex items-center gap-2 mt-14 mb-6 px-4 py-2 text-base rounded-full bg-red-500/20 text-red-400">
        <AutoAwesomeOutlinedIcon />
        No degree or prior work experience needed
      </span>

      <br />

      {/* CTA */}
      <button
        className="bg-red-500 hover:bg-red-600 px-8 py-3 text-base rounded-full text-lg"
        onClick={() => {
        const el = document.getElementById("apply-form");
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        Apply Now to Become a ProShooter
        <ArrowForwardOutlinedIcon className="ml-2" />
      </button>
    </section>
  );
};

export default CreatorNetwork;

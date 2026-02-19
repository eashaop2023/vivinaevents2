import React from "react";
import founder from "../assets/photos/founder.png";
import ceo from "../assets/photos/ceo.png";
import chairman from "../assets/photos/chairman.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

const teamMembers = [
  {
    name: "Nayakanthi Pruthvi Raj",
    role: "Founder",
    image: founder,
    // instagram: "https://www.instagram.com/akhila",
    // linkedin: "https://www.linkedin.com/in/akhila",
  },
  {
    name: "Nayakanti N Raju",
    role: "ChairMan",
    image: chairman,
    // instagram: "https://www.instagram.com/akhila",
    // linkedin: "https://www.linkedin.com/in/akhila",
  },
  // {
  //   name: "Nadimidoddi Salomi",
  //   role: "CEO",
  //   image: ceo,
  //   // instagram: "https://www.instagram.com/akhila",
  //   // linkedin: "https://www.linkedin.com/in/akhila",
  // },
];

const OurTeamSection = () => {
  return (
    <section className="min-h-[calc(100vh-60px)] bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] py-20 px-4">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 px-5 py-1 rounded-full border-1 border-orange-900/100 text-white text-sm">
          <GroupOutlinedIcon className="text-red-500"/> Meet Our Team
        </span>

        <h2 className="mt-6 text-2xl md:text-4xl font-bold text-white">
          The Minds Behind <span className="text-red-500">Vivina Events</span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Meet the passionate individuals who are revolutionizing content creation
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer
                       transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-red-500/40"
          >
            {/* images full*/}
            <img src={member.image} alt={member.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/*name and role */}
            <div
              className="absolute bottom-14 left-1/2 -translate-x-1/2 text-center
                         transition-all duration-700 group-hover:bottom-24">
              <h3 className="text-lg font-semibold text-white transition-colors duration-700
                           group-hover:text-red-500">{member.name}
              </h3>

              <span
                className="mt-2 inline-block rounded-full px-4 py-1 text-lg border border-white/30 text-gray-300
                           transition-all duration-700 group-hover:border-red-500 group-hover:text-red-400"
              >{member.role}</span>
            </div>

            {/* social icons (first hidden initially) */}
            <div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4
                         opacity-0 translate-y-10 transition-all duration-900
                         group-hover:opacity-100 group-hover:translate-y-0"
            ><a  href={member.linkedin}  target="_blank"
                 rel="noopener noreferrer"
                 className="p-3 rounded-[12px] bg-gray-500/10 border border-red-500/40 text-red-500 hover:bg-red-500/20 hover:text-white transition"
              ><LinkedInIcon/>
            </a>

            <a href={member.instagram} target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-[12px] bg-gray-500/10 border border-red-500/40 text-red-500 hover:bg-red-500/20 hover:text-white transition"
              ><InstagramIcon/>
            </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default OurTeamSection;


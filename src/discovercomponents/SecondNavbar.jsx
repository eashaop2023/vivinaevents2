import { NavLink } from "react-router-dom";

const SecondNavbar = () => {
  const navLinks = [
    { path: "", label: "All", exact: true },
    { path: "eventandwedding", label: "Wedding" },
    { path: "prewedding", label: "Pre-Wedding" },
    { path:"proshoot", label :"ProShoot"},
    { path: "parties1", label: "Parties" },
    { path: "corporation", label: "CorporationEvents" },
    { path: "anniversarycle", label: "Anniversary" },
    { path: "birthdays", label: "Birthday Parties" },
    { path: "decorandinteriors", label: "Decor & Interiors" },
  ];

  return (
    <section className=" bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] mt-5 sm:mt-10 overflow-hidden">
      
      {/* TITLE */}
      <div className="text-center px-6 pt-10 pb-6">
        <h1 className="text-white font-semibold mb-1 mt-14 text-[40px] lg:text-[32px] sm:text-[24px]">
          Discover with <span className="text-red-500">Vibe</span>
        </h1>
        <p className="text-gray-400 text-[18px]">
          Explore trending reels from our creators
        </p>
      </div>

      {/* NAV BUTTONS */}
      <div className="overflow-x-auto scrollbar-hide">
        <nav
          className="
            flex gap-5 sm:gap-3
            min-w-max
            justify-center md:justify-start
            px-5 md:px-[60px] lg:px-[150px]
            py-2
          "
        >
          {navLinks.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.exact}
              className={({ isActive }) =>
                `
                whitespace-nowrap flex-shrink-0
                px-4 py-2 text-[18px]
                rounded-full border
                transition-all duration-300
                ${
                  isActive
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white/5 text-white border-white/10 hover:bg-white/10"
                }
                `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

    </section>
  );
};

export default SecondNavbar;



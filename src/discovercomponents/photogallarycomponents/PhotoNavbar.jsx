import { NavLink } from "react-router-dom";

const navLinks = [
  { path: "/discover/photos", label: "All", exact: true },
  { path: "/discover/photos/wedding", label: "Wedding" },
  { path: "/discover/photos/prewedding", label: "Pre-Wedding" },
  { path: "/discover/photos/parties", label: "Parties" },
  { path: "/discover/photos/proshoot", label: "ProShoot" },
  { path: "/discover/photos/corporate", label: "Corporate" },
  { path: "/discover/photos/anniversary", label: "Anniversary" },
];

const PhotoNavbar = () => {
  return (
    <section className="pt-24 pb-6">
      <h1 className="text-center text-white text-3xl font-semibold mb-5">
        VivinaEvents <span className="text-red-500">Photos</span>
      </h1>

      <div className="overflow-x-auto scrollbar-hide">
        <nav className="flex gap-4 min-w-max justify-center px-5">
          {navLinks.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.exact}
              className={({ isActive }) =>
                `px-5 py-2 rounded-full border transition-all duration-300
                ${
                  isActive
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white/5 text-white border-white/10 hover:bg-white/10"
                }`
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

export default PhotoNavbar;

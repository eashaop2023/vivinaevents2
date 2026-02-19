
import React from "react";
import img2 from "../assets/photos/img2.png";
import img3 from "../assets/photos/img3.png";
import img4 from "../assets/photos/img4.png";
import img5 from "../assets/photos/img5.png";
import img6 from "../assets/photos/img6.png";
import img7 from "../assets/photos/img7.png";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

const WhyProShoot= () => {
  // Card data
  const cards = [
    {
      img: img2,
      title: "Trained & Certified Reel Makers",
      desc: "Each Partner clears 6 filters to get their certification",
    },
    {
      img: img3,
      title: "Easy Booking",
      desc: "Stop struggling with complex booking procedure",
    },
    {
      img: img4,
      title: "Unbelievable Pricing",
      desc: "Each Reel starts 1999/-",
    },
    {
      img: img5,
      title: "Safe & Secure",
      desc: "You & your data is safe and secured",
    },
    {
      img: img6,
      title: "Instant Reels, Instant Editing",
      desc: "No hidden charges! Clients get upfront pricing, secure payment options, and a seamless checkout experience.",
    },
    {
      img: img7,
      title: "Women Safety",
      desc: "A woman can book a female Reel maker",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
      
        <div className="flex justify-center mb-4 ">
          <span className="px-4 py-2 rounded-full bg-orange-800/10 text-sm flex items-center gap-2  border-1 border-orange-900/100">
            <AutoAwesomeOutlinedIcon className="text-red-500"/> Why Choose Us
          </span>
        </div>

        <h2 className="text-center text-3xl md:text-5xl font-semibold mb-10">
          Not Just Instant <span className="text-red-500">Delivery, But..</span>
        </h2>

        
        <div
          className="flex md:grid md:grid-cols-2 gap-6
            overflow-x-auto md:overflow-visible
            snap-x snap-mandatory scroll-smooth pb-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group min-w-[85%] md:min-w-0 snap-center
                bg-white/5 backdrop-blur rounded-2xl p-6 flex items-center gap-6
                border border-white/10 transition">
              <img
                src={card.img}
                alt={card.title}
                className="w-24 h-24 rounded-xl object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-orange-500 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyProShoot;
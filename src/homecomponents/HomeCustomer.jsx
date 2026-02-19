
import React, { useState, useRef, useEffect } from "react";
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';


const testimonials = [
  {
    text: "Events made booking a reel maker super easy! Great service, skilled creators, and stunning reels. Highly recommend!",
    name: "Srikari Galigari",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Events is a game-changer! Quick booking, talented reel makers, and amazing event coverage. Loved the experience!",
    name: "Lanka Pravallika",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    text: "Seamless booking, professional creators, and stunning reels! Proshoot made capturing memories effortless and fun.",
    name: "Abhiram Kukunuri",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Highly impressed with Proshoot! Easy to use, top-notch reel makers, and fantastic results. Will book again!",
    name: "Prem Kumar",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    text: "Events delivered exactly what I needed — professional reels, hassle-free booking, and great service. Totally worth it!",
    name: "Shireen Fathima",
    img: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    text: "Capturing moments has never been easier! Proshoot connects you with skilled reel makers for perfect event videos.",
    name: "Sri Sharan",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    text: "Events truly changed the game! Unlike traditional videographers, they delivered stunning reels instantly.",
    name: "Shreenija Rao",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    text: "The team was super professional and creative! Our reels turned out stylish and beyond expectations.",
    name: "Sindhura Kolli",
    img: "https://randomuser.me/api/portraits/women/48.jpg",
  },
  {
    text: "Events captured my sister's wedding beautifully, delivering high-quality reels within an hour!",
    name: "Swetha Bandaru",
    img: "https://randomuser.me/api/portraits/women/49.jpg",
  },
];

const TOTAL = testimonials.length;

const HomeCustomer = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const startX = useRef(0);
  const currentX = useRef(0);
  const dragging = useRef(false);

   // Responsive visible cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setVisible(1);
      else setVisible(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TOTAL);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Mouse / touch handlers
  const onMouseDown = (e) => {
    dragging.current = true;
    startX.current = e.clientX;
  };

  const onMouseMove = (e) => {
    if (!dragging.current) return;
    currentX.current = e.clientX;
  };

  const onMouseUp = () => {
    if (!dragging.current) return;
    const diff = currentX.current - startX.current;

    if (diff > 80) {
      setIndex((prev) => (prev - 1 + TOTAL) % TOTAL); // swipe right
    } else if (diff < -80) {
      setIndex((prev) => (prev + 1) % TOTAL); // swipe left
    }

    dragging.current = false;
    currentX.current = 0;
  };

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - startX.current;
    if (diff > 60) {
      setIndex((prev) => (prev - 1 + TOTAL) % TOTAL);
    } else if (diff < -60) {
      setIndex((prev) => (prev + 1) % TOTAL);
    }
  };

   // Show responsive cards
  const visibleCards = [];
  for (let i = 0; i < visible; i++) {
    visibleCards.push(testimonials[(index + i) % TOTAL]);
  } 
  
  return (
    <section className="py-24 px-5 bg-gradient-to-b from-[#4a0000] to-[#0b0000] text-white text-center">
      <h2 className="text-4xl font-bold">
        What Our <span className="text-red-500">Loving Customers</span> Say
      </h2>
      <p className="text-gray-400 mt-2 text-sm">
        Join thousands of satisfied customers who trust ProShoot
      </p>

      <div
        className="flex justify-center gap-8 flex-wrap mt-16 cursor-grab select-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {visibleCards.map((item, i) => (
          <div
            key={i}
            className="relative w-80 p-9 bg-gradient-to-tr from-[#130000] to-[#1a0000] rounded-2xl border border-white/5 transition-transform duration-400 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(255,77,77,0.25)]"
          >
            <div className="absolute -top-4 left-6 w-9 h-9 bg-red-500 rounded-lg flex items-center justify-center text-lg">
              <FormatQuoteOutlinedIcon/>
            </div>
            <p className="text-gray-300 text-base leading-relaxed transition-colors duration-300 hover:text-white">
              {item.text}
            </p>

            <div className="flex items-center gap-3 mt-6">
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="font-semibold transition-colors duration-300 hover:text-red-500">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* dots */}
      <div className="mt-12">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`inline-block mx-1 cursor-pointer transition-all duration-300 ${
              i === index
                ? "w-8 h-2 bg-red-500 rounded-lg"
                : "w-2 h-2 bg-gray-600 rounded-full"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeCustomer;


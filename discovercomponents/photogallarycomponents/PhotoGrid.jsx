import React, { useEffect, useState } from "react";
import weddingphoto from "../../assets/photos/weddingphoto.jpg";
import weddingimg from "../../assets/photos/weddingimg.jpg";
import prewedding from "../../assets/photos/prewedding.jpg";
import parties from "../../assets/photos/parties.jpg";
import parties1 from "../../assets/photos/parties1.jpg";
import pro from "../../assets/photos/pro.jpg";
import pro1 from "../../assets/photos/pro1.jpg";
import corporateevent from "../../assets/photos/corporateevent.jpg";
import corporate from "../../assets/photos/corporate.jpg";
import anniversaryevent from "../../assets/photos/anniversaryevent.jpg"
import anniversaryvenue from "../../assets/photos/anniversaryvenue.jpg"

const allPhotos = [
  { id: 1, src: weddingphoto, title: "Grand Wedding", category: "wedding" },
  { id: 2, src: prewedding, title: "Pre Wedding Shoot", category: "prewedding" },
  { id: 3, src: parties, title: "Party Moments", category: "parties" },
  { id: 4, src: weddingimg, title: "Luxury Wedding", category: "wedding" },
  { id: 5, src: parties1, title: "Fun Party", category: "parties" },
  { id: 6, src: pro, title: " ProShoot Capture", category: "pro" },
  { id: 7, src: pro1, title: "ProShoot Capture", category: "pro" },
  { id: 8, src: corporateevent, title: "Corporate Capture", category: "carporate" },
  { id: 9, src: corporate, title: "Corporate Capture ", category: "carporate" },
  { id: 10, src: anniversaryevent, title: "Anniversary Capture", category: "anniversary" },
  { id: 11, src: anniversaryvenue, title: "Anniversary Capture", category: "anniversary" },
];

const PhotoGrid = ({ category = "all" }) => {
  const photos =
    category === "all"
      ? allPhotos
      : allPhotos.filter((p) => p.category === category);

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  const nextSlide = () => {
    setCurrentIndex((i) => {
      if (i === photos.length - 1) return i;
      return i + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((i) => {
      if (i === 0) return i;
      return i - 1;
    });
  };

  const onTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const onTouchEnd = (e) => {
    if (!touchStart) return;
    const diff = touchStart - e.changedTouches[0].clientX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();

    setTouchStart(null);
  };

  return (
    <>
      {/* GRID */}
      <div className="px-5 md:px-16 pb-16">
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openModal(index)}
              className="rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-[260px] object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </div>

      {/* MODAL SLIDER */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          
          {/* BACKGROUND */}
          <div
            onClick={closeModal}
            className="absolute inset-0 bg-black/25 backdrop-blur-sm"
          />

          <div
            className="relative z-[10000] w-full h-full flex items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >

            {/* LEFT BUTTON */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`absolute left-3 md:left-8 top-1/2 transform -translate-y-1/2
                w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-3xl z-[10001] 
                ${currentIndex === 0 ? "bg-red-500 text-white/40" : "bg-red-400 text-white"}
              `}
            >
              ‹
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={nextSlide}
              disabled={currentIndex === photos.length - 1}
              className={`absolute right-3 md:right-8 top-1/2 transform -translate-y-1/2
                w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-3xl z-[10001] 
                ${currentIndex === photos.length - 1 ? "bg-red-500 text-white/40" : "bg-red-400 text-white"}
              `}
            >
              ›
            </button>

            {/* IMAGE */}
            <div className="w-full max-w-5xl max-h-[90vh] overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {photos.map((photo) => (
                  <img
                    key={photo.id}
                    src={photo.src}
                    alt=""
                    className="w-full flex-shrink-0 object-contain max-h-[90vh]"
                  />
                ))}
              </div>
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 md:right-8 md:top-6 bg-red-400 text-white w-9 h-9 rounded-lg flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGrid;

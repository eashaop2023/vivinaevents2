import { useState, useRef, useEffect } from "react";
import { IoPlayOutline, IoClose } from "react-icons/io5";
import { HiOutlineArrowSmallRight, HiOutlineArrowSmallLeft } from "react-icons/hi2";
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";
import video5 from "../assets/videos/video5.mp4";
import video6 from "../assets/videos/video6.mp4";
import video7 from "../assets/videos/video7.mp4";

const AllVideos = [
  { id: 1, src: video1, title: "Heros", category: "event" },
  { id: 2, src: video2, title: "Luxury Decor", category: "decor" },
  { id: 3, src: video3, title: "Stage Setup", category: "stage" },
  { id: 4, src: video4, title: "Wedding Decor", category: "wedding" },
  { id: 5, src: video5, title: "Event Moments", category: "event" },
  { id: 6, src: video6, title: "Celebrity Videos", category: "celebrity" },
  { id: 7, src: video7, title: "Grand Wedding", category: "wedding" },
  { id: 8, src: video7, title: "ProShoot", category: "pro" },
];

const VideoSlider = ({ category = "all" }) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const [activeVideo, setActiveVideo] = useState(null);
  const startX = useRef(0);
  const overlayVideoRef = useRef(null);

  /* Responsive */
  useEffect(() => {
    const resize = () => setVisible(window.innerWidth <= 768 ? 1 : 3);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const videos =
    category === "all"
      ? AllVideos
      : AllVideos.filter(v => v.category === category);

  const maxIndex = Math.max(videos.length - visible, 0);

  useEffect(() => setIndex(0), [category, visible]);

  const prev = () => index > 0 && setIndex(index - 1);
  const next = () => index < maxIndex && setIndex(index + 1);

  /* Swipe */
  const touchStart = e => (startX.current = e.touches[0].clientX);
  const touchEnd = e => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <div className="relative px-5 md:px-[150px] py-5 bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]">

      {/* Overlay */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40">
          <div className="relative w-[90%] max-w-[900px]">
            <button
              className="absolute top-3 right-3 z-10 bg-black/70 text-white p-2 rounded-full"
              onClick={() => {
                overlayVideoRef.current?.pause();
                setActiveVideo(null);
              }}
            >
              <IoClose size={22} />
            </button>
            <video
              ref={overlayVideoRef}
              src={activeVideo.src}
              autoPlay
              controls
              className="w-full max-h-[70vh] rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Left Arrow */}
      <button
        onClick={prev}
        disabled={index === 0}
        className="flex absolute left-3 md:left-20 top-1/2 -translate-y-1/2
          w-11 h-11 rounded-full bg-white/30 text-white
          items-center justify-center z-20 disabled:opacity-40"
      >
        <HiOutlineArrowSmallLeft size={26} />
      </button>

      {/* Slider */}
      <div
        className="overflow-hidden"
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
        >
          {videos.map(video => (
            <VideoCard
              key={video.id}
              video={video}
              visible={visible}
              onSelect={setActiveVideo}
            />
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        disabled={index === maxIndex}
        className="flex absolute right-3 md:right-20 top-1/2 -translate-y-1/2
          w-11 h-11 rounded-full bg-white/30 text-white
          items-center justify-center z-20 disabled:opacity-40"
      >
        <HiOutlineArrowSmallRight size={26} />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-5 mb-14">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`cursor-pointer rounded-full transition-all
              ${i === index ? "bg-red-500 w-8 h-2" : "bg-white/30 w-8 h-2"}
              md:w-8 md:h-2 w-5 h-1`}
          />
        ))}
      </div>
    </div>
  );
};
export default VideoSlider;


/* VIDEO CARD */
const VideoCard = ({ video, visible, onSelect }) => {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    videoRef.current.muted = true;
    videoRef.current.play().catch(() => {});
  }, []);

  return (
    <div
      style={{ flex: `0 0 ${100 / visible}%` }}
      className="p-5 cursor-pointer"
      onMouseEnter={() => {
        videoRef.current.pause();
        setHovered(true);
      }}
      onMouseLeave={() => {
        videoRef.current.play().catch(() => {});
        setHovered(false);
      }}
      onClick={() => onSelect(video)}
    >
      <div className="relative h-[550px] max-w-[360px] mx-auto rounded-[18px] overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={video.src}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {hovered && (
          <>
            <div className="absolute inset-0 flex items-center justify-center
              bg-black/40 text-white text-[42px]">
              <IoPlayOutline />
            </div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2
              bg-black/60 text-white px-4 py-1.5 rounded-full text-sm">
              {video.title}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

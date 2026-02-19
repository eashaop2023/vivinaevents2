import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

const pressData = [
  {
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    tags: ["Economic Times CIO", "Investment"],
    title: "Proshoot secures ₹24 million investment, valuation soars to ₹220 million",
    desc:
      "ProShoot has successfully raised ₹24 million in its second round of funding at a valuation of ₹220 million. The latest capital infusion will fuel ProShooot's expansion plans across multiple Indian vities...",
    date: " March 25, 2025",
  },
  {
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    tags: ["Business Standard", "Press Release"],
    title: "ProShoot: India's Only Platform Where You Can Book Reelmakers",
    desc:
      "ProShoot, India's pioneering platform, is revolutionizing the content creation industry by offering a unique service that connects businesses with professional reel makers...",
    date: "April 8, 2024",
  },
  {
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    tags: ["Outlook India", "Featured"],
    title: "ProShoot Raises ₹6 Million in Seed Funding, Valuating it at ₹55 Million",
    desc:
      "Founded by Voleti Karthik, Manikanta Bukka, and Shreyak Singh, ProShoot is poised to disrupt the digital content creation industry by simplifying the process of sourcing and collaboating with talented reel-makers...",
    date: " July 17, 2024",
  },
];

const PressandBlog = () => {
  return (
    <section
      className="px-6 sm:px-10 py-24 text-white
      bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]"
    >
      {/* ===== HEADER ===== */}
      <div className="text-center mb-20">
        <span className="inline-block px-5 py-2 rounded-full bg-white/10 mb-6 mt-16">
          <LibraryBooksOutlinedIcon className="text-red-500"/> Latest Coverage
        </span>

        <h2 className="text-4xl lg:text-5xl sm:text-4xl font-bold">
          Featured in <span className="text-[#ff4d4d]">Leading Media</span>
        </h2>

        <p className="mt-4 text-white/75 max-w-xl mx-auto text-base">
          Discover how ProShoot is making waves in the content creation industry
        </p>
      </div>

      {/* ===== CARDS GRID ===== */}
      <div className="grid gap-8 max-w-7xl mx-auto
        grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
        {pressData.map((item, i) => (
          <div
            key={i}
            className="group bg-black/40 rounded-[26px] overflow-hidden
              cursor-pointer transition-all duration-300
              hover:-translate-y-3 hover:shadow-[0_25px_45px_rgba(255,0,0,0.35)]"
          >
            {/* IMAGE */}
            <div
              className="h-[210px] bg-cover bg-center brightness-75"
              style={{ backgroundImage: `url(${item.img})` }}
            />

            {/* CONTENT */}
            <div className="p-7">
              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-5">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 rounded-full text-xs bg-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* TITLE */}
              <h3
                className="text-[22px] font-bold mb-4
                  transition-colors duration-300
                  group-hover:text-[#ff4d4d]"
              >
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-[14.5px] leading-relaxed text-gray-300">
                {item.desc}
              </p>

              {/* FOOTER */}
              <div className="flex justify-between items-center mt-6 pt-4
                border-t border-white/15">
                <span className="text-lg ">
                  <CalendarTodayOutlinedIcon className="text-red-500 text-[12px] sm:text-[14px]"/>{item.date}</span>

                <button
                  className="px-5 py-2 rounded-full text-sm
                    bg-white/10 hover:bg-[#ff4d4d] transition"
                >
                  Read More <ArrowForwardOutlinedIcon/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== VIEW ALL ===== */}
      <div className="text-center my-20">
        <button
          className="bg-[#ff4d4d] px-9 py-4 rounded-full
            text-lg font-medium hover:scale-105 transition"
        >
          View All Press Releases <ArrowForwardOutlinedIcon/>
        </button>
      </div>

      {/* ===== BOTTOM CONTACT BAR ===== */}
      <div
        className="max-w-7xl mx-auto p-6 sm:p-6 lg:p-8 rounded-[22px]
          sm:rounded-[22px] bg-black/40 flex flex-col sm:flex-row
          items-center justify-between gap-4 sm:gap-6"
      >
        <div className="text-center sm:text-left text-sm">
          <EmailOutlinedIcon/> press@flashoot.com &nbsp; • &nbsp; +91 (800) 123-4567
        </div>

        <div className="flex gap-2 sm:gap-3">
          <button
            className="px-4 py-2 text-xs sm:px-5 sm:py-1 sm:text-sm 
            lg:px-6 lg:py-3 lg:text-base rounded-full bg-white/10 hover:bg-white/20 transition whitespace-nowrap"
          >
            <FileDownloadOutlinedIcon/> Press Kit
          </button>

          <button
            className="px-4 py-2 text-xs sm:px-5 sm:py-2 sm:text-sm 
            lg:px-6 lg:py-3 lg:text-base rounded-full bg-[#ff4d4d] hover:opacity-90 
            whitespace-nowrap transition"
          >
            <EmailOutlinedIcon/> Contact PR
          </button>
        </div>
      </div>
    </section>
  );
}
export default PressandBlog
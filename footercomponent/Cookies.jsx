import React from 'react'

const Cookies = () => {
   return (
    <div className="min-h-screen px-5 py-20 bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] text-white">
      
      {/* Title */}
      <h1 className="text-center text-[48px] md:text-[36px] font-bold text-[#ff4b4b] mb-16">
        Cookie Policy
      </h1>

      {/* Understanding Cookies */}
      <div className="max-w-[1100px] mx-auto mb-10 rounded-[18px] bg-white/5 backdrop-blur-xl border border-white/15 p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(255,60,60,0.35)] hover:border-[#ff5050]">
        <h2 className="text-[#ff4b4b] mb-3 text-2xl font-semibold">
          Understanding Our Cookies
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Cookies help us deliver the best experience on our website. By using
          Flashoot, you agree to our use of cookies and similar technologies.
          This policy explains how we use cookies, what types of cookies we use,
          and how you can control them.
        </p>
      </div>

      {/* What Are Cookies */}
      <div className="max-w-[1100px] mx-auto mb-10 rounded-[18px] bg-white/5 backdrop-blur-xl border border-white/15 p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(255,60,60,0.35)] hover:border-[#ff5050]">
        <h2 className="text-[#ff4b4b] mb-3 text-2xl font-semibold">
          What Are Cookies?
        </h2>
        <p className="text-gray-200 leading-relaxed">
          Cookies are small text files that are stored on your device when you
          visit our website. They serve various purposes and help us provide a better, more personalized
          experience.
        </p>

        {/* Inner Card */}
        <div className="mt-5 rounded-[14px] bg-white/5 border border-white/15 p-5 transition hover:bg-red-500/10">
          <h3 className="mb-3 font-semibold text-lg text-[#ff4b4b]">Key Things to Know:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-200">
            <li className="mb-2 text-gray-300 marker:text-red-500">Cookies are standard practice across the internet</li>
            <li className="mb-2 text-gray-300 marker:text-red-500">They are safe and can't carry viruses</li>
            <li className="mb-2 text-gray-300 marker:text-red-500">You can manage or delete them at any time</li>
          </ul>
        </div>
      </div>

      {/* Cookie Grid */}
      <div className="max-w-[1100px] mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {[
          {
            title: "Essential Cookies",
            desc: "Required for basic site functionality. These cannot be disabled as they are necessary for the website to work properly.",
            items: ["Authentication and security", "Session management", "Account preferences"],
          },
          {
            title: "Analytics Cookies",
            desc: "Help us understand how visitors interact with our website, allowing us to improve user experience.",
            items: ["Usage patterns and trends", "Performance monitoring", "Error tracking"],
          },
          {
            title: "Functional Cookies",
            desc: "Enable enhanced functionality and personalization features on our website.",
            items: ["Language preferences", "Location-based content", "Customized layouts"],
          },
          {
            title: "Marketing Cookies",
            desc: "Used to track visitors across websites to display relevant advertisements.",
            items: ["Ad personalization", "Campaign effectiveness", "Partner integrations"],
          },
        ].map((card, index) => (
          <div
            key={index}
            className="h-full rounded-[18px] bg-white/5 backdrop-blur-xl border border-white/15 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(255,60,60,0.35)] hover:border-[#ff5050]"
          >
            <div>
              <h2 className="text-[#ff4b4b] mb-3 text-2xl font-semibold">
                {card.title}
              </h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                {card.desc}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-200">
                {card.items.map((item, i) => (
                  <li key={i} className="mb-2 text-gray-300 marker:text-red-500">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Managing Cookies */}
      <div className="max-w-[1100px] mx-auto mb-10 rounded-[18px] bg-white/5 backdrop-blur-xl border border-white/15 p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(255,60,60,0.35)] hover:border-[#ff5050]">
        <h2 className="text-[#ff4b4b] mb-3 text-2xl font-semibold">
          Managing Your Cookie Preferences
        </h2>
        <p className="text-gray-200 leading-relaxed">
          You can control and/or delete cookies as you wish. You can delete all
          cookies that are already on your computer and you can set most browsers
          to prevent them from being placed.
        </p>

        <div className="mt-5 rounded-[14px] bg-white/5 border border-white/15 p-5 transition hover:bg-red-500/10">
          <h3 className="mb-3 font-semibold text-lg">Browser Settings:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-200">
            <li className="mb-2 text-gray-300 marker:text-red-500">Chrome: Settings → Privacy & Security → Cookies</li>
            <li className="mb-2 text-gray-300 marker:text-red-500">Firefox: Options → Privacy & Security → Cookies</li>
            <li className="mb-2 text-gray-300 marker:text-red-500">Safari: Preferences → Privacy → Cookies</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center mt-16 text-sm opacity-70">
        Last updated: 1/20/2026
      </p>
    </div>
  );
}

export default Cookies
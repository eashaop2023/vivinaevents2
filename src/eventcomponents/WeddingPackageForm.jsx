import React, { useRef, useState } from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';

const features = [
  { title: "Professional Team", icon:<LocalSeeOutlinedIcon/>},
  { title: "Same Day Edits" ,icon:<QueryBuilderOutlinedIcon/>},
  { title: "Premium Quality",icon: <GradeOutlinedIcon /> },
  { title: "Candid Moments",icon:<FavoriteBorderOutlinedIcon/> },
];

const packages = [
  {
    tag: "Single Event",
    name: "Basic",
    price: "₹14,999",
    desc: "Perfect for couples looking for a stunning, professionally crafted wedding shoot that won’t break the bank.",
    features: [
      "Covers up to one event",
      "Includes 3 reels",
      "Shot on iPhone",
      "Instant reel delivery",
      "Complimentary pictures",
      "Flashoot logo mandatory",
    ],
  },
  {
    tag: "Three Events",
    name: "Silver",
    price: "₹44,999",
    desc: "Perfect for those who want comprehensive coverage with an extra touch of elegance.",
    features: [
      "Covers up to three events",
      "Includes 10 reels",
      "Shot on iPhone",
      "Instant reel delivery",
      "Complimentary pictures",
      "Flashoot logo mandatory",
    ],
  },
  {
    tag: "Four Events",
    name: "Gold",
    popular: true,
    price: "₹59,999",
    desc: "Perfect for those who want complete coverage with an extra touch of elegance.",
    features: [
      "Covers up to four events",
      "Includes 15 reels",
      "Shot on iPhone",
      "Instant reel delivery",
      "Complimentary pictures",
      "Flashoot logo mandatory",
    ],
  },
  {
    tag: "Complete Wedding",
    name: "Platinum",
    price: "₹99,999",
    desc: "For couples who want it all — every moment captured with unmatched attention to detail.",
    features: [
      "Covers whole wedding events",
      "Includes 25 reels",
      "Shot on iPhone",
      "Instant reel delivery",
      "Interactive videos with complimentary mobile portraits",
      "Flashoot logo mandatory",
    ],
  },
];

const WeddingPackageForm = () => {
  const formRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

      const handleSubmit=(e)=>{
        e.preventDefault()

        const form = e.target;
        // Get values
        const fullName = form.name.value;
        const email = form.email.value; 
        const phoneNumber = form.phonenumber.value; 
        const date = form.date.value;
        const requirements = form.requirements.value;

    // Optional: simple validation before submit
    if (!fullName || !email || !phoneNumber || !date) {
      alert("Please fill all required fields correctly.");
      return;
    }

        const url="https://script.google.com/macros/s/AKfycbycTyqy1pC-x6dvRUfzB_tf6dBGpv7SSAYuZmMXqYB2OsSj4SXdy8FWxBB81cRApbznZw/exec"
       
        fetch(url,{
          method:"POST",
          headers:{"Content-Type": "application/x-www-form-urlencoded"},
         body:  `BookingType=wedding` +
      `&FullName=${encodeURIComponent(fullName)}` +
      `&Email=${encodeURIComponent(email)}` +
      `&PhoneNumber=${encodeURIComponent(phoneNumber)}` +
      `&Date=${encodeURIComponent(date)}` +
      `&Requirements=${encodeURIComponent(requirements)}`,
        }).then(res=>res.text())
          .then(()=>{
          setShowPopup(true);
           e.target.reset();
        }).catch(error=>console.log(error));
      };


  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#2a0000] via-[#5a0000] to-[#2a0000] text-white px-4 sm:px-6 lg:px-12 py-16">
      
      
      <div className="max-w-7xl mx-auto text-center mb-40">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-red-900/40 text-white-300 text-sm border-1 border-orange-900/100">
          <FavoriteBorderOutlinedIcon className="text-red-500"/> Wedding Reel Packages
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Capture Your Wedding <span className="text-red-500">Memories</span>
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
          Professional wedding reel services to preserve your special moments forever
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-16">
          {features.map((f, i) => (
             <div
      key={i}
      className="bg-white/5 border border-white/10 rounded-xl py-4 flex flex-col items-center justify-center gap-2 text-xs sm:text-sm"
    >
          <span className="text-red-500 text-2xl px-4 py-2 bg-red-800/10 items-center gap-2 text-sm flex rounded-[14px] border-1 border-orange-900/100">
            {f.icon}
          </span>
          <span className="text-center">
            {f.title}
          </span>
        </div>
          ))}
        </div>
            
        {/* PACKAGES */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:scale-[1.02] ${
                pkg.popular ? "ring-2 ring-red-500" : ""
              }`}
            >
              {pkg.popular && (
                <span className="absolute top-2 right-2 text-xs bg-red-600 px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <span className="text-xs uppercase text-red-400">{pkg.tag}</span>
              <h3 className="text-xl font-semibold mt-1">{pkg.name}</h3>
              <p className="text-gray-400 text-sm mt-2">{pkg.desc}</p>

              {/* <div className="text-3xl font-bold text-red-500 my-4">
                {pkg.price}
                <span className="text-sm text-gray-400"> + GST</span>
              </div> */}
              <div className="h-px bg-white/20 my-5" />
              <ul className="space-y-2 text-sm text-gray-300 flex-1">
                {pkg.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>

              <button
                onClick={scrollToForm}
                className="mt-6 bg-red-600 hover:bg-red-700 transition rounded-full py-3 text-sm font-semibold"
              >
                Enquire Now →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* outer FORM */}
      <div
        ref={formRef}
        className="max-w-4xl mx-auto bg-black/60 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12"
      >
        <div className="text-center mb-8">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-red-900/40 text-white-300 text-sm">
            <AutoAwesomeOutlinedIcon className="text-red-500"/> Let’s Create Something Special
          </span>

         <h2 className="text-1xl sm:text-1xl md:text-4xl font-bold mb-4">
         Need a <span className="text-red-500">Custom Package</span> for Your Wedding?
        </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Tell us about your dream wedding, and we’ll create a perfect reel package just for you.
          </p>
        </div>

          {/* form */}
        <form autoComplete="off" onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your Your Name"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500"
            required
          />

          <input
            type="email" name="email"
            placeholder="Enter your Email Address"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500"
                required
              pattern="^[a-z0-9._%+-]+@gmail\.com$"
              title="Email must be a valid Gmail address (lowercase)"
              onChange={(e) => {
                e.target.value = e.target.value.toLowerCase();
          }}
          />

          <input
            type="tel" 
            name="phonenumber"
            placeholder="Enter your Phone Number"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500"
            maxLength={10}
            onChange={(e) => {
            e.target.value = e.target.value.replace(/[^1-9]/g, ""); // filter input
          }}
          />

          <input
            type="date" name="date"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-500 [color-scheme:dark]"
          />

          <textarea
            rows="4" name="requirements"
            placeholder="Tell us about your wedding vision and requirements..."
            className="md:col-span-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-red-500"
          />

          <button
            type="submit"
            className="md:col-span-2 w-full sm:w-[220px] mx-auto mt-4 bg-gradient-to-r from-red-600 to-red-800 rounded-xl py-4 font-semibold text-sm"
          >
            Get Your Custom Quote
          </button>

          {showPopup && (
              <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                <div className="bg-white text-black p-6 rounded-xl w-[300px] text-center">
                  <h2 className="text-lg font-semibold mb-2">Success 🎆💫✨🎉</h2>
                  <p className="text-sm mb-4">
                    Your enquiry has been submitted successfully.
                  </p>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg"
                  >
                    ok
                  </button>
                </div>
              </div>
            )}
        </form>

        <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-gray-400 mt-8">
          <span><QueryBuilderOutlinedIcon className="text-red-500"/> 24hr Response Time</span>
          <span><FavoriteBorderOutlinedIcon className="text-red-500"/> 100% Satisfaction Guaranteed</span>
          <span><LocalSeeOutlinedIcon className="text-red-500"/> Shot on iPhone</span>
        </div>
      </div>
    </section>
  );
};

export default WeddingPackageForm;
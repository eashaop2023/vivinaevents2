import { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";


const url="https://script.google.com/macros/s/AKfycbycTyqy1pC-x6dvRUfzB_tf6dBGpv7SSAYuZmMXqYB2OsSj4SXdy8FWxBB81cRApbznZw/exec";


const ApplyForm = () => {
  const [activeForm, setActiveForm] = useState("eventapply");
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    instagram: "",
    iphone: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

  // Email → always lowercase
  if (name === "email") {
    setFormData({ ...formData, email: value.toLowerCase() });
    return;
  }

  // Phone → numbers only, first digit not 0
  if (name === "phone") {
    const v = value.replace(/\D/g, "");
    if (v.length === 1 && v === "0") return;
    setFormData({ ...formData, phone: v });
    return;
  }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        type: activeForm,
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phone,
        city: formData.city,
        instagram: formData.instagram,
        iphone: activeForm === "proshootapply" ? formData.iphone : "",
        reason: formData.reason,
      }),
    });

    setShowPopup(true);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      instagram: "",
      iphone: "",
      reason: "",
    });

    setTimeout(() => setShowPopup(false), 3000);

  } catch (err) {
    console.error("Submit failed", err);
  }
};

  return (
    <section className="min-h-screen px-4 py-24 text-white bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]">

      {/* Heading */}
      <h1 className="text-center text-[32px] sm:text-[40px] font-bold">
        Ready to Start?
      </h1>

      <p className="text-center mt-3 text-sm sm:text-base opacity-80 max-w-[700px] mx-auto">
        Join the world's fastest-growing creator network. Shoot. Edit. Deliver.
        Earn. All through your iPhone.
      </p>

     {/* Toggle buttons */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setActiveForm("eventapply")}
          className={`px-8 py-3 rounded-full font-semibold border transition
            ${
              activeForm === "eventapply"
                ? "bg-gradient-to-r from-red-500 to-red-400"
                : "bg-white/5 border-white/10"
            }`}
        >
          Event Apply
        </button>

        <button
          onClick={() => setActiveForm("proshootapply")}
          className={`px-8 py-3 rounded-full font-semibold border transition
            ${
              activeForm === "proshootapply"
                ? "bg-gradient-to-r from-red-500 to-red-400"
                : "bg-white/5 border-white/10"
            }`}
        >
          Proshoot Apply
        </button>
      </div>

      {/* Form Box */}
      <div className="max-w-[750px] mx-auto mt-14 bg-white/10 backdrop-blur-lg p-10 rounded-[28px] border border-white/10">
        <h2 className="text-center text-[22px] mb-8">
          {activeForm === "eventapply" && "Apply for Event Creator"}
          {activeForm === "proshootapply" && "Apply to Become a ProShoot"}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <LabeledInput
            label="Full Name"
            icon={<PersonOutlineOutlinedIcon />}
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your Full Name"
          />

          <LabeledInput
            label="Email Address"
            icon={<EmailOutlinedIcon />}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
          />

          <LabeledInput
            label="WhatsApp Number"
            prefix="+91"
            name="phone"
            value={formData.phone}
             maxLength={10}
            inputMode="numeric"
            onChange={handleChange}
            placeholder="Enter phone number"
          />

          <LabeledInput
            label="City & Area"
            icon={<LocationOnOutlinedIcon/>}
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City & Area"
          />

          <LabeledInput
            label="Instagram Profile"
            icon={<InstagramIcon />}
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            placeholder="https://instagram.com/username"
          />

          {activeForm === "proshootapply" && (
            <div>
              <label className="text-sm mb-2 block opacity-80">
                iPhone Model
              </label>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                <PhoneIphoneOutlinedIcon className="text-red-500" />
                <select
                  name="iphone"
                  value={formData.iphone}
                  onChange={handleChange}
                  className="w-full bg-transparent text-white outline-none"
                >
                  <option value=""className="bg-white text-gray-400">Select iPhone</option>
                  <option value="iPhone 13Pro" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 13Pro</option>
                  <option value="iPhone 13Pro Max" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 13Pro Max</option>
                  <option value="iPhone 14Pro" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 14Pro</option>
                  <option value="iPhone 14Pro Max" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 14Pro Max</option>
                  <option value="iPhone 15" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 15</option>
                  <option value="iPhone 15Plus" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 15Plus</option>
                  <option value="iPhone 15Pro" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 15Pro</option>
                  <option value="iPhone 15Pro Max" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 15Pro Max</option>
                  <option value="iPhone 16" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 16</option>
                  <option value="iPhone 16Plus" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 16Plus</option>
                  <option value="iPhone 16Pro" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 16Pro</option>
                  <option value="iPhone 16Pro Max" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 16Pro Max</option>
                  <option value="iPhone 17" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 17</option>
                  <option value="iPhone 17Pro" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 17Pro</option>
                  <option value="iPhone 17Pro Max" className="bg-[#2a0b0b] text-white hover:bg-red-700">iPhone 17Pro Max</option>
                </select>
              </div>
            </div>
          )}

          <div>
            <label className="text-sm mb-2 block opacity-80">
              Why do you want to join?
            </label>
            <div className="flex gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
              <AutoAwesomeOutlinedIcon className="text-red-500 mt-1" />
              <textarea
                name="reason"
                rows="4"
                placeholder="Tell us in 1-2 lines why do you want to join"
                value={formData.reason}
                onChange={handleChange}
                className="w-full bg-transparent text-white outline-none resize-none"
              />
            </div>
          </div>

          <button className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-red-500 to-red-400">
            Apply Now
          </button>
        </form>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl text-center">
            <h2 className="font-bold mb-2">Success </h2>
            <p className="mb-4 text-sm">
              Application submitted successfully!.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2 bg-green-600 text-white rounded-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

/* Reusable Input */
const LabeledInput = ({ label, icon, prefix, ...props }) => (
  <div>
    <label className="text-lg mb-2 block opacity-80">{label}</label>
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
      {icon && <span className="text-red-500">{icon}</span>}
      {prefix && <span className="text-white/70">{prefix}</span>}
      <input
        {...props}
        className="w-full bg-transparent text-white outline-none placeholder:text-white/40"
      />
    </div>
  </div>
);

export default ApplyForm;




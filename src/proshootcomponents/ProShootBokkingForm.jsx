import React, { useState } from "react";

const ProShootBokkingForm = () => {
      const [showPopup, setShowPopup] = useState(false);

  const [data, setData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    city: "",
    date: "",
    duration: "",
    otherDuration: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finalDuration =
      data.duration === "other" ? data.otherDuration : data.duration;

    const payload = {
      BookingType: "flashoot",
      ...data,
      duration: finalDuration,
    };

    const url =
      "https://script.google.com/macros/s/AKfycbycTyqy1pC-x6dvRUfzB_tf6dBGpv7SSAYuZmMXqYB2OsSj4SXdy8FWxBB81cRApbznZw/exec";

    const body = Object.keys(payload)
      .map((key) => `${key}=${encodeURIComponent(payload[key])}`)
      .join("&");

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    setShowPopup(true);
    
    setData({
      fullName: "",
      phoneNumber: "",
      email: "",
      city: "",
      date: "",
      duration: "",
      otherDuration: "",
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] py-20 px-4">
      <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-6 text-white">

        {/* CONTENT */}
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-red-500">
          Proshoot Booking Form
        </h1>

        <p className="mt-3 text-center text-gray-300 text-sm sm:text-base">
          Professionally shot & edited event videos delivered in
          <span className="text-red-400 font-semibold"> 10 minutes</span>.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-10 space-y-4">

          <div>
            <label className="text-sm">Full Name*</label>
            <input
              className="w-full p-3 rounded-lg bg-black/20"
              value={data.fullName}
              onChange={(e) =>
                setData({ ...data, fullName: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="text-sm">Phone Number*</label>
            <input
              className="w-full p-3 rounded-lg bg-black/20"
              maxLength={10}
              value={data.phoneNumber}
              onChange={(e) =>
                setData({
                  ...data,
                  phoneNumber: e.target.value.replace(/\D/g, ""),
                })
              }
              required
            />
          </div>

          <div>
            <label className="text-sm">Email*</label>
            <input
              className="w-full p-3 rounded-lg bg-black/20"
              value={data.email}
              onChange={(e) =>
                setData({ ...data, email: e.target.value.toLowerCase() })
              }
              required
            />
          </div>

          <div>
            <label className="text-sm">City*</label>
            <input
              className="w-full p-3 rounded-lg bg-black/20"
              value={data.city}
              onChange={(e) =>
                setData({ ...data, city: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="text-sm">Shoot Date*</label>
            <input
              type="date"
              className="w-full p-3 rounded-lg bg-black/20 [color-scheme:dark]"
              value={data.date}
              onChange={(e) =>
                setData({ ...data, date: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="text-sm">Slot Duration*</label>
            <select
              className="w-full p-3 rounded-lg bg-black/20 text-white"
              value={data.duration}
              onChange={(e) =>
                setData({
                  ...data,
                  duration: e.target.value,
                  otherDuration: "",
                })
              }
              required
            >
              <option value="" className="bg-white text-gray-400">Select Duration</option>
              <option value="1 Hour" className="bg-[#2a0b0b] text-white">1 Hour</option>
              <option value="2 Hours" className="bg-[#2a0b0b] text-white">2 Hours</option>
              <option value="3 Hours" className="bg-[#2a0b0b] text-white">3 Hours</option>
              <option value="4 Hours" className="bg-[#2a0b0b] text-white">4 Hours</option>
              <option value="5 Hours" className="bg-[#2a0b0b] text-white">5 Hours</option>
              <option value="other" className="bg-[#2a0b0b] text-white">Other</option>
            </select>

            {data.duration === "other" && (
              <input
                className="mt-3 w-full p-3 rounded-lg bg-black/20 text-white focus:outline-none"
                placeholder="Enter duration"
                value={data.otherDuration}
                onChange={(e) =>
                  setData({ ...data, otherDuration: e.target.value })
                }
                required
              />
            )}
          </div>

          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="px-10 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-semibold transition"
            >
              Book ProShoot
            </button>
          </div>

        </form>
      </div>
        {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl text-center">
            <h2 className="font-bold mb-2">Success </h2>
            <p className="mb-4 text-sm">
              Your enquiry has been submitted successfully.
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

export default ProShootBokkingForm;

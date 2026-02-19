import React, { useState } from "react";

const EventBookingForm = () => {
      const [showPopup, setShowPopup] = useState(false);
      
  const [data, setData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    occasion: "",
    city: "",
    date: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      BookingType: "event",
      ...data,
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
      occasion: "",
      city: "",
      date: "",
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006] py-20 px-4">
      <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-6 text-white">

        {/* CONTENT */}
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold text-red-500">
          Event Booking
        </h1>

        <p className="mt-3 text-center text-gray-300 text-sm sm:text-base">
          Weddings, birthdays, corporate events & celebrations —
          planned beautifully with premium execution.
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
              value={data.phoneNumber}
              maxLength={10}
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
            <label className="text-sm">Occasion*</label>
            <select
              className="w-full p-3 rounded-lg bg-black/20 text-white"
              value={data.occasion}
              onChange={(e) =>
                setData({ ...data, occasion: e.target.value })
              }
              required
            >
              <option value=""  className="bg-white text-gray-400">Select Occasion</option>
              <option className="bg-[#2a0b0b] text-white hover:bg-red-700">Wedding</option>
              <option className="bg-[#2a0b0b] text-white hover:bg-red-700">Pre-Wedding</option>
              <option className="bg-[#2a0b0b] text-white hover:bg-red-700">Parties</option>
              <option className="bg-[#2a0b0b] text-white hover:bg-red-700">Corporate Event</option>
              <option className="bg-[#2a0b0b] text-white hover:bg-red-700">Anniversary</option>
              <option className="bg-[#2a0b0b] text-white hover:bg-red-700">Decor Event</option>
              <option className="bg-[#2a0b0b] text-white hover:bg-red-700">Entertainment</option>
              <option className="bg-[#2a0b0b] text-white hover:bg-red-700">Catering</option>
            </select>
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
            <label className="text-sm">Event Date*</label>
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

          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="px-10 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-semibold transition"
            >
              Submit Enquiry
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

export default EventBookingForm;

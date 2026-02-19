import React, { useState } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false); 

  const [formData, setFormData] = useState({
    name: "",email: "",phone: "",message: "",});

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value,
  });};

   const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url="https://script.google.com/macros/s/AKfycbzsE-WxsPRpWyawuDZcu_2t5zQkNQT_RVSHL8Sjw0sS04jPQPWJAob4dad_1BJ3p-ep6A/exec"

    try {
      //  Save data to Google Sheet
      await fetch( url,{
          method: "POST",
          body: JSON.stringify({...formData,type: "contact",}),
        });

      //  Send Email to User via EmailJS
      await emailjs.send(
        "service_2mflnn5",
        "template_ohqvoqw",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "2t1qCmoPNKpgowCpg"
      );

      setShowPopup(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
    <section className="min-h-screen w-full bg-gradient-to-br from-black via-red-900 to-black text-white py-16 px-4">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-5xl md:text-6xl font-bold">
          Get in <span className="text-red-500">Touch</span>
        </h2>
        <p className="text-gray-400 mt-6 text-2sm md:text-xl">
          Have questions? We're here to help you create amazing content.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Card */}
        <div className="bg-white/5 h-[450px] backdrop-blur-xl rounded-2xl p-9 space-y-8 shadow-lg">

            <div className="flex items-start gap-4">
                <div className="w-13 h-13 flex items-center justify-center 
                                rounded-2xl border border-red-500 text-red-500">
                <LocationOnOutlinedIcon className='fontsixe-[30px]' />
                </div>
                <div>
                <h4 className="font-semibold text-sm md:text-lg text-white">
                    Our Location
                </h4>
                <p className="text-gray-400 text-sm">
                    {/* Covibe Coworking Space ,<br />
                    Vasavi Mpm Grand mall ,<br />
                     6th floor , 703 Ameerpet, Hyderabad<br />
                    Telangana 500073, India */}
                    Ameerpet
                </p>
                </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4">
                <div className="w-13 h-13 flex items-center justify-center 
                                rounded-2xl border border-red-500/70 text-red-500 ">
                <AccessTimeOutlinedIcon className='fontsixe-[30px]' />
                </div>
                <div>
                <h4 className="font-semibold text-sm md:text-lg text-white">
                    Business Hours
                </h4>
                <p className="text-gray-400 text-sm">
                    Monday – Sunday<br />
                    9:00 AM – 9:00 PM
                </p>
                </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
                <div className="w-13 h-13 flex items-center justify-center 
                                rounded-2xl border border-red-500/70 text-red-500 ">
                <LocalPhoneOutlinedIcon className='fontsixe-[30px]' />
                </div>
                <div>
                <h4 className="font-semibold text-sm md:text-lg text-white">
                    Phone
                </h4>
                <p className="text-gray-400 text-sm">
                    6301680400 <br />7675820393
                </p>
                </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
                <div className="w-13 h-13 flex items-center justify-center 
                                rounded-2xl border border-red-500/70 text-red-500 ">
                <EmailOutlinedIcon className='fontsixe-[30px]' />
                </div>
                <div>
                <h4 className="font-semibold text-sm md:text-lg text-white">
                    Email
                </h4>
                <p className="text-gray-400 text-sm">
                    support@flashoot.com
                </p>
                </div>
            </div>

            </div>

        
        {/* Right Form */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="text-sm text-white">Name</label>
            <input
              type="text" name="name" required
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 bg-black/40 text-white border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-white">Email</label>
            <input
              type="email" name="email" required
              value={formData.email}
              onChange={handleChange}
              // pattern="^[a-z0-9._%+-]+@gmail\\.com$"
              // title="Enter a valid Gmail address"
              onInput={(e) => {
                e.target.value = e.target.value.toLowerCase();
              }}
              className="w-full mt-1 bg-black/40 text-white border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-white">Phone Number</label>
            <div className="flex gap-2 mt-1">
              <select className="bg-black/40 text-white border border-white/10 rounded-lg px-3 py-2">
                <option>+91</option>
              </select>
              <input type="text" name="phone"
                required value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                placeholder="Enter your mobile number"
                className="flex-1 bg-black/40 text-white border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-white">Message</label>
            <textarea
              rows="4"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 bg-black/40 text-white border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 transition text-white py-3 rounded-xl font-semibold"
          >
            Send Message →
          </button>
        </form>
        </div>
        {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 text-center w-[90%] max-w-sm">
            <h2 className="text-xl font-semibold text-green-600">
              Success
            </h2>
            <p className="text-gray-600 mt-2">
              Message sent to Admin and Email send to you.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}
      </div>

      {/* Map */}
      <div className="max-w-6xl mx-auto mt-12 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="map"
          // src="https://www.google.com/maps?q=Covibe%20Coworking%20Space%2C%20Vasavi%20MPM%20Grand%20Mall%2C%206th%20Floor%2C%20703%2C%20Ameerpet%2C%20Hyderabad&output=embed"
          src="https://www.google.com/maps?q=Ameerpet%20Hyderabad&output=embed"
          className="w-full h-[300px] border-0"
          loading="lazy"
        ></iframe>
      </div>

    </section>
    
    </>
  )
}

export default ContactUs


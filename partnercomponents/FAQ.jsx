import { useState } from "react";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

 const faqs = [
  {
    question:
      "How much do I get paid per shoot?",
    answer:
      "You earn 70% of the booking. Most shoot range from 1,999-4,999.",
  },
  {
    question: "I don't have experience. Can I still apply?",
    answer:
      "Yes. We train you on everything. your creativity matters more.",
  },
  {
    question: "Can I work only on weekends or evenings?",
    answer:
      "Yes, you can choose when to accept bookings.",
  },
  {
    question: "Is there any investment or fee?",
    answer:
      "None. You only need your iPhone. We handle training and gear.",
  },
  {
    question:
      "Will I get support after onboarding?",
    answer:
      "Yes. Our support and operations team is always available.",
  },
  {
    question:
      "Can I apply if I'm not in India?",
    answer:
      "Yes! We are live in the UAE, USA and expanding to more countries. ",
  },
];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-gradient-to-br from-[#2b0006] via-[#4b000a] to-[#2b0006]">
      <div className="max-w-[900px] mx-auto px-5 py-20 text-white">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm bg-white/10 mb-3 border border-white/20">
            <AutoAwesomeOutlinedIcon className="text-red-500" />
            Frequently Asked Questions
          </span>

          <h1 className="text-[32px] md:text-[42px] font-bold my-3">
            Got Questions?
          </h1>

          <p className="text-gray-400 text-lg">
            Everything you need to know about Wedding Website Templates
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="group cursor-pointer rounded-xl p-5 md:p-6
                  bg-white/5 border border-transparent transition-all duration-300 hover:border-red-500"    
              >
                {/* QUESTION */}
                <div className="flex justify-between items-center">
                    <h3 className="text-base md:text-lg font-semibold pr-4 transition-colors duration-300 text-white group-hover:text-red-400">
                      {item.question}
                    </h3>

                  {/* ARROW (always white) */}
                  <span
                    className={`text-xl transition-transform duration-300
                      ${isOpen ? "text-red-500 rotate-180" : "text-white"}
                    `}
                  >
                   <KeyboardArrowDownOutlinedIcon/>
                  </span>
                </div>

                {/* ANSWER */}
                {isOpen && (
                  <p className="mt-4 text-gray-300 text-sm md:text-[15px] leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


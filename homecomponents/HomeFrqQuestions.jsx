
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

const faqData = [
  {
    question: "What exactly is ProShoot?",
    answer:
      "ProShoot is an real-time content creation platform where you can book trained iPhone creators (called ProShooters) who shoot, edit,and deliver reels withib 10 minutes-- perfect for creators, brands, weddings, and events.",
  },
  {
    question: "How is it different from hiring a regular videographer?",
    answer:
      "Unllike traditional services, ProShoot is fast, affordable, and reliable. We deliver professional-grade reels instantly, all shot on iPhone by certified creators who go through a 6-step training and evalution process.",
  },
  {
    question: "What packages do you offer?",
    answer:
      "We offer flexible options including: .₹1999 for up to 2 reels in 45 minutes.₹4999 for up to 2 reels in a 3-hour session.₹9999 for day-long shoots with up to 3 reels, RAW fotage, and 15+ mobiles photos. You can also add extras like mic, light, extra reels, and additional partners.",
  },
  {
    question: "Is everything really done on an iPhone?",
    answer:
      "Yes. All reels are shot and edited on iPhone 13 Pro or newer. This allows us to maintain quality and speed without needing bulky equipment.",
  },
  {
    question: "How fast is the delivery really?",
    answer:
      "On average, your reel is delivered within 10-15 minutes post shoot. No waiting for days or weeks.",
  },
  {
    question: "Can I book a specific creator or a female ProShooter?",
    answer:
      "Yes, you can request a prefferred ProShooter or a female creator while booking. Subject to availability.",
  },
  {
    question: "What id I cancel my booking?",
    answer:
      " A ₹699 cancellation fee applies if cancelled less than 3 hours before the shoot.",
  },
  {
    question: "Is travel included in the pricing?",
    answer:
      "Travel is included within 15 km. Beyond that, clients must reimburse travel (via pertrol or Rapido bill).",
  },
  {
    question: "Can I directly contact the ProShooter after booking?",
    answer:
      "No. For coordination or changes, always reach out to the ProShoot team. Please do not contact ProShooters directly. ",
  },
  {
    question: "Do you operate outside India?",
    answer:
      "Yes, ProShoot is currently active in India, kochi with city-specific availability.",
  },
  {
    question: "What kind of shoots does ProShoot handle?",
     answer:`• Weddings 
     • Brand campaingns 
     •Restaurant or product reels
     • Indluencer content
     • College & cultural fests
     • Personal moments (birthdays, surprises,Pre-wedding etc.)`,
  },
];

const HomeFrqQuestions = () => {
  const [expanded, setExpanded] = useState(null);

   const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box
      sx={{
        background:
          "radial-gradient(circle at top, #5b0f14 0%, #2b0508 70%)",
        color: "#fff",
        padding: { xs: "40px 20px", md: "80px 100px" },
      }}
    >
      {/* Heading */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="caption" className="border-1 border-orange-900/100"
          sx={{
            backgroundColor: "#7a1c22",
            padding: "6px 14px",
            borderRadius: "20px",
            display: "inline-block",
            marginBottom: "12px",
            fontSize: "10px",
            letterSpacing: "1px",
          }}
        ><AutoAwesomeOutlinedIcon className="text-red-500"/>
          FREQUENTLY ASKED QUESTIONS
        </Typography>

        <Typography variant="h4" fontWeight="bold" mb={1}>
          Got Questions?
        </Typography>

        <Typography variant="body2" sx={{ color: "#9e9797ff" }}>
          Everything you need to know about becoming a ProShooter
        </Typography>
      </Box>

      {/* FAQ Accordions Centered */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // centers horizontally
          gap: "12px", // spacing between accordions
        }}
      >
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{
              backgroundColor: "rgba(255,255,255,0.05)",
              color: "#e1dcdcff",
              minHeight: "50px",
              width: { xs: "100%", sm: "700px" }, // responsive width
              borderRadius: "12px",
              boxShadow: "none",
              "&:before": { display: "none" },
               "&:hover": {
              backgroundColor: "rgba(255,255,255,0.15)", 
            },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "rgb(248, 243, 243)" }} />}
            >
              <Typography fontWeight={500}>{item.question}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography
                variant="body2"
                sx={{ color: "#b7b4b4", lineHeight: 1.6 }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};
export default HomeFrqQuestions;

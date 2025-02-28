'use client';
import React, { useState } from "react";
import "./faq.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "../recruiterfaq.module.css";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(false);

  const faqs = [
    {
      "Question": "When does the recruitment process start at IIT Indore? ",
      "Answer": "IIT Indore initiates full-time placement OAs in mid-October, with interviews starting in December, while the summer internship process begins in August."
    },
    {
      "Question": "In what ways can a company recruit students from IITI campus?",
      "Answer": "Companies can recruit from IIT Indore through campus placements, internships, research collaborations, and off-campus hiring, coordinated by the Placement Cell."
    },
    {
      "Question": "Are companies required to pay any fee to participate in the campus recruitment program at IIT Indore? / Is there any fee associated with the process?",
      "Answer": "No, there is no fee for companies to participate in the campus recruitment program at IIT Indore."
    },
    {
      "Question": "How to reach the campus? ",
      "Answer": "IIT Indore campus can be reached by taxi, auto, or bus from Indore Railway Station (24 km) or Indore Airport (35 km). For more information, check how to reach IIT Indore page from contact us section."
    },
    {
      "Question": "Are multiple companies allowed to share a single slot/day? If yes, please explain the process",
      "Answer": "Yes, companies can share a slot, with TPC minimizing overlaps; if shared, the company releasing results first gets priority, and some may offer slot offers to secure students."
    },
    {
      "Question": "On what basis is the slot allotted to a company for final placement?",
      "Answer": "The slot allotment for final placement at IIT Indore is based on the company's brand value, compensation package offered, and the level of student interest in that company."
    },
    {
      "Question": "How many companies can be accommodated in a single slot/day?",
      "Answer": "Recruiters can register for campus recruitment by contacting the Training and Placement (T&P) Cell through email or phone. They will need to provide company details and the job profiles they wish to recruit for."
    },
    {
      "Question": "Does IITI have a DREAM job policy? If yes, please explain",
      "Answer": "Yes, IIT Indore has a DREAM job policy. A DREAM job offer is defined as one with a first-year CTC of 55 LPA (Lakhs Per Annum) and above. Any student without a DREAM offer can participate in the recruitment process for a DREAM company. If a student receives a DREAM offer, they will be frozen from further participation in the placement process."
    },
    {
      "Question": "What are the infrastructural facilities available on campus to facilitate the recruitment process?",
      "Answer": "IIT Indore provides seminar halls for pre-placement talks (PPTs) and online assessments (OAs), and dedicated interview rooms for the recruitment process."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="main-container font-neueMachina font-normal">
      <div className={styles.questitle}>General Question</div>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-container">
          <h3
            onClick={() => toggleFAQ(index)}
            onMouseEnter={(event) => {
              setHoveredIndex(event._targetInst.return.key);
              setHovered(true);
            }}
            onMouseLeave={() => setHovered(false)}
            className={`main-content font-[var(--font-neue-machina)] ${
              hovered && hoveredIndex != index ? "blurred" : ""
            }`}
          >
            {faq.Question}
            <span
              style={{
                transform:
                  activeIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            >
              <ArrowForwardIcon />
            </span>
          </h3>
          <div
            style={{
              maxHeight: activeIndex === index ? "200px" : "0",
              overflow: "hidden",
              transition: "max-height 1s ease",
            }}
          >
            {activeIndex === index && <p>{faq.Answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

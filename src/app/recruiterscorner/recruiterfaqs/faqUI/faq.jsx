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
      "Answer": "Recruiters can register for campus recruitment by contacting the Training and Placement (T&P) Cell through email or phone. They will need to provide company details and the job profiles they wish to recruit for."
    },
    {
      "Question": "In what ways can a company recruit students from IITI campus?",
      "Answer": "Once registered, the T&P Cell will coordinate with the recruiters to schedule a suitable date for the pre-placement talks (PPTs), written tests, interviews, and other recruitment activities."
    },
    {
      "Question": "Are companies required to pay any fee to participate in the campus recruitment program at IIT Indore? / Is there any fee associated with the process?",
      "Answer": "IIT Indore provides state-of-the-art facilities for recruitment drives, including auditoriums for PPTs, computer labs for online tests, and interview rooms for one-on-one interviews."
    },
    {
      "Question": "How to reach the campus? ",
      "Answer": "Recruiters can register for campus recruitment by contacting the Training and Placement (T&P) Cell through email or phone. They will need to provide company details and the job profiles they wish to recruit for."
    },
    {
      "Question": "Are multiple companies allowed to share a single slot/day? If yes, please explain the process",
      "Answer": "Once registered, the T&P Cell will coordinate with the recruiters to schedule a suitable date for the pre-placement talks (PPTs), written tests, interviews, and other recruitment activities."
    },
    {
      "Question": "On what basis is the slot allotted to a company for final placement?",
      "Answer": "IIT Indore provides state-of-the-art facilities for recruitment drives, including auditoriums for PPTs, computer labs for online tests, and interview rooms for one-on-one interviews."
    },
    {
      "Question": "How many companies can be accommodated in a single slot/day?",
      "Answer": "Recruiters can register for campus recruitment by contacting the Training and Placement (T&P) Cell through email or phone. They will need to provide company details and the job profiles they wish to recruit for."
    },
    {
      "Question": "Does IITI have a DREAM job policy? If yes, please explain",
      "Answer": "Once registered, the T&P Cell will coordinate with the recruiters to schedule a suitable date for the pre-placement talks (PPTs), written tests, interviews, and other recruitment activities."
    },
    {
      "Question": "What are the infrastructural facilities available on campus to facilitate the recruitment process?",
      "Answer": "IIT Indore provides state-of-the-art facilities for recruitment drives, including auditoriums for PPTs, computer labs for online tests, and interview rooms for one-on-one interviews."
    },
    {
      "Question": "Is there any facility for the accommodation available on campus?",
      "Answer": "IIT Indore provides state-of-the-art facilities for recruitment drives, including auditoriums for PPTs, computer labs for online tests, and interview rooms for one-on-one interviews."
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

import React, { useState } from "react";
import "./FAQ.css"; // Custom styles for the FAQ component

const FAQ = () => {
  // Array of FAQs
  const faqData = [
    {
      question: "Can I bring a guest to the co-working space?",
      answer: "Yes, you can bring a guest to the co-working space. However, they need to be registered at the reception before entry.",
    },
    {
      question: "What is the validity of a co-working contract?",
      answer: "The validity depends on the type of plan you choose. Monthly and yearly options are available.",
    },
    {
      question: "What is the minimum time a conference room can be booked for?",
      answer: "The minimum booking time for a conference room is one hour.",
    },
    {
      question: "Where is the exact location of Co Orbit?",
      answer: "Co Orbit is located at [Insert Address Here].",
    },
    {
      question: "Will I have access to the workspace on public holidays?",
      answer: "Yes, the workspace is accessible 24/7, including public holidays.",
    },
    {
      question: "What is a Dedicated Desk?",
      answer: "A Dedicated Desk is a reserved workspace that is assigned exclusively to you in a shared area.",
    },
    {
      question: "Can I upgrade my plan anytime?",
      answer: "Yes, you can upgrade your plan anytime by contacting our support team.",
    },
    {
      question: "Are there any additional charges for utilities?",
      answer: "No, utilities like electricity, Wi-Fi, and maintenance are included in the plan cost.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  // Toggles visibility of a specific FAQ
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-heading">Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            <span className="icon">{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;


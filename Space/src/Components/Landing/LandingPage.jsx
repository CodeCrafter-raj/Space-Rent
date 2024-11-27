import React, { useState, useEffect } from "react";
import image8 from "../../assets/seminar2.jpg";
import image7 from "../../assets/image7.jpg";
import image3 from "../../assets/image3.jpg";
import image5 from "../../assets/image5.jpg";
import cafeteria from "../../assets/Cafeteria.jpg";

import "./LandingPage.css"; // Keep landing page-specific styles here.

const words = [
  { text: "Office Space", image: image3 },
  { text: "Cafeteria", image: cafeteria },
  { text: "Seminar Hall", image: image8 },
  { text: "Conference Room", image: image5 },
  { text: "Private Office Space", image: image7 },
];

const LandingPage = () => {
  const [headingDone, setHeadingDone] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setHeadingDone(true), 3000);

    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${words[currentWordIndex].image})`,}}
      >
        <div className={`hero-heading ${headingDone ? "heading-done" : ""}`}>
          <h1>
            <span className="line">Are you looking for</span>
            <br />
            <span className="dynamic-word">{words[currentWordIndex].text}?</span>
          </h1>
        </div>
      </div>

      <div className="other-components">
        <h2>Our Offerings</h2>
        <p>Explore a range of facilities to suit your needs.</p>
      </div>
    </div>
  );
};

export default LandingPage;

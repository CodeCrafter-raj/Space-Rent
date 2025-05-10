import React, { useState, useEffect } from "react";
import image8 from "../../assets/seminar2.jpg";
import image7 from "../../assets/priv1.jpg";
import image3 from "../../assets/image3.jpg";
import confe from "../../image3/confe.jpg"
import desk from  "../../image3/dedicated.webp" ;

import "./LandingPage.css"; // Keep landing page-specific styles here.

const words = [
  { text: "Office Space", image: image3 },
  { text: "Dedicated Desk", image: desk },
  { text: "Seminar Hall", image: image8 },
  { text: "Conference Room", image: confe },
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
    <>
    <div>
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
    </>
    
  );
};

export default LandingPage;

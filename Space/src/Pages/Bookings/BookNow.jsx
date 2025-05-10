import React, { useState } from "react";
import "./BookNow.css";
import Form from '../BookForm/Form';
import Footer from "../../Components/Footer/Footer";
import virtual from "../../image3/virtual.jpg";
import confe from "../../image3/confe.jpg";
import priv from "../../image3/Private.jpg";
import desk from "../../image3/dedicated.webp";
import { FaLock, FaWifi, FaTools, FaParking, FaPrint } from "react-icons/fa";
import { MdMeetingRoom, MdAccessTime } from "react-icons/md";

const images = [
  { src: confe, info: "Conference Room: Host your next event in comfort and style. " },
  { src: virtual, info: "Virtual Office : Scale your business without the limits of a traditional office." },
  { src: priv, info: "Private Cabin : Experience the ultimate work-life balance with your private, fully-equipped office" },
  { src: desk, info: "Dedicated Desk : Immerse yourself in a dynamic and inspiring environment, where you can connect with others." },
];

const BookNow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
     <div className="main-container">
      <div className="carousel-container">
        <div className="carousel">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img src={image.src} alt={`Slide ${index + 1}`} />
              {index === currentIndex && (
                <div className="carousel-info">{image.info}</div>
              )}
            </div>
          ))}
        </div>
        <button className="carousel-nav prev" onClick={handlePrev}>
          &#8592;
        </button>
        <button className="carousel-nav next" onClick={handleNext}>
          &#8594;
        </button>
      </div>
      <div className="info-container">
        <h1>Here's what you get when you choose us</h1>
        <p>
    <MdAccessTime style={{ marginRight: "8px", color: "#2b6cb0" }} />
    Enjoy 24/7 access to your private, secure workspace
  </p>
  <p>
    <FaTools style={{ marginRight: "8px", color: "#2b6cb0" }} />
    Customizable plans, pay monthly or annually
  </p>
  <p>
    <MdMeetingRoom style={{ marginRight: "8px", color: "#2b6cb0" }} />
    Enjoy access to shared meeting rooms and conference spaces
  </p>
  <p>
    <FaWifi style={{ marginRight: "8px", color: "#2b6cb0" }} />
    Fast Wifi - 24x7 Power Supply - Parking Lot
  </p>
  <p>
    <FaPrint style={{ marginRight: "8px", color: "#2b6cb0" }} />
    Printer
  </p>
      </div>
    </div>

    <Form/>
    <Footer/>
    </>
  );
};

export default BookNow;

import React from 'react';
import './FacePage.css';
import conference from "../../images/Conference.avif";
import meet from "../../images/meet.png";
import vidconf from "../../images/vidconf.jpg";
import privoff from "../../images/privoff.jpg";
// import cafee from "../../images/cafeteria1.jpg"
import cafe from "../../images/cafeteria2.avif";
import wifi from "../../images/fastwifi.avif";
import powbkup from "../../images/powerbkup.avif";
import security from "../../images/security2.webp";

const FacePage = () => {
  return (
    <>
    <div className="grid-container">
      {/* Example content */}
      <div className="grid-item">
        <img
          src={conference}
          alt="conference"
          className="grid-item-image"
        />
        <div className="grid-item-content">
          <h3>Conference Room</h3>
          <p>Well equipped conference hall with a TV and HDMI cable</p>
        </div>
      </div>
      <div className="grid-item">
        <img
          src={meet}
          alt="Image 2"
          className="grid-item-image"
        />
        <div className="grid-item-content">
          <h2>Meeting Room</h2>
          <p>Paragraph 2</p>
        </div>
      </div>
      {/* Repeat grid-item 8 more times for a total of 10 items */}
      <div className="grid-item">
        <img
          src={vidconf}
          alt="Image 1"
          className="grid-item-image"
        />
        <div className="grid-item-content">
          <h2>Video Conferencing</h2>
          <p>Paragraph 1</p>
        </div>
      </div>
      <div className="grid-item">
        <img
          src={privoff}
          alt="Image 1"
          className="grid-item-image"
        />
        <div className="grid-item-content">
          <h2>Private Office Space</h2>
          <p>Paragraph 1</p>
        </div>
      </div>
      <div className="grid-item">
        <img
          src={cafe}
          alt="Image 1"
          className="grid-item-image"
        />
        <div className="grid-item-content">
          <h2>Cafeeteria</h2>
          <p>Paragraph 1</p>
        </div>
      </div>
      <div className="grid-item">
        <img
          src={wifi}
          alt="Image 1"
          className="grid-item-image"
        />
        <div className="grid-item-content">
          <h2>Fast Wifi Connection</h2>
          <p>Paragraph 1</p>
        </div>
      </div>
      <div className="grid-item">
        <img
          src={powbkup}
          alt="Image 1"
          className="grid-item-image"
        />
        <div className="grid-item-content">
          <h2>24X7 Power Backup</h2>
          <p>Paragraph 1</p>
        </div>
      </div>
      <div className="grid-item">
        <img
          src={security}
          alt="Image 1"
          className="grid-item-image"
        />
        <div className="grid-item-content">
          <h2>24 x 7 Security</h2>
          <p>Paragraph 1</p>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default FacePage;

import React from "react";

const MapSection = () => {
  return (
    <div className="map-container">
      <h2>Our Location</h2>
      <p>Get directions to our office</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1743076584697!2d144.95373531531888!3d-37.81821787975152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5b57e9b273%3A0x4ff42cb6c1117c38!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1613033027194!5m2!1sen!2sus"
        width="100%"
        height="400"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default MapSection;

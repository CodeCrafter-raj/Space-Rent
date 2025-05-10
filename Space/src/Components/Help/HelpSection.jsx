import React from "react";
import "./HelpSection.css";

const CustomHelpSection = () => {
  return (
    <div className="help-section">
      <div className="help-content">
        <h2 className="help-heading">Can't Find What You're Looking For?</h2>
        <p className="help-paragraph">
          Didn't find the exact space you need? No worries! Our team is ready
          to assist you. Contact us with your specific requirements, and we'll
          get back to you within 30 minutes.
        </p>
        {/* <button className="help-button">Contact Us</button> */}
      </div>
    </div>
  );
};

export default CustomHelpSection;

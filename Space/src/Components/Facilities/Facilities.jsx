import React from "react";
import './Facilities.css';

const Facilities = () => {
  const facilities = [
    { icon: "fa-building", label: "Offices" },
    { icon: "fa-handshake", label: "Conference" },
    { icon: "fa-handshake", label: "Meeting" },
    { icon: "fa-lightbulb", label: "Workspaces" },
    { icon: "fa-university", label: "Auditorium" },
    { icon: "fa-coffee", label: "Cafes" },
    { icon: "fa-wifi", label: "Fast Wifi" },
    { icon: "fa-book", label: "Libraries" },
  ];

  return (
    <div className="facilities-container">
      {/* <h2 className="facilityh2">Facilities We Provide</h2> */}
      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <div key={index} className="facility-item">
            <i className={`fa ${facility.icon}`}></i>
            <span>{facility.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;

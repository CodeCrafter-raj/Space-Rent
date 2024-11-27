import React from 'react';
import Typewriter from 'typewriter-effect';
import './Type.css'; // Assuming your CSS is in App.css

const Type = () => {
    const facilities = [
        "..................",
      'Office Space',
      'Cafeteria',
      'Power Supply',
      'Video Conference',
      'Seminar Hall',
      'High-Speed Internet',
      '24/7 Security',
      'Meeting Rooms'
    ];
  
    return (
      <div className="container">
        <h1 className="header">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Facilities We Offer')
                .pauseFor(1000) // Pause after the heading
                // .deleteAll()
                .start();
            }}
          />
        </h1>
  
        <div className="typing-effect-container">
          <Typewriter
            options={{
              loop: true, // Loop the words
              delay: 75, // Adjust typing speed
            }}
            onInit={(typewriter) => {
              facilities.forEach((facility) => {
                typewriter
                  .typeString(facility) // Just type the text without the <span>
                  .pauseFor(2000) // Pause between each word
                  .deleteAll();
              });
              typewriter.start();
            }}
          />
        </div>
      </div>
    );
  };
  
  export default Type;

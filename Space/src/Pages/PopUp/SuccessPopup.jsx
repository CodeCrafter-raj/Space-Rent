import React, { useEffect } from "react";
import styles from './Popup.module.css'; // Shared CSS file for styling

const SuccessPopup = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000); // Auto-close after 5 seconds
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onClose]);

  return (
    <div className={styles.PopUpOverlay}>
      <div className={`${styles.PopUpCard} ${styles.SuccessCard}`}>
        <div className={styles.IconContainer}>✅</div> {/* Tick Mark */}
        <h2 className={styles.PopUpHeading}>Thank You</h2>
        <p className={styles.PopUpMessage}>
          Your response has been received. Our team will contact you in the next 30 minutes.
        </p>
        <button className={styles.CloseButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SuccessPopup;


import React, { useEffect } from "react";
import styles from './Popup.module.css'; // Shared CSS file for styling

const FailurePopup = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000); // Auto-close after 5 seconds
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onClose]);

  return (
    <div className={styles.PopUpOverlay}>
      <div className={`${styles.PopUpCard} ${styles.FailureCard}`}>
        <div className={styles.IconContainer}>❌</div> {/* Cross Mark */}
        <h2 className={styles.PopUpHeading}>Sorry</h2>
        <p className={styles.PopUpMessage}>
          Oops, currently we are facing some technical issues. Please try again later.
        </p>
        <button className={styles.CloseButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FailurePopup;

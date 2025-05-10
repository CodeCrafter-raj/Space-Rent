import React, { useState } from "react";
import axios from "axios";
import styles from './ContactUs.module.css'; // Importing CSS module
import { FaClock, FaCalendarAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Phone_Number: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(""); // Tracks message (success/error)
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Tracks visibility

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidPhoneNumber(formData.Phone_Number)) {
      setSubmissionStatus("Please enter a valid phone number (10-15 digits).");
      setIsPopupVisible(true);
      autoClosePopup();
      return;
    }

    try {
      await axios.post(" http://localhost:5500/api/contact", {
        name: formData.name,
        email: formData.email,
        Phone_Number: formData.Phone_Number,
        message: formData.message,
      });

      setFormData({ name: "", email: "", Phone_Number: "", message: "" });
      setSubmissionStatus("Message sent successfully.Our team will reach out to you in 30 mins.");
    } catch (error) {
      setSubmissionStatus("Oops! We Are Facing Some Technical Issue. Please try again.");
    }

    setIsPopupVisible(true); // Show pop-up
    autoClosePopup(); // Auto-close after 3 seconds
  };

  const autoClosePopup = () => {
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 3000); // 3 seconds delay
  };

  return (
    <>
      <div className={styles.ContactUsContainer} id="Contact-Us-Section">
        <h2 className={styles.Heading}>We'd Love To Hear From You!</h2>
        <div className={styles.ContactFormContainer}>
          <form className={styles.ContactForm} onSubmit={handleSubmit}>
            <div className={styles.FormRow}>
              <input
                type="text"
                name="name"
                className={styles.FormInputHalf}
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                className={styles.FormInputHalf}
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.FormRow}>
              <input
                type="text"
                name="Phone_Number"
                className={styles.FormInputFull}
                placeholder="Phone Number"
                value={formData.Phone_Number}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.FormRow}>
              <textarea
                name="message"
                className={styles.FormTextArea}
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className={styles.FormRow}>
              <button type="submit" className={styles.FormSubmit}>
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className={styles.BusinessHours}>
          <h3>Business Hours</h3>
          <div className={styles.HoursInfo}>
            <div className={styles.DaySection}>
              <p className={styles.DayHeading}>
                <FaCalendarAlt /> Monday - Friday
              </p>
              <p className={styles.TimeInfo}>
                <FaClock /> 9:00 AM - 6:00 PM
              </p>
            </div>
            <div className={styles.DaySection}>
              <p className={styles.DayHeading}>
                <FaCalendarAlt /> Saturday
              </p>
              <p className={styles.TimeInfo}>
                <FaClock /> 10:00 AM - 4:00 PM
              </p>
            </div>
            <div className={styles.DaySection}>
              <p className={styles.DayHeading}>
                <FaCalendarAlt /> Sunday
              </p>
              <p className={styles.TimeInfo}>
                <FaClock /> Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {isPopupVisible && (
        <div
          className={`${styles.PopUpContainer} ${
            submissionStatus.includes("successfully")
              ? styles.PopUpSuccess
              : styles.PopUpError
          }`}
        >
          {submissionStatus}
        </div>
      )}
    </>
  );
};

export default ContactUs;

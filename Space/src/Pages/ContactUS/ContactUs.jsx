import React, { useState } from "react";
import axios from "axios";
import SuccessPopup from "../PopUp/SuccessPopup";
import FailurePopup from "../PopUp/FailurePopup";
import styles from "./Contact.module.css"; // Importing CSS module
import Help from "../../Components/Help/HelpSection";
import Footer from "../../Components/Footer/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Phone_Number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [popupStatus, setPopupStatus] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.name) validationErrors.name = "Name is required.";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      validationErrors.email = "Invalid email format.";
    }
    if (!formData.Phone_Number.match(/^[0-9]{10}$/)) {
      validationErrors.Phone_Number = "Phone number must be exactly 10 digits.";
    }
    if (!formData.message) validationErrors.message = "Message is required.";

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    try {
      const response = await axios.post(
        "http://localhost:5500/api/contact", // Update with the correct endpoint
        formData
      );
      if (response.status === 200 || response.status===201) {
        setPopupStatus("success");
        setFormData({ name: "", email: "", Phone_Number: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error.response || error.message);
      setPopupStatus("failure");
    }
  };

  const handleClosePopup = () => {
    setPopupStatus("");
  };

  return (
    <>
    <Help/>
      <div className={styles.ContactUsContainer} id="Contact-Us-Section">
        {/* <h2 className={styles.Heading}>We'd Love To Hear From You!</h2> */}
        <div className={styles.ContactFormContainer}>
          <form className={styles.ContactForm} onSubmit={handleSubmit}>
            <div className={styles.FormRow}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              {errors.name && <p className={styles.Error}>{errors.name}</p>}
            </div>
            <div className={styles.FormRow}>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              {errors.email && <p className={styles.Error}>{errors.email}</p>}
            </div>

            <div className={styles.FormRow}>
              <label>
                Phone Number:
                <input
                  type="tel"
                  name="Phone_Number"
                  value={formData.Phone_Number}
                  onChange={handleInputChange}
                  required
                />
              </label>
              {errors.Phone_Number && (<p className={styles.Error}>{errors.Phone_Number}</p>)}
            </div>
            <div className={styles.FormRow}>
              <label>
                Message:
                <textarea
                type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </label>
              {errors.message && <p className={styles.Error}>{errors.message}</p>}
            </div>

            <div className={styles.FormRow}>
              <button type="submit" className={styles.FormSubmit}>
                Send Message
              </button>
            </div>
          </form>
          {popupStatus === "success" && <SuccessPopup onClose={handleClosePopup} />}
          {popupStatus === "failure" && <FailurePopup onClose={handleClosePopup} />}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ContactUs;

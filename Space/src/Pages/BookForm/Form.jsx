import React, { useState } from "react";
import styles from  "./Form.module.css"; // Link to the updated CSS file.
import axios from "axios";
import SuccessPopup from "../PopUp/SuccessPopup";
import FailurePopup from "../PopUp/FailurePopup";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fromDate: "",
    toDate: "",
    bookingType: "",
    additionalRequirements: "",
    hours: "",
  });

  const [errors, setErrors] = useState({});
  const [popupStatus, setPopupStatus] = useState(""); // 'success' or 'failure'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    const today = new Date().toISOString().split("T")[0];

    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) errors.email = "Invalid email.";
    if (!formData.phone.match(/^[0-9]{10}$/)) errors.phone = "Phone number must be 10 digits.";
    if (!formData.fromDate || formData.fromDate < today)
      errors.fromDate = "From date must be today or later.";
    if (!formData.toDate || formData.toDate < formData.fromDate)
      errors.toDate = "To date must be after the from date.";
    if (!formData.bookingType) errors.bookingType = "Please select a booking type.";
    //if (!formData.hours || formData.hours < 1 || formData.hours > 120)
      //errors.hours = "Hours must be between 1 and 12.";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        const response = await axios.post("http://localhost:5500/api/booking", formData);
        if (response.status === 200) {
          setPopupStatus("success"); // Show success popup
          setFormData({
            name: "",
            email: "",
            phone: "",
            fromDate: "",
            toDate: "",
            bookingType: "",
            additionalRequirements: "",
            hours: "",
          });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setPopupStatus("failure"); // Show failure popup
      }
    }
  };

  const handleClosePopup = () => {
    setPopupStatus(""); // Close the popup
  };

  return (
    <div className={styles.outerdiv}  style={{ padding: "20px" }}>
      <div className={styles.head}>
        <h2>Book Your Space Now</h2>
      </div>
      <div className={styles.formcontainer}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="Enter Your Mail Id"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          {errors.name && <p className={styles.error}>{errors.name}</p>}
          {errors.email && <p className={styles.error}>{errors.email}</p>}
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}

          <div>
            <label>
              From
              <input
                type="date"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              To
              <input
                type="date"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Booking Type
              <select
                name="bookingType"
                value={formData.bookingType}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Booking Type --</option>
                <option value="Dedicated Desk">Dedicated Desk</option>
                <option value="Private Cabin">Private Cabin</option>
                <option value="Virtual Office">Virtual Office</option>
                <option value="Conference Room">Conference Room</option>
                <option value="Meeting Room">Meeting Room</option>
              </select>
            </label>
          </div>
          {errors.fromDate && <p className={styles.error}>{errors.fromDate}</p>}
          {errors.toDate && <p className={styles.error}>{errors.toDate}</p>}
          {errors.bookingType && <p className={styles.error}>{errors.bookingType}</p>}

          <div>
            <label>
              How Many Hours(Optional)
              <input
                type="number"
                name="hours"
                value={formData.hours}
                onChange={handleChange}
                min="1"
                max="120"
              />
            </label>
          </div>
          {errors.hours && <p className={styles.error}>{errors.hours}</p>}

          <div>
            <label>
              Additional Requirements
              <textarea
                name="additionalRequirements"
                value={formData.additionalRequirements}
                onChange={handleChange}
                placeholder="Specify additional needs (optional)"
              />
            </label>
          </div>

          <button type="submit">Submit Booking</button>
        </form>
      </div>

      <p className={styles.note}>Note: Please contact our team for urgent bookings.</p>

      {/* Render Popups */}
      {popupStatus === "success" && <SuccessPopup onClose={handleClosePopup} />}
      {popupStatus === "failure" && <FailurePopup onClose={handleClosePopup} />}
    </div>
  );
};

export default BookingForm;

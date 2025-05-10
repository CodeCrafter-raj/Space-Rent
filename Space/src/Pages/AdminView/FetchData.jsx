// FetchDataForm.js
import React, { useState } from "react";
import axios from "axios";
import styles from "./FetchDataForm.module.css";

const FetchDataForm = () => {
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    try {
      const response = await axios.post("http://localhost:5500/api/fetch-data", formData);

      if (response.data.message) {
        setMessage(response.data.message); // Display backend message
      }

      if (response.data.fileUrl) {
        // Trigger file download if the backend provides a file URL
        const link = document.createElement("a");
        link.href = response.data.fileUrl;
        link.download = "data.xlsx";
        link.click();
      }
    } catch (error) {
      setMessage(" frontend-Error fetching data. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Fetch Booking Data</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>
            From Date:
            <input
              type="date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label>
            To Date:
            <input
              type="date"
              name="toDate"
              value={formData.toDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit" className={styles.submitButton}>
          Fetch Data
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default FetchDataForm;

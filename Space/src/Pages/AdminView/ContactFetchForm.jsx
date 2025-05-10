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
      const response = await axios.post("http://localhost:5500/api/fetch-contacts", formData, {
        responseType: "blob", // Handle binary file response
      });

      // Trigger file download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "contacts_data.xlsx"); // File name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setMessage("File downloaded successfully.");
    } catch (error) {
      setMessage("Error fetching data. Please check your inputs and try again.");
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Fetch Querry Data</h2>
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

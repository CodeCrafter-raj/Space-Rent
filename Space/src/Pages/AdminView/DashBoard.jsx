import React from 'react'
import FetchBookingDataForm from './FetchData';
import FetchContactData from './ContactFetchForm';
import styles from "./DashBoard.module.css";
import { Separator } from "../../Components/ui/separator";

const DashBoard = () => {
  return (
    <div className={styles.dashboardContainer}>
    <h1> Admin DashBoard</h1>
    <Separator/>
    <div className={styles.formsContainer}>
      <FetchBookingDataForm />
      <FetchContactData />
    </div>
  </div>
  )
}

export default DashBoard;

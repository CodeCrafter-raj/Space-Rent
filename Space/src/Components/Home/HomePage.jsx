import React from 'react'
import Landing from '../Landing/LandingPage'
import Facility from '../Facilities/Facilities'; 
import Service from '../Services/Services';
// import ContactUs from '../ContactUS/ContactUs';
// import Map from '../Map/MapSection';
import Footer from '../Footer/Footer';
import BookingForm from '../../Pages/BookForm/Form';
// import Form from '@/Components/Common/Form';
const HomePage = () => {
  return (
        <>
        {/* <Form/> */}
        <Landing/>
        <Facility/>
        <Service/>
        <BookingForm/>
       {/* <ContactUs />  */}
        <Footer/>
        {/* <Map/>  */}
        </>
  )
}

export default HomePage

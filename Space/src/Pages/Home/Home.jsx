import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import LandingPage from '../../Components/Landing/LandingPage'
import Facilities from '../../Components/Facilities/Facilities'
import PropertyCards from '../../Components/PriceSection/PriceCards'
import ContactUs from '../../Components/ContactUS/ContactUS'
import AddressSection from '../../Components/Address/AddressSection'
import FAQ from '../../Components/FAQ/FAQ'
import MapSection from '../../Components/Map/MapSection'
import Type from '../../Components/TypeEffect/Type'
import FacePage from '../../Components/FacilitiesPage/FacePage'

const Home = () => {
    return (
        <div>
            <Navbar />
            <LandingPage />
            <Facilities />
            <PropertyCards />
            <ContactUs />
            <AddressSection />
            <FAQ />
            <MapSection />
            <Type />
            <FacePage />
        </div>
    )
}

export default Home
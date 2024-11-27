import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
// import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Components/Landing/LandingPage'
import Facilities from './Components/Facilities/Facilities';
import ContactUs from './Components/ContactUS/ContactUS';
import AddressSection from './Components/Address/AddressSection';
import MapSection from './Components/Map/MapSection';
import Navbar from './Components/Navbar/Navbar';
import FAQ from './Components/FAQ/FAQ';
import PropertyCards from './Components/PriceSection/PriceCards';
import FacePage from './Components/FacilitiesPage/FacePage';
import Type from "./Components/TypeEffect/Type";

function App() {

  return (
    <>
       <Navbar />
      <LandingPage />
      <Facilities />
      <PropertyCards/>
      <ContactUs />
      <AddressSection />
      <FAQ/>
      <MapSection/> 
      <Type/>
      <FacePage/>
    </>
  )
}

export default App

import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route from react-router-dom

import Home from "../src/Pages/Home/Home"
import FAQ from './Components/FAQ/FAQ';
import Facilities from './Components/Facilities/Facilities';


function App() {
  return (
    <Router> {/* Wrap your app in the Router */}
    <div>
            <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/facilities" element={<Facilities />} />

      </Routes>
    </div>
  </Router>
  );
}

export default App;

import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
//import {  Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/Home/HomePage'; 
// import Product from './Pages/Product/Product'; 
//import FacePage from './Pages/FacilitiesPage/FacePage'; 
import ContactUs from './Pages/ContactUS/ContactUs'; 
import Faq from './Pages/FAQS/FAQS';
import BookNow from './Pages/Bookings/BookNow';
import ScrollToTop from "./Components/Scroll/ScrollToTop"; // Import the ScrollToTop component
import Layout from './Components/Authentication/Layout';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import AdminLayout from './Components/AdminView/AdminLayout';
import DashBoard from './Pages/AdminView/DashBoard';
import Products from './Pages/AdminView/Products';
import Features from './Pages/AdminView/Features';
//import Facility from './Pages/AdminView/AdminFacility';
import ShopLayout from './Components/ShoppingView/ShopLayout';
import NotPage from './Pages/NotFound/NotPage';
//import ShopHome from './Pages/ShoppingView/ShopHome';
import Listing from './Pages/ShoppingView/Listing';
import Facility from './Pages/ShoppingView/Facility'
//import Account from './Pages/ShoppingView/Account';
//import CheckOut from './Pages/ShoppingView/CheckOut';
import UnauthPage from './Pages/UnauthPage/UnauthPage';
import CheckAuth from './Components/Common/CheckAuth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from './Store/Auth_Slice';
import Offerings from './Pages/AdminView/Offerings';
// import { Skeleton } from './Components/ui/skeleton';


function App() {
//  const isAuthenticated=false;
//  const user= null;

 const {user,isAuthenticated, isLoading }=useSelector((state)=>state.auth);
 const dispatch=useDispatch();


 //console.log(isLoading, user);

 useEffect(()=>{
  dispatch(checkAuth());
 },[dispatch]);

 if (isLoading) return <div>Loading...</div>

  return (
    <Router>
    <ScrollToTop />
    <Navbar /> 
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/book-now" element={<BookNow />} />

      {/* Keep authentication protection for these routes */}
      <Route path="/auth" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><Layout /></CheckAuth>}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/admin" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}><AdminLayout /></CheckAuth>}>
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="products" element={<Products />} />
        <Route path="features" element={<Features />} />
        <Route path="offerings" element={<Offerings />} />
      </Route>

      {/* Remove the Home route from /shop */}
      <Route path="/shop" element={<ShopLayout />}>
        <Route path="listing" element={<Listing />} />
        <Route path="facilities" element={<Facility />} />
      </Route>

      <Route path="*" element={<NotPage />} />
      <Route path="/unauthpage" element={<UnauthPage />} />
    </Routes>
  </Router>
  );
}

export default App;

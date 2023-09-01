import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import Navbar from './Componets/Navbar/Navbar';
import Homemainpage from './Componets/Homemainpage/Homemainpage';
import Aboutpage from './Componets/Aboutpage/Aboutpage';
import Contactus from './Componets/Contactus/Contactus';
import Login from './Componets/Pages/Login/Login';
import Privacy from './Componets/Pages/Privacy/Privacy';
import Register from './Componets/Pages/Register/Register';
import ForgotPassword from './Componets/Pages/ForgotPassword/ForgotPassword';
import Termsconditions from './Componets/Pages/Terms & conditions/Termsconditions';
import Mycart from './Componets/Pages/Mycart/Mycart';
import Error from './Componets/Pages/Error/Error';
import Fotter from './Componets/Fotter/Fotter';
import Mywishlist from './Componets/Pages/My Wishlist/Mywishlist';
import Checkout from './Componets/Pages/Checkout/Checkout';
import TopRated from './Componets/Homemainpage/Section3/TopRated';
import BestSelling from './Componets/Homemainpage/Section3/BestSelling';
import LatestProduct from './Componets/Homemainpage/Section3/LatestProduct';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Navbar/>
  <Routes>
      <Route path="/" element={<Homemainpage/>}>
         <Route path="/" element={<TopRated/>}></Route>
         <Route path="Selling" element={<BestSelling/>}></Route>
         <Route path="Latest" element={<LatestProduct/>}></Route>
      </Route>
      <Route path="/About" element={<Aboutpage/>}></Route>
      <Route path="/Contactus" element={<Contactus/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Privacy" element={<Privacy/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/ForgotPassword" element={<ForgotPassword/>}></Route>
      <Route path="/Terms" element={<Termsconditions/>}></Route>
      <Route path="/Pages" element={<Error/>}></Route>
      <Route path="/Mycart" element={<Mycart/>}></Route>
      <Route path="/MyWishlist" element={<Mywishlist/>}></Route>
      <Route path="/Checkout" element={<Checkout/>}></Route>
   </Routes>
   <Fotter/>
   </BrowserRouter>
);

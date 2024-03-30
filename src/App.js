
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './header/header';
import Contact from './components/Contact/Contact';
import Body from './components/Body/Body';
import Payment from './components/payment';
import Product from './components/Product/product';
import Signup from './components/signup/signup';
import {  useSelector } from 'react-redux';

import { Shop } from './components/Shop';
import CheckOut from './components/Checkout';






const App = () =>{
  const logged = useSelector(state=> state.user.user)
  return (
    <>
   
   <BrowserRouter>
    <ResponsiveAppBar/>
    <Routes>
       <Route path="/" element={<Body/>}/>
       <Route path="/signin" element={<Signup/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/shop" element={<Shop/>}/>
       <Route path="/payment" element={<Payment/>}/>
       <Route path="/checkout" element={(logged===null)?<Signup/>:<CheckOut/>}/>
       
       <Route path="/shop/:title" element={<Product/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}


export default App;

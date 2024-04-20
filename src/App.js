import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import "../src/App.css";
import OurStore from './Pages/OurStore';
import Blogs from './Pages/Blogs';
import CompareProduct from './Pages/CompareProduct';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import Forgotpassword from './Pages/Forgotpassword';
import Signup from './Pages/Signup';
import Restpassword from './Pages/Restpassword';
import SingleBlog from './Pages/SingleBlog';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RefundPloicy from './Pages/RefundPolicy';
import ShippingPolicy from './Pages/ShippingPolicy';
import TermAndConditions from './Pages/TermAndConditions';
import SingleProducts from './Pages/SingleProducts';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact />} />
          <Route path='product' element={<OurStore />} />
          <Route path='product/:id' element={<SingleProducts /> }/>
          <Route path='Blogs' element={<Blogs />} />
          <Route path='Blogs/:id' element={<SingleBlog />} />
          <Route path='cart' element={<Cart />} />
          <Route path='Checkout' element={<Checkout />} />
          <Route path='compare-product' element={<CompareProduct />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='Login' element={<Login />} />
          <Route path='forgot-password' element={<Forgotpassword />} />
          <Route path='signup' element={<Signup />} />
          <Route path='rest-password' element={<Restpassword />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='Refund-policy' element={<RefundPloicy />} />
          <Route path='shipping-policy' element={<ShippingPolicy />} />
          <Route path='terms-conditions' element={<TermAndConditions/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


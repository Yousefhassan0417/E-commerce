import React from 'react'
import item6 from "../images/newsletter.png";
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'; 
const Footer = () => {
  return (
    <>
    <footer className='footer py-4'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer3 footer-top-data d-flex gap-30 align-items-center'>
              <img src={item6} alt='newsletter'/>
              <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className='col-7'>
          <div className="input-group mb-3">
  <input type="text" class="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2"/>
  <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
</div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='footer1 py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div>
              <address className='Hyousef text-white fs-6'>Alex :tram station, <br/> el hadayia <br/>
                       pincode :131103
              </address>
              <a href='tel:+91 8264954234' className='mt-3 d-block mb-1 text-white'>
                +91 8264954234
              </a>
              <a href='mailto:navdeepdahiaya753gmail.com' className=' mt-2 d-block mb-0 text-white'>
              hyousef4218@gmail.com
              </a>
              <div className='social social_icons d-flex align-items-center gap-30 mt-4'>
                 <a className='text-white' href='#'><BsLinkedin className='fs-4' /></a>
                 <a className='text-white' href='#'><BsInstagram className='fs-4' /></a>
                 <a className='text-white' href='#'><BsGithub className='fs-4' /></a>
                 <a className='text-white' href='#'><BsYoutube className='fs-4' /></a>
              </div>
            </div>
          </div>
          <div className='Information col-3'>
          <h4 className='text-white mb-4'>Information</h4>
          <div className='footer-Link d-flex flex-column'>
              <Link to="/privacy-policy" className="text-white py-2 mb-1">privacy policy</Link>
              <Link to="/Refund-policy" className="text-white py-2 mb-1">Refund policy</Link>
              <Link to="/Shipping-policy" className="text-white py-2 mb-1">Shipping policy</Link>
              <Link to="/Terms-Conditions" className="text-white py-2 mb-1">Terms & Conditions</Link>
              <Link className="text-white py-2 mb-1">Blogs</Link>
            </div>
          </div>
          <div className='Account col-3'>
          <h4 className='text-white mb-4'>Account</h4>
          <div className='footer-Link d-flex flex-column'>
              <Link className="text-white py-2 mb-1">About us</Link>
              <Link className="text-white py-2 mb-1">FAQ</Link>
              <Link className="text-white py-2 mb-1">Contact</Link>
            </div>
          </div>
          <div className='Quick col-2'>
          <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-Link d-flex flex-column'>
              <Link className="text-white py-2 mb-1">Laptops</Link>
              <Link className="text-white py-2 mb-1">Headphones</Link>
              <Link className="text-white py-2 mb-1">Tablets</Link>
              <Link className="text-white py-2 mb-1">Watches</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>&copy;{new Date().getFullYear()}; powered by Developer's Corner</p>
          </div>
        </div>
      </div>
    </footer>
      
    </>
  );
};

export default Footer

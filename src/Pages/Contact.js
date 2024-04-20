import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { BiInfoCircle, BiPhoneCall } from 'react-icons/bi';
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai"
import Container from '../Components/Container';
const Contact = () => {
  return (
    <>
            <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4823.981548712539!2d29.974455206805494!3d31.246483657159214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c532b4c0a329%3A0x60f034c1e77e6d6a!2sB.TECH%20-%20Loran!5e0!3m2!1sen!2seg!4v1697793005416!5m2!1sen!2seg" 
            width="600" 
            height="450" 
            className='border-0 w-100'
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">

            </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div className='contact1'>
                  <h3 className='contact-title'>Contact Us</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' placeholder='Name'/>
                    </div>
                    <div>
                      <input type='email' className='form-control' placeholder='Email'/>
                    </div>
                    <div>
                      <input type='text' className='form-control' placeholder='Mobile Number'/>
                    </div>
                    <div>
                      <textarea name='' id='' className='w-100 form-control' cols="30" rows="4" placeholder='Comments'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div className='contact2'>
                  <h3 className='contact-title mb-4'>Get in touch with Us</h3>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineHome className='Home fs-5' />
                    <address className='mb-0'>696 طريق الحرية, لوران, El Raml 1, Alexandria Governorate 5451106</address>
                    </li>
                    
                    <li className='mb-3 d-flex gap-15 align-items-center'><BiPhoneCall className='fs-5'/><a href='tel:02 23220621'>+02 23220621</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineMail className='fs-5'/><a href='hyousef4218@gmail.com'>hyousef4218@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><BiInfoCircle className='fs-5'/>
                    <p className='mb-0'> Friday - Saturday	10 AM–12 AM</p>
                    </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact
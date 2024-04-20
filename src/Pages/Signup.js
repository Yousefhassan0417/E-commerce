import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';
import Container from '../Components/Container';
import CustomInput from '../Components/CustomInput';

const Signup = () => {
  return (
    <>
      <Meta title={"signup"} />
      <BreadCrumb title="signup" />
      <Container class1='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Sign Up</h3>
              <form action='' className='d-flex-column gap-15'>
                <CustomInput type='text' name='name' placeholder='Name' className='form-control' />
                <CustomInput type='email' name='email' placeholder='Email' className='form-control' />
                <CustomInput type='tel' name='mobile' placeholder='Mobile Number' className='form-control' />
                <CustomInput type='password' name='password' placeholder='Password' className='form-control mt-1' />
                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                  <button className='button border-0'>Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Signup;


import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';
import CustomInput from '../Components/CustomInput';
const Login = () => {
  return (
    <>
            <Meta title={"login"} />
      <BreadCrumb title="login" />
      <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-4'>login</h3>
                    <form action='' className='d-flex-column gap-15'>
                    <CustomInput type='email' name='email' placeholder='email' className='form-control' />
                    <CustomInput type='password' name='password' placeholder='password' className='form-control' />
                        <div>
                          <Link to="/forgot-password">Forgot password</Link>
                          <div className='Forgot1 mt-3 d-flex justify-content-center gap-15 align-items-center'>
                             <button className='button border-0' type='submit'>login</button>
                             <Link to="/signup" className='button signup'>Sign up</Link>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Login

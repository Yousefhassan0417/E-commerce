import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';
import Container from '../Components/Container';
import CustomInput from '../Components/CustomInput';
const Restpassword = () => {
  return (
    <>
            <Meta title={"Rest password"} />
      <BreadCrumb title="Rest password" /> 
      <Container class1='login-wrapper py-5 home-wrapper-2'>
       <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-3'>Rest password</h3>
                    <form action='' className='d-flex-column gap-15'>
                    <CustomInput  type='password' name='password' placeholder='password' className='form-control' />
                     <CustomInput  type='password' name='confpassword' placeholder='Confirm password' className='form-control'/>
                        <div>
                          <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                             <button className='button border-0'>ok</button>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </Container>
    </>
  )
}

export default Restpassword

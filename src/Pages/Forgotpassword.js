import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';
import Container from '../Components/Container';
import CustomInput from '../Components/CustomInput';
const Forgotpassword = () => {
  return (
    <>
        <Meta title={"forgotpassword"} />
      <BreadCrumb title="forgotpassword" />
      <Container class1='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-3'>Reset your password</h3>
                    <p className='text-center mt-2 mb-3'>
                      we will send you an email to reset your password
                    </p>
                    <form action='' className='d-flex-column gap-15'>
                    <CustomInput  type='email' name='email' placeholder='email' className="form-control" />
                        
                        <div>
                          
                          <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                             <button className='button border-0' type='submit'>Submit</button>
                             <Link to="/login">Cancel</Link>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
      </Container>
    </>
  )
}

export default Forgotpassword

import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import Container from '../Components/Container';
const TermAndConditions = () => {
  return (
    <>
          <Meta title={"Term And Conditions"} />
      <BreadCrumb title="Term And Conditions" />
      <Container className='policy-wrapper py-5 home-wrapper-2'>
           <div className='row'>
            <div className='col-12'>
              <div className='policy-wrapper py-5 home-wrapper-2'></div>
            </div>
           </div>
      </Container> 
    </>
  )
}

export default TermAndConditions

import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import item34 from "../images/cross.svg";
import item28 from '../images/watch.jpg';
import Container from '../Components/Container';
const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" /> 
      <Container className='wishlist-wrapper home-wrapper-2 py-5'>
            <div className='row'>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                    <img src={item34} alt='cross' className='position-absolute cross img-fluid' />
                        <div className='wishlist-card-image'>
                          <img src={item28} className='img-fluid w-100' alt='watch'/> 
                        </div>
                        <div className='py-3 px-3'>
                        <h5 className='title'>Honor T1 7.0.1 GB 8 ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                        <h6 className='price'>$ 100</h6>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                    <img src={item34} alt='cross' className='position-absolute cross img-fluid' />
                        <div className='wishlist-card-image'>
                          <img src={item28} className='img-fluid w-100' alt='watch'/> 
                        </div>
                        <div className='py-3 px-3'>
                        <h5 className='title'>Honor T1 7.0.1 GB 8 ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                        <h6 className='price'>$ 100</h6>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='wishlist-card position-relative'>
                    <img src={item34} alt='cross' className='position-absolute cross img-fluid' />
                        <div className='wishlist-card-image'>
                          <img src={item28} className='img-fluid w-100' alt='watch'/> 
                        </div>
                        <div className='py-3 px-3'>
                        <h5 className='title'>Honor T1 7.0.1 GB 8 ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                        <h6 className='price'>$ 100</h6>
                        </div>
                    </div>
                </div>
            </div>
      </Container>
    </>
  )
}

export default Wishlist

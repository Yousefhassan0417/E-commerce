import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import item28 from '../images/watch.jpg';
import item34 from "../images/cross.svg";
import Color from '../Components/Color';
import Container from '../Components/Container';
const CompareProduct = () => {
  return (
    <>
       <Meta title={"compare products"} />
      <BreadCrumb title="compare products" />
      <Container class1='compare-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
               <div className='col-3'>
                  <div className='compare-product-card position-relative'>
                  <img src={item34} alt='cross' className='position-absolute cross img-fluid' />
                    <div className='product-card-image'>
                        <img src={item28} alt='watch'/>
                        <div className='compare-product-details'>
                            <h5 className='title'>
                                Honor T1 7.0 Gb RAM 8 Gb ROM 7 Inch With Wi-Fi+3G Tablet
                            </h5>
                            <h6 className='price mb-3 mt-3'>$ 100</h6>
                            <div>
                                <div className='product-detail'>
                                    <h5>Brand:</h5>
                                    <p>Havels</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>Availblity:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>Color:</h5>
                                    <Color />
                                </div>
                                <div className='product-detail'>
                                    <h5>Size:</h5>
                                    <div className='d-flex gap-10'>
                                      <p>S</p>
                                      <p>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
               </div>
               <div className='col-3'>
                  <div className='compare-product-card position-relative'>
                  <img src={item34} alt='cross' className='position-absolute cross img-fluid' />
                    <div className='product-card-image'>
                        <img src={item28} alt='watch'/>
                        <div className='compare-product-details'>
                            <h5 className='title'>
                                Honor T1 7.0 Gb RAM 8 Gb ROM 7 Inch With Wi-Fi+3G Tablet
                            </h5>
                            <h6 className='price mb-3 mt-3'>$ 100</h6>
                            <div>
                                <div className='product-detail'>
                                    <h5>Brand:</h5>
                                    <p>Havels</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>Availblity:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className='product-detail'>
                                    <h5>Color:</h5>
                                    <Color />
                                </div>
                                <div className='product-detail'>
                                    <h5>Size:</h5>
                                    <div className='d-flex gap-10'>
                                      <p>S</p>
                                      <p>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
               </div>
            </div>
        </div>
      </Container>
    </>
  )
}

export default CompareProduct

import React from 'react'
import item6 from"../images/main-banner-1.jpg";
import { Link } from 'react-router-dom';
import item7 from"../images/catbanner-01.jpg";
import item8 from"../images/catbanner-02.jpg";
import item9 from"../images/catbanner-03.jpg";
import item10 from"../images/catbanner-04.jpg";
import item11 from"../images/service.png";
import item12 from"../images/service-02.png";
import item13 from"../images/service-03.png";
import item14 from"../images/service-04.png";
import item15 from"../images/service-05.png";
import item16 from"../images/camera.jpg";
import item17 from"../images/tv.jpg";
import item18 from"../images/headphone.jpg";
import Marquee from 'react-fast-marquee';
import item19 from"../images/brand-01.png";
import item20 from"../images/brand-02.png";
import item21 from"../images/brand-03.png";
import item22 from"../images/brand-04.png";
import item23 from"../images/brand-05.png";
import item24 from"../images/brand-06.png";
import item25 from"../images/brand-07.png";
import item26 from"../images/brand-08.png";
import BlogCard from '../Components/BlogCard';
import ProductCard from '../Components/ProductCard';
import SpecialProduct from '../Components/SpecialProduct';
import item27 from"../images/Smart-watch- series 7.jpg";
import item28 from"../images/laptop-1.jpg";
import item29 from"../images/famous-3.webp.png";
import item30 from"../images/famous-4webp.jpg";
import Container from '../Components/Container';
import { services } from '../Components/utils/Data';
const Home = () => {
  return (
    <>
    <Container class1="home-wrapper-1 py-5">    
    <div className='row'>
            <div className='col-lg-6'>
              <div className='main-banner position-relative'>
                <img src={item6} className='img-fluid rounded-3' alt='main banner'/>
                <div className='main-banner-content position-absolute'>
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
            <div className='countainer10 d-flex flex-wrap gap-10 justify-content-between align-items-center'>
            <div className='small-banner  position-relative'>
                <img src={item7} className='img-fluid rounded-3' alt='main banner'/>
                <div className='small-banner-content position-absolute'>
                <h4>Best Sake</h4>
                <h5>iPad S13+ Pro</h5>
                <p>From $999.00 <br/> or $41.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src={item8} className='img-fluid rounded-3' alt='main banner'/>
                <div className='small-banner-content position-absolute'>
                <h4>NEW ARRIVAL</h4>
                <h5>But IPad Air</h5>
                <p>From $999.00 <br/> or $41.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src={item9} className='img-fluid rounded-3' alt='main banner'/>
                <div className='small-banner-content position-absolute'>
                <h4>NEW ARRIVAL</h4>
                <h5>But IPad Air</h5>
                <p>From $999.00 <br/> or $41.62/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src={item10} className='img-fluid rounded-3' alt='main banner'/>
                <div className='small-banner-content position-absolute'>
                <h4>NEW ARRIVAL</h4>
                <h5>But IPad Air</h5>
                <p>From $999.00 <br/> or $41.62/mo.</p>
                </div>
              </div>
              </div>
            </div>
          </div>
          </Container>
    <Container class1="home-wrapper-2 py-5">
    <div className='row3'>
        <div className='col-12'>
          <div className='services d-flex align-items-center justify-content-between'>
          {services?.map((i, j)=>{
            return(
              <div className='services1 d-flex align-items-center gap-15'key={j}>
              <img src={item11} alt='services'/>
            <div>
            <h6>{i.title}</h6>
            <p className="mb-0">{i.tagline}</p>
            </div>
            </div>
            );
          })}
            
            <div className='DailySurprise d-flex align-items-center gap-15'>
            <img src={item12} alt='services'/>
            <div>
            <h6>Daily Surprise Offers</h6>
            <p className="mb-0">Save upto 25% off</p>
            </div>
            </div>
            <div className='Support d-flex align-items-center gap-15'>
            <img src={item13} alt='services'/>
            <div>
            <h6>Support 24/7</h6>
            <p className="mb-0">Shop with an export</p>
            </div>
            </div>
            <div className='Affordable d-flex align-items-center gap-15'>
            <img src={item14} alt='services'/>
            <div>
            <h6>Affordable prices</h6>
            <p className="mb-0">Get Factory Default price</p>
            </div>
            </div>
            <div className='Securepayments d-flex align-items-center gap-15'>
            <img src={item15} alt='services'/>
            <div>
            <h6>Secure payments</h6>
            <p className="mb-0">100% protected payment</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
    <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                 <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={item16} alt='Camera'/>
                 </div>
                 <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={item16} alt='Camera'/>
                 </div>
                 <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={item17} alt='Camera'/>
                 </div>
                 <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={item18} alt='Camera'/>
                 </div>
                 <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={item16} alt='Camera'/>
                 </div>
                 <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={item16} alt='Camera'/>
                 </div>
                 <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={item17} alt='Camera'/>
                 </div>
                 <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={item18} alt='Camera'/>
                 </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
    <Container class1="featured-wrapper py-5 home-wrapper-2">
    <div className='container-xxl'>
              <div className='row'>
              <div className='col-lg-12'>
                <h3 className='section-heading'>Featured Collection</h3>
              </div>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
              </div>
            </div>
    </Container>
    <Container class1="famous-wrapper py-5 home-wrapper-2">
    <div className='container-xxl'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='famous-card position-absolute'>
            <div className='main position-relative'>
            <img src={item27} className='img3 img-fluid  position-absolute' alt='famous'/>
            <div className='famous-content1  position-relative'>
              <h5>big screen</h5>
              <div>
              <h6>Smart Watch Series 7</h6>
              <p>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
              {/* <h6>Smart Watch Series 7</h6>
              <p>From $399or $16.62/mo. for 24 mo.*</p> */}
              </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='fomous-card position-relative'>
            <img src={item28} className='img1 img-fluid' alt='famous'/>
            <div className='famous-content2 position-absolute'>
              <h5 className='text-dark'>Studio Display</h5>
              <h6 className='text-dark'>600 nits of brightness.</h6>
              <p className='text-dark'>27-inch 5k Retina display</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='fomous-card position-relative'>
            <img src={item29} className='img2 img-fluid' alt='famous'/>
            <div className='famous-content position-absolute'>
              <h5 className='text-dark'>Smartphones</h5>
              <h6 className='text-dark'>Smartphone 13 Pro.</h6>
              <p className='text-dark'>Now in Green. From $999.00 or $41.62/mo. for 24 mo
               Footnote*</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='fomous-card position-relative'>
            <img src={item30} className='img2 img-fluid' alt='famous'/>
            <div className='famous-content position-absolute'>
              <h5 className='text-dark'>home speakers</h5>
              <h6 className='text-dark'>Room-filling sound.</h6>
              <p className='text-dark'>From $699 or 116.58/mo. for 12 mo.*</p>
              </div>
            </div>
          </div>
        </div>
       </div>
    </Container>
       <Container class1="special-wrapper py-5 home-wrapper-2">
       <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special products</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
          </div>
        </div>
       </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
      <div className='container-xxl'>
              <div className='row'>
              <div className='col-12'>
                <h3 className='section-heading'>Our popular products</h3>
              </div>
               
              </div>
              <div className='row'>
              <div className='col-2'>
                <div className='card-2'></div>
              </div>
              <div className='col-2'>
                <div className='card-2'></div>
              </div>
              <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
              </div>
            </div>
      </Container>
       <Container class1="marquee-wrapper home-wrapper-2 py-5">
       <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                 <div className='mx-5 w-100'>
                  <img src={item19} alt='brand'/>
                 </div>
                 <div className='mx-5 w-100'>
                  <img src={item20} alt='brand'/>
                 </div>
                 <div className='mx-5 w-100'>
                  <img src={item21} alt='brand'/>
                 </div>
                 <div className='mx-5 w-100'>
                  <img src={item22} alt='brand'/>
                 </div>
                 <div className='mx-5 w-100'>
                  <img src={item23} alt='brand'/>
                 </div>
                 <div className='mx-5 w-100'>
                  <img src={item24} alt='brand'/>
                 </div>
                 <div className='mx-5 w-100'>
                  <img src={item25} alt='brand'/>
                 </div>
                 <div className='mx-5 w-100'>
                  <img src={item26} alt='brand'/>
                 </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
       </Container>
       <Container class1="blog-wrapper py-5 home-wrapper-2">
       <div className='container-xxl'>
              <div className='row'>
              <div className='col-12'>
                <h3 className='section-heading'>Our Latest Blogs</h3>
              </div>
              <div className='row'>
              <div className='col-3'>
                <BlogCard/>
                </div>
                <div className='col-3'>
                <BlogCard/>
                </div>
                <div className='col-3'>
                <BlogCard/>
                </div>
                <div className='col-3'>
                <BlogCard/>
                </div>
                </div>
              </div>
            </div>
       </Container>
    </>
  )
}

export default Home

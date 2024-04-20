import React, { useState } from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import ProductCard from '../Components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from '../Components/Color';
import item39 from "../images/watch-2.jpg"
import {TbGitCompare} from "react-icons/tb";
import {AiOutLineHeart, AiOutlineHeart} from "react-icons/ai";
import Container from '../Components/Container';
const SingleProducts = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
const props ={width:400, height: 500, zoomWidth: 450, img: item39 ,
};
  const copyToClipboard = (text) => {
    console.log('text', text);
    var textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  
};
  return (
    <>
      <Meta title="Product Name" />
      <BreadCrumb title="Product Name" />
      <Container class1='main-product-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-6'>
            <div className='main-product-image'>
              <div className='Zoomin'><ReactImageZoom {...props} />
              </div>
            </div>
            <div className='other-product-images d-flex flex-wrap gap-15'>
              <div><img src={item39} className='img-fluid' alt='' /></div>
              <div><img src={item39} className='img-fluid' alt='' /></div>
              <div><img src={item39} className='img-fluid' alt='' /></div>
              <div><img src={item39} className='img-fluid' alt='' /></div>
            </div>
             {/* C>ontent for the left side */}
            </div>
            <div className='col-6'>
             <div className='main-product-details'>
              <div className='border-bottom'>
              <h3 className='title'>
              Kids Headphones Bulk 10 pack multi colored for Students
              </h3>
              </div>
              <div className='border-bottom py-3'>
                <p className='price'>$ 100</p>
                <div className='d-flex align-items-center gap-10'>
                <ReactStars 
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                   <p className='mb-0 t-review'>{2} Reviews</p>

                </div>
                <a className='review-btn' href='#review'>Write a Reviews</a>
              </div>
              <div className='border-bottom py-3'>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Type :</h3> 
                  <p className='product-data'>watch</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Brand :</h3> 
                  <p className='product-data'>Havells</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Category :</h3> 
                  <p className='product-data'>Watch</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Tags :</h3> 
                  <p className='product-data'>Watch</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Availablity :</h3> 
                  <p className='product-data'>In stock</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Size :</h3> 
                  <div className='d-flex flex-wrap gap-15'>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>xxl</span>
                  </div>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Color :</h3> 
                  <Color />
                </div>
                <div className='Quantity d-flex align-items-center gap-15 align-items-center my-2'>
                  <h3 className='product-heading'>Quantity :</h3> 
                 <div className=''></div>
                 <div className='Quantity1 d-flex align-items-center gap-30 ms-5'>            
                 <button className='button border-0' type='submit'>Add to cart</button>
                <button className='button signup'>Buy It Now</button>
                </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <div>
                    <a href=''>
                    <TbGitCompare className='fs' /> Add to compare</a>
                  </div>
                  <div>
                    <a href=''><AiOutlineHeart className="fs" /> Add to WishList</a>
                  </div>
                </div>
                <div className='d-flex gap-10 flex-column  my-3'>
                  <h3 className='product-heading'>Shipping & Returns :</h3> 
                  <p className='product-data'>free Shipping and returns available on all orders! <br/> 
                  We Shipp all Us domestic orders within <b>5-10 business days!</b> 
                  </p>
                </div>
                <div className='d-flex gap-10 align-items-center my-3'>
                  <h3 className='product-heading'> product link:</h3> 
                  <a
                    href='javascript:void(0);'
                    onClick={() => {
                      copyToClipboard('item39');
                    }}
                  >
                    Copy product Link
                  </a>
                </div>
              </div>
             </div>
            </div>
          </div>
      </Container>
      <Container class1='description-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
            <h4>Description</h4>
              <div className='bg-white p-3'>

                <p>
                  Lorem Ipsum dolor, sit amet consectetur elit.
                  Tenetur nisi similique illum aut perferendis voluptas, quisquam
                  obcaecati qui nobis officia. Voluptatibus in harum deleniti
                  labore maxime officia esse eos? Rapellat?
                </p>
              </div>
            </div>
          </div>
      </Container>
      <Container class1='reviews-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
            <h4 id='review' >Reviews</h4>
              {/* Reviews content */}
            </div>
          </div>
      </Container>
      <Container class1='popular-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <div className='review-inner-wrapper'>
              <div className='review-head d-flex justify-content-between align-items-end'>
                <div>
                  <h4  className='mb-2'>Customer Reviews</h4>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className='mb-0'>Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className='text-dark text-decoration-underline' href="/write-review">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className='review-form py-4'>
              <h4 className='mb-2'>Write a Review</h4>
              <form action='' className='d-flex flex-column gap-15'>
              <div>
              <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
              </div>
                  
                    <div>
                      <textarea name='' id='' className='w-100 form-control' cols="30" rows="4" placeholder='Comments'></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className='button border-0'>Submit Review</button>
                    </div>
                  </form>
              </div>
              <div className='reviews mt-4'>
                <div className='review'>
      <div className='d-flex gap-10-items-center'>
        <h6 className='mb-0'>Navdeep</h6>
        <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
      </div>
                    <p className='mt-3'>       Lorem Ipsum dolor, sit amet consectetur elit.
                  Tenetur nisi similique illum aut perferendis voluptas, quisquam
                  obcaecati qui nobis officia. Voluptatibus in harum deleniti
                  labore maxime officia esse eos? Rapellat?</p>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-2'>
              <div className='card-2'></div>
            </div>
            <div className='col-2'>
              <div className='card-2'></div>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>
    </>
  );
}

export default SingleProducts;


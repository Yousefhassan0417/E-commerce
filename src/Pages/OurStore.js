import React, { useState } from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import item28 from '../images/watch.jpg';
import ReactStars from "react-rating-stars-component";
import item34 from '../images/gr.svg';
import item35 from '../images/gr2.svg';
import item36 from '../images/gr3.svg';
import item37 from '../images/gr4.svg';
import ProductCard from '../Components/ProductCard';
import Color from '../Components/Color';
import Container from '../Components/Container';
const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
    <Meta title={"our store"} />
      <BreadCrumb title="our store" />
      <Container class1='store-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl-sm-md-lg-xl'>
        <div className='row'>
          <div className='col-3'>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Shop By categories</h3>
              <div>
                <ul className='ps-0'>
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Filter By</h3>
              <div>
                <h5 className='sub-title'>Availablity</h5>
               <div>
       <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                  <label className="form-check-label" htmlFor="">
                   In stock(1)
                  </label>
                  </div>
                  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                  <label className="form-check-label" htmlFor="">
                    Out of stock(0)
                  </label>
                </div>
               </div>
               <h5 className='sub-title'>Price</h5>
               <div className='d-flex align-items-center gap-10'>
               <div className="form-floating">
  <input type="email" className="form-control" id="floatingInput" placeholder="From"/>
  <label htmlFor="floatingInput">from</label>
               </div>
               <div className="form-floating">
  <input type="email" className="form-control" id="floatingInput" placeholder="To"/>
  <label htmlFor="floatingInput">To</label>
               </div>
               </div>
               <h5 className='sub-title'>Colors</h5>
               <div>
                 <Color />
               </div>
               <h5 className='sub-title'>Size</h5>
               <div>
               <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                  <label className="form-check-label" htmlFor="color-1">
                   S (2)
                  </label>
                  </div>
                  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                  <label className="form-check-label" htmlFor="color-2">
                   M (2)
                  </label>
                  </div>
               </div>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Product Tags</h3>
              <div>
                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Headphone
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Laptop
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Mobile
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                   Wire
                  </span>
                </div>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Random Product</h3>
              <div>
                <div className='randon-products mb-4 d-flex'>
                  <div className='w-50'>
                     <img src={item28} className='img-fluid' alt='watch'/>
                  </div>
                  <div className='w-50'>
                    <h5>
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                 count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
               />
                    <b>$ 300</b>
                  </div>
                </div>
                <div className='randon-products d-flex'>
                  <div className='w-50'>
                     <img src={item28} className='img-fluid' alt='watch'/>
                  </div>
                  <div className='w-50'>
                    <h5>
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                 count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
               />
                    <b>$ 300</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-9'>
          <div className='filter1 filter-sort-grid mb-4'>
          <div className='d-flex justify-content-between align-items-center'>
          <div className='filter2 d-flex align-items-center gap-10'>
              <p className='mb-0 d-block' style={{ width: "100px"}}>Sort By:</p>
              <select name='' className='form-control form-select' id=''>
                <option value="manual">Featured</option>
                <option value="best-selling" selected="selected">Best selling</option>
                <option value="title-ascending">Alphabetically, A-Z</option>
                <option value="title-descending">Alphabetically, Z-A</option>
                <option value="Price-ascending">Price, low to high</option>
                <option value="Price-descending">Price, high to low</option>
                <option value="Price-descending">Date, old to new</option>
                <option value="Price-descending">Date, new to old</option>
              </select>
            </div>
            <div className='filter3 d-flex align-items-center gap-10'>
               <p className='totalproducts mb-0'>21 products</p>
               <div className='filter4 d-flex gap-10 align-items-center grid'>
               <img onClick={()=>{
                setGrid(3);
               }} src={item37} className='d-block img-fluid' alt='grid' />
               <img onClick={()=>{
                setGrid(4);
               }} src={item36} className='d-block img-fluid' alt='grid' />
                <img onClick={()=>{
                  setGrid(6);
                }} src={item35} className='d-block img-fluid' alt='grid' />
                <img onClick={()=>{
                  setGrid(12);
                }} src={item34} className='d-block img-fluid' alt='grid' />
               </div>
            </div>
          </div>
          </div>
          <div className='products-list pb-5'>
          <div className='d-flex gap-10 flex-wrap'>
             <ProductCard grid={grid}/>
             </div>
          </div>
          </div>
        </div>
      </div>
        
      </Container>
    </>
  )
}

export default OurStore

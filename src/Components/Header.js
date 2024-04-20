import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import{BsSearch} from 'react-icons/bs'
import item1 from"../images/compare.svg";
import item2 from"../images/wishlist.svg";
import item3 from"../images/user.svg";
import item4 from"../images/cart.svg";
import item5 from"../images/menu.svg"; 
const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-6'>
              <p className='text-white mb-0'>Free Shipping Over & Free Returns</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>Hotline:  <a className ="text-white"  href='tel:+91 8264954234'>91 8264954234</a></p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
      <div className='container-xxl'>
      <div className='row'>
        <div className='col-2'>
          <h2><Link className='text-white'>Dev Corner</Link></h2>
        </div>
        <div className='col-5'>
        <div className="input-group mb-3">
  <input type="text" class="form-control py-2" placeholder="Search Product Here" aria-label="Search Product Here" aria-describedby="basic-addon2"/>
  <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6'/></span>
</div>
        </div>
        
</div>
<div className='row2'>
<div className='header-upper-links d-flex align-center justify-content-between'>
    <div>
      <Link to="./compare-product" className='d-flex align-items-center gap-10 text-white'>
        <img src={item1} className='icon' alt="Compare" />
        <p className='mb-0'>Compare<br />Products</p>
      </Link>
    </div>
    <div>
      <Link to="/wishlist" className='d-flex align-items-center gap-10 text-white'>
        <img src={item2} className='icon' alt="wishlist" />
        <p className='mb-0'>Favourite<br />Products</p>
      </Link>
    </div>
    <div>
      <Link to="/login" className='d-flex align-items-center gap-10 text-white'>
        <img src={item3} className='icon' alt="wishlist" />
        <p className='mb-0'>Log in <br />My Account</p>
      </Link>
    </div>
    <div>
      <Link to="/cart" className='d-flex align-items-center gap-10 text-white'>
        <img src={item4} className='icon' alt="cart" />
        <div className="d-flex flex-column gap-10">
          <p className='mb-0'>$ 500</p>
          <span className='badge bg-white text-dark'>0</span>
        </div>
      </Link>
    </div>
  </div>
</div>
</div>
      </header>
      <header className='header-bottom py-3'>
        <div className='countainer-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
              <div>
              <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <img src={item5} alt=''/>
   <span className='me-1 d-inline-block'> Shop Categories</span>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link className="dropdown-item  text-white" to="">Action</Link></li>
    <li><Link className="dropdown-item  text-white" to="">Another action</Link></li>
    <li><Link className="dropdown-item  text-white" to="">Something else here</Link></li>
  </ul>
</div>
              </div>
              <div className='menu-links'>
                <div className='menu-countainer d-flex align-items-center gap-15'>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/product">Our store</NavLink>
                  <NavLink to="/Blogs">Blogs</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;


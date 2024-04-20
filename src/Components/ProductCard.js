import React from 'react';
import ReactStars from "react-rating-stars-component";
import item28 from '../images/watch.jpg';
import { Link, useLocation } from 'react-router-dom';
import item29 from '../images/add-cart.svg';
import item30 from '../images/prodcompare.svg';
import item31 from '../images/view.svg';
import item32 from '../images/wish.svg';
import item33 from '../images/watch-1.avif.jpg';

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to=":id" className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
            <button className='border-0 bg-transparent'>
              <Link>
                <img src={item32} alt='wishlist' />
              </Link>
            </button>
          </div>
          <div className='product-image'>
            <img src={item28} style={{ width: "65%" }} className='img-fluid' alt='product image' />
            <img src={item33} style={{ width: "65%" }} className='img-fluid' alt='product image' />
          </div>
          <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et iusto odio dignissimos ducimus qui
              blanditilis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt ...
            </p>
            <p className='price'>$100.00</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <button className='border-0 bg-transparent'>
                <img src={item30} alt='compare' />
              </button>
              <button className='border-0 bg-transparent'>
                <img src={item31} alt='view' />
              </button>
              <button className='border-0 bg-transparent'>
                <img src={item29} alt='addcart' />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to=":id" className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
            <button className='border-0 bg-transparent'>
              <Link>
                <img src={item32} alt='wishlist' />
              </Link>
            </button>
          </div>
          <div className='product-image'>
            <img src={item28} style={{ width: "65%" }} className='img-fluid' alt='product image' />
            <img src={item33} style={{ width: "65%" }} className='img-fluid' alt='product image' />
          </div>
          <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>
              kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et iusto odio dignissimos ducimus qui
              blanditilis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt ...
            </p>
            <p className='price'>$100.00</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <button className='border-0 bg-transparent'>
                <img src={item30} alt='compare' />
              </button>
              <button className='border-0 bg-transparent'>
                <img src={item31} alt='view' />
              </button>
              <button className='border-0 bg-transparent'>
                <img src={item29} alt='addcart' />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;

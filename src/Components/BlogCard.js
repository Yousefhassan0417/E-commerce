import React from 'react'
import item27 from '../images/blog-1.jpg';
import { Link } from 'react-router-dom';
const BlogCard = () => {
  return (
   
       <div className='blog-card'>
        <div className='card-image'>
            <img src={item27} className='img-fluid w-100' alt='blog'/>
        </div>
        <div className='blog-content'>
            <p className='date'>1 Dec, 2022</p>
            <h5 className='title'>A beautiful sunday morning renaissance</h5>
            <p className='desc'>
                lorem
            </p>
            <Link to="/Blogs/:id" className='button'>
                Read More
            </Link>
        </div>
       </div>
    
  )
}

export default BlogCard
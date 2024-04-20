import React from 'react'
import BreadCrumb from '../Components/BreadCrumb';
import item27 from '../images/blog-1.jpg';
import Meta from '../Components/Meta';
import { Link } from 'react-router-dom';
import{HiOutlineArrowLeft} from "react-icons/hi";
import Container from '../Components/Container';
const SingleBlog = () => {
  return (
    <>
       <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" /> 
      <Container className='blog-wrapper home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-12'>
            <div className='Single-blog-card'>
            <Link to="/blogs" className='Beautiful d-flex align-items-center gap-10'>
            <HiOutlineArrowLeft  className="fs-4" />Go back to Blogs
            /</Link>
                <h3 className='title'>
                    A Beautiful Sunday Morning Renaissance
                </h3>
                <img src={ item27} className='img9 img-fluid w-50 my-4' alt='Blog' />
                <p>you're only as good as your last collection, which is an
                    enormous pressure. I think there is something about luxury -
                     it's not something people need, but it's what they want. it
                     really pulls at their heart. I have a fantastic relationship
                     with money Scelerisque sociosqu ullamcorper urna nisl mollis
                     vestibulum pretium commodo inceptos cum condimentum placerat
                     diam veneatis blandit hac eget dis lacus a parturient a 
                     accumsan nisl ante vestibulum.
                     </p>
            </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default SingleBlog

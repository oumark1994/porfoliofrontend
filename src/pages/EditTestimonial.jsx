import React, { useState } from 'react'
import Sidebar from '../components/admin/Sidebar'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {updateTestimonial} from '../store/testimonialSlice'
import { useNavigate, useParams } from 'react-router-dom'

const EditTestimonial = () => {
    const {id} = useParams()
    const testimonials = useSelector(state=>state.testimonials.testimonials)
    const testimonial = testimonials.find(s=>s.id == id)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name,setName] = useState(testimonial.name)
    const [review,setReview] = useState(testimonial.review)
    const [image,setImage] = useState(testimonial.image)

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8800/api/testimonials/${id}`,{id,name,review,image})
        .then(res=>{dispatch(updateTestimonial(res.data))
            navigate('/testimonials')
        })
        
        .catch(err=>console.log(err))
    }




  return (
    <>
    <Sidebar/>
    <div className="container-fluid mt-5">
     <div className='row  justify-center mt-5'>
    <div className="col-lg-6 d-flex align-items-stretch mt-5">
             <div className="card w-100">
               <div className="card-body p-4">
                 <h5 className="card-title fw-semibold mb-4">Edit  Testimonial</h5>
                 <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Title</label>
                      <input  value={name} type="text"  className="form-control" onChange={(e)=>setName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Review</label>
                      <input value={review} type="text"  className="form-control" onChange={(e)=>setReview(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Image</label>
                      <input type="text"  value={image} className="form-control" onChange={(e)=>setImage(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                  
                    <button type="submit" className="btn btn-primary bg-slate-500">Update</button>
                  </form>
                </div>
                </div>
                </div>
                </div>
                </div>  
    </>
  )
}

export default EditTestimonial
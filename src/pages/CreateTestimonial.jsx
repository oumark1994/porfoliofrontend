import React, { useState } from 'react'
import Sidebar from '../components/admin/Sidebar'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addTestimonial } from '../store/testimonialSlice'
import { useNavigate } from 'react-router-dom'

const CreateTestimonial = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name,setName] = useState()
    const [review,setReview] = useState()
    const [image,setImage] = useState()

    const handleSubmit = (e)=>{
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('name',name)
        formdata.append('review',review)
        formdata.append('image',image)
      
        axios.post('http://localhost:8800/api/testimonials',formdata)
        .then(res=>{dispatch(addTestimonial(res.data))
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
               <h5 className="card-title fw-semibold mb-4">Create Testimonial</h5>

                 <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Name</label>
                      <input type="text"  className="form-control" onChange={(e)=>setName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Reviw</label>
                      <input type="text"  className="form-control" onChange={(e)=>setReview(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Image</label>
                      <input type="file"  className="form-control" onChange={(e)=>setImage(e.target.files[0])} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                
                    <button type="submit" className="btn btn-primary bg-slate-500">Submit</button>
                  </form>
                </div>
                </div>
                </div>
                </div>
                </div>  
    </>
  )
}

export default CreateTestimonial
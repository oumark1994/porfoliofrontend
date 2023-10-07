import React, { useState } from 'react'
import Sidebar from '../components/admin/Sidebar'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addService } from '../store/serviceSlice'
import { useNavigate } from 'react-router-dom'

const Createservice = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [title,setTitle] = useState()
    const [para,setPara] = useState()
    const [logo,setLogo] = useState()

    const handleSubmit = (e)=>{
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('title',title)
        formdata.append('para',para)
        formdata.append('logo',logo)
      
        axios.post('http://localhost:8800/api/services',formdata)
        .then(res=>{dispatch(addService(res.data))
            navigate('/services')
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
               <h2 className="card-title fw-semibold">Create Service</h2>

                 <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Title</label>
                      <input type="text"  className="form-control" onChange={(e)=>setTitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Description</label>
                      <input type="text"  className="form-control" onChange={(e)=>setPara(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Logo</label>
                      <input type="file"  className="form-control" onChange={(e)=>setLogo(e.target.files[0])} id="exampleInputEmail1" aria-describedby="emailHelp"/>
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

export default Createservice
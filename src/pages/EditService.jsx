import React, { useState } from 'react'
import Sidebar from '../components/admin/Sidebar'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {updateService } from '../store/serviceSlice'
import { useNavigate, useParams } from 'react-router-dom'

const EditService = () => {
    const {id} = useParams()
    const services = useSelector(state=>state.services.services)
    const service = services.find(s=>s.id == id)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [title,setTitle] = useState(service.title)
    const [para,setPara] = useState(service.para)
    const [logo,setLogo] = useState(service.logo)

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8800/api/services/${id}`,{id,title,para,logo})
        .then(res=>{dispatch(updateService(res.data))
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
                 <h5 className="card-title fw-semibold mb-4">Edit  Service</h5>
                 <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Title</label>
                      <input  value={title} type="text"  className="form-control" onChange={(e)=>setTitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Desc</label>
                      <input value={para} type="text"  className="form-control" onChange={(e)=>setPara(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Logo</label>
                      <input type="text"  value={logo} className="form-control" onChange={(e)=>setLogo(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
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

export default EditService
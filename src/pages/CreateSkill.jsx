import React, { useState } from 'react'
import Sidebar from '../components/admin/Sidebar'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addSkill } from '../store/skillSlice'
import { useNavigate } from 'react-router-dom'

const CreateSkill = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name,setName] = useState()
    const [para,setPara] = useState()
    const [logo,setLogo] = useState()

    const handleSubmit = (e)=>{
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('logo',logo)
        formdata.append('para',para)
        formdata.append('name',name)
      
        axios.post('https://porfolio-backend-e3rt.onrender.com/api/skills',formdata)
        .then(res=>{dispatch(addSkill(res.data))
            navigate('/skills')
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
                 <h5 className="card-title fw-semibold mb-4">Create Skill</h5>
                 <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Name</label>
                      <input type="text"  className="form-control" onChange={(e)=>setName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
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

export default CreateSkill

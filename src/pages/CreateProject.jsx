import React, { useState } from 'react'
import Sidebar from '../components/admin/Sidebar'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProject } from '../store/projectSlice'
import { useNavigate } from 'react-router-dom'

const CreateProject = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [title,setTitle] = useState()
    const [desc,setDesc] = useState()
    const [image,setImage] = useState()
    const [projectLink,setProjectlink] = useState()

    const handleSubmit = (e)=>{
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('title',title)
        formdata.append('desc',desc)
        formdata.append('image',image)
        formdata.append('projectLink',projectLink)
      
        axios.post('https://porfolio-backend-e3rt.onrender.com/api/projects',formdata)
        .then(res=>{dispatch(addProject(res.data))
            navigate('/projects')
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
                 <h5 className="card-title fw-semibold mb-4">Create Project</h5>
                 <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Title</label>
                      <input type="text"  className="form-control" onChange={(e)=>setTitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Description</label>
                      <input type="text"  className="form-control" onChange={(e)=>setDesc(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Image</label>
                      <input type="file"  className="form-control" onChange={(e)=>setImage(e.target.files[0])} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Project Link</label>
                      <input type="text"  className="form-control" onChange={(e)=>setProjectlink(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
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

export default CreateProject

import React, { useState } from 'react'
import Sidebar from '../components/admin/Sidebar'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {updateProject } from '../store/projectSlice'
import { useNavigate, useParams } from 'react-router-dom'

const EditProject = () => {
    const {id} = useParams()
    const projects = useSelector(state=>state.projects.projects)
    const project = projects.find(s=>s.id == id)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [title,setTitle] = useState(project.title)
    const [desc,setDesc] = useState(project.desc)
    const [image,setImage] = useState(project.image)
    const [projectLink,setProjectlink] = useState(project.projectLink)

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put(`https://porfolio-backend-e3rt.onrender.com/api/projects/${id}`,{id,title,desc,image,projectLink})
        .then(res=>{dispatch(updateProject(res.data))
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
                 <h5 className="card-title fw-semibold mb-4">Edit  Project</h5>
                 <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Title</label>
                      <input  value={title} type="text"  className="form-control" onChange={(e)=>setTitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Desc</label>
                      <input value={desc} type="text"  className="form-control" onChange={(e)=>setDesc(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Image</label>
                      <input type="text"  value={image} className="form-control" onChange={(e)=>setImage(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Project Link</label>
                      <input type="text"  value={projectLink} className="form-control" onChange={(e)=>setProjectlink(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
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

export default EditProject

import React, { useState } from 'react'
import Sidebar from '../components/admin/Sidebar'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {updateSkill } from '../store/skillSlice'
import { useNavigate, useParams } from 'react-router-dom'

const EditSkill = () => {
    const {id} = useParams()
    const skills = useSelector(state=>state.skills.skills)
    const skill = skills.find(s=>s.id == id)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name,setName] = useState(skill.name)
    const [para,setPara] = useState(skill.para)
    const [logo,setLogo] = useState(skill.logo)
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8800/api/skills/${id}`,{id,name,para,logo})
        .then(res=>{dispatch(updateSkill(res.data))
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
                 <h5 className="card-title fw-semibold mb-4">Edit  Skill</h5>
                 <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Name</label>
                      <input  value={name} type="text"  className="form-control" onChange={(e)=>setName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Desc</label>
                      <input value={para} type="text"  className="form-control" onChange={(e)=>setPara(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Logo</label>
                      <input type="text"  value={logo} className="form-control" onChange={(e)=>setLogo(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
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

export default EditSkill
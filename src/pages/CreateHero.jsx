import React, { useState } from 'react'
import Sidebar from '../components/admin/Sidebar'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addHero } from '../store/heroSlice'
import { useNavigate } from 'react-router-dom'

const CreateHero = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [title,setTitle] = useState()
    const [firstname,setFirstname] = useState()
    const [lastname,setLastname] = useState()
    const [btnText,setBtntext] = useState()
    const [text1,setText1] = useState()
    const [text2,setText2] = useState()
    const [count1,setCount1] = useState()
    const [count2,setCount2] = useState()
    const [image,setImage] = useState()
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('image',image)
        formdata.append('title',title)
        formdata.append('firstname',firstname)
        formdata.append('lastname',lastname)
        formdata.append('text1',text1)
        formdata.append('text2',text2)
        formdata.append('count1',count1)
        formdata.append('count2',count2)
        formdata.append('btnText',btnText)
        axios.post('https://porfolio-backend-e3rt.onrender.com/api/heroes',formdata)
        .then(res=>{dispatch(addHero(res.data))
            navigate('/hero')
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
                 <h5 className="card-title fw-semibold mb-4">Create Hero</h5>
                 <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Title</label>
                      <input type="text"  className="form-control" onChange={(e)=>setTitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">First Name</label>
                      <input type="text"  className="form-control" onChange={(e)=>setFirstname(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Last Name</label>
                      <input type="text"  className="form-control" onChange={(e)=>setLastname(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Btn Text</label>
                      <input type="text"  className="form-control" onChange={(e)=>setBtntext(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Experience</label>
                      <input type="text"  className="form-control" onChange={(e)=>setText1(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Projects</label>
                      <input type="text"  className="form-control" onChange={(e)=>setText2(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Year Experience</label>
                      <input type="text"  className="form-control" onChange={(e)=>setCount1(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Projects completed</label>
                      <input type="text"  className="form-control" onChange={(e)=>setCount2(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
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

export default CreateHero

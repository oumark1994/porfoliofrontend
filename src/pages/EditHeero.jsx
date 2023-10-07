import React, { useState } from 'react'
import Sidebar from '../components/admin/Sidebar'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {updateHero } from '../store/heroSlice'
import { useNavigate, useParams } from 'react-router-dom'

const EditHero = () => {
    const {id} = useParams()
    const heroes = useSelector(state=>state.heroes.heroes)
    const hero = heroes.find(h=>h.id == id)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [title,setTitle] = useState(hero.title)
    const [firstname,setFirstname] = useState(hero.firstname)
    const [lastname,setLastname] = useState(hero.lastname)
    const [btnText,setBtntext] = useState(hero.btnText)
    const [text1,setText1] = useState(hero.text1)
    const [text2,setText2] = useState(hero.text2)
    const [count1,setCount1] = useState(hero.count1)
    const [count2,setCount2] = useState(hero.count2)
    const [image,setImage] = useState(hero.image)
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put(`https://porfolio-backend-e3rt.onrender.com/api/heroes/${id}`,{id,title,firstname,lastname,image,btnText,text1,text2,count1,count2})
        .then(res=>{dispatch(updateHero(res.data))
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
                      <input  value={title} type="text"  className="form-control" onChange={(e)=>setTitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">First Name</label>
                      <input value={firstname} type="text"  className="form-control" onChange={(e)=>setFirstname(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Last Name</label>
                      <input value={lastname} type="text"  className="form-control" onChange={(e)=>setLastname(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Btn Text</label>
                      <input type="text" value={btnText}  className="form-control" onChange={(e)=>setBtntext(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Experience</label>
                      <input type="text" value={text1}  className="form-control" onChange={(e)=>setText1(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Projects</label>
                      <input type="text" value={text2}  className="form-control" onChange={(e)=>setText2(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Year Experience</label>
                      <input type="text" value={count1}  className="form-control" onChange={(e)=>setCount1(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Projects completed</label>
                      <input type="text"  value={count2} className="form-control" onChange={(e)=>setCount2(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Image</label>
                      <input type="text"  value={image} className="form-control" onChange={(e)=>setImage(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
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

export default EditHero

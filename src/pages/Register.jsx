import React, { useState } from 'react'
import { Link,useNavigate} from "react-router-dom"
import axios from "axios"

const Register = () => {
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  })
  const [error,setError] = useState()
  const navigate = useNavigate()
   const handleChange = ({currentTarget:input})=>{
    setData({...data,[input.name]:input.value})
   }
   const handleSubmit =(e)=>{
    e.preventDefault()
    
      const url = "http://localhost:8800/api/users/signup";
       axios.post(url,data)
      .then(res=>{
        navigate("/login")
        console.log(res.data)
      })
     .catch(err=> {
      if(err.response && err.response.status >= 400 && err.response.status <= 500){
        setError(err.response.data.message)
        
      }
    })
   }
   console.log(error)
  return (
    <>
        <div
      className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-6 col-xxl-3">
            <div className="card mb-0">
              <div className="card-body">
                {/* <a href="./index.html" className="text-nowrap logo-img text-center d-block py-3 w-100">
                  <img src="../assets/images/logos/dark-logo.svg" width="180" alt="">
                </a> */}
                <p className="text-center">Register</p>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label  className="form-label">First Name</label>
                    <input type="text" name='firstName' value={data.firstName} onChange={handleChange} className="form-control" id="exampleInputtext1" aria-describedby="textHelp" />
                  </div>
                  <div className="mb-3">
                    <label  className="form-label">Last Name</label>
                    <input type="text" name='lastName' value={data.lastName} onChange={handleChange} className="form-control" id="exampleInputtext1" aria-describedby="textHelp" />
                  </div>
                  <div className="mb-3">
                    <label  className="form-label">Email</label>
                    <input type="email"  name='email' value={data.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-4">
                    <label  className="form-label">Password</label>
                    <input  name='password' value={data.password} onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                      {error && <div className='bg-red text-red text-center'>{error}</div>}
                  <button type='submit' className="btn bg-primary hover:bg-current text-white w-100 py-8 fs-4 mb-4 rounded-2">Sign Up</button>
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="fs-4 mb-0 fw-bold">Already have an Account?</p>
                    <Link className="text-primary fw-bold ms-2" to="/login">Sign In</Link>
                  </div>
                
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register
import React, { useState } from 'react'
import { Link,useNavigate} from "react-router-dom"
import axios from "axios"

const Login = () => {
  const [data,setData] = useState({
    email:"",
    password:""
  })
  const [error,setError] = useState()
   const handleChange = ({currentTarget:input})=>{
    setData({...data,[input.name]:input.value})
   }
   const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const url = "https://porfolio-backend-e3rt.onrender.com/api/users/login";
      const {data:res} = await axios.post(url,data)
      localStorage.setItem("token",res.data)
      window.location = "/dashboard"
      console.log(res.message);
    } catch (err) {
      if(err.response && err.response.status >= 400 && err.response.status <= 500){
        setError(err.response.data.message)
      }
    }
   }
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
                <p className="text-center">Login</p>
                <form onSubmit={handleSubmit}>              
                  <div className="mb-3">
                    <label  className="form-label">Email</label>
                    <input type="email"  name='email' value={data.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-4">
                    <label  className="form-label">Password</label>
                    <input  name='password' value={data.password} onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                      {error && <div className=' text-red-800 text-center'>{error}</div>}
                  <button type='submit' className="btn bg-primary hover:bg-current text-white w-100 py-8 fs-4 mb-4 rounded-2">Sign In</button>
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="fs-4 mb-0 fw-bold">Don't have an account?</p>
                    <Link className="text-primary fw-bold ms-2" to="/register">Sign Up</Link>
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

export default Login

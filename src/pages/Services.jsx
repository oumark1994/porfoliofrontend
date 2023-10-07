import { useEffect } from "react"
import Sidebar from "../components/admin/Sidebar"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { getServices,deleteService} from "../store/serviceSlice"
import { Link } from "react-router-dom"

const Services = () => {
    const dispatch = useDispatch();
    const services = useSelector(state=>state.services.services)
    useEffect(()=>{
  const getservices = async ()=>{
        try {
            const response = await axios.get("http://localhost:8800/api/services");
            dispatch(getServices(response.data));
        } catch (err) {
            console.log(err)
        }
    }
    getservices()
    },[])
    const handleDelete = (id)=>{
     
         axios.delete(`http://localhost:8800/api/services/${id}`).then(res=>{
          dispatch(deleteService(id));

          console.log(res)
        window.location.reload(true)

        }).catch (err=>console.log(err))
    }
    
  return (
  
     <>
   <Sidebar/>
   <div className="container-fluid mt-5">
    <div className='row  justify-center mt-5'>
   <div className="col-lg-9 offset-2 flex align-items-stretch mt-5">
            <div className="card w-100 pl-5">
              <div className="card-body p-4">
                <h5 className="card-title fw-semibold mb-4">Services</h5>
                <div className="table-responsive">
                  <table className="table text-nowrap mb-0 align-middle">
                    <thead className="text-dark fs-4">
                      <Link to="/createservice" className="btn btn-secondary">Add Service</Link>
                      <tr>
                     
                      <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Logo</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Title</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Desc</h6>
                        </th>
                       
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0 text-center">Action</h6>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                  {services.map(service=>{
                      return <tr>

                        <td className="border-bottom-0">
                        <img src={`http://localhost:8800/images/${service.logo}`} alt="" width="35" height="35" class="rounded-circle" />                 

                        </td>
                        <td className="border-bottom-0">
                          <p className="mb-0 fw-normal">{service.title}</p>
                        </td>
                        <td className="border-bottom-0">
                          <p className="mb-0 fw-normal">{service.para}</p>
                        </td>
                        <div className="flex gap-3">
                          <Link to={`/editservice/${service.id}`} className="btn btn-primary">Edit</Link>
                          <button onClick={()=>handleDelete(service.id)} className="btn btn-danger">Delete</button>
                          
                        </div>
                        </tr> })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Services
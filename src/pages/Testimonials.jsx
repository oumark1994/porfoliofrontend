import { useEffect } from "react"
import Sidebar from "../components/admin/Sidebar"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { getTestimonials,deleteTestimonial} from "../store/testimonialSlice"
import { Link } from "react-router-dom"

const Testimonials = () => {
    const dispatch = useDispatch();
    const testimonials = useSelector(state=>state.testimonials.testimonials)
    useEffect(()=>{
  const gettestimonials = async ()=>{
        try {
            const response = await axios.get("https://porfolio-backend-e3rt.onrender.com/api/testimonials");
            dispatch(getTestimonials(response.data));
        } catch (err) {
            console.log(err)
        }
    }
    gettestimonials()
    },[])
    const handleDelete = (id)=>{
     
         axios.delete(`https://porfolio-backend-e3rt.onrender.com/api/testimonials/${id}`).then(res=>{
          dispatch(deleteTestimonial(id));

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
                <h5 className="card-title fw-semibold mb-4">Testimonials</h5>
                <div className="table-responsive">
                  <table className="table text-nowrap mb-0 align-middle">
                    <thead className="text-dark fs-4">
                      <Link to="/createtestimonial" className="btn btn-secondary">Add Testimonial</Link>
                      <tr>
                     
                      <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Image</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Name</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Review</h6>
                        </th>
                       
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0 text-center">Action</h6>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                  {testimonials.map(t=>{
                      return <tr>

                        <td className="border-bottom-0">
                        <img src={`https://porfolio-backend-e3rt.onrender.com/images/${t.image}`} alt="" width="35" height="35" class="rounded-circle" />                 

                        </td>
                        <td className="border-bottom-0">
                          <p className="mb-0 fw-normal">{t.name}</p>
                        </td>
                        <td className="border-bottom-0">
                          <p className="mb-0 fw-normal">{t.review}</p>
                        </td>
                        <div className="flex gap-3">
                          <Link to={`/edittestimonial/${t.id}`} className="btn btn-primary">Edit</Link>
                          <button onClick={()=>handleDelete(t.id)} className="btn btn-danger">Delete</button>
                          
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

export default Testimonials

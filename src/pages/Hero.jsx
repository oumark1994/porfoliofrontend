import { useEffect } from "react"
import Sidebar from "../components/admin/Sidebar"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { gethero,deletehero} from "../store/heroSlice"
import { Link } from "react-router-dom"

const Hero = () => {
    const dispatch = useDispatch();
    const heroes = useSelector(state=>state.heroes.heroes)
    console.log(heroes)
    useEffect(()=>{
  const getHeroes = async ()=>{
        try {
            const response = await axios.get("https://porfolio-backend-e3rt.onrender.com/api/heroes");
            dispatch(gethero(response.data));
        } catch (err) {
            console.log(err)
        }
    }
    getHeroes()
    },[])
    const handleDelete = (id)=>{
     
         axios.delete(`http://localhost:8800/api/heroes/${id}`).then(res=>{
          dispatch(deletehero(id));

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
                <h5 className="card-title fw-semibold mb-4">Hero</h5>
                <div className="table-responsive">
                  <table className="table text-nowrap mb-0 align-middle">
                    <thead className="text-dark fs-4">
                      <Link to="/createhero" className="btn btn-secondary flex justify-end">Add Hero</Link>
                      <tr>
                     
                      <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Image</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Title</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">FirstName</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Lastname </h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Experience</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Projects</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0 text-center">Action</h6>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                  {heroes.map(hero=>{
                      return <tr>
                         <img src={`http://localhost:8800/images/${hero.image}`} alt="" width="35" height="35" class="rounded-circle" /> 
                        <td className="border-bottom-0">
                          <p className="mb-0 fw-normal">{hero.title}</p>
                        </td>
                        <td className="border-bottom-0">
                          <p className="mb-0 fw-normal">{hero.firstname}</p>
                        </td>
                        <td className="border-bottom-0">
                          <p className="mb-0 fw-normal">{hero.lastname}</p>
                        </td>
                        <td className="border-bottom-0">
                          <p className="mb-0 fw-normal">{hero.count1}</p>
                        </td>
                        <td className="border-bottom-0">
                          <p className="mb-0 fw-normal">{hero.count2}</p>
                        </td>
                        <div className="flex gap-3">
                          <Link to={`/edithero/${hero.id}`} className="btn btn-primary">Edit</Link>
                          <button onClick={()=>handleDelete(hero.id)} className="btn btn-danger">Delete</button>
                          
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

export default Hero

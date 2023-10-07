import { useEffect } from "react"
import Sidebar from "../components/admin/Sidebar"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import {deleteProject,getProjects} from "../store/projectSlice"
import { Link } from "react-router-dom"

const Projects = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state=>state.projects.projects)
    console.log(projects)
    useEffect(()=>{
  const getprojects = async ()=>{
        try {
            const response = await axios.get("https://porfolio-backend-e3rt.onrender.com/api/projects");
            dispatch(getProjects(response.data));
        } catch (err) {
            console.log(err)
        }
    }
    getprojects()
    },[])
    const handleDelete = (id)=>{
     
         axios.delete(`https://porfolio-backend-e3rt.onrender.com/api/projects/${id}`).then(res=>{
          dispatch(deleteProject(id));

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
                <h5 className="card-title fw-semibold mb-4">Projects</h5>
                <div className="table-responsive">
                  <table className="table text-nowrap mb-0 align-middle">
                    <thead className="text-dark fs-4">
                      <Link to="/createproject" className="btn btn-secondary flex ">Add Project</Link>
                      <tr>
                      <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Image</h6>
                        </th>
                      <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Title</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Description</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Project Link</h6>
                        </th>
                   
          
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0 text-center">Action</h6>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                  {projects.map(project=>{
                      return <tr>

                        <td className="border-bottom-0">
                        <img src={`http://localhost:8800/images/${project.image}`} alt="" width="35" height="35" class="rounded-circle" />                 
                        </td>
                        <td className="border-bottom-0">
                          <p className="mb-0 fw-normal">{project.title}</p>
                        </td>
                        <td className="border-bottom-0">
                          <p className="mb-0 fw-normal">{project.desc}</p>
                        </td>
                        <td className="border-bottom-0">
                          <p className="mb-0 fw-normal">{project.projectLink}</p>
                        </td>
                      
                     
                        <div className="flex gap-3">
                          <Link to={`/editproject/${project.id}`} className="btn btn-primary">Edit</Link>
                          <button onClick={()=>handleDelete(project.id)} className="btn btn-danger">Delete</button>
                          
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

export default Projects

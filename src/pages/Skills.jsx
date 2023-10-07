import { useEffect } from "react"
import Sidebar from "../components/admin/Sidebar"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { getskills,deleteSkill} from "../store/skillSlice"
import { Link } from "react-router-dom"

const Skills = () => {
    const dispatch = useDispatch();
    const skills = useSelector(state=>state.skills.skills)
    console.log(skills)
    useEffect(()=>{
  const getSkills = async ()=>{
        try {
            const response = await axios.get("https://porfolio-backend-e3rt.onrender.com/api/skills");
            dispatch(getskills(response.data));
        } catch (err) {
            console.log(err)
        }
    }
    getSkills()
    },[])
    const handleDelete = (id)=>{
     
         axios.delete(`https://porfolio-backend-e3rt.onrender.com/api/skills/${id}`).then(res=>{
          dispatch(deleteSkill(id));

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
                <h5 className="card-title fw-semibold mb-4">Skills</h5>
                <div className="table-responsive">
                  <table className="table text-nowrap mb-0 align-middle">
                    <thead className="text-dark fs-4">
                      <Link to="/createskill" className="btn btn-secondary flex ">Add Skill</Link>
                      <tr>
                      <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Logo</h6>
                        </th>
                      <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Name </h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Description</h6>
                        </th>
                   
          
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0 text-center">Action</h6>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                  {skills?.map(skill=>{
                      return <tr>

                        <td className="border-bottom-0">
                        <img src={`https://porfolio-backend-e3rt.onrender.com/images/${skill.logo}`} alt="" width="35" height="35" class="rounded-circle" />                 
                        </td>
                        <td className="border-bottom-0">
                          <p className="mb-0 fw-normal">{skill.name}</p>
                        </td>
                        <td className="border-bottom-0">
                          <p className="mb-0 fw-normal">{skill.para}</p>
                        </td>
                      
                     
                        <div className="flex gap-3">
                          <Link to={`/editskill/${skill.id}`} className="btn btn-primary">Edit</Link>
                          <button onClick={()=>handleDelete(skill.id)} className="btn btn-danger">Delete</button>
                          
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

export default Skills

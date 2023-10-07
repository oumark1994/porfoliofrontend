import axios from "axios";
import { createElement, useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { getskills } from "../store/skillSlice";
// import {ai} from "react-icons/ai"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const [modalIsOpen,setIsOpen] = useState(false);
  // const {skills} = content;
  const [selectSkill, setSelectSkill] = useState(null);
  const dispatch = useDispatch();
  const skills = useSelector(state=>state.skills.skills)
  console.log(skills)
  useEffect(()=>{
const getSkills = async ()=>{
      try {
          const response = await axios.get("http://localhost:8800/api/skills");
          dispatch(getskills(response.data));
      } catch (err) {
          console.log(err)
      }
  }
  getSkills()
  },[])
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <section id="skills" className="min-h-fit bg-bg_light_primary">
{/*     
         <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
      
        <div key={i} className="flex items-center gap-2">
          <img className="h-10" src={skill?.logo} alt="..." />
          <h6>{skill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <li>{skill.para}</li> 
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal> */}
      
   
      <div className="md:container px-5 py-14">
        <h2 className="title">Skills</h2>
        <h4 className="subtitle text-gray">My Top Technical Skills</h4>
        <br/>
        
      <div  className="flex  flex-wrap gap-4 justify-center">
      {skills.map((skill,i)=>(
        
          <div key={i}  className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200">
            <div>
              <img className="w-11 h-11 object-fit rounded-full group-hover:scale-125 duration-200" src={`http://localhost:8800/images/${skill.logo}`} alt="..." />
            </div>
            <div>
              <h6>{skill.name}</h6>
              <p>{skill.para}</p>
            </div>
            <div onClick={()=>{ 
              setSelectSkill(skill);
              openModal();}}>
           
            </div>
          </div>
        ))}
      </div>
    
      
      </div>
    
    </section>
  )
}

export default Skills
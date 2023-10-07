import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name:'projects',
    initialState:{
        projects:[]
    },
    reducers:{
        getProjects:(state,action)=>{
            state.projects = action.payload.map(project=>{
                return {id:project._id,title:project.title,desc:project.desc,image:project.image,projectLink:project.projectLink}
            })
        },
        addProject:(state,action)=>{
            state.projects.push(action.payload)
        },
        updateProject:(state,action)=>{
          const index = state.projects.findIndex(x=>x.id === action.payload.id)
          state.projects[index] = {
            id:action.payload.id,
            title:action.payload.title,
            desc:action.payload.desc,
            image: action.payload.image,
            projectLink: action.payload.projectLink,
           }
        },
        deleteProject:(state,action)=>{
            const id = action.payload.id;
            state.projects = state.projects.filter(p=>p.id!==id)
        }
        
    }
})
export const {getProjects,addProject,updateProject,deleteProject} = projectSlice.actions
export default projectSlice.reducer
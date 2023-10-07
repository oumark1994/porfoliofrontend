import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
    name:'skills',
    initialState:{
        skills:[]
    },
    reducers:{
        getskills:(state,action)=>{
            state.skills = action.payload.map(skill=>{
                return {id:skill._id,name:skill.name,para:skill.para,logo:skill.logo}
            })
        },
        addSkill:(state,action)=>{
            state.skills.push(action.payload)
        },
        updateSkill:(state,action)=>{
          const index = state.skills.findIndex(x=>x.id === action.payload.id)
          state.skills[index] = {
            id:action.payload.id,
            name:action.payload.name,
            para:action.payload.para,
           logo: action.payload.logo
           }
        },
        deleteSkill:(state,action)=>{
            const id = action.payload.id;
            state.skills = state.skills.filter(s=>s.id!==id)
        }
        
    }
})
export const {getskills,addSkill,updateSkill,deleteSkill} = skillSlice.actions
export default skillSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
    name:'services',
    initialState:{
        services:[]
    },
    reducers:{
        getServices:(state,action)=>{
            state.services = action.payload.map(service=>{
                return {id:service._id,title:service.title,para:service.para,logo:service.logo}
            })
        },
        addService:(state,action)=>{
            state.services.push(action.payload)
        },
        updateService:(state,action)=>{
          const index = state.services.findIndex(x=>x.id === action.payload.id)
          state.services[index] = {
            id:action.payload.id,
            title:action.payload.title,
            para:action.payload.para,
            logo: action.payload.logo
           }
        },
        deleteService:(state,action)=>{
            const id = action.payload.id;
            state.services = state.services.filter(s=>s.id!==id)
        }
        
    }
})
export const {getServices,addService,updateService,deleteService} = serviceSlice.actions
export default serviceSlice.reducer
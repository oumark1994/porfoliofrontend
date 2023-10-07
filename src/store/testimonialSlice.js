import { createSlice } from "@reduxjs/toolkit";

const testimonialSlice = createSlice({
    name:'testimonials',
    initialState:{
        testimonials:[]
    },
    reducers:{
        getTestimonials:(state,action)=>{
            state.testimonials = action.payload.map(t=>{
                return {id:t._id,name:t.name,review:t.review,image:t.image}
            })
        },
        addTestimonial:(state,action)=>{
            state.testimonials.push(action.payload)
        },
        updateTestimonial:(state,action)=>{
          const index = state.testimonials.findIndex(x=>x.id === action.payload.id)
          state.testimonials[index] = {
            id:action.payload.id,
            name:action.payload.name,
            review:action.payload.review,
            image: action.payload.image
           }
        },
        deleteTestimonial:(state,action)=>{
            const id = action.payload.id;
            state.testimonials = state.testimonials.filter(s=>s.id!==id)
        }
        
    }
})
export const {getTestimonials,addTestimonial,updateTestimonial,deleteTestimonial} = testimonialSlice.actions
export default testimonialSlice.reducer
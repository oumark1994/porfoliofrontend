import {configureStore} from "@reduxjs/toolkit"
import heroReducer from "./heroSlice"
import skillSlice from "./skillSlice"
import projectSlice from "./projectSlice"
import serviceSlice from "./serviceSlice"
import testimonialSlice from "./testimonialSlice"

export default configureStore({
    reducer:{
     heroes:heroReducer,
     skills:skillSlice,
     projects:projectSlice,
     services:serviceSlice,
     testimonials:testimonialSlice
    }
})
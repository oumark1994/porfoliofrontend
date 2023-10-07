import { createSlice } from "@reduxjs/toolkit";

const heroSlice = createSlice({
    name:'heroes',
    initialState:{
        heroes:[]
    },
    reducers:{
        gethero:(state,action)=>{
            state.heroes = action.payload.map(hero=>{
                return {id:hero._id,btnText:hero.btnText,count1:hero.count1,count2:hero.count2,text1:hero.text1,text2:hero.text2,title:hero.title,firstname:hero.firstname,lastname:hero.lastname,image:hero.image}
            })
        },
        addHero:(state,action)=>{
            state.heroes.push(action.payload)
        },
        updateHero:(state,action)=>{
          const index = state.heroes.findIndex(x=>x.id === action.payload.id)
          state.heroes[index] = {
            id:action.payload.id,
            firstname:action.payload.firstname,
            lastname:action.payload.lastname,
           btnText: action.payload.btnText,
           text1: action.payload.text1,
           text2: action.payload.text2,
           count1: action.payload.count1,
           count2: action.payload.count2,
           image:action.payload.image
          }
        },
        deletehero:(state,action)=>{
            const id = action.payload.id;
            state.heroes = state.heroes.filter(h=>h.id!==id)
        }
        
    }
})
export const {gethero,addHero,updateHero,deletehero} = heroSlice.actions
export default heroSlice.reducer
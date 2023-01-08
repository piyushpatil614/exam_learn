import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: [],
  }

  export const quizSlice=createSlice({
    name:'quiz',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.value.push(action.payload)
        },
        remove:(state,action)=>{
           let i= state.value.indexOf(action.payload)
            state.value.slice(i,1)      
        }
    }
  })

  export const {add,remove}=quizSlice.actions;
  export default quizSlice.reducer
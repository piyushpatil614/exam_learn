import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: [],
    quizData:[]
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
            state.value.splice(i,1)      
        },
        addquestion:(state,action)=>{
            state.quizData.push(action.payload)
        },
        removequestion:(state,action)=>{
            let i= state.value.indexOf(action.payload)
             state.quizData.splice(i,1)      
         },
        
    }
  })

  export const {add,remove,addquestion,removequestion}=quizSlice.actions;
  export default quizSlice.reducer
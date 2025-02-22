import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const codeSlice = createSlice({
    name:'code',
    initialState:{
        input:null,
        output:null,
       
    },
    reducers:{
        getInput:(state,action)=>{
            state.code = action.payload
        },
        getOutput:(state,action)=>{
            state.output = action.payload
        },


        getRefresh:(state)=>{
            state.refresh = !state.refresh
        }
        ,
        getisActive:(state,action)=>{
            state.isActive = action.payload
        }
        
    }
   
})

export const { getInput ,getOutput, getRefresh , getisActive } = codeSlice.actions
export default codeSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"User",
    initialState:{
        user:null,
        
    },



reducers:{
    getUser:(state,action)=>{
        state.user = action.payload
    },
   
   
}})

export const { getUser} = userSlice.actions
export default userSlice.reducer


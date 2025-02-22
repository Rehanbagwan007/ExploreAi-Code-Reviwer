import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { useSelector } from 'react-redux';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { getInput, getOutput } from '../redux/codeSlice';
import { GENARATIVE_AI } from '../utils/constant';

export const Navbar = () => {
 

 const {code,output} = useSelector(store => store.code)
 const dispatch = useDispatch()


      
 const submitHandler =  async ()=>{

try{
  const res = await axios.post(`${GENARATIVE_AI}/api/v1/Explore/get-response`, {code:code},{
    headers:{
      'Content-Type':"application/json"
    },
    withCredentials:true
  }) 
   if(res?.data){
    dispatch(getOutput(res?.data))
   }


}catch(err){
console.log(err)

}


 }


 const ClearHandler =  ()=>{
  dispatch(getInput(null))
  dispatch(getOutput(null))


 }


  return (
    <>
    <div className='h-full w-[100%] 
 flex flex-row items-center justify-between '>

         <div className='flex w-auto h-auto flex-row items-end gap-0.5'>
        <div className='text-3xl font-bold bg-gradient-to-r from-[#7E30E1] to-[#FF3CAC] bg-clip-text text-transparent'>Explore.Ai</div> 
        </div>
        <div className=""><button onClick={()=>submitHandler()} className='bg-gradient-to-r from-[#7E30E1] to-[#FF3CAC] px-6 py-1 rounded flex gap-1 items-center text-white'><FaPlay/><span>Review</span></button></div>
    
    <div>
      <button onClick={()=>ClearHandler()} className='bg-gradient-to-r from-[#7E30E1] to-[#FF3CAC] text-white px-6 py-1 rounded mr-7'>Clear</button>
    </div>
    </div></>
  )
}

//bg-gradient-to-r from-[#7E30E1] to-[#FF3CAC]


//bg-gradient-to-r from-[#7E30E1] to-[#FF3CAC

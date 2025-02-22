import React from 'react'
import { Input } from './input'
import { Output } from './output'
import { Navbar } from './Navbar'

export const Home = () => {
  return (
    <>
  <div className='h-[40px] w-full flex justify-center items-center'>
    <Navbar/>
  </div>

    <div className='w-full md:h-[90%] h-full flex md:flex-row flex-col '>
   
     <Input/>
      
      
          
   
      <Output/>

    </div>
    <div className='md:none bg-gradient-to-r from-[#7E30E1] to-[#FF3CAC]'></div>
   
    </>
  )
}

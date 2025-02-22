import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { Navbar } from "./Navbar";
import { useDispatch, useSelector } from 'react-redux'
import {  getInput } from "../redux/codeSlice";

export const Input = () => {
  const [code, setCode] = useState(``);
  const dispatch = useDispatch()


 
  useEffect(()=>{
     dispatch(getInput(code))
  },[code])


   
  

  return (
    <div className="w-full h-[50%] md:w-[50%] md:h-full flex items-center justify-center">
      <div className="code w-[98%] h-[98%] ">
        <Editor
          height="100%"
          width="100%"
          defaultLanguage="javascript"
          value={code}
          theme="hc-black" // Applying the custom theme
          className="rounded-3xl"
          onChange={(value) => setCode(value)}
        />
      </div>
    </div>
    
  );
};

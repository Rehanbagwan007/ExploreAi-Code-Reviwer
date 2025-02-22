import React from "react";
import { useSelector } from "react-redux";
import MDEditor from "@uiw/react-md-editor";
import '../src/App.css'


export const Output = () => {
  const { output } = useSelector((store) => store.code);

  return (
    <div className="bg-[#000000] mr-2 md:w-[50%] w-full md:h-full h-[50%] flex items-center justify-center">
      <div className="md:w-[98%] bg-[#000000] w-[98%] h-[98%] overflow-x-scroll overflow-y-scroll p-4">
        
        {!output ? (
          <div className="text-white">No output yet...</div>
        ) : (
         <MDEditor.Markdown 
           source={`\`\`\`javascript\n${output}\n\`\`\``} 
          style={{ backgroundColor: "#000000", color: "white", padding: "10px", borderRadius: "8px" }} 
          className="me-editor"
         />
       )}

        {/* Typing Effect */}
        
      </div>
    </div>
  );
};

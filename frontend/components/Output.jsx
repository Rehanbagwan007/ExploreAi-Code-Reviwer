import React from "react";
import { useSelector } from "react-redux";
import MDEditor from "@uiw/react-md-editor";


export const Output = () => {
  const { output } = useSelector((store) => store.code);

  return (
    <div className="bg-[#1e1e1e] mr-2 md:w-[50%] w-full md:h-full h-[50%] flex items-center justify-center">
      <div className="md:w-[98%] bg-[#1e1e1e] w-[98%] h-[98%] overflow-x-scroll overflow-y-scroll p-4">
        
        {!output ? (
          <div className="text-white">No output yet...</div>
        ) : (
         <MDEditor.Markdown 
           source={`\`\`\`javascript\n${output}\n\`\`\``} 
          style={{ backgroundColor: "#282C34", color: "white", padding: "10px", borderRadius: "8px" }} 
         />
       )}

        {/* Typing Effect */}
        
      </div>
    </div>
  );
};

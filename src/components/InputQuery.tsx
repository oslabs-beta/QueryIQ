import React from "react";
import { useState } from "react";

//child of QueryContainer
//includes input field and submit button
//query string will be submitted into input field, send triggered by button
//request is routed

const InputQuery: React.FC = () => {
    //useState for loading bar 
    const [loadingProgress, setLoadingProgress] = useState(0);

    //hanleClick for loading bar

    const handleGoClick = () => {
        setLoadingProgress(100);
      };

return (
    <>
    <div className = " flex flex-col items-center justify-center w-7/12">
        <div className= "w-full">
        <input className = "w-full my-1 rounded-md shadow-xl" placeholder="Input Query Here..."/>
        {/* <button>GO</button> */}

    </div>
    <button className="my-2 rounded-lg border border-gray-900 p-1 bg-indigo-500 text-gray-900 hover:bg-gray-900 hover:text-indigo-500 shadow-xl" onClick ={handleGoClick}> GO </button>
    
    {/* loading bar */}
    <div className="w-full my-1 bg-gray-200 rounded-full dark:bg-gray-700">
    <div className="transition-all ease-out duration-1000 bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"  style={{ width: `${loadingProgress}%` }} > {loadingProgress}%</div>
  </div>
  
  </div>
    </>
    



);
};

export default InputQuery;

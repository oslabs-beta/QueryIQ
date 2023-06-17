import React from "react";
import { useState } from "react";

//child of QueryContainer
//includes input field and submit button
//query string will be submitted into input field, send triggered by button
//request is routed

const InputQuery: React.FC = () => {
  //useState for loading bar
  const [loadingProgress, setLoadingProgress] = useState(0);

  //handleClick for loading bar
  const handleGoClick = () => {
    setLoadingProgress(100);
  };

  return (
    <>
      <div className=" flex w-7/12 flex-col items-center justify-center">
        <div className="w-full">
          <input
            className="my-1 w-full rounded-md shadow-xl"
            placeholder="Input Query Here..."
          />
          {/* <button>GO</button> */}
        </div>
        <button
          className="my-2 rounded-lg border border-gray-900 bg-indigo-500 p-1 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
          onClick={handleGoClick}
        >
          {" "}
          GO{" "}
        </button>

        {/* loading bar */}
        <div className="my-1 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="rounded-full bg-blue-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100 transition-all duration-1000 ease-out"
            style={{ width: `${loadingProgress}%` }}
          >
            {" "}
            {loadingProgress}%
          </div>
        </div>
      </div>
    </>
  );
};

export default InputQuery;
import React from "react";

//child of QueryContainer
//includes input field and submit button
//query string will be submitted into input field, send triggered by button
//request is routed

const InputQuery: React.FC = () => {
  return (
    <>
      <div className="w-5/12  ">
        <input className="w-full" placeholder="Input Query...">
          {/* <button>GO</button> */}
        </input>
      </div>
      <button className="border border-gray-900">GO</button>
    </>
  );
};

export default InputQuery;

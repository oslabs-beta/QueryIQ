import React from "react";
import { useState } from "react";

//child of QueryContainer
//includes input field and submit button
//query string will be submitted into input field, send triggered by button
//request is routed

interface InputQueryProps {
  setQueryLog: React.Dispatch<
    React.SetStateAction<Array<{ query: string; data?: object; name?: string }>>
  >;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  query: string;
}

const InputQuery: React.FC<InputQueryProps> = ({
  setQueryLog,
  setQuery,
  query,
}) => {
  //useState for loading bar
  const [loadingProgress, setLoadingProgress] = useState(0);

  //handleClick for loading bar
  const handleGoClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingProgress(100);
    setQueryLog((prevQueryLog) => [...prevQueryLog, { query: query }]);
    setQuery("");
  };

  return (
    <>
      <div className=" flex w-7/12 flex-col items-center justify-center">
        <form onSubmit={handleGoClick} className="flex w-full items-center justify-center flex-col">
          <input
            className="my-1 w-full rounded-md shadow-xl p-1"
            placeholder="Input Query Here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            disabled={!query}
            className="my-2 w-24 rounded-lg border border-gray-900 bg-indigo-500 p-1 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
          >
            GO
          </button>
        </form>

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

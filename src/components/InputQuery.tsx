import React from "react";
import { useState, useEffect } from "react";
import LoadingBar from "./LoadingBar";
import type { QueryLogItemObject } from "~/types/types";

interface InputQueryProps {
  setQueryLog: React.Dispatch<
    React.SetStateAction<Array<{ query: string; data: object; name: string }>>
  >;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  query: string;
  setActiveQuery: React.Dispatch<React.SetStateAction<QueryLogItemObject>>;
}

const InputQuery: React.FC<InputQueryProps> = ({
  setQueryLog,
  setQuery,
  query,
  setActiveQuery,
}) => {
  //useState for loading bar
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const asyncLoadingSim = (): Promise<void> => {
    setIsLoading(true);
    setLoadingProgress(0);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setLoadingProgress(100);
        setTimeout(() => {
          setIsLoading(false);
          resolve();
        }, 900);
      }, 100);
    });
  };

  const handleGoClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await asyncLoadingSim();
    setQueryLog((prevQueryLog) => [
      ...prevQueryLog,
      { query: query, data: {}, name: "" },
    ]);
    setQuery("");
  };

  return (
    <>
      <div className=" flex w-7/12 flex-col items-center justify-center">
        <form
          onSubmit={handleGoClick}
          className="flex w-full flex-col items-center justify-center"
        >
          <input
            className="my-1 w-full rounded-md p-1 shadow-xl"
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

        {!isLoading ? <></> : <LoadingBar loadingProgress={loadingProgress} />}
      </div>
    </>
  );
};

export default InputQuery;

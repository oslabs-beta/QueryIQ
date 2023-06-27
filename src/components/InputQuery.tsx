import React from 'react';
import { useState } from 'react';
import LoadingBar from './LoadingBar';
import type { InputQueryProps } from '~/types/types';

const InputQuery: React.FC<InputQueryProps> = ({
  setQueryLog,
  setQuery,
  query,
  setActiveQuery,
  setDashboardState,
  setQueryGraphs,
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

  const handleGoClick = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    await asyncLoadingSim();
    const newQuery = { query: query, data: [], name: '' };
    setQueryLog((prevQueryLog) => [...prevQueryLog, newQuery]);
    setQuery('');
    setActiveQuery(newQuery);
    // hardcoded query results from: SELECT SUM(Payment.amount) AS sum_amt FROM payment
    setQueryGraphs([
      'http://localhost:3000/d-solo/InputQueryExample/testinputqueryexample?orgId=1&from=1687802712822&to=1687824312822&panelId=2',
      'http://localhost:3000/d-solo/InputQueryExample/testinputqueryexample?orgId=1&from=1687802730181&to=1687824330181&panelId=3',
      'http://localhost:3000/d-solo/InputQueryExample/testinputqueryexample?orgId=1&from=1687802741315&to=1687824341315&panelId=4',
    ]);
    setDashboardState('query');
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

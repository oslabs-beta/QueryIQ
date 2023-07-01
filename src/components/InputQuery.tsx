import React from 'react';
import { useState } from 'react';
import LoadingBar from './LoadingBar';
import type { InputQueryProps, GrafanaUserObject, QueryLogItemObject } from '~/types/types';
import {useMutation} from 'react-query';

const InputQuery: React.FC<InputQueryProps> = ({
  setQueryLog,
  setQuery,
  query,
  setActiveQuery,
  setDashboardState,
  setQueryGraphs,
  grafanaUser,
  dbUid,
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

  // grafanaUser passed down from mainContainer should contain a user's Grafana credentials after connection to a database is established.
  // and dbUid passed down from mainContainer should be a string of the datasource uid

  /**
   * shape of object:
   *  grafanaUser = {
   *   graf_name: string;
   *   graf_pass: string;
   *   graf_port: string;
   *  }
  */ 


    //KT's code for fetching POST for the input query dashboard to Grafana
  //use mutation from react query to fetch a post request to send api to create dashboard for input query

  //request body:
// {"query":"SELECT SUM(Payment.amount) AS sum_amt FROM payment;",
// "GrafanaCredentials":
// {"graf_name":"admin",
// "graf_port":"3000",
// "graf_pass":"Codesmith23*"},
// "datasourceUID":"c4c87f1f-afa8-41a2-9744-7c3d9d9fe2e0"}

  const mutationQuery = useMutation(async ({query, dbUid, grafanaUser}: {query: string, dbUid: string, grafanaUser: GrafanaUserObject}) => {
    
    const apiUrl = 'http://localhost:3001/api/query';
    //deconstruct query for the request response
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        //might not need this if this is already in the controller?
        Authorization: `Basic ${Buffer.from(`${grafanaUser.graf_name}:${grafanaUser.graf_pass}`).toString('base64')}`,
      },
      body: JSON.stringify({
        query: query,
        GrafanaCredentials: {
          graf_name: grafanaUser.graf_name,
          graf_port: grafanaUser.graf_port,
          graf_pass: grafanaUser.graf_pass,
        },
        datasourceUID: dbUid,
      }),
    });
    // If response is less than 200 or greater than 300
    // Basically, if response is NOT 200-299
    if (response.status <= 199 && response.status >= 300) {
      throw new Error('Failed to connect'); // Handle error
    }
    return response.json();
  });

  const handleGoClick = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await mutationQuery.mutateAsync({
        query,
        dbUid,
        grafanaUser,
      }) as void | {slug: string, uid: string, status: number, iFrames: string[]};
      await asyncLoadingSim();
      console.log('THIS IS RESPONSE', response);
      const { iFrames } = response;
      const newQuery : QueryLogItemObject = { query: query, data: iFrames, name: '' };
      setQueryLog((prevQueryLog) => [...prevQueryLog, newQuery]);
      setQuery('');
      setActiveQuery(newQuery);
      setQueryGraphs(newQuery.data);
      setDashboardState('query');
    } catch (error) {
      console.error(error);
    }
  };

   // hardcoded query results from: SELECT SUM(Payment.amount) AS sum_amt FROM payment
    // setQueryGraphs([
    //   'http://localhost:3000/d-solo/InputQueryExample/testinputqueryexample?orgId=1&from=1687802712822&to=1687824312822&panelId=2',
    //   'http://localhost:3000/d-solo/InputQueryExample/testinputqueryexample?orgId=1&from=1687802730181&to=1687824330181&panelId=3',
    //   'http://localhost:3000/d-solo/InputQueryExample/testinputqueryexample?orgId=1&from=1687802741315&to=1687824341315&panelId=4',
    // ]);

  if (mutationQuery.isLoading) {
    return <div>Loading...</div>;
  }

  //if post request fails to fetch
  if (mutationQuery.error) {
    return <div>Error: {mutationQuery.error.message}</div>;
  }

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

import React from 'react';
import { useState } from 'react';
import LoadingBar from './LoadingBar';
import type {
  InputQueryProps,
  GrafanaUserObject,
  QueryLogItemObject,
  dbUid,
} from '~/types/types';
import { useMutation } from 'react-query';

const InputQuery: React.FC<InputQueryProps> = ({
  setQueryLog,
  setQuery,
  query,
  setActiveQuery,
  setDashboardState,
  grafanaUser,
  dbUid,
  connection,
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

  //KT's code for fetching POST for the input query dashboard to Grafana
  //use mutation from react query to fetch a post request to send api to create dashboard for input query

  const mutationQuery = useMutation(
    async ({
      query,
      dbUid,
      grafanaUser,
    } : {
      query: string,
      dbUid: dbUid,
      grafanaUser: GrafanaUserObject,
    }) => {
      const apiUrl = 'http://localhost:3001/api/query';
      //deconstruct query for the request response
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query,
          GrafanaCredentials: {
            graf_name: grafanaUser.graf_name,
            graf_port: grafanaUser.graf_port,
            graf_pass: grafanaUser.graf_pass,
          },
          datasourceUID: dbUid.datasourceUid,
        }),
      });
      // If response is less than 200 or greater than 300
      // Basically, if response is NOT 200-299
      if (response.status <= 199 && response.status >= 300) {
        throw new Error('Failed to connect'); // Handle error
      }
      return response.json();
    }
  );

  const handleGoClick = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = (await mutationQuery.mutateAsync({
        query,
        dbUid,
        grafanaUser,
      })) as void | {
        slug: string;
        uid: string;
        status: number;
        iFrames: string[];
      };
      await asyncLoadingSim();
      const { iFrames, uid } = response;
      const newQuery: QueryLogItemObject = {
        query: query,
        data: iFrames,
        name: '',
        dashboardUID: uid,
      };
      setQueryLog((prevQueryLog) => [...prevQueryLog, newQuery]);
      setQuery('');
      setActiveQuery(newQuery);
      setDashboardState('query');
    } catch (error) {
      console.error(error);
    }
  };
  // TO DO: want to move this conditional to the return statement and plug in our loading bar component
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
            disabled={!query || !connection}
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

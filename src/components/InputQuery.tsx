import React from 'react';
import { useState } from 'react';
import LoadingBar from './LoadingBar';
import Popup from './Popup';
import type {
  InputQueryProps,
  GrafanaUserObject,
  QueryLogItemObject,
  dbUid,
} from '~/types/types';
import { useMutation } from 'react-query';
import { BsKeyboard, BsArrowRightCircleFill } from 'react-icons/bs';

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
    }: {
      query: string;
      dbUid: dbUid;
      grafanaUser: GrafanaUserObject;
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
  //if post request is still loading
  if (mutationQuery.isLoading) {
    return <Popup text="Loading..." />;
  }

  // //if post request fails to fetch
  if (mutationQuery.error) {
    return <Popup text={mutationQuery.error.message} />;
  }

  return (
    <>
      <div className=" flex w-full flex-col items-center justify-center">
        <form
          onSubmit={handleGoClick}
          className=" flex flex-col w-full items-center justify-center"
        >
          <div className="relative w-full">
            <textarea

              className=" px-2 py-1 my-1 rounded-md py-1 text-lg shadow-xl w-full"
              placeholder="Enter your query here.."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 transform">
              {/* <BsKeyboard />{' '} */}
            </span>
          </div>
          <button
            type="submit"
            disabled={!query || !connection}
            className="w-30 my-2 flex items-center rounded-sm justify-center ring ring-2 ring-slate-50 bg-slate-600 px-8 py-2 text-1xl font-bold tracking-widest text-slate-100 shadow-xl hover:text-slate-100 hover:bg-slate-700 hover:transform hover:scale-105"
          >
            <span>Submit</span>
            <span className=" ml-2">
              <BsArrowRightCircleFill className="text-xl" />
            </span>
          </button>
        </form>

        {!isLoading ? <></> : <LoadingBar loadingProgress={loadingProgress} />}
      </div>
    </>
  );
};

export default InputQuery;

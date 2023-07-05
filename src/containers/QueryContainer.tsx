import React from 'react';
import DashboardContainer from './DashboardContainer';
import InputQuery from '../components/InputQuery';
import type { QueryContainerProps } from '~/types/types';

//Container is for input query and render the graphs on Dashboard Container if input query is processed successfully

const QueryContainer: React.FC<QueryContainerProps> = ({
  setQueryLog,
  setQuery,
  query,
  setActiveQuery,
  activeQuery,
  dashboardState,
  setDashboardState,
  databaseGraphs,
  connection,
  grafanaUser,
  dbUid,
}) => {
  return (
    <div className="flex h-auto w-full flex-col justify-between space-y-28 sm:space-y-16 md:h-auto md:w-10/12 md:space-y-8">
      <div className="h-1/6 flex-none p-4 ">
        <div className="flex justify-center">
          <InputQuery
            setQueryLog={setQueryLog}
            setQuery={setQuery}
            query={query}
            activeQuery={activeQuery}
            setActiveQuery={setActiveQuery}
            setDashboardState={setDashboardState}
            grafanaUser={grafanaUser}
            dbUid={dbUid}
            connection={connection}
          />
        </div>
      </div>
      <div className="flex-grow ">
        <DashboardContainer
          activeQuery={activeQuery}
          dashboardState={dashboardState}
          setDashboardState={setDashboardState}
          databaseGraphs={databaseGraphs}
          connection={connection}
        />
      </div>
    </div>
  );
};

export default QueryContainer;

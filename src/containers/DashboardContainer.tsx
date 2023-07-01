import React from 'react';
import type { DashboardContainerProps } from '~/types/types';
import GraphCard from '~/components/Graphs/GraphCard';

// Will render same test graphs for query as the test db metrics at the moment, can be replaced with query graphs when implemented.

const DashboardContainer: React.FC<DashboardContainerProps> = ({
  testConnected,
  activeQuery,
  dashboardState,
  setDashboardState,
  databaseGraphs,
  connection,
}) => {
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-around p-4">
      <div className="mb-8 mt-9 flex h-1/4 w-full flex-col items-center justify-start overflow-y-auto rounded-lg border border-gray-900 shadow-xl md:h-1/4">
        <div className="flex w-full">
          <span
            className={`w-6/12 border-black p-1 text-center text-indigo-300 hover:bg-indigo-800 ${
              dashboardState === 'database' ? 'bg-indigo-900' : 'bg-gray-900'
            }`}
            onClick={() => setDashboardState('database')}
          >
            Database Health Metrics
          </span>
          <span
            className={`w-6/12 border-black p-1 text-center text-indigo-300 hover:bg-indigo-800 ${
              dashboardState === 'query' ? 'bg-indigo-900' : 'bg-gray-900'
            }`}
            onClick={() => setDashboardState('query')}
          >
            Active Query
          </span>
        </div>
        {dashboardState === 'database' ? (
          <div className="flex h-full w-full flex-col items-center overflow-y-auto bg-gray-800 p-4 text-indigo-300 md:h-96">
            {!connection ? (
              <></>
            ) : (
              <>
                {databaseGraphs.map((src, index) => {
                  return <GraphCard key={index} src={src}></GraphCard>;
                })}
              </>
            )}
            {!testConnected ? (
              <></>
            ) : (
              <>
                {databaseGraphs.map((src, index) => {
                  return <GraphCard key={index} src={src}></GraphCard>;
                })}
              </>
            )}
          </div>
        ) : dashboardState === 'query' ? (
          <div className="h-96 w-full overflow-y-auto bg-gray-800 p-4 text-left text-indigo-300">
            <div className="h-24 w-full overflow-y-auto rounded-lg border-black bg-gray-600 p-4 text-left text-indigo-300">
              {activeQuery.query}
            </div>
            <div className="flex h-full w-full flex-col items-center bg-gray-800 p-4 text-indigo-300 md:h-96">
              {activeQuery.data.map((src, index) => {
                return <GraphCard key={index} src={src}></GraphCard>;
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DashboardContainer;

import React from 'react';
import GraphCard from '~/components/GraphCard';
import type { DashboardContainerProps } from '~/types/types';
import { GiHealthNormal } from 'react-icons/gi';
import { AiOutlineLineChart } from 'react-icons/ai';

const DashboardContainer: React.FC<DashboardContainerProps> = ({
  activeQuery,
  dashboardState,
  setDashboardState,
  databaseGraphs,
  connection,
}) => {
  return (
    <div className="flex h-[77%] w-full flex-wrap items-center justify-around px-6">
      <div className="flex h-full w-full flex-col items-center justify-start overflow-y-auto rounded-md border border-slate-600  shadow-xl md:h-full">
        <div className="flex w-full">
          <span
            className={`flex w-6/12  items-center justify-center border border-slate-600 p-1 text-center text-gray-100 hover:bg-slate-700 ${
              dashboardState === 'database' ? 'bg-slate-500' : 'bg-gray-800'
            }`}
            onClick={() => setDashboardState('database')}
          >
            <span className="mr-2">
              <GiHealthNormal />
            </span>
            Database Health Metrics
          </span>
          <span
            className={`flex w-6/12  items-center justify-center border border-slate-600 p-1 text-center text-gray-100 hover:bg-slate-700 ${
              dashboardState === 'query' ? 'bg-slate-500' : 'bg-gray-800'
            }`}
            onClick={() => setDashboardState('query')}
          >
            <span className="mr-2">
              <AiOutlineLineChart />
            </span>
            Active Query
          </span>
        </div>
        {dashboardState === 'database' ? (
          <div className="flex h-auto w-full flex-wrap justify-center gap-x-4 overflow-y-auto bg-slate-950 p-4 text-gray-200  md:h-full">
            {!connection ? (
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
          <div className="flex h-auto w-full flex-wrap justify-center gap-x-4 overflow-y-auto bg-slate-950 p-4 text-gray-200  md:h-full">
            <div className="h-24 w-full overflow-y-auto rounded-lg border border-slate-600 bg-slate-600 p-4 text-left text-gray-200">
              {activeQuery.query}
            </div>
            <div className="flex h-auto w-full flex-col items-center bg-slate-950 p-4 text-gray-200 md:h-full">
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

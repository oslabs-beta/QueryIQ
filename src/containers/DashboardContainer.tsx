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
    <div className="flex h-full w-full flex-wrap items-center justify-around outline-red p-6">
      <div className="mb-8 mt-5 flex h-1/4 w-full flex-col items-center justify-start overflow-y-auto rounded-md outline-yellow border border-slate-600  shadow-xl md:h-1/4 ">
        <div className="flex w-full">
          <span
            className={`flex w-6/12  items-center justify-center border border-slate-600 p-1 text-center text-gray-100 hover:bg-slate-700 ${
              dashboardState === 'database' ? 'bg-gray-800' : 'bg-slate-500'
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
              dashboardState === 'query' ? 'bg-gray-800' : 'bg-slate-500'
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
          <div className="flex h-full w-full flex-col items-center overflow-y-auto bg-slate-950 p-4 text-gray-200 md:h-96 ">
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
          <div className="h-96 w-full overflow-y-auto  bg-slate-950 p-4 text-left text-gray-200">
            <div className="h-24 w-full overflow-y-auto rounded-lg border border-slate-600 bg-slate-600 p-4 text-left text-gray-200">
              {activeQuery.query}
            </div>
            <div className="flex h-full w-full flex-col items-center bg-slate-950 p-4 text-gray-200 md:h-96">
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

import React from 'react';
import LineChart3 from '~/components/Graphs/LineChart3';
import PieChart from '~/components/Graphs/PieChart';
import LineChart from '~/components/Graphs/LineChart';
import LineChart2 from '~/components/Graphs/LineChart2';
import PieChart2 from '~/components/Graphs/PieChart2';
import PieChart3 from '~/components/Graphs/PieChart3';
import type { DashboardContainerProps } from '~/types/types';

const DashboardContainer: React.FC<DashboardContainerProps> = ({
  testConnected,
  activeQuery,
  dashboardState,
  setDashboardState,
}) => {
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-around p-4">
      <div className="mb-8 mt-9 flex h-1/4 w-full flex-col items-center justify-start overflow-y-auto rounded-lg border border-gray-900 shadow-xl md:h-1/4">
        <div className="w-full flex">
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
          <div className="flex h-auto w-full flex-col  items-center bg-gray-800 p-4 text-indigo-300">
            {!testConnected ? (
              <></>
            ) : (
              <>
                <LineChart3 />
                <PieChart />
                <LineChart />
                <LineChart2 />
                <PieChart2 />
                <PieChart3 />
              </>
            )}
          </div>
        ) : dashboardState === 'query' ? (
          <div className="h-24 w-full overflow-y-auto bg-gray-800 p-4 text-left text-indigo-300">
            {activeQuery.query}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DashboardContainer;

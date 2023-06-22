import React from "react";
import LineChart3 from "~/components/Graphs/LineChart3";
import PieChart from "~/components/Graphs/PieChart";
import LineChart from "~/components/Graphs/LineChart";
import LineChart2 from "~/components/Graphs/LineChart2";
import PieChart2 from "~/components/Graphs/PieChart2";
import PieChart3 from "~/components/Graphs/PieChart3";
import type { QueryLogItemObject } from "~/types/types";

interface DashboardContainerProps {
  testConnected: boolean;
  activeQuery: QueryLogItemObject;
}
//child of Query container
//used for rendering graphs for database performance metrics
const DashboardContainer: React.FC<DashboardContainerProps> = ({
  testConnected,
  activeQuery,
}) => {
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-around  p-4">
      <div className="mb-8 mt-9 flex h-1/4 w-full flex-col items-center justify-start overflow-y-auto rounded-lg border border-gray-900 shadow-xl md:h-1/4">
        <span className="w-full border-black bg-gray-900 p-1 text-center text-indigo-300">
          Active Query
        </span>
        <div className="h-24 w-full overflow-y-auto bg-gray-800 p-4 text-left text-indigo-300 ">
          {activeQuery.query}
        </div>
      </div>

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
      <></>
    </div>
  );
};

export default DashboardContainer;

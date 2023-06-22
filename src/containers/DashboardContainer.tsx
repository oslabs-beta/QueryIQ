import React from "react";
import LineChart3 from "~/components/Graphs/LineChart3";
import PieChart from "~/components/Graphs/PieChart";
import LineChart from "~/components/Graphs/LineChart";
import LineChart2 from "~/components/Graphs/LineChart2";
import PieChart2 from "~/components/Graphs/PieChart2";
import PieChart3 from "~/components/Graphs/PieChart3";

interface DashboardContainerProps { 
  testConnected: boolean;
}
//child of Query container
//used for rendering graphs for database performance metrics
const DashboardContainer: React.FC<DashboardContainerProps> = ({
  testConnected,
}) => {
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-around bg-blue-700 p-4">
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
        <>

        </>

    </div>
  );
};

export default DashboardContainer;

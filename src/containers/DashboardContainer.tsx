import React from "react";
import LineChart3 from "~/components/LineChart3";
import PieChart from "~/components/PieChart";
import LineChart from "~/components/LineChart";
import LineChart2 from "~/components/LineChart2";
import PieChart2 from "~/components/PieChart2";
import PieChart3 from "~/components/PitChart3";
//child of Query container
//used for rendering graphs for database performance metrics
const DashboardContainer: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-around bg-blue-700 p-4">
      {/* <LineChart3 />
      <PieChart />
      <LineChart />
      <LineChart2 />
      <PieChart2 />
      <PieChart3 /> */}

    </div>
  );
};

export default DashboardContainer;

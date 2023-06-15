import React from "react";
import GraphCard from "~/components/GraphCard";

//child of Query container 
//used for rendering graphs for database performance metrics
const DashboardContainer: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-around items-center h-full w-full bg-blue-700 p-4">
      <GraphCard/>
      <GraphCard/>
      <GraphCard/>
      <GraphCard/>
    </div>
  );
};

export default DashboardContainer;

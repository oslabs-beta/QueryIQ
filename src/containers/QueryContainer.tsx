import React from "react";
import DashboardContainer from "./DashboardContainer";

const QueryContainer: React.FC = () => {
  return (
    <div className="flex-col bg-pink-600 w-10/12 flex justify-between">
      <div className="flex-none h-2/6">
        {/* Other content */}
      </div>
      <div className="flex-grow">
        <DashboardContainer />
      </div>
    </div>
  )
};

export default QueryContainer;

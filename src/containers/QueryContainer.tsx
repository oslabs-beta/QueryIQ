import React from "react";
import DashboardContainer from "./DashboardContainer";

const QueryContainer: React.FC = () => {
  return (
    <div className="flex w-10/12 flex-col justify-between bg-pink-600">
      <div className="h-2/6 flex-none">{/* Other content */}</div>
      <div className="flex-grow">
        <DashboardContainer />
      </div>
    </div>
  );
};

export default QueryContainer;

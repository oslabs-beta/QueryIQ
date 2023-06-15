import React from "react";
import DashboardContainer from "./DashboardContainer";

const QueryContainer: React.FC = () => {
  return (
    <div className="flex h-5/6 w-full flex-col justify-between bg-pink-600 md:h-full md:w-10/12">
      <div className="h-1/6 flex-none">{/* Other content */}</div>
      <div className="flex-grow">
        <DashboardContainer />
      </div>
    </div>
  );
};

export default QueryContainer;

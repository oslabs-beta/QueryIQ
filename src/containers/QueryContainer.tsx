import React from "react";
import DashboardContainer from "./DashboardContainer";
import InputQuery from "../components/InputQuery";

//Container is for input query and render the graphs on Dashboard Container if input query is processed successfully

const QueryContainer: React.FC = () => {
  return (
    <div className="flex h-5/6 w-full flex-col justify-between bg-pink-600 md:h-full md:w-10/12">
      <div className="h-1/6 flex-none border-4 ">
        {/* Other content */}
        <div className="flex items-center justify-center  border-4 border-yellow-200 ">
          <InputQuery />
        </div>
      </div>
      <div className="flex-grow ">
        <DashboardContainer />
      </div>
    </div>
  );
};

export default QueryContainer;

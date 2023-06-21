import React from "react";
import DashboardContainer from "./DashboardContainer";
import InputQuery from "../components/InputQuery";

interface QueryContainerProps {
  setQueryLog: React.Dispatch<
    React.SetStateAction<Array<{ query: string; data?: object }>>
  >;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  query: string;
}

//Container is for input query and render the graphs on Dashboard Container if input query is processed successfully

const QueryContainer: React.FC<QueryContainerProps> = ({
  setQueryLog,
  setQuery,
  query,
}) => {
  return (
    <div className="flex h-5/6 w-full flex-col justify-between bg-pink-600 md:h-full md:w-10/12">
      <div className="h-1/6 flex-none p-4">
        {/* Other content */}
        <div className="flex justify-center p-2">
          <InputQuery
            setQueryLog={setQueryLog}
            setQuery={setQuery}
            query={query}
          />
        </div>
      </div>
      <div className="flex-grow ">
        <DashboardContainer />
      </div>
    </div>
  );
};

export default QueryContainer;

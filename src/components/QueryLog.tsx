import React from "react";

interface QueryLogProps {
  queryLog: { query: string; data?: object }[];
}

const QueryLog: React.FC<QueryLogProps> = ({ queryLog }) => {
  // const queryArray = Array.from({ length: 16 }, (_, index) => index + 1);

  return (
    <div className="my-8 flex h-36 w-11/12 flex-col items-center justify-start overflow-y-auto rounded-lg border border-gray-900 shadow-xl md:h-96">
      <span className="w-full border-black bg-gray-900 p-1 text-center text-indigo-300">
        Query Log
      </span>
      <div className="h-full w-full overflow-y-auto bg-gray-800">
        <ul className="w-full">
          {queryLog.map((query, index) => (
            <li key={index}>
              <button className="w-full border-b border-t border-black bg-gray-800 p-4 text-left text-indigo-300 hover:bg-gray-900">
                Query {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QueryLog;

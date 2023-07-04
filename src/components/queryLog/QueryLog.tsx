import React from 'react';
// import { useState } from "react";
import QueryLogItem from './QueryLogItem';
import type { QueryLogProps } from '~/types/types';
import { BsJournalText } from 'react-icons/bs';

const QueryLog: React.FC<QueryLogProps> = ({
  queryLog,
  editQueryLabel,
  deleteQuery,
  setActiveQuery,
  activeQuery,
  setDashboardState,
}) => {
  return (
    <div className="my-8 flex h-36 w-11/12 flex-col items-center justify-start overflow-y-auto rounded-md border border-gray-900 shadow-xl md:h-96 outline-r hover:bg-slate-700">
      <span className="flex w-full items-center justify-center border-black bg-gray-900 p-1 text-center text-gray-100">
        <span className="mr-2">
          <BsJournalText />
        </span>
        <span>Query Log</span>
      </span>
      <div className="h-full w-full overflow-y-auto bg-gray-800">
        <ul className="w-full">
          {queryLog.map((_query, index) => {
            const queryLogObject = queryLog[index];
            if (queryLogObject) {
              return (
                <QueryLogItem
                  key={index}
                  index={index}
                  queryLogObject={queryLogObject}
                  editQueryLabel={editQueryLabel}
                  deleteQuery={deleteQuery}
                  setActiveQuery={setActiveQuery}
                  activeQuery={activeQuery}
                  setDashboardState={setDashboardState}
                />
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default QueryLog;

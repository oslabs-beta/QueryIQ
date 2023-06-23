import React from "react";
import { useState } from "react";
import QueryLogItem from "./QueryLogItem";
import type { QueryLogProps } from "~/types/types";

const QueryLog: React.FC<QueryLogProps> = ({
  queryLog,
  editQueryLabel,
  setActiveQuery,
  activeQuery,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleEditHover = (bool: boolean) => {
    setIsHovered(bool);
  };

  return (
    <div className="my-8 flex h-36 w-11/12 flex-col items-center justify-start overflow-y-auto rounded-lg border border-gray-900 shadow-xl md:h-96">
      <span className="w-full border-black bg-gray-900 p-1 text-center text-indigo-300">
        Query Log
      </span>
      <div className="h-full w-full overflow-y-auto bg-gray-800">
        <ul className="w-full">
          {queryLog.map((query, index) => {
            const queryLogObject = queryLog[index];
            if (queryLogObject) {
              return (
                <QueryLogItem
                  key={index}
                  index={index}
                  queryLogObject={queryLogObject}
                  handleEditHover={handleEditHover}
                  isHovered={isHovered}
                  editQueryLabel={editQueryLabel}
                  setActiveQuery={setActiveQuery}
                  activeQuery={activeQuery}
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

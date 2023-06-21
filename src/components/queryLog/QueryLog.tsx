import React from "react";
import { useState } from "react";
import { AiFillEdit, AiOutlineEdit } from "react-icons/ai";
import QueryLogItem from "./QueryLogItem";

interface QueryLogProps {
  queryLog: { query: string; data?: object; name?: string }[];
}

const QueryLog: React.FC<QueryLogProps> = ({ queryLog }) => {
  // const queryArray = Array.from({ length: 16 }, (_, index) => index + 1);

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
          {queryLog.map((query, index) => (
            <QueryLogItem
              key={index}
              index={index}
              handleEditHover={handleEditHover}
              isHovered={isHovered}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QueryLog;

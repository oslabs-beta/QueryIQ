import React from "react";
import { useState } from "react";
import { AiFillEdit, AiOutlineEdit } from "react-icons/ai";

interface QueryLogProps {
  queryLog: { query: string; data?: object }[];
}

const QueryLog: React.FC<QueryLogProps> = ({ queryLog }) => {
  // const queryArray = Array.from({ length: 16 }, (_, index) => index + 1);

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleEditHover = (bool: boolean) => {
    setIsHovered(bool);
  }

  return (
    <div className="my-8 flex h-36 w-11/12 flex-col items-center justify-start overflow-y-auto rounded-lg border border-gray-900 shadow-xl md:h-96">
      <span className="w-full border-black bg-gray-900 p-1 text-center text-indigo-300">
        Query Log
      </span>
      <div className="h-full w-full overflow-y-auto bg-gray-800">
        <ul className="w-full">
          {queryLog.map((query, index) => (
            <li key={index}>
              <button
                className="flex w-full items-center justify-between border-b border-t border-black bg-gray-800 p-4 text-left text-indigo-300 hover:bg-gray-900"
                onMouseEnter={() => handleEditHover(true)}
                onMouseLeave={() => handleEditHover(false)}
              >
                Query {index + 1}{" "}
                <button> {/**add edit query onClick */}
                  <span
                    className={isHovered ? "edit-icon" : "edit-icon hidden"}
                  >
                    <AiFillEdit size={20} />
                  </span>
                  <span
                    className={!isHovered ? "edit-icon" : "edit-icon hidden"}
                  >
                    <AiOutlineEdit size={20} />
                  </span>
                </button>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QueryLog;

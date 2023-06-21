import React from "react";
import { useState } from "react";
import {
  AiFillEdit,
  AiOutlineEdit,
  AiFillCheckSquare,
  AiOutlineCheckSquare,
} from "react-icons/ai";

interface QueryLogItemProps {
  index: number;
  handleEditHover: (bool: boolean) => void;
  isHovered: boolean;
}

const QueryLogItem: React.FC<QueryLogItemProps> = ({
  index,
  handleEditHover,
  isHovered,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  return (
    <li>
      {!editMode ? (
        <div
          className="flex w-full items-center justify-between border-b border-t border-black bg-gray-800 p-4 text-left text-indigo-300 hover:bg-gray-900"
          onMouseEnter={() => handleEditHover(true)}
          onMouseLeave={() => handleEditHover(false)}
        >
          Query {index + 1}{" "}
          <span onClick={() => setEditMode(true)}>
            <span className={isHovered ? "edit-icon" : "edit-icon hidden"}>
              <AiFillEdit size={20} />
            </span>
            <span className={!isHovered ? "edit-icon" : "edit-icon hidden"}>
              <AiOutlineEdit size={20} />
            </span>
          </span>
        </div>
      ) : (
        <div className="flex w-full items-center justify-between border-b border-t border-black bg-gray-800 p-4">
          <input className="mr-2"></input>
          <span
            onClick={() => setEditMode(false)}
            onMouseEnter={() => handleEditHover(true)}
            onMouseLeave={() => handleEditHover(false)}
            className={isHovered ? "edit-icon" : "edit-icon hidden"}
          >
            <AiFillCheckSquare size={20} />
          </span>
          <span
            onClick={() => setEditMode(false)}
            onMouseEnter={() => handleEditHover(true)}
            onMouseLeave={() => handleEditHover(false)}
            className={!isHovered ? "edit-icon" : "edit-icon hidden"}
          >
            <AiOutlineCheckSquare size={20} />
          </span>
        </div>
      )}
    </li>
  );
};

export default QueryLogItem;

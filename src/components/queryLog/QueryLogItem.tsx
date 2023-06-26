import React from "react";
import { useState } from "react";
import {
  AiFillEdit,
  AiOutlineEdit,
  AiFillCheckSquare,
  AiOutlineCheckSquare,
} from "react-icons/ai";
import type { QueryLogItemProps } from "~/types/types";


const QueryLogItem: React.FC<QueryLogItemProps> = ({
  index,
  editQueryLabel,
  queryLogObject,
  setActiveQuery,
  setDashboardState,
  activeQuery,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("");
  // const [active, setActive] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleEditHover = (bool: boolean) => {
    setIsHovered(bool);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(index, label);
    editQueryLabel(index, label);
    setEditMode(false);
  };

  const handleClick = () => {
    // console.log("clicked!");
    // console.log(queryLogObject);
    setDashboardState('query');
    setActiveQuery(queryLogObject);
  };

  return (
    <li>
      {!editMode ? (
        <div
          className={`flex w-full items-center justify-between border-b border-black p-4 text-left text-indigo-300 
          ${ 
            activeQuery === queryLogObject ? 'bg-indigo-900 hover:bg-indigo-800' : 'bg-gray-800 hover:bg-indigo-800'
          }`}
          onMouseEnter={() => handleEditHover(true)}
          onMouseLeave={() => handleEditHover(false)}
          onClick={handleClick}
        >
          {queryLogObject.name ? queryLogObject.name : `Query ${index + 1}`}{" "}
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
        <div className="flex w-full items-center justify-between border-b border-t border-black bg-gray-800 p-4 text-indigo-300">
          <form
            onSubmit={handleFormSubmit}
            className="flex items-center justify-between"
          >
            <input
              className="mr-2 rounded-sm text-black shadow-xl"
              value={label}
              placeholder="Edit label..."
              onChange={(e) => setLabel(e.target.value)}
            ></input>
            <button
              type="submit"
              onMouseEnter={() => handleEditHover(true)}
              onMouseLeave={() => handleEditHover(false)}
              className={isHovered ? "edit-icon" : "edit-icon hidden"}
            >
              <AiFillCheckSquare size={20} />
            </button>
            <button
              type="submit"
              onMouseEnter={() => handleEditHover(true)}
              onMouseLeave={() => handleEditHover(false)}
              className={!isHovered ? "edit-icon" : "edit-icon hidden"}
            >
              <AiOutlineCheckSquare size={20} />
            </button>
          </form>
        </div>
      )}
    </li>
  );
};

export default QueryLogItem;

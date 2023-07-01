import React from 'react';
import { useState } from 'react';
import {
  AiFillEdit,
  AiOutlineEdit,
  AiFillCheckSquare,
  AiOutlineCheckSquare,
  AiFillDelete,
  AiOutlineDelete,
} from 'react-icons/ai';
import type { QueryLogItemProps } from '~/types/types';

const QueryLogItem: React.FC<QueryLogItemProps> = ({
  index,
  editQueryLabel,
  deleteQuery,
  queryLogObject,
  setActiveQuery,
  activeQuery,
  setDashboardState,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [label, setLabel] = useState<string>('');
  // const [active, setActive] = useState<boolean>(false);
  const [isEditHovered, setIsEditHovered] = useState<boolean>(false);
  const [isDeleteHovered, setIsDeleteHovered] = useState<boolean>(false);

  const handleEditHover = (bool: boolean) => {
    setIsEditHovered(bool);
  };

  const handleDeleteHover = (bool: boolean) => {
    setIsDeleteHovered(bool);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editQueryLabel(index, label);
    setEditMode(false);
  };

  const handleEditClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation(); // Prevent event propagation to parent div
    setEditMode(true);
  };

  const handleDeleteClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation(); // Prevent event propagation to parent div
    deleteQuery(index);
  };

  const handleClick = () => {
    setDashboardState('query');
    setActiveQuery(queryLogObject);
  };

  return (
    <li>
      {!editMode ? (
        <div
          className={`flex w-full items-center justify-between border-b border-black p-4 text-left text-indigo-300 
          ${
            activeQuery === queryLogObject
              ? 'bg-indigo-900 hover:bg-indigo-800'
              : 'bg-gray-800 hover:bg-indigo-800'
          }`}
          onClick={handleClick}
        >
          {queryLogObject.name ? queryLogObject.name : `Query ${index + 1}`}{' '}
          <div className="flex">
            <span
              onMouseEnter={() => handleEditHover(true)}
              onMouseLeave={() => handleEditHover(false)}
              onClick={handleEditClick}
            >
              <AiFillEdit
                className={isEditHovered ? 'edit-icon' : 'edit-icon hidden'}
                size={20}
              />
              <AiOutlineEdit
                className={!isEditHovered ? 'edit-icon' : 'edit-icon hidden'}
                size={20}
              />
            </span>
            <div className="ml-2">
              <span
                onMouseEnter={() => handleDeleteHover(true)}
                onMouseLeave={() => handleDeleteHover(false)}
                onClick={handleDeleteClick}
              >
                <AiFillDelete
                  className={isDeleteHovered ? 'edit-icon' : 'edit-icon hidden'}
                  size={20}
                />
                <AiOutlineDelete
                  className={
                    !isDeleteHovered ? 'edit-icon' : 'edit-icon hidden'
                  }
                  size={20}
                />
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full items-center justify-between border-b border-t border-black bg-gray-800 p-4 text-indigo-300">
          <form
            onSubmit={handleFormSubmit}
            className="flex w-full items-center justify-between"
          >
            <input
              className="mr-2 w-8/12 rounded-sm text-black shadow-xl"
              value={label}
              placeholder="Edit label..."
              onChange={(e) => setLabel(e.target.value)}
            ></input>
            <div className="flex">
              <button
                type="submit"
                onMouseEnter={() => handleEditHover(true)}
                onMouseLeave={() => handleEditHover(false)}
                className={isEditHovered ? 'edit-icon' : 'edit-icon hidden'}
              >
                <AiFillCheckSquare size={20} />
              </button>
              <button
                type="submit"
                onMouseEnter={() => handleEditHover(true)}
                onMouseLeave={() => handleEditHover(false)}
                className={!isEditHovered ? 'edit-icon' : 'edit-icon hidden'}
              >
                <AiOutlineCheckSquare size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </li>
  );
};

export default QueryLogItem;

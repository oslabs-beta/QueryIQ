import React from 'react';
import { useState } from 'react';
import {
    AiFillDelete,
    AiOutlineDelete,
  } from 'react-icons/ai';

const DeleteAllButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDeleteHover = (bool: boolean) => {
    setIsHovered(bool);
  };

  // fire callback of deleteAll function in MainContainer
  const handleClick = () => {
    console.log('clicked!');
  }
  return (
    <button
        className="my-4 mt-12 flex items-center rounded-sm  bg-slate-500 p-1 text-slate-100 shadow-xl ring-2 ring-slate-50  hover:scale-105  hover:transform hover:bg-red-700 hover:text-slate-300"
        onClick={handleClick}
        onMouseEnter={() => handleDeleteHover(true)}
        onMouseLeave={() => handleDeleteHover(false)}
        >
        <span className="ml-2 mr-2 pb-1 text-5xl">
          {!isHovered ? (
            <AiOutlineDelete />
          ) : (
            <AiFillDelete />
          )}
        </span>
        <span className="mr-2 p-3 text-lg font-bold tracking-widest text-slate-100">Delete All Queries
        </span>
    </button>
  );
};

export default DeleteAllButton;
import React from 'react';
import type { DBSelectionProps } from '~/types/types';

const DBSelection: React.FC<DBSelectionProps> = ({
  handleCancel,
  handleClick,
}) => {
  return (
    <div className="h-45 w-45 flex justify-center">
      <button
        className="w-auto p-4 m-4 ring ring-2 ring-slate-50 bg-slate-500 text-slate-200 shadow-xl hover:bg-slate-600 hover:text-slate-300 text-gray-200 p-3 rounded-sm hover:transform hover:scale-105"
        onClick={handleClick}
      >
        PostgreSQL
      </button>
      <button
        className="m-4 p-4  ring ring-2 ring-slate-50 bg-slate-500 p-3 shadow-xl text-slate-200 hover:bg-slate-600 hover:text-slate-300 text-gray-200 rounded-sm hover:transform hover:scale-105"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </div>
  );
};

export default DBSelection;

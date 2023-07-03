import React from 'react';
import type { DBSelectionProps } from '~/types/types';

const DBSelection: React.FC<DBSelectionProps> = ({
  handleCancel,
  handleClick,
}) => {
  return (
    <div className="h-45 w-45 flex justify-center">
      <button
        className="m-4  border-slate-900 bg-slate-500 shadow-xl hover:bg-slate-600 hover:text-white text-gray-200 p-3 rounded-sm"
        onClick={handleClick}
      >
        PostgreSQL
      </button>
      <button
        className="m-4  border-slate-900 bg-slate-500 p-3 shadow-xl  hover:bg-slate-600 hover:text-white text-gray-200 rounded-sm"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </div>
  );
};

export default DBSelection;

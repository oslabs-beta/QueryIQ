import React from "react";

interface DBSelectionProps {
  handleCancel: () => void;
  handleClick: () => void;
}

const DBSelection: React.FC<DBSelectionProps> = ({
  handleCancel,
  handleClick,
}) => {
  return (
    <div className="h-45 w-45 flex justify-center">
      <button
        className="m-4 rounded-lg border border-gray-900 bg-indigo-500 p-5 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
        onClick={handleClick}
      >
        PostgreSQL
      </button>
      <button
        className="m-4 rounded-lg border border-gray-900 bg-red-400 p-5 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </div>
  );
};

export default DBSelection;

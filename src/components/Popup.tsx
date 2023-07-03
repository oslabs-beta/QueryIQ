import React from 'react';

type PopupProps = {
  text: string;
};

const Popup: React.FC<PopupProps> = ({ text }) => {
  const handleClick = () => {
    location.reload();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="flex flex-col h-auto w-auto rounded-lg bg-white p-4">
        <p>{text}</p>
        <button
          className="m-2 rounded-lg border border-gray-900 bg-red-400 p-2 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
          onClick={handleClick}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Popup;

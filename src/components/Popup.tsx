import React from 'react';

type PopupProps = {
  text: string;
};

const Popup: React.FC<PopupProps> = ({ text }) => {
  const handleClick = () => {
    location.reload();
  };

  return (
    // Background overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 ">
      {/* Popup Container */}
      <div className="flex flex-col h-auto w-auto rounded-lg ring ring-2 ring-slate-50 bg-slate-800 px-12 py-8 text-slate-100 text-2xl">
      {/* Popup Title Text */}
        <p>{text}</p>
        <button
          className="mx-4 mt-8 mb-4 p-4 rounded-sm ring ring-2 ring-slate-50 bg-slate-500 shadow-xl hover:bg-slate-600 hover:text-slate-300 text-xl hover:transform hover:scale-105 text-slate-100"
          onClick={handleClick}
        >
      {/* Button Text */}
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Popup;

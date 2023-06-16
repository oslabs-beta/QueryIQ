import React from "react";
import { useState } from "react";

// currently only renders in MainContainer if state of isModalOpen set to true artificially. Eventually will be connected to DBConnect button as intermediate state between DB connection and DB disconnection
const DBModal = () => {
  // used to cycle between modal states, selecting a database and inputting credentials
  const [dbSelection, setdbSelection] = useState(false);

  const handleClick = () => {
    console.log("click!");
    !dbSelection ? setdbSelection(true) : setdbSelection(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="h-auto w-auto rounded-lg bg-white p-4">
        <h1 className="p-5 text-xl font-bold">Connect to a Database</h1>
        {/**conditionally renders DB button or credential inputs**/}
        {!dbSelection ? (
          <>
            <div className="h-45 w-45 flex justify-center">
              <button
                className="m-4 rounded-lg border border-gray-900 bg-indigo-500 p-5 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
                onClick={handleClick}
              >
                PostgreSQL
              </button>
              <button className="m-4 rounded-lg border border-gray-900 bg-red-400 p-5 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500">
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex h-auto w-auto flex-col items-center justify-center space-y-2">
              <label>Database Name</label>
              <input
                className="rounded-lg border border-gray-900 p-2"
                placeholder="Database Name"
              ></input>
              <label>Database URI</label>
              <input
                className="rounded-lg border border-gray-900 p-2"
                placeholder="Database URI"
              ></input>
              <label>Database Host</label>
              <input
                className="rounded-lg border border-gray-900 p-2"
                placeholder="Database Host"
              ></input>
              <label>Port</label>
              <input
                className="rounded-lg border border-gray-900 p-2"
                placeholder="Port"
              ></input>
              <div className="h-45 w-45 flex justify-center">
                {" "}
                <button
                  className="m-4 rounded-lg border border-gray-900 bg-indigo-500 p-2 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
                  onClick={handleClick}
                >
                  Connect
                </button>
                <button className="m-4 rounded-lg border border-gray-900 bg-red-400 p-2 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500">
                  Cancel
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DBModal;

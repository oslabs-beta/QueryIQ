import React from "react";
import { useState } from "react";

const DBConnect: React.FC = () => {
  const [connection, setConnection] = useState(false);

  const handleClick = () => {
    connection ? setConnection(false) : setConnection(true)
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {!connection ? (
        <>
          <button
            className="my-4 rounded-lg border border-gray-900 p-1 bg-indigo-500 text-gray-900 hover:bg-gray-900 hover:text-indigo-500 shadow-xl"
            onClick={handleClick}
          >
            Connect to Database
          </button>
          <span>OR</span>
          <span>USE TEST DATA</span>
        </>
      ) : (
        <>
          <div className="my-4 rounded-lg border border-black p-4 bg-gray-900 text-indigo-300 shadow-xl">
            <span>DB NAME: SWAPI</span>
            <br></br>
            <span>HOST: POSTGRES</span>
            <br></br>
            <span>PORT: 3000</span>
            <br></br>
            <span>CONNECTION STATUS:</span>
            <br></br>
            <span>ACTIVE</span>
          </div>
          <button
            className="rounded-lg border border-gray-900 p-1 bg-indigo-500 text-gray-900 hover:bg-gray-900 hover:text-indigo-500 shadow-xl"
            onClick={handleClick}
          >
            Disconnect
          </button>
        </>
      )}
    </div>
  );
};

export default DBConnect;

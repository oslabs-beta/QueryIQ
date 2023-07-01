import React from 'react';
import type { DBConnectProps } from '~/types/types';

const DBConnect: React.FC<DBConnectProps> = ({
  openModal,
  connection,
  setConnection,
  formData,
  setFormData,
  disconnectDB,
}) => {

  const handleConnect = () => {
    setFormData({
      graf_name: '',
      graf_pass: '',
      graf_port: '',
      db_name: '',
      db_url: '',
      db_username: '',
      db_server: '',
      db_password: '',
    });
    openModal(true);
  };

  const handleClick = async () => {
    await disconnectDB();
  };

  return (
    <div className="flex w-11/12 flex-col items-center justify-center">
      {!connection ? (
        <>
          <button
            className="my-4 rounded-lg border border-gray-900 bg-indigo-500 p-1 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
            onClick={handleConnect}
          >
            Connect to Database
          </button>
        </>
      ) : (
        <>
          <div className="my-8 flex w-full flex-col items-center justify-start overflow-y-auto rounded-lg border border-gray-900 shadow-xl">
            <span className="w-full border-black bg-gray-900 p-1 text-center text-indigo-300">
              Active Connection
            </span>
            <div className="items center flex w-full flex-col justify-center bg-gray-800 p-4 text-indigo-300 shadow-xl">
              <span>
                DB NAME:{' '}
                <span className="text-cyan-200">{formData.db_name}</span>
              </span>
              <br></br>
              <span>
                DB SERVER:{' '}
                <span className="text-cyan-200">{formData.db_server}</span>
              </span>
              <br></br>
              <button
                className="rounded-lg border border-gray-900 bg-indigo-500 p-1 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
                onClick={handleClick}
              >
                Disconnect
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DBConnect;

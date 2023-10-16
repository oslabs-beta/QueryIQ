import React from 'react';
import type { DBConnectProps } from '~/types/types';
import { BsDatabaseAdd } from 'react-icons/bs';

const DBConnect: React.FC<DBConnectProps> = ({
  openModal,
  connection,
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
            className="my-4 mt-12 flex items-center rounded-sm  bg-slate-500 p-1 text-slate-100 shadow-xl ring ring-2 ring-slate-50  hover:scale-105  hover:transform hover:bg-slate-700 hover:text-slate-300"
            onClick={handleConnect}
          >
            <span className="ml-2 mr-2 pb-1 text-5xl">
              <BsDatabaseAdd />
            </span>
            <span className="mr-2 p-3 text-lg font-bold tracking-widest text-slate-100">
              Connect to Database
            </span>
          </button>
        </>
      ) : (
        <>
          <div className="my-8 flex w-full flex-col items-center justify-start overflow-y-auto rounded-md border border-gray-900 shadow-xl hover:bg-slate-700 ">
            <span className="w-full border-black bg-gray-900 p-1 text-center font-bold tracking-wide text-slate-100">
              Active Connection
            </span>
            <div className="items center flex w-full flex-col justify-center bg-gray-800 p-4 font-bold tracking-wide text-slate-300 shadow-xl">
              <span>
                DB Name:{' '}
                <span className="text-slate-100">{formData.db_name}</span>
              </span>
              <br></br>
              <span>
                DB Server:{' '}
                <span className="text-slate-100">{formData.db_server}</span>
              </span>
              <br></br>
              <button
                className="my-4 flex items-center justify-center rounded-sm bg-slate-500 p-1 font-bold tracking-wide text-slate-100 shadow-xl ring ring-1 ring-slate-50 hover:scale-105 hover:transform hover:bg-slate-700 hover:text-slate-300"
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

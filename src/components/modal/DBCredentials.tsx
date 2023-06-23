import React from "react";

interface DBCredentialsProps {
  formData: {
    dbName: string;
    dbURI: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      dbName: string;
      dbURI: string;
    }>
  >;
  handleConnect: React.MouseEventHandler<HTMLButtonElement>;
  isFormValid: boolean;
  handleCancel: () => void;
}

const DBCredentials: React.FC<DBCredentialsProps> = ({
  formData,
  setFormData,
  handleConnect,
  isFormValid,
  handleCancel,
}) => {
  return (
    <form className="flex h-auto w-auto flex-col items-center justify-center space-y-2">
      <label>Database Name</label>
      <input
        className="rounded-lg border border-gray-900 p-2"
        placeholder="Database Name"
        value={formData.dbName}
        onChange={(e) => setFormData({ ...formData, dbName: e.target.value })}
      ></input>
      <label>Database URI</label>
      <input
        className="rounded-lg border border-gray-900 p-2"
        placeholder="Database URI"
        value={formData.dbURI}
        onChange={(e) => setFormData({ ...formData, dbURI: e.target.value })}
      ></input>
      <div className="h-45 w-45 flex justify-center">
        <button
          className="m-4 rounded-lg border border-gray-900 bg-indigo-500 p-2 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
          disabled={!isFormValid}
          onClick={handleConnect}
        >
          Connect
        </button>
        <button
          className="m-4 rounded-lg border border-gray-900 bg-red-400 p-2 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default DBCredentials;

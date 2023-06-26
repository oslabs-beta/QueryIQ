import React from "react";
import type { DBCredentialsProps } from "~/types/types";

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
        value={formData.db_name}
        onChange={(e) => setFormData({ ...formData, db_name: e.target.value })}
      ></input>
      <label>Database URI</label>
      <input
        className="rounded-lg border border-gray-900 p-2"
        placeholder="Database URI"
        value={formData.db_url}
        onChange={(e) => setFormData({ ...formData, db_url: e.target.value })}
      ></input>
      <label>Database Username</label>
      <input
        className="rounded-lg border border-gray-900 p-2"
        placeholder="Database Username"
        value={formData.db_username}
        onChange={(e) => setFormData({ ...formData, db_username: e.target.value })}
      ></input>
      <label>Database Server</label>
      <input
        className="rounded-lg border border-gray-900 p-2"
        placeholder="Database Server"
        value={formData.db_server}
        onChange={(e) => setFormData({ ...formData, db_server: e.target.value })}
      ></input>
      <label>Database Password</label>
      <input
        className="rounded-lg border border-gray-900 p-2"
        placeholder="Database Password"
        type="password"
        value={formData.db_password}
        onChange={(e) => setFormData({ ...formData, db_password: e.target.value })}
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

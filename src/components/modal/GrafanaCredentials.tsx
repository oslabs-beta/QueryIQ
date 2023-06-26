import React from 'react';
import type { GrafanaCredentialsProps } from '~/types/types';


const GrafanaCredentials: React.FC<GrafanaCredentialsProps> = ({
  handleCancel,
  handleClick,
  formData,
  setFormData,
}) => {
  return (
    <form className="flex h-auto w-auto flex-col items-center justify-center space-y-2">
      <label>Grafana Username</label>
      <input
        className="rounded-lg border border-gray-900 p-2"
        placeholder="Username"
        value={formData.graf_name}
        onChange={(e) => setFormData({ ...formData, graf_name: e.target.value })}
      ></input>
      <label>Grafana Password</label>
      <input
        className="rounded-lg border border-gray-900 p-2"
        placeholder="Database URI"
        type="password"
        value={formData.graf_pass}
        onChange={(e) => setFormData({ ...formData, graf_pass: e.target.value })}
      ></input>
      <div className="h-45 w-45 flex justify-center">
        <button
          className="m-4 rounded-lg border border-gray-900 bg-indigo-500 p-2 text-gray-900 shadow-xl hover:bg-gray-900 hover:text-indigo-500"
          disabled={!formData.graf_name || !formData.graf_pass}
          onClick={handleClick}
        >
          Next
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

export default GrafanaCredentials;

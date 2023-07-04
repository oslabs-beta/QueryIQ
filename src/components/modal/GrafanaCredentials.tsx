import React from 'react';
import type { GrafanaCredentialsProps } from '~/types/types';
import ModalFormInput from './ModalFormInput';

const GrafanaCredentials: React.FC<GrafanaCredentialsProps> = ({
  handleCancel,
  handleClick,
  formData,
  setFormData,
  setGrafanaUser,
  grafanaUser,
}) => {
  return (
    <form className="flex h-auto w-auto flex-col items-center justify-center space-y-2">
      <label>Grafana Username</label>
      <ModalFormInput
        placeholder="Username"
        type="text"
        value={formData.graf_name && grafanaUser.graf_name}
        onChange={(e) => {
          const { value } = e.target;
          setFormData({ ...formData, graf_name: value });
          setGrafanaUser({ ...grafanaUser, graf_name: value });
        }}
      />
      {/* <input className="rounded-lg border border-gray-900 p-2"></input> */}
      <label>Grafana Password</label>
      <ModalFormInput
        placeholder="Password"
        type="password"
        value={formData.graf_pass && grafanaUser.graf_pass}
        onChange={(e) => {
          const { value } = e.target;
          setFormData({ ...formData, graf_pass: value });
          setGrafanaUser({ ...grafanaUser, graf_pass: value });
        }}
      />
      <label>Grafana Port</label>
      <ModalFormInput
        placeholder="Port"
        type="text"
        value={formData.graf_port && grafanaUser.graf_port}
        onChange={(e) => {
          const { value } = e.target;
          setFormData({ ...formData, graf_port: value });
          setGrafanaUser({ ...grafanaUser, graf_port: value });
        }}
      />
      <div className="h-45 w-45 flex justify-center">
        <button
          className="m-4 border bg-slate-500 p-2 shadow-xl hover:bg-slate-600 hover:text-white text-gray-200 rounded-sm"
          disabled={
            !formData.graf_name || !formData.graf_pass || !formData.graf_port
          }
          onClick={handleClick}
        >
          Next
        </button>
        <button
          className="m-4 border bg-slate-500 p-2 shadow-xl hover:bg-slate-600 hover:text-white text-gray-200 rounded-sm"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default GrafanaCredentials;

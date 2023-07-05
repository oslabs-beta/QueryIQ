import React from 'react';
import type { DBCredentialsProps } from '~/types/types';
import ModalFormInput from './ModalFormInput';

const DBCredentials: React.FC<DBCredentialsProps> = ({
  formData,
  setFormData,
  handleConnect,
  isFormValid,
  handleCancel,
}) => {
  return (
    <form className="flex h-auto w-auto flex-col items-center justify-center space-y-2 text-slate-100 text-lg tracking-wide">
      <label>Database Name</label>
      <ModalFormInput
        placeholder="Database Name"
        type="text"
        value={formData.db_name}
        onChange={(e) => setFormData({ ...formData, db_name: e.target.value })}
      />
      <label>Database URL</label>
      <ModalFormInput
        placeholder="Database URL"
        type="text"
        value={formData.db_url}
        onChange={(e) => setFormData({ ...formData, db_url: e.target.value })}
      />
      <label>Database Username</label>
      <ModalFormInput
        placeholder="Database Username"
        type="text"
        value={formData.db_username}
        onChange={(e) =>
          setFormData({ ...formData, db_username: e.target.value })
        }
      />
      <label>Database Server</label>
      <ModalFormInput
        placeholder="Database Server"
        type="text"
        value={formData.db_server}
        onChange={(e) =>
          setFormData({ ...formData, db_server: e.target.value })
        }
      />
      <label>Database Password</label>
      <ModalFormInput
        placeholder="Database Password"
        type="password"
        value={formData.db_password}
        onChange={(e) =>
          setFormData({ ...formData, db_password: e.target.value })
        }
      />
      <div className="h-45 w-45 flex justify-center">
        <button
          className="m-4 p-4 rounded-sm border bg-slate-500 shadow-xl hover:bg-slate-600 hover:text-slate-300 text-xl hover:transform hover:scale-105 text-slate-100"
          disabled={!isFormValid}
          onClick={handleConnect}
        >
          Connect
        </button>
        <button
          className="m-4 p-4 rounded-sm border bg-slate-500 shadow-xl hover:bg-slate-600 hover:text-slate-300 text-xl hover:transform hover:scale-105 text-slate-100"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default DBCredentials;

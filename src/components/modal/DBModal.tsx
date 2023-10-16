import React from 'react';
import { useState } from 'react';
import DBSelection from './DBSelection';
import DBCredentials from './DBCredentials';
import GrafanaCredentials from './GrafanaCredentials';
import type { DBModalProps } from '~/types/types';

const DBModal: React.FC<DBModalProps> = ({
  openModal,
  setFormData,
  formData,
  handleConnect,
  isFormValid,
  setGrafanaUser,
  grafanaUser,
}) => {
  // used to cycle between modal states, selecting a database and inputting credentials
  const [dbSelection, setdbSelection] = useState(0);

  const handleClick = () => {
    setdbSelection((prevState) => prevState + 1);
  };

  const handleCancel = () => {
    setdbSelection(0);
    openModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-100dvh bg-black bg-opacity-75">
      <div className=" h-auto w-auto rounded-lg bg-slate-800 p-8 py-12  ring ring-2 ring-slate-50">
        <h1 className="p-5 text-3xl tracking-wide font-bold text-slate-100">Connect to a Database</h1>
        {dbSelection === 0 ? (
          <DBSelection handleCancel={handleCancel} handleClick={handleClick} />
        ) : dbSelection === 1 ? (
          <GrafanaCredentials
            handleCancel={handleCancel}
            handleClick={handleClick}
            formData={formData}
            setFormData={setFormData}
            setGrafanaUser={setGrafanaUser}
            grafanaUser={grafanaUser}
          />
        ) : dbSelection === 2 ? (
          <DBCredentials
            formData={formData}
            setFormData={setFormData}
            handleConnect={handleConnect}
            isFormValid={isFormValid}
            handleCancel={handleCancel}
          />
        ) : null}
      </div>
    </div>
  );
};

export default DBModal;

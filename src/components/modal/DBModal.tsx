import React from "react";
import { useState } from "react";
import DBSelection from "./DBSelection";
import DBCredentials from "./DBCredentials";

interface DBModalProps {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  setFormData: React.Dispatch<
    React.SetStateAction<{
      dbName: string;
      dbURI: string;
      dbHost: string;
      dbPort: string;
    }>
  >;
  formData: {
    dbName: string;
    dbURI: string;
    dbHost: string;
    dbPort: string;
  };
  handleConnect: React.MouseEventHandler<HTMLButtonElement>;
  isFormValid: boolean;
}

const DBModal: React.FC<DBModalProps> = ({
  openModal,
  setFormData,
  formData,
  handleConnect,
  isFormValid,
}) => {
  // used to cycle between modal states, selecting a database and inputting credentials
  const [dbSelection, setdbSelection] = useState(false);

  const handleClick = () => {
    !dbSelection ? setdbSelection(true) : setdbSelection(false);
  };

  const handleCancel = () => {
    openModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="h-auto w-auto rounded-lg bg-white p-4">
        <h1 className="p-5 text-xl font-bold">Connect to a Database</h1>
        {/**conditionally renders DB button or credential inputs**/}
        {!dbSelection ? (
          <DBSelection handleCancel={handleCancel} handleClick={handleClick} />
        ) : (
          <DBCredentials
            formData={formData}
            setFormData={setFormData}
            handleConnect={handleConnect}
            isFormValid={isFormValid}
            handleCancel={handleCancel}
          />
        )}
      </div>
    </div>
  );
};

export default DBModal;

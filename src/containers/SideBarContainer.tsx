import React from "react";
import DBConnect from "~/components/DBConnect";
import QueryLog from "~/components/QueryLog";

interface SideBarContainerProps {
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
  connection: boolean;
  setConnection: React.Dispatch<React.SetStateAction<boolean>>;
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
}

const SideBarContainer: React.FC<SideBarContainerProps> = ({
  openModal,
  connection,
  setConnection,
  formData,
  setFormData,
}) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-purple-800 md:h-full md:w-1/4">
      <DBConnect
        openModal={openModal}
        connection={connection}
        setConnection={setConnection}
        formData={formData}
        setFormData={setFormData}
      />
      <QueryLog />
    </div>
  );
};

export default SideBarContainer;

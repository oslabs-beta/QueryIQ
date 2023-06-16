import React from "react";
import DBConnect from "~/components/DBConnect";
import QueryLog from "~/components/QueryLog";

interface SideBarContainerProps {
    openModal: React.Dispatch<React.SetStateAction<boolean>>;
    connection: boolean;
    setConnection: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBarContainer: React.FC<SideBarContainerProps> = ({ openModal, connection, setConnection }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-purple-800 md:h-full md:w-1/4">
      <DBConnect openModal={openModal} connection={connection} setConnection={setConnection}/>
      <QueryLog />
    </div>
  );
};

export default SideBarContainer;

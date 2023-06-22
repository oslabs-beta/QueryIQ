import React from "react";
import DBConnect from "~/components/DBConnect";
import QueryLog from "~/components/queryLog/QueryLog";
import type { QueryLogItemObject } from "~/types/types";

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
  queryLog: { query: string; data: object; name: string }[];
  setQueryLog: React.Dispatch<
    React.SetStateAction<Array<{ query: string; data: object; name: string }>>
  >;
  editQueryLabel: (index: number, label: string) => void;
  setTestConnected: React.Dispatch<React.SetStateAction<boolean>>;
  testConnected: boolean;
  activeQuery: QueryLogItemObject;
  setActiveQuery: React.Dispatch<React.SetStateAction<QueryLogItemObject>>;
}

const SideBarContainer: React.FC<SideBarContainerProps> = ({
  openModal,
  connection,
  setConnection,
  formData,
  setFormData,
  queryLog,
  editQueryLabel,
  setTestConnected,
  testConnected,
  setActiveQuery,
  activeQuery,
}) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center  md:h-full md:w-1/4">
      <DBConnect
        openModal={openModal}
        connection={connection}
        setConnection={setConnection}
        formData={formData}
        setFormData={setFormData}
        testConnected={testConnected}
        setTestConnected={setTestConnected}
      />
      <QueryLog
        queryLog={queryLog}
        editQueryLabel={editQueryLabel}
        activeQuery={activeQuery}
        setActiveQuery={setActiveQuery}
      />
    </div>
  );
};

export default SideBarContainer;

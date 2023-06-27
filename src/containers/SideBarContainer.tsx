import React from 'react';
import DBConnect from '~/components/DBConnect';
import QueryLog from '~/components/queryLog/QueryLog';
import type { SideBarContainerProps } from '~/types/types';

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
  setDashboardState,
  databaseGraphs,
  setDatabaseGraphs,
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
        setDashboardState={setDashboardState}
        databaseGraphs={databaseGraphs}
        setDatabaseGraphs={setDatabaseGraphs}
      />
      <QueryLog
        queryLog={queryLog}
        editQueryLabel={editQueryLabel}
        activeQuery={activeQuery}
        setActiveQuery={setActiveQuery}
        setDashboardState={setDashboardState}
      />
    </div>
  );
};

export default SideBarContainer;

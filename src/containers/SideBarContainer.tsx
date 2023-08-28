import React from 'react';
import DBConnect from '~/components/DBConnect';
import DeleteAllButton from '~/components/queryLog/DeleteAllButton';
import QueryLog from '~/components/queryLog/QueryLog';
import type { SideBarContainerProps } from '~/types/types';

const SideBarContainer: React.FC<SideBarContainerProps> = ({
  openModal,
  connection,
  formData,
  setFormData,
  queryLog,
  editQueryLabel,
  deleteQuery,
  setActiveQuery,
  activeQuery,
  setDashboardState,
  disconnectDB,
}) => {
  return (
    <div className="flex w-full h-full flex-col items-center justify-start mt-5 md:h-4/5 md:w-1/4  overflow-y-auto bg-slate-950 rounded-md border border-slate-600 ">
      <DBConnect
        openModal={openModal}
        connection={connection}
        formData={formData}
        setFormData={setFormData}
        disconnectDB={disconnectDB}
      />
      <QueryLog
        queryLog={queryLog}
        editQueryLabel={editQueryLabel}
        deleteQuery={deleteQuery}
        activeQuery={activeQuery}
        setActiveQuery={setActiveQuery}
        setDashboardState={setDashboardState}
      />
      {!queryLog.length ? (
        <></>
      ) : (
        <>
          <DeleteAllButton/>
        </>
      )}
    </div>
  );
};



export default SideBarContainer;

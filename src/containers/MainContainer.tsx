import React from "react";
import QueryContainer from "./QueryContainer";
import SideBarContainer from "./SideBarContainer";
import { useState } from "react";
import DBModal from "~/components/DBModal";

const MainContainer: React.FC = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [connection, setConnection] = useState(false);

  return (
    <div className="flex h-full w-full flex-col bg-white md:flex-row">
      {!isModalOpen ? (
        <></>
      ) : (
        <>
          <DBModal openModal={setIsModalOpen} setConnection={setConnection} />
        </>
      )}
      <SideBarContainer
        openModal={setIsModalOpen}
        connection={connection}
        setConnection={setConnection}
      />
      <QueryContainer />
    </div>
  );
};

export default MainContainer;

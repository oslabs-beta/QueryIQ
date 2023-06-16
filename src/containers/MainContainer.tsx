import React from "react";
import QueryContainer from "./QueryContainer";
import SideBarContainer from "./SideBarContainer";
import { useState } from "react";
import DBModal from "~/components/DBModal";

const MainContainer: React.FC = () => {
  //with useState, we are able to open the modal component "DBModal"
  //default state is false, needs to be manually changed to true for now
  //Eventually, when "Connect to Database" button is pushed on homepage, this will cycle isModalOpen state to TRUE
  //if modal is open, DBModal appears over the rest of the page
  //eventually, can escape modal with cancel button or submit button

  const [isModalOpen, _setIsModalOpen] = useState(false);

  return (
    <div className="flex h-full w-full flex-col bg-white md:flex-row">
      {!isModalOpen ? (
        <>
          <SideBarContainer />
          <QueryContainer />
        </>
      ) : (
        <>
          <DBModal />
          <SideBarContainer />
          <QueryContainer />
        </>
      )}
    </div>
  );
};

export default MainContainer;

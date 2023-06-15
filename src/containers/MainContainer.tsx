import React from "react";
import QueryContainer from "./QueryContainer";
import SideBarContainer from "./SideBarContainer";

const MainContainer: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col bg-white md:flex-row">
      <SideBarContainer />
      <QueryContainer />
    </div>
  );
};

export default MainContainer;

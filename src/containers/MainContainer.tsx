import React from "react";
import QueryContainer from "./QueryContainer";
import SideBarContainer from "./SideBarContainer";

const MainContainer: React.FC = () => {
  return (
    <div className="flex h-screen w-screen flex-col bg-white p-2 md:flex-row">
      <SideBarContainer></SideBarContainer>
      <QueryContainer></QueryContainer>
    </div>
  );
};

export default MainContainer;

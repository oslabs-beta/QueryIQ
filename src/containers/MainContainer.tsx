import React from "react";
import QueryContainer from "./QueryContainer";
import SideBarContainer from "./SideBarContainer";

const MainContainer: React.FC = () => {
  return (
    <div className="h-screen w-screen flex-col bg-indigo-800 p-2 md:flex md:flex-row">
      <SideBarContainer></SideBarContainer>
      <QueryContainer></QueryContainer>
      {/* <style>
        {`
        @media (max-width: 768px) {
          .md\:flex-row {
            flex-direction: column;
          }
        }
        `}
      </style> */}
    </div>
  );
};

export default MainContainer;

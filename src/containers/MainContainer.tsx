import React from "react";
import QueryContainer from "./QueryContainer";
import SideBarContainer from "./SideBarContainer";

const MainContainer: React.FC = () => {
  return (
    <div className="flex-col md:flex h-screen w-screen bg-indigo-800 p-2 md:flex-row">
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

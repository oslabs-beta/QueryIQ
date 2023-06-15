import React from "react";
import DBConnect from "~/components/DBConnect";
import QueryLog from "~/components/QueryLog";

const SideBarContainer: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-purple-800 md:h-full md:w-1/4">
      <DBConnect />
      <QueryLog />
    </div>
  );
};

export default SideBarContainer;

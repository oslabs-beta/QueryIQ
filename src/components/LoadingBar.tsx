import React from "react";
import type { LoadingBarProps } from '~/types/types';


const LoadingBar: React.FC<LoadingBarProps> = ({ loadingProgress }) => {
  return (
    <div className="my-1 w-full rounded-full bg-gray-200 dark:bg-gray-700">
      <div
        className="rounded-full bg-blue-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100 transition-all duration-1000 ease-out"
        style={{ width: `${loadingProgress}%` }}
      >
        {" "}
        {/* {loadingProgress}% */}
        {"Loading..."}
      </div>
    </div>
  );
};

export default LoadingBar;

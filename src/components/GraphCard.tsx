import React from "react";
import Image from "next/image";

const GraphCard: React.FC = () => {
  return (
    <div className="my-2 h-60 w-60 rounded-lg border border-gray-900  bg-red-100 shadow">
      <Image
        src="/assets/logo-full-no-bg.png"
        alt="Logo"
        width={210}
        height={64}
      />
    </div>
  );
};

export default GraphCard;

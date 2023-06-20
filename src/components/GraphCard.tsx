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
      {/* <iframe src="http://localhost:3000/d-solo/c380d2f8-36cc-4a99-a230-a3169f3bec69/test-dashboard?orgId=1&from=1687258045279&to=1687279645279&panelId=7" width="450" height="200" frameborder="0"></iframe> */}
    </div>
  );
};

export default GraphCard;

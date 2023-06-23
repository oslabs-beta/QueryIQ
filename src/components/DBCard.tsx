import React from "react";

//Pie chart for Highest Queries by Memory Usage
const DBCard: React.FC = () => {
  return (
    <div className="my-4 w-11/12 rounded-lg border border-black bg-gray-900 p-4 text-indigo-300 shadow-xl">
      <iframe
        src="http://localhost:3000/d-solo/a2dc4fc5-613f-4527-b267-a01f274f4612/dvdrental-dashboard?orgId=1&from=1687363777383&to=1687385377384&panelId=7"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default DBCard;

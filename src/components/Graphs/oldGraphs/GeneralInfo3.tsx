import React from "react";

//Pie chart for Highest Queries by Memory Usage
const GeneralInfo3: React.FC = () => {
  return (
    <div className="h-78 w-78 my-2 rounded-lg border border-gray-900  bg-red-100 shadow">
      <iframe
        src="http://localhost:3000/d-solo/bce239a6-b14d-4359-a4f4-7bca1820ab2d/queryiq-for-database-performance-metrics-for-dvd-rental?orgId=1&from=1687777521961&to=1687799121961&panelId=5"
        width="450"
        height="200"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default GeneralInfo3;

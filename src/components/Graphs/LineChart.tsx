import React from "react";

//Pie chart for Highest Queries by Memory Usage
const LineChart: React.FC = () => {
  return (
    <div className="h-78  w-78 my-2 rounded-lg border border-gray-900  bg-red-100 shadow">
      <iframe
        src="http://localhost:3000/d-solo/a2dc4fc5-613f-4527-b267-a01f274f4612/dvdrental-dashboard?orgId=1&from=1687300967135&to=1687322567135&panelId=4"
        width="450"
        height="200"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default LineChart;

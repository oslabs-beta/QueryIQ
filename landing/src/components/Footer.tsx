import React from 'react';

const Footer: React.FC = () => {
    return (
      <div className="flex w-screen items-center justify-between md:flex-row md:justify-between px-8 py-4">
        <p>All rights reserved</p>
        <p>Query IQ 2023 | MIT License</p>
        <div>
          <a href="https://medium.com/@queryiqteam/query-iq-monitoring-postgresql-database-health-quantifying-query-efficiency-375de6e7ac2a" target="_blank">Medium</a>
          <a href="https://www.linkedin.com/company/queryiq" target="_blank">LinkedIn</a>
        </div>
      </div>
  );
};

export default Footer;
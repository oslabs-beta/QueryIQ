import React from 'react';
import Image from 'next/image';
  //   return (
  //     <div className="flex w-screen items-center justify-between md:flex-row md:justify-between bg-blue-600 text-white px-8 py-4">
  //       <p>All rights reserved</p>
  //       <p>Query IQ 2023 | MIT License</p>
  //       <div>
  //         <a href="https://medium.com/@queryiqteam/query-iq-monitoring-postgresql-database-health-quantifying-query-efficiency-375de6e7ac2a" target="_blank">Medium</a>
  //         <a href="https://www.linkedin.com/company/queryiq" target="_blank">LinkedIn</a>
  //       </div>
  //     </div>
  // );
  const Footer: React.FC = () => {
  
     return (
      <div className="mt-12">
      <div className="flex flex-row w-screen items-center justify-between md:flex-row md:justify-between bg-gray-300 text-slate-700 px-8 py-4">
        <p>All Rights Reserved</p>
        <p>© Query IQ 2023 | MIT License</p>

        <div className="flex items-center ">

          {/* Make the Medium image clickable */}
          <a
            href="https://medium.com/@queryiqteam/query-iq-monitoring-postgresql-database-health-quantifying-query-efficiency-375de6e7ac2a"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 image-container grayscale"
          >
            <Image
              src="https://user-images.githubusercontent.com/115481927/256350219-d2ed2aa2-0146-4612-951f-015c9e72c883.png"
              alt="Medium"
              width={100}
              height={100}
              className="h-10 w-10 "
            />
          </a>


        <div className="flex items-center ">
          {/* Make the LinkedIn image clickable */}
          <a
            href="https://www.linkedin.com/company/queryiq"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 image-container grayscale "
          >
            <Image
              src="https://user-images.githubusercontent.com/115481927/256355895-c7a7b5f3-baaf-46b6-bfdd-9bdea8763587.png"
              alt="LinkedIn"
              width={100}
              height={100}
              className="h-10 w-10 "
            />
          </a>
        </div>


        <div className="flex items-center ">
          {/* Make the LinkedIn image clickable */}
          <a
            href="https://github.com/oslabs-beta/QueryIQ"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 image-container grayscale "
          >
            <Image
              src="https://user-images.githubusercontent.com/115481927/256366544-f37a7882-2184-452a-8fe3-e0586ab3b4d4.png"
              alt="GitHub"
              width={100}
              height={100}
              className="h-10 w-10 "
            />
          </a>
        </div>
      </div>

      {/* Adding the CSS styles here */}
      <style jsx>{`
        .grayscale {
          filter: grayscale(100%);
        }

        .image-container:hover {
          filter: contrast(115%); /* Remove the grayscale filter on hover */
        }

        .image-container {
          text-decoration: none;
        }
      `}</style>
    </div>
    </div>
  );
};

export default Footer;
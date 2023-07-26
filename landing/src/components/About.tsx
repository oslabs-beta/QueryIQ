import React from 'react';

const About: React.FC = () => {
  return (
    <>
      <main id="about" className="max-h-full w-screen min-w-full max-w-full bg-transparent">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
          <p className="mt-4 text-lg text-gray-300">
            We are proud to present QueryIQ, a powerful tool that empowers developers to take control of their PostgreSQL databases. 
            Whether you are an experienced developer looking to optimize performance or a novice seeking guidance, 
            QueryIQ is here to simplify the process and enhance your development experience.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            The main goal of Query IQ is to provide a one-stop-shop for developers who seek to fine-tune their application’s interactions with a SQL database. 
            By connecting their database, QueryIQ enables developers to gain valuable insights on their database from a holistic standpoint, 
            and to receive performance data through live query execution directly to their database.
          </p>
          <div className="flex mt-8">
            <div className="flex-1 p-4 bg-gray-100 rounded-md shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">Card 1</h2>
              <p className="mt-2 text-gray-600">
                Content for Card 1 goes here.
              </p>
            </div>
            <div className="flex-1 p-4 bg-gray-100 rounded-md shadow-md ml-4">
              <h2 className="text-xl font-semibold text-gray-800">Card 2</h2>
              <p className="mt-2 text-gray-600">
                Content for Card 2 goes here.
              </p>
            </div>
          </div>
        </div>


      </main>
    </>
  );
};

export default About;

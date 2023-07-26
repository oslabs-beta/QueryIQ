import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <>
      <section id="about" className="flex items-center justify-center min-h-screen bg-transparent">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white text-center">About</h1>
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
          <div className="mt-8 flex flex-wrap gap-14 justify-center bg-transparent">
            <div className="group inline-block overflow-hidden rounded-2xl bg-gradient-to-tr from-purple-800 to-teal-400 p-1 pb-4 text-white shadow transition hover:shadow-md w-[350px] h-[500px]">
              <h2 className="text-xl font-semibold text-gray-800">Database Health</h2>
              <p className="mt-2 text-gray-600">
                Content for Card 1 goes here.
              </p>
              {/* <Image
                src="https://cdn.discordapp.com/attachments/1115285712292565056/1126315338221506640/QuIQ_5-13.gif"
            alt="connect to database and display overall health gif"
            width={500}
            height={500}
            /> */}
            </div>
            <div className="group inline-block overflow-hidden rounded-2xl bg-gradient-to-tr from-purple-800 to-teal-400 p-1 pb-4 text-white shadow transition hover:shadow-md w-[350px] h-[500px]">
              <h2 className="text-xl font-semibold text-gray-800">Query Performance</h2>
              <p className="mt-2 text-gray-600">
                Content for Card 2 goes here.
              </p>
              <Image
          src="https://cdn.discordapp.com/attachments/1115285712292565056/1126317089712517190/QuIQ_query.gif"
          alt="individual query gif"
          width={500}
          height={500}
        />
            </div>
          </div>
        </div>


      </section>
    </>
  );
};

export default About;

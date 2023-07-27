import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <>
      <section id="about" className="flex items-center justify-center bg-transparent">
        <div className="container mx-auto">
          <h2 className="mt-4 text-xl font-bold text-slate-50 text-center">QueryIQ is a powerful developer tool that provides holistic insights on your SQL database.</h2>
          {/* <h2 className="mt-4 text-xl font-bold text-slate-50  text-center">It enables developers to gain holistic insights on their database.  </h2> */}
            <h2 className="mt-4 text-xl font-bold text-slate-50  text-center">You receive live performance metrics on troublesome queries.  </h2>
          {/* <p className="mt-4 text-lg text-gray-300">

            Whether you are an experienced developer looking to optimize performance or a novice seeking guidance,
            QueryIQ is here to simplify the process and enhance your development experience.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            The main goal of Query IQ is to provide a one-stop-shop for developers who seek to fine-tune their application’s interactions with a SQL database.
            By connecting their database, QueryIQ enables developers to gain valuable insights on their database from a holistic standpoint,
            and to receive performance data through live query execution directly to their database.
          </p> */}
          <div className="mt-8 flex flex-wrap gap-14 justify-center bg-transparent">
            <div className="group inline-block overflow-hidden rounded-2xl bg-gradient-to-tr from-purple-800 to-teal-400 p-10 pb-4 text-white shadow transition hover:shadow-md w-[350px] h-[500px]">
            <div className="flex flex-col items-center h-full justify-center transition-transform transform-gpu hover:scale-105">
            <div className="transition-transform transform-gpu hover:scale-105">
              <Image
                src="https://user-images.githubusercontent.com/108748353/256357255-34175d9e-c633-4b22-8f57-2569b9b4475d.png"
            alt="database health "
            width={250}
            height={250}
            />
            </div>
            <h2 className="text-xl font-semibold text-slate-50">Database Health Metrics</h2>
              <p className="mt-2 text-slate-50">
                Monitor crucial metrics for your database such as query execution time, memory usage, cache-hit ratio, etc
              </p>
              </div>
            </div>
            <div className="group inline-block overflow-hidden rounded-2xl bg-gradient-to-tr from-purple-800 to-teal-400 p-10 pb-4 text-white shadow transition hover:shadow-md w-[350px] h-[500px]">
            <div className="flex flex-col items-center h-full justify-center transition-transform transform-gpu hover:scale-105">
            <div className="transition-transform transform-gpu hover:scale-105">
              <Image
          src="https://user-images.githubusercontent.com/108748353/256357302-ea8b14b7-08f0-4ba5-b6ec-9233a1c69860.png"
          alt="query performance image"
          width={250}
          height={250}
        />
        </div>
        <h2 className="text-xl font-semibold text-slate-50">Query Performance</h2>
              <p className="mt-2 text-slate-50">
                Receive a granular level analysis of individual query performance by aggregating actual time, rows, and width
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

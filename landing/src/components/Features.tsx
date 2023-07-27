import React from 'react';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiGrafana } from 'react-icons/si';
import { GiPadlock } from 'react-icons/gi';


const Features: React.FC = () => {
  return (
    <>
      <section id="features" className='max-h-full w-screen min-w-full max-w-full bg-transparent flex-col space-y-10 my-20'>
        <div className="px-16 flex-col">
          <h1 className="text-center my-12 text-5xl font-bold tracking-widest text-slate-50 font-reem-kufi">Features</h1>
          <div className="flex justify-stretch items-center flex-col">
            <ul className="feature-list pl-8 text-slate-50">
              <li className="mb-8">
                <div className="group flex items-center">
                  <div className="bg-blue-500 p-2 rounded-xl bg-opacity-70 group-hover:bg-opacity-100 transition duration-500 transform group-hover:scale-110">
                    <BiLogoPostgresql size={40}/>
                  </div>
                  <h3 className="text-3xl text-teal-400 ml-4 group-hover:text-blue-300 transition duration-500">PostgreSQL Support </h3>
                </div>
                <p className="text-xl py-4 ml-20 max-w-screen-lg">Effortlessly manage your PostgreSQL connection, health, and performance metrics with Query IQ. Simplify monitoring, performance optimization, and gain valuable insights.</p>
              </li>
              <li className="mb-8">
                <div className="group flex items-center">
                <div className="bg-orange-500 p-2 rounded-xl bg-opacity-70 group-hover:bg-opacity-100 transition duration-500 transform group-hover:scale-110">
                    <SiGrafana size={40}/>
                  </div>
                  <h3 className='text-3xl text-teal-400 ml-4 group-hover:text-orange-300 transition duration-500'>Grafana Integration</h3> <br />
                </div>
                <p className='text-xl py-4 ml-20 max-w-screen-lg'>Query IQ simplifies managing your Grafana instance by creating data sources, pre-confgured dashboards, and embedded graphs within the application.</p>
              </li>
              <li className="mb-8">
                <div className="group flex items-center">
                  <div className="bg-pink-500 p-2 rounded-xl bg-opacity-70 group-hover:bg-opacity-100 transition duration-500 transform group-hover:scale-110">
                    <GiPadlock size={40}/>
                  </div>
                  <h3 className='text-3xl text-teal-400 ml-4 group-hover:text-pink-300 transition duration-500'>Secure Authorization</h3> <br />
                </div>
                <p className='text-xl py-4 ml-20 max-w-screen-lg'>Seamlessly create an account using your existing GitHub credentials, ensuring a streamlined and secure registration process.
                Your data remains protected, and you can confidently access all the features with ease.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;


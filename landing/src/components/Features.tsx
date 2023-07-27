// import React from 'react';
// import Image from 'next/image';

// const Features: React.FC = () => {
//   return (
//     <>
//       <section>
//       <div className="container flex mx-4 outline-orange">
//         <h1 className="text-5xl font-semibold text-slate-50">Features:</h1>
//         <ul className="feature-list w-1/2 pl-8 text-slate-50">
//           <li className="mb-8">
//             <span className="bullet text-3xl">•</span> <a className="text-3xl">PostgreSQL Support </a><br />
//             <a className="text-xl indented-paragraph">Easily manage your PostgreSQL connection, health, and performance metrics</a>
//           </li>
//           <li className="mb-8">
//             <span className="bullet text-3xl">•</span> <a className='text-3xl'>Grafana Integration</a> <br />
//             <a className='text-xl'>Query IQ simplifies managing your Grafana instance by creating data sources, customized dashboards, and embedded graphs within the application.</a>
//           </li>
//           <li className="mb-8">
//             <span className="bullet text-3xl">•</span> <a className='text-3xl'>Secured Authorization</a> <br />
//             <a className='text-xl'>Users can easily and securely create an account using their existing Github accounts</a>
//           </li>
//         </ul>
//         <Image
//           className="feature-image"
//           src="https://user-images.githubusercontent.com/108748353/256357302-ea8b14b7-08f0-4ba5-b6ec-9233a1c69860.png"
//           alt="Feature Image"
//           width={300}
//           height={300}
//           unoptimized
//         />
//       </div>
//     </section>
//   </>
//   )
// }

// export default Features;
import React from 'react';
import Image from 'next/image';

const Features: React.FC = () => {
  return (
    <>
      <section className='pl-4 md:pl-8 lg:pl-12'>
        <div className="container mx-4 outline-orange">
          <h1 className="text-5xl font-semibold text-slate-50">Features:</h1>
        </div>
      </section>
      <section className='py-4 md:pl-8 lg:pl-12'>
        <div className="container flex mx-4 outline-orange">
          <ul className="feature-list w-3/4 pl-8 text-slate-50">
            <li className="mb-8">
              <span className="bullet text-3xl">•</span> <a className="text-3xl py-4">PostgreSQL Support </a><br />
              <a className="text-xl py-4 md:pl-8 lg:pl-12">Easily manage your PostgreSQL connection, health, and performance metrics</a>
            </li>
            <li className="mb-8">
              <span className="bullet text-3xl">•</span> <a className='text-3xl'>Grafana Integration</a> <br />
              <a className='text-xl py-4 md:pl-8 lg:pl-12'>Query IQ simplifies managing your Grafana instance by creating data sources, customized dashboards, and embedded 
              graphs within the application</a>
            </li>
            <li className="mb-8">
              <span className="bullet text-3xl">•</span> <a className='text-3xl'>Secure Authorization</a> <br />
              <a className='text-xl pl-4 md:pl-8 lg:pl-12'>Users can easily and securely create an account using their existing Github account</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Features;

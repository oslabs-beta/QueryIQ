import React from 'react';
import Header from '../components/Header';
import Head from 'next/head';
import Image from 'next/image';

const Contact = () => {
  const teamMembers = [
    {
      image: '/../public/assets/logo-full-no-bg.png',
      name: 'Alan Beck',
      linkedin: 'https://www.linkedin.com/in/k-alan-beck/',
      github: 'https://github.com/KAlanBeck/',
    },
    {
      image: '/../public/assets/logo-full-no-bg.png',
      name: 'Connor Dillon',
      linkedin: 'https://www.linkedin.com/in/connor-dillon/',
      github: 'https://github.com/connoro7/',
    },
    {
      image: '/../public/assets/logo-full-no-bg.png',
      name: 'Dean Biscocho',
      linkedin: 'https://www.linkedin.com/in/deanbiscocho/',
      github: 'https://github.com/deanbiscocho/',
    },
    {
      image: '/../public/assets/logo-full-no-bg.png',
      name: 'Johanna Cameron',
      linkedin: 'https://www.linkedin.com/in/johanna-cameron/',
      github: 'https://github.com/jojecameron/',
    },
    {
      image: '/../public/assets/logo-full-no-bg.png',
      name: 'Khaile Tran',
      linkedin: 'https://www.linkedin.com/in/khailetran/',
      github: 'https://github.com/khailetra/',
    },
    // Add more team members as needed
  ];
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact page for the team members" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-h-full w-screen min-w-full max-w-full bg-black justify-center items-center">
        <Header />
        <div className="container mx-auto px-4 py-8 ">
          <h1 className="text-4xl font-bold text-white">Meet Our Team</h1>
          {/* <div className="mt-8 grid grid-cols-2 gap-4">
            {teamMembers.map((member, index) => (

              <div key={index} className="rounded-lg bg-gray-900 p-4">
                <Image
                  src={member.image}
                  alt="Profile"
                  width={64}
                  height={64}
                />
                <h2 className="text-2xl font-semibold text-white">
                  {member.name}
                </h2>
                <div className="mt-4">
                  <p className="text-white">
                    LinkedIn:{' '}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.linkedin}
                    </a>
                  </p>
                  <p className="text-white">
                    GitHub:{' '}
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {member.github}
                    </a>
                  </p>
                </div>
              </div>


            ))}
          </div> */}

<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6 justify-center  ">
  {teamMembers.map((member, index) => (
    <div key={index} className="rounded-lg bg-gray-900 p-1">
      <div className="space-y-4">
        <Image
          src={member.image}
          alt="Profile"
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
        <h2 className="text-lg font-semibold text-white mt-2">
          {member.name}
        </h2>
        <div className="mt-2">
  <p className="text-white text-sm">
    <span className="flex items-center">
      <Image
        src="/../public/assets/linkedin-icon-update.png"
        alt="LinkedIn"
        width={10}
        height={10}
        className="w-4 h-4 mr-2"
      />
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-red-400"
      >
        LinkedIn
      </a>
    </span>
  </p>
  <p className="text-white text-sm">
    <span className="flex items-center">
      <Image
        src="/../public/assets/github-mark-white-.png"
        alt="GitHub"
        width={10}
        height={10}
        className="w-4 h-4 mr-2"
      />
      <a
        href={member.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-red-400"
      >
        GitHub
      </a>
    </span>
  </p>



        </div>
      </div>
    </div>
  ))}
</div>





        </div>
      </main>
    </>
  );
};

export default Contact;

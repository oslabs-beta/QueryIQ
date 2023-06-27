import React from 'react';
import Header from '../components/Header';
import Head from 'next/head';
import Image from 'next/image';

const Contact = () => {
  const teamMembers = [
    {
      image: '/../public/assets/logo-full-no-bg.png',
      name: 'Alan Beck',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
      github: 'https://github.com/johndoe',
    },
    {
      image: '/../public/assets/logo-full-no-bg.png',
      name: 'Connor Dillon',
      linkedin: 'https://www.linkedin.com/in/janesmith/',
      github: 'https://github.com/janesmith',
    },
    {
      image: '/../public/assets/logo-full-no-bg.png',
      name: 'Dean Biscocho',
      linkedin: 'https://www.linkedin.com/in/janesmith/',
      github: 'https://github.com/janesmith',
    },
    {
      image: '/../public/assets/logo-full-no-bg.png',
      name: 'Johanna Cameron',
      linkedin: 'https://www.linkedin.com/in/janesmith/',
      github: 'https://github.com/janesmith',
    },
    {
      image: '/../public/assets/logo-full-no-bg.png',
      name: 'Khaile Tran',
      linkedin: 'https://www.linkedin.com/in/janesmith/',
      github: 'https://github.com/janesmith',
    },
    // Add more team members as needed
  ];
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact page for the team members" />
      </Head>
      <main className="max-h-full w-screen min-w-full max-w-full bg-black">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white">Contact</h1>
          <div className="mt-8 grid grid-cols-2 gap-4">
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
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;

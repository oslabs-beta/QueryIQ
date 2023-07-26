import React from 'react';
import Image from 'next/image';

const Team = () => {
  const teamMembers = [
    {
      image: 'https://github.com/KAlanBeck.png',
      name: 'Alan Beck',
      linkedin: 'https://www.linkedin.com/in/k-alan-beck/',
      github: 'https://github.com/KAlanBeck/',
    },
    {
      image: 'https://github.com/connoro7.png',
      name: 'Connor Dillon',
      linkedin: 'https://www.linkedin.com/in/connor-dillon/',
      github: 'https://github.com/connoro7/',
    },
    {
      image: 'https://github.com/deanbiscocho.png',
      name: 'Dean Biscocho',
      linkedin: 'https://www.linkedin.com/in/deanbiscocho/',
      github: 'https://github.com/deanbiscocho/',
    },
    {
      image: 'https://github.com/jojecameron.png',
      name: 'Johanna Cameron',
      linkedin: 'https://www.linkedin.com/in/johanna-cameron/',
      github: 'https://github.com/jojecameron/',
    },
    {
      image: 'https://github.com/khailetran.png',
      name: 'Khaile Tran',
      linkedin: 'https://www.linkedin.com/in/khailetran/',
      github: 'https://github.com/khailetran/',
    },
    // Add more team members as needed
  ];
  return (
    <>
      <main id="team" className="max-h-full w-screen min-w-full max-w-full flex flex-col items-center justify-center bg-transparent space-x-20 space-y-10">
        <div className=" container mx-auto px-4 py-8 space-y-10 ">
          <h1 className="text-5xl font-bold text-white">Meet Our Team</h1>
          <div className="mt-8 flex flex-wrap gap-8 justify-center bg-transparent ">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group inline-block overflow-hidden rounded-2xl bg-gradient-to-tr from-purple-800 to-teal-400 p-1 pb-4 text-white shadow transition hover:shadow-md w-[250px] h-[380px]"
              >
                <figure className="aspect-square max-h-64 overflow-hidden ">
                <a href={member.image} target="_blank" rel="noopener noreferrer">
                  <Image
                    className="h-full w-full object-cover transition group-hover:scale-110 rounded-2xl"
                    src={member.image}
                    loader={({ src }) => src}
                    alt="Profile"
                    width={55}
                    height={55}
                    unoptimized
                  />
                  </a>
                </figure>

                <h2 className="mt-2 text-center text-lg font-semibold text-white">
                  {member.name}
                </h2>
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center">
                    {' '}

                    <Image
                      src="https://user-images.githubusercontent.com/32769592/256312282-3ceaa3d9-04ff-4205-91e8-cca7ba160752.png"
                      alt="LinkedIn"
                      width={10}
                      height={10}
                      className="mr-2 h-4 w-4"
                    />
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white-400 hover:text-red-400"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    {' '}
                    <Image
                      src="https://user-images.githubusercontent.com/32769592/256312287-826dbce2-c518-44d6-95f9-e52898e608c6.png"
                      alt="GitHub"
                      width={10}
                      height={10}
                      className="mr-2 h-4 w-4"
                    />
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white-400 hover:text-red-400"
                    >
                      GitHub
                    </a>
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

export default Team;

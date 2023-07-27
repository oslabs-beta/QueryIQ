import React from 'react'
import Image from 'next/image';
import useWindowDimensions from '../hooks/getWindowDimensions'

const Hero = () => {

// const { height, width } = useWindowDimensions();
  const width = '1000'
  return (
    <>
      <section id="hero" className="max-h-full w-screen min-w-full max-w-full bg-transparent">
        <div className='container mx-auto px-4 py-8 text-slate-50 font-reem-kufi'>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex justify-center md:mx-0 md:mr-4 ">
              <div className='h-full w-full relative'>
              <Image
                src="https://user-images.githubusercontent.com/32769592/256317225-f3c7607f-e661-4d0a-96a1-83665e4918bc.png"
                alt="Query IQ Logo"
                width={width * 0.15}
                height={0}
                objectFit='contain'
              />
              </div>
            </div>
            <h1 className='text-6xl sm:text-6xl md:text-8xl lg:text-9xl font-bold'>Query IQ</h1>
          </div>

        <div className='container mx-auto px-4 mt-8 text-slate-100 font-reem-kufi'>
          <div className='flex flex-col items-center justify-center font-reem-kufi'>
              <h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl'>
                Your database will thank you!
              </h2>
              <Image
                src='https://user-images.githubusercontent.com/32769592/256666522-7781d527-9e34-449e-9a13-db06fc5390c9.png'
                alt='Query IQ Application Screenshot'
                width={width}
                height={0}
                className='mt-8 bg-gradient-to-bl from-purple-800 to-teal-400 p-1 rounded-2xl rounded-md'              />
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Hero

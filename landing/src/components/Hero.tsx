import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import useWindowDimensions from '../hooks/getWindowDimensions'
const Hero = () => {

  const { height, width } = useWindowDimensions();

  return (
    <>
      <section id="hero" className="outline-red max-h-full w-screen min-w-full max-w-full bg-transparent">
        <div className='outline-green container mx-auto px-4 py-8 text-slate-50 font-reem-kufi'>
          <div className="outline-blue flex items-center justify-center space-x-4">
            <div className="flex justify-center md:mx-0 md:mr-4 ">
              <div className='h-full w-full relative'>
              <Image
                src="https://user-images.githubusercontent.com/32769592/256317225-f3c7607f-e661-4d0a-96a1-83665e4918bc.png"
                alt="Query IQ Logo"
                width={width * 0.1}
                height={0}
                objectFit='contain'
              />
              </div>
            </div>
            <h1 className='text-5xl md:text-9xl font-bold'>Query IQ</h1>
          </div>


          <div className='flex flex-col'>
          <h2>Your database will thank you!
          </h2>
          </div>
          <p>Visualize your SQL database health and query performance metrics</p>
        </div>
      </section>
    </>
  )
}

export default Hero

"use client"

//app/page.tsx
import { UserButton } from "@clerk/nextjs";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  

  return (
    <div>
      <UserButton afterSignOutUrl="/"/>

      <header className="header py-6">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            <Image src="https://i.imgur.com/1mvD6xe.png" alt="Logo" width={isMobile ? 40 : 50} height={isMobile ? 40 : 50} className="logo" />
            <h1 className="text-white text-lg md:text-xl lg:text-2xl ml-4 font-bold"><p className="text-blue-dark dark:text-white">FormWiz</p></h1>
          </div>
          <div className="space-x-2 flex items-center">
            <button className="btn btn-ghost btn-sm lg:btn-md"><p className={`normal-case ${isMobile ? "text-base" : "text-lg"} font-semibold pb-0.5 font-medium text-black dark:text-white-dark`}>Login</p></button>
            <button className={`btn ${isMobile ? 'btn-sm' : 'btn-wide'} lg:btn-md bg-primary hover:bg-primary-dark border-none`}><p className={`normal-case ${isMobile ? 'text-base' : 'text-lg'} text-white pb-0.5 font-medium`}>Get Started</p></button>
          </div>
        </div>
      </header>



      <div className="container mx-auto py-4 px-4 flex">
      <div className="bg-gray-200 p-4 grow">
        <p>This is the first div beneath the header.</p>
      </div>
      <div className="bg-gray-300 p-4 flex-1 ml-4 bg-cover bg-center aspect-[680/768]" style={{"backgroundImage": "url('https://i.imgur.com/EoF2u6j.png')"}}>
        {/* <p>This is the first div beneath the header.</p> */}
        {/* <Image src="https://i.imgur.com/EoF2u6j.png" alt="Logo" width={"1000"} height={"0"} className="logo" /> */}
      </div>
    </div>
    </div>
  )
}
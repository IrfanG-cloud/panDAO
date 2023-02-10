import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Cities() {
  return (
    <div className='flex w-full'>

<div className="w-[20%]">
            <div className="group relative">
            <div className=" w-full h-0 bg-red-">
           <h1 className='text-[14px] text-4xl pb-[5px]'>
            I want to Study
            </h1>
            <p>
            The internet is without a doubt the most important technological development in human history. 
            </p>
            <Link className="mt-5 px-8 py-3 rounded-[10px] bg-red-600 hover:bg-white-600 duration-300" href="https://portal.piaic.org/signup">Continue</Link>
        </div>
    </div>
        </div>

        <div className="w-[20%]">
            <div className="group relative">
            <Image
                src="/islamabad.png"
                width={500}
                height={700}
                alt="Islamabad" />
            <div
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-red-800 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-2xl text-white">A Nationwide Program in Islamabad</h1>
            <Link className="mt-5 px-8 py-3 rounded-[10px] bg-red-400 hover:bg-red-600 duration-300" href="https://portal.piaic.org/signup">Continue</Link>
        </div>
    </div>
        </div>
        

        <div className="w-[20%]">
            <div className="group relative">
            <Image
                src="/karachi.jpg"
                width={500}
                height={700}
                alt="Karachi" />
            <div
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-red-600 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-2xl text-white">A Nationwide Program in Karachi</h1>
            <Link className="mt-5 px-8 py-3 rounded-[10px] bg-red-200 hover:bg-red-400 duration-300" href="https://portal.piaic.org/signup">Continue</Link>
        </div>
    </div>
        </div>

        <div className="w-[20%]">
            <div className="group relative">
            <Image
                src="/lahore.jpg"
                width={500}
                height={700}
                alt="Lahore" />
            <div
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gray-800 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-2xl text-white">A Nationwide Program in Lahore</h1>
            <Link className="mt-5 px-8 py-3 rounded-[10px] bg-gray-400 hover:bg-gray-600 duration-300" href="https://portal.piaic.org/signup">Continue</Link>
        </div>
        </div>
        </div>

        <div className="w-[20%]">
            <div className="group relative">
            <Image
                src="/peshawar.jpg"
                width={500}
                height={700}
                alt="Peshawar" />
            <div
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gray-600 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-2xl text-white">A Nationwide Program in Peshawar</h1>
            <Link className="mt-5 px-8 py-3 rounded-[10px] bg-gray-200 hover:bg-gray-400 duration-300" href="https://portal.piaic.org/signup">Continue</Link>
        </div>
    </div>
        </div>
        
    </div>
  )
}

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Cities() {
  return (
    <div className='flex w-full'>

        <div className="w-[20%]">
            <div className="group relative">
                <div className=" w-full h-[260px] text-center text-white py-[80px] bg-red-800">
                    <h1 className='text-[14px] text-4xl mb-[40px] font-bold'>
                        A Nationwide Program
                    </h1>
    
            </div>
         </div>
        </div>

        <div className="w-[20%] ">
            <div className="group relative h-[260px]">
            <Image
                src="/islamabad.png"
                width={500}
                height={700}
                alt="Islamabad" 
                className='object-cover h-[260px]'
                />
            <div
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gray-800 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-2xl text-white font-bold">Islamabad</h1>
            <Link className="mt-5 px-8 py-3 rounded-[10px] bg-white hover:bg-gray-600 duration-300" href="https://portal.piaic.org/signup">Continue</Link>
        </div>
    </div>
        </div>
        
        <div className="w-[20%]">
            <div className="group relative h-[260px]">
            <Image
                src="/peshawar.jpg"
                width={500}
                height={700}
                alt="Peshawar" 
                className='object-cover h-[260px]'/>
            <div
                className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gray-800 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                <h1 className="text-2xl text-white font-bold">Peshawar</h1>
                <Link className="mt-5 px-8 py-3 rounded-[10px] bg-white hover:bg-gray-600 duration-300" href="https://portal.piaic.org/signup">Continue</Link>
            </div>
            </div>
        </div>
       
        <div className="w-[20%]">
            <div className="group relative h-[260px]">
            <Image
                src="/lahore.jpg"
                width={500}
                height={700}
                alt="Lahore"
                className='object-cover h-[260px]' />
            <div
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gray-800 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-2xl text-white font-bold">Lahore</h1>
            <Link className="mt-5 px-8 py-3 rounded-[10px] bg-white hover:bg-gray-600 duration-300" href="https://portal.piaic.org/signup">Continue</Link>
        </div>
        </div>
        </div>
        <div className="w-[20%]">
            <div className="group relative h-[260px]">
            <Image
                src="/karachi.jpg"
                width={500}
                height={700}
                alt="Karachi"
                className='object-cover h-[260px]'
                />
            <div
            className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-gray-800 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-2xl text-white font-bold"> Karachi</h1>
            <Link className="mt-5 px-8 py-3 rounded-[10px] bg-white hover:bg-gray-600 duration-300" href="https://portal.piaic.org/signup">Continue</Link>
        </div>
    </div>
        </div>

       
        
    </div>
  )
}

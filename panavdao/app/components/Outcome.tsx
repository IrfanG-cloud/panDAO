import React from 'react'
import Link from 'next/link'

export default function Outcome() {
  return (
    <div>
        <div className="bg-gradient-to-tr from-red-800 to-red-600 h-[850px] ">
            <h1 className='text-white font-bold text-[56px] px-[50px] pt-[100px]'>The Outcome for Participants of the Program</h1>
            <p className='text-white text-[24px] px-[50px] '>The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.</p>

        <div className='divide-y divide-slate-200 ...'>
            <div className='text-white font-bold text-[32px] px-[50px] pt-[60px]'>
                <Link href="#" className="border-b-4 mb-[60px]">- Top 5 Metaverse jobs that will rule the future of tech industry</Link> <br/>
                <Link href="#" className="border-b-4 mb-[60px]">- Blockchain Developer Salary - Jun 2022</Link> <br/>
                <Link href="#" className="border-b-4 mb-[60px]">- Web3 Salaries Soar to $750,000 for Rank-and-File DevsCloud-Native Computing Specialization</Link><br/> 
                <Link href="#" className="border-b-4 mb-[60px]">- The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Water</Link> <br/>
                <Link href="#" className="border-b-4 mb-[60px]">- How To Become Metaverse Developer: Scope, Skills, and Salary</Link> 
            </div>
        </div>
        </div>
    </div>
  )
}

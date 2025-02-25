import React from 'react'
import data from './dev.json'
import Image from 'next/image' 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link'; 
export default function Page() {
  return (
    <div className=' mb-8 flex flex-wrap justify-start gap-10'>
      {data.map((value, index) => (
        <div key={index} className='relative shadow-lg w-[400px] rounded-xl overflow-clip  h-[500px] flex-col justify-between mx-auto '>
          <div className='overflow-clip'><Image src={value.image} blurDataURL={value.image} alt="Profile Pic" width={500} height={500} /></div>
          <div className=' flex justify-between p-4 items-center bg-white absolute bottom-0 z-10 w-full'>
          <span className=' text-[1.5rem]  '>{value.name}</span>
            <div className='flex gap-4'>
            <Link href={value.linkedin} target='_blank'><LinkedInIcon/></Link>
            <Link href={value.github} target='_blank'><GitHubIcon/></Link>
            <Link href={`mailto:${value.email}`} target='_blank'><EmailIcon/></Link>
            </div>
            </div>
        </div>
      ))}
    </div>
  )
}

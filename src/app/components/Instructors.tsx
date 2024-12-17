'use client'
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip'

const instructors= [
  {
    "id":1,
    "designation": "Senior Software Engineer",
    "name":"Sir Hamzah",
    "image": "https://plus.unsplash.com/premium_photo-1661371243525-d02768a7feee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwcGVyc29ufGVufDB8fDB8fHww"
  },
  {
    "id":2,
    "designation": "Lead Frontend Developer",
    "name":"Sir Zia",
    "image": "https://images.unsplash.com/photo-1605711285791-0219e80e43a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "id":3,
    "designation": "DevOps Specialist",
    "name":"Sir Ameen Alam",
    "image": "https://images.unsplash.com/photo-1632144130358-6cfeed023e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
  }
]


function Instructors() {
  return (
    <div
    className='h-[40rem] relative overflow-hidden flex flex-col items-center justify-center'
    ><WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
        <h2 className='text-2xl lg:text-7xl md:text-4xl text-white font-bold text-center mb-8'>Meet Our Instructors</h2>
        <p className='text-base md:text-lg text-white text-center'>Meet the Professional Instructors who will guide your coding journey</p></WavyBackground>
        <div className='flex flex-row items-center justify-center w-full mb-10'>
            <AnimatedTooltip items={instructors.map(ins=>({id:ins.id,name:ins.name,designation:ins.designation, image:ins.image}))}/>

            </div>
        </div>
  )
}

export default Instructors
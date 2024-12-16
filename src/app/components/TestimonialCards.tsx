"use client"
import React from 'react'
import { InfiniteMovingCards } from "../../../src/app/components/ui/infinite-moving-cards";


const codingTestimonials=[
    {
        quote:"Learning to code completely changed the trajectory of my career. What started as a hobby turned into a full-time job as a software engineer. The best part is the ability to create solutions to real-world problems and see the impact of my work.",
        name:"Sarah Thompson",
        title:"Frontend Developer with nextjs"
    },
    {
        quote:"Coding taught me how to think logically and creatively at the same time. I never imagined that building something from lines of code could feel so rewarding. Now, as a product manager, understanding code helps me bridge the gap between users and developers.",
        name:"Michael Carter",
        title:"web 3.0 and metaverse course"
    },
    {
        quote:"Becoming a developer was like unlocking a superpower. Coding gave me the tools to turn my ideas into reality, and now I run my own startup. There’s nothing more empowering than being able to build your vision from the ground up.",
        name:"Alex Gomez",
        title:"learn typescript"

    }
]

function CodingTestimonial() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
    <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
            items={codingTestimonials}
            direction="right"
            speed="slow"
  />
        </div>
    </div>
</div>
  )
}

export default CodingTestimonial
"use client"
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
    const featureWebinars =[
        {
            title:`Don't Miss Out: Upcoming Webinars to Expand Your Knowledge in [01/2025]`,
            description:"Join us for a series of insightful webinars happening this [Month/Year]. Covering topics such as [insert key themes, e.g., leadership, AI innovations, marketing strategies], our expert-led sessions will help you gain actionable insights and stay ahead in your industry. Reserve your spot today and explore learning opportunities tailored to your needs.",
            slug:"upcoming-webinars-[01/2025]",
            isFeatured:true
        },
        {
            title:"Level Up Your Skills: Upcoming Coding Webinars You Can't Miss",
            description:"Discover the latest trends, tools, and techniques in coding with our upcoming webinars. Whether you're a beginner or an experienced developer, these sessions cover everything from modern programming languages to best coding practices and advanced frameworks. Join industry experts, enhance your skills, and take your coding journey to the next level. Save your spot today!",
            slug:"upcoming-coding-webinars",
            isFeatured:true
        },
        {
            title:"Explore the Future: Upcoming Artificial Intelligence Webinars You Can't Miss",
            description:"Stay ahead of the curve with our upcoming Artificial Intelligence webinars. Join industry leaders and AI experts as they dive into cutting-edge topics like machine learning, deep learning, AI ethics, and real-world AI applications. Whether you’re an AI enthusiast or a seasoned professional, these sessions will equip you with the knowledge and tools to navigate the evolving AI landscape. Reserve your spot now!",
            slug:"upcoming-artificial-intelligence-webinars",
            isFeatured:true
        },
        {
            title:"Master Next.js: Upcoming Webinar to Supercharge Your Web Development Skills",
            description:"Join us for an exclusive webinar on Next.js, the powerful React framework for building fast and scalable web applications. Learn from industry experts as they cover key topics such as server-side rendering (SSR), static site generation (SSG), API routes, and optimization techniques. Whether you're a beginner or looking to level up your skills, this session will help you unlock the full potential of Next.js. Reserve your spot now and take your web development to the next level!",
            slug:"upcoming-nextjs-webinar",
            isFeatured:true
        },
        {
            title:"Unlock Creativity with AI: Upcoming Generative AI Webinar You Can’t Miss",
            description:"Discover the power of Generative AI in our upcoming webinar. Explore how AI models like GPT, Stable Diffusion, and other cutting-edge tools are transforming content creation, design, and automation. Learn from industry experts as they share insights on AI-generated art, text-to-image models, and real-world applications of generative AI. Whether you're an AI enthusiast or a professional, this session will inspire and empower your creativity. Reserve your spot today!",
            slug:"upcoming-generative-ai-webinar",
            isFeatured:true
        },
        {
            title:"Explore the Future of the Internet: Upcoming Web 3.0 and Metaverse Webinar",
            description:"Dive into the next evolution of the internet with our upcoming Web 3.0 and Metaverse webinar. Join industry leaders as they discuss the key concepts of decentralization, blockchain technology, and the immersive potential of the Metaverse. Learn how Web 3.0 is transforming digital ownership, security, and user experiences while exploring the endless possibilities of virtual worlds. Whether you're a tech enthusiast or a business professional, this webinar will prepare you for the future. Reserve your spot now!",
            slug:"upcoming-web3.0-metaverse-webinar",
            isFeatured:true
        }
    ]
  return (
    <div className='bg-gray-900 p-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide'>FEATURED WEBINARS</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl uppercase'>
                    Enhance your coding journey</p>
            </div>
            <div className='mt-10'>
                <HoverEffect items={featureWebinars.map(webinar=>({
                    title:webinar.title,
                    description:webinar.description,
                    link:'/'
                }))}/>
            </div>
            <div className='mt-10 text-center'>
                <Link href={"/"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white
    hover:bg-gray-100 transition duration-200'>
                View All Webinars</Link>
            </div>

        </div>
    </div>
  )
}

export default UpcomingWebinars
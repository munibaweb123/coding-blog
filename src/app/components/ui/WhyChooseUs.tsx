import React from 'react'
import { StickyScroll } from './sticky-scroll-reveal'

const codingContent = [
    {
        title: "Unlocking the Power of Next.js: The Go-To Framework for Modern Web Development",
        description: "Next.js has quickly become the framework of choice for developers looking to build fast, scalable, and feature-rich web applications. In this blog, we dive deep into its capabilities, including server-side rendering (SSR), static site generation (SSG), API routes, and the unmatched developer experience it offers. Learn why Next.js is revolutionizing how we build the web and how you can leverage it for your next project."
    },
    {
        title: "Supercharge Your JavaScript with TypeScript: A Guide to Better Code",
        description: "TypeScript has transformed how developers write JavaScript by introducing a powerful type system that enhances code quality and developer productivity. In this blog, we'll explore why TypeScript is a game-changer, its core features, and how you can start using it to build more reliable and scalable applications. From beginners to advanced developers, this guide will help you understand why TypeScript is the future of JavaScript development."
    },
    {
        title: "Generative AI: Transforming Creativity and Problem-Solving in the Digital Age",
        description: "Generative AI is revolutionizing industries, from art and design to business and science, by enabling machines to create new, innovative content. In this blog, we'll explore what generative AI is, how it works, and its real-world applications. Dive into the future of artificial intelligence and learn how generative models like GPT and DALL·E are shaping the way we innovate and create."
    },
    {
        title: "Python: The Versatile Language Powering Modern Innovation",
        description: "Python has become one of the most popular and versatile programming languages, powering everything from web development to artificial intelligence. In this blog, we'll explore what makes Python so special, its key features, and the wide range of applications it supports. Whether you're a beginner or an experienced developer, learn how Python can help you create impactful projects with its simplicity and power."
    },
    {
        title: "Web 3.0 and the Metaverse: Shaping the Future of Digital Interaction",
        description: "Web 3.0 and the Metaverse represent the next big leap in internet evolution, combining blockchain, decentralization, and immersive virtual experiences. In this blog, we'll break down what Web 3.0 and the Metaverse mean, how they interconnect, and the transformative potential they hold for businesses, creators, and everyday users. Explore the technologies driving this revolution and how they're redefining the way we work, play, and connect."
    }
]

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={codingContent}/>
    </div>
  )
}

export default WhyChooseUs
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-black text-gray-400 py-12'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
            <div>
                <h2 className='text-2xl font-bold'>About Us</h2>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Quick Links</h2>
             <ul>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/courses"}>Courses</Link></li>
                <li><Link href={"/contact"}>Contact Us</Link></li>
             </ul>
             


            </div>
            <div>
            <h2 className='text-2xl font-bold'>Follow Us</h2>
            <div className='flex items-center gap-x-4'>
              <Link href={"facebook.com"}><FaFacebook size={24}/></Link>
                <Link href={"whatsapp.com"}><FaWhatsapp size={24}/></Link>
                <Link href={"linkedin.com"}><FaLinkedin size={24}/></Link>
              </div>

            </div>
            <div>
            <h2 className='text-2xl font-bold'>Contact Us</h2>
            </div>
        </div>
        <p className='text-xs text-center'>&copy; 2024 Coding School. All right reserved.</p>

    </footer>
  )
}

export default Footer
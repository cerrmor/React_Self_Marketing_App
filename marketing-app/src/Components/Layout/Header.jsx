import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import logo from './../../assets/Images/logo.png'

function Header() {
  return (
    <div className='flex justify-between items-center'>
      {/* temp logo image for layout purposes */}
      <img src={logo} className='w-[180px]'/>
      
      <ul className='flex gap-4 md:gap-14'>
        <li className='hover:font-bold cursor-pointer'>Home</li>
        <li className='hover:font-bold cursor-pointer'>About Us</li>
        <li className='hover:font-bold cursor-pointer'>Contact Us</li>
      </ul>
      
      <button className='bg-red-700 rounded-full text-white flex items-center'>
        Projects <IoLogoGithub className='ml-3 text-[20px]' /> 
      </button>
    
    </div>
  )
}

export default Header
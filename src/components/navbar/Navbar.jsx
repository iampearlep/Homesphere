import React from 'react'
import './Header.css'


const Navbar = () => {
  return (
    <nav className='capitalize hidden lg:flex'>
    <ul className='flex items-center space-x-8'>
      <li className='text-sm text-gray-400 px-6 py-2 cursor-pointer'>Property</li>
      <li className='text-sm text-gray-400 px-6 py-2 cursor-pointer'>Services</li>
      <li className='text-sm text-gray-400 px-6 py-2 cursor-pointer'>Product</li>
      <li className='text-sm text-gray-400 px-6 py-2 cursor-pointer'>About Us</li>
      <li className='text-sm text-white font-semibold px-6 py-2 bg-blue-700 rounded-md cursor-pointer'>Contact</li>
    </ul> 
</nav>
  )
}

export default Navbar
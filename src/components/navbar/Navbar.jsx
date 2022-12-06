import React from 'react'
import './Header.css'


const Navbar = () => {
  return (
    <nav className='capitalize hidden lg:flex'>
    <ul className='flex items-center space-x-8'>
      <li className='text-sm text-gray-400 px-6 py-2'>Property</li>
      <li className='text-sm text-gray-400 px-6 py-2'>Services</li>
      <li className='text-sm text-gray-400 px-6 py-2'>Product</li>
      <li className='text-sm text-gray-400 px-6 py-2'>About Us</li>
      <li className='text-sm text-white font-semibold px-6 py-2 bg-blue-700 rounded-md'>Contact</li>
    </ul> 
</nav>
  )
}

export default Navbar
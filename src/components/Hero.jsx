import React from 'react'
import { MdLocationOn } from 'react-icons/md';
import heroImg from '../assets/hero.jpg';
 
const Hero = () => {
  return (
     <div className='bg-black text-white'>
    <div className='mx-auto flex container mt-24'>
        <div className='px-24 w-7/12'>
            <h1 className='text-6xl font-bold w-full tracking-wide mb-10'>Discover<br /> Most Suitable Property</h1>
            <p className='text-gray-400 w-9/12 mb-8'>Find a variety of property that suit you very easily, forget all difficulties in finding a residence for you</p>
            <form>
                <MdLocationOn className='absolute text-blue-700 z-20 mt-5 ml-5 w-6 h-6 ' />
                <input type="text" placeholder=' Search by location...' className='w-2/5 absolute z-10 px-10 py-4 rounded-md border-4'/>
                <button className='absolute text-md text-white font-semibold px-8 py-3 bg-blue-700 z-10 rounded-md ml-96 mt-2 shadow-2xl'>Search</button>
            </form>
            <div className='flex container mt-36 w-2/3 h-24 mb-6'>
                <div>
                    <h2 className='font-semibold text-3xl'>9K<span className='text-orange-500'>+</span></h2>
                    <p className='text-gray-400'>Premium Product</p>
                </div>
                <div>
                    <h2 className='font-semibold text-3xl'>2K<span className='text-orange-500'>+</span></h2>
                    <p className='text-gray-400'>Happy Customer</p>
                </div>
                <div>
                    <h2 className='font-semibold text-3xl '>28<span className='text-orange-500'>+</span></h2>
                    <p className='text-gray-400'>Awards Winning</p>
                </div>
            </div>
        </div>
        <div>
            <img src={heroImg} alt="" className='hidden md:block rounded-t-full rounded-b-2xl shadow-2xl -ml-32 -mt-16 absolute w-2/5'/>
        </div>
    </div>
    </div>
  )
}

export default Hero
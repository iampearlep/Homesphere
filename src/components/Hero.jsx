import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import heroImg from '../assets/hero.jpg';
 
const Hero = () => {
  return (
     <div className='bg-black text-white'>
    <div className='mx-auto flex container mt-24'>
        <div className='flex flex-col justify-center items-center md:justify-start md:items-start px-5 md:px-24 md:w-7/12'>
            <h1 data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-out" className='text-center text-5xl md:text-6xl md:text-left font-bold w-full tracking-wide mb-10'>Discover<br /> Most Suitable Property</h1>
            <p data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-out" className='text-gray-400 text-center md:text-left w-full md:w-9/12 mb-8'>Find a variety of property that suit you very easily, forget all difficulties in finding a residence for you</p>
            <form className='w-11/12'>
                <MdLocationOn data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-out" className='absolute text-blue-700 z-20 mt-5 ml-5 w-6 h-6 ' />
                <input type="text" placeholder=' Search by location...' className=' w-full md:w-2/5 md:absolute z-10 px-10 py-4 rounded-md border-4'/>
                <button data-aos="fade-right" data-aos-offset="210" data-aos-easing="ease-in-out" className='absolute text-md text-white font-semibold px-5 md:px-8 py-3 bg-blue-700 z-10 rounded-md -ml-24 md:ml-96 mt-2 shadow-2xl'>Search</button>
            </form>
            <div className='container flex flex-row justify-center items-center text-center  md:text-left w-full mt-10 md:mt-32 md:w-2/3 md:justify-start md:items-start h-24 mb-10 md:mb-3'>
                <div data-aos="fade-up" data-aos-offset="220" data-aos-easing="ease-in-out">
                    <h2 className='font-semibold text-3xl'>9K<span className='text-orange-500'>+</span></h2>
                    <p className='text-gray-400 w-11/12'>Premium Product</p>
                </div>
                <div data-aos="fade-up" data-aos-offset="220" data-aos-easing="ease-in-out">
                    <h2 className='font-semibold text-3xl'>2K<span className='text-orange-500'>+</span></h2>
                    <p className='text-gray-400 w-11/12'>Happy Customer</p>
                </div>
                <div data-aos="fade-up" data-aos-offset="220" data-aos-easing="ease-in-out">
                    <h2 className='font-semibold text-3xl '>28<span className='text-orange-500'>+</span></h2>
                    <p className='text-gray-400 w-11/12'>Awards Winning</p>
                </div>
            </div>
        </div>
        <div>
            <img data-aos="zoom-in-left" data-aos-offset="200" data-aos-easing="ease-in-out" src={heroImg} alt="" className='hidden md:block rounded-t-full rounded-b-2xl shadow-2xl -ml-32 -mt-16 absolute w-2/5'/>
        </div>
    </div>
    </div>
  )
}

export default Hero
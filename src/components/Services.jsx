import React from 'react';
import valueImg from '../assets/value.jpg'
import Accordion from './Accordion';

const Services = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-center items-center container mx-auto mt-32 md:space-x-16'>
      <div className='w-10/12 md:w-1/2 flex justify-center'>
        <img src={valueImg} alt="" className='rounded-t-full rounded-b-lg shadow-2xl border-8 border-gray-200 ring-8 ring-gray-200'/>
      </div>
      <div className='w-11/12 md:w-5/12 md:mt-10 flex flex-col'>
      <span className='text-orange-500 text-center md:text-left w-1/3 text-md'>Our Value</span>
      <h2 className='text-3xl text-center md:text-left md:text-4xl font-bold text-primary mb-5'>Value We Give To You<span className='text-orange-500'>.</span></h2>
      <p className='text-md text-secondary text-center md:text-left md:w-10/12 mb-8'>We always ready to help by providing the
       best service for you, We believe a good place to live can make your life better</p>
       <Accordion />
      </div>
    </div>
  )
}

export default Services
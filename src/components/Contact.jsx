import React from 'react';
import Boxes from './Boxes';
import contactImg from '../assets/contact.jpg';

const Contact = () => {
  return (
    <div className='flex container mx-auto mt-32'>
      <div className='w-5/12 ml-12'>
      <span className='text-orange-500 text-md'>Contact</span>
      <h2 className='text-4xl font-bold text-primary mb-5'>Easy to contact us<span className='text-orange-500'>.</span></h2>
      <p className='text-md text-secondary  w-10/12 mb-8'>Is there a problem finding your dream home? Need a guide in buying your first home? or need a consultation on residential issues?
      just contact us</p>
      <Boxes />
      </div>
      <div className=' w-1/2 flex justify-center'>
      <img src={contactImg} alt="" className='rounded-t-full rounded-b-lg w-10/12 shadow-2xl border-8 border-gray-200 ring-8 ring-gray-200'/>
      </div>
    </div>
  )
}

export default Contact
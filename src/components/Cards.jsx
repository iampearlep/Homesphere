import React from 'react';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';

const Cards = () => {
  return (
    <div className='mx-auto container mt-20'>
     <div className='flex flex-col text-center md:text-left md:ml-10 mb-10'>
     <span data-aos="fade-right" data-aos-offset="240" data-aos-easing="ease-in-out" className='text-orange-500 text-md'>Best Choice</span>
      <h2 data-aos="fade-right" data-aos-offset="250" data-aos-easing="ease-in-out" className='text-3xl md:text-4xl font-bold text-primary'>Popular Residences<span className='text-orange-500'>.</span></h2>
     </div>
     <div className='grid grid-cols-1 gap-7 md:grid-cols-3 justify-items-center'>
      <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-out" className='w-80 rounded-xl hover:shadow-xl hover:duration-500 hover:delay-200 hover:ease-in-out'>
        <img data-aos="flip-up" data-aos-offset="260" data-aos-easing="ease-in-out" src={card1} alt="" className='max-h-80 rounded-xl mb-5'/>
       <div className='ml-3 mb-5'>
       <h3 className='text-gray-500 text-xl font-semibold '><span className='text-orange-500'>$</span>47,043</h3>
        <h3 className='text-primary text-lg font-semibold mb-2'>Aliva Priva Jardin</h3>
        <p className='text-sm text-secondary '>Lorem Ipsum Dolor Sit Amet, Sed Do Eiusmod Tempor Incididunt, Enim Ad Minim Veniam.</p>
       </div>
      </div>
      <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-out" className='w-80 rounded-xl hover:shadow-xl hover:duration-500 hover:delay-200 hover:ease-in-out'>
        <img data-aos="flip-up" data-aos-offset="260" data-aos-easing="ease-in-out" src={card2} alt=""  className='max-h-80 rounded-xl mb-5'/>
       <div className='ml-3 mb-5'>
       <h3 className='text-gray-500 text-xl font-semibold '><span className='text-orange-500'>$</span>66,353</h3>
        <h3 className='text-primary text-lg font-semibold mb-2'>Asatti Garden City</h3>
        <p className='text-sm text-secondary '>Lorem Ipsum Dolor Sit Amet, Sed Do Eiusmod Tempor Incididunt, Enim Ad Minim Veniam.</p>
       </div>
      </div>
      <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-out" className='w-80 rounded-xl hover:shadow-xl hover:duration-500 hover:delay-200 hover:ease-in-out'>
        <img data-aos="flip-up" data-aos-offset="260" data-aos-easing="ease-in-out" src={card3} alt=""  className='max-h-80 rounded-xl mb-5'/>
       <div className='ml-3 mb-5'>
       <h3 className='text-gray-500 text-xl font-semibold '><span className='text-orange-500'>$</span>35,585</h3>
        <h3 className='text-primary text-lg font-semibold mb-2'>Citraland Puri Serang</h3>
        <p className='text-sm text-secondary '>Lorem Ipsum Dolor Sit Amet, Sed Do Eiusmod Tempor Incididunt, Enim Ad Minim Veniam.</p>
       </div>
      </div>
     </div>
    </div>
  )
}

export default Cards
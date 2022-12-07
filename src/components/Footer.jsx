import React from 'react'

const Footer = () => {
  return (
    <div className='container mx-auto mt-32 w-10/12'>
   <div className='flex justify-between mb-16'>
   <div className='  text-primary space-y-4'>
        <h2 className='text-2xl font-bold'>Homesphere</h2>
        <p className='text-sm w-7/12'>Our vision is to make all people
          the best place to live for them
        </p>
      </div>
      <div className='flex space-x-12'>
        <div className='space-y-4 text-primary'>
          <h3 className='text-lg font-semibold'>About</h3>
          <p className='text-xs'>About Us</p>
          <p className='text-xs'>Features</p>
          <p className='text-xs'>News & Blog</p>
        </div>
        <div className='space-y-4 text-primary'>
          <h3 className='text-lg font-semibold'>Company</h3>
          <p className='text-xs'>How We Work</p>
          <p className='text-xs'>Capital</p>
          <p className='text-xs'>Security</p>
        </div>
        <div className='space-y-4 text-primary'>
          <h3 className='text-lg font-semibold'>Support</h3>
          <p className='text-xs'>FAQs</p>
          <p className='text-xs'>Support Center</p>
          <p className='text-xs'>Contact Us</p>
        </div>
        <div className='space-y-4 text-primary'>
          <h3 className='text-lg font-semibold'>Movement</h3>
          <p className='text-xs'>What Homesphere?</p>
          <p className='text-xs'>Support Us</p>
        </div>
      </div>
   </div>
   <div className='flex justify-between mb-5 text-primary text-xs'>
    <p>&copy; 2022 Homesphere @iampearlep. All Rights Reserved</p>
    <p>Terms & Agreements <span>Privacy policy</span></p>
   </div>
    </div>
  )
}

export default Footer
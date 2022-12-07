import React from 'react'

const CTA = () => {
  return (
    <div className=' flex justify-center items-center container mx-auto mt-32 w-10/12'>
      <div className=' cta flex flex-col w-11/12 px-32 py-12 items-center text-center rounded-2xl border-8 border-tertiary '>
        <h2 className='text-white text-4xl font-bold mb-6'>Get started with Homesphere</h2>
        <p className='w-1/2 text-tertiary text-md mb-6'>Subscribe and find super attractive price quotes from us, Find your residence soon</p>
        <button className='text-md text-white font-semibold px-8 py-2 bg-tertiary mt-4 rounded-md shadow-2xl border-2 border-white'>Get Started</button>
      </div>
    </div>
  )
}

export default CTA
import React from 'react';
import Client1 from '../assets/client-databiz.svg';
import Client2 from '../assets/client-audiophile.svg';
import Client3 from '../assets/client-maker.svg';
import Client4 from '../assets/client-meet.svg';

const Clients = () => {
  return (
    <div className='mx-auto container'>
      <div className='flex space-x-40 mt-28 w-full items-center justify-center'>
        <img src={Client1} alt="" className='w-48'/>
        <img src={Client2} alt="" className='w-24'/>
        <img src={Client3} alt="" className='w-40'/>
        <img src={Client4} alt="" className='w-40'/>
      </div>
    </div>
  )
}

export default Clients
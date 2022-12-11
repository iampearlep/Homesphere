import React from 'react';
import {MdPhoneInTalk, MdMail} from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs";
import {HiVideoCamera} from "react-icons/hi";


const Boxes = () => {
  return (
    <div className='container grid gap-4 grid-cols-2 w-10/12 overflow-hidden'>
        <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-out" className='flex flex-col items-center justify-center rounded-md shadow-sm py-6 hover:shadow-xl hover:duration-500 hover:delay-200 hover:ease-in-out'>
            <div className='flex items-center justify-center space-x-3 mb-6'>
                <MdPhoneInTalk className='w-6 h-6 text-blue-700' />
                <div>
                    <h2 className='text-primary font-semibold mb-1 text-sm'>Call</h2>
                    <p className='text-xs text-secondary '>021.123.145.14</p>
                </div>
            </div>
            <button className='w-9/12 py-3 rounded-md bg-blue-50 text-blue-700 font-bold text-xs  hover:bg-blue-700 hover:text-white hover:shadow-md hover:duration-500 hover:delay-50 hover:ease-linear'>Call Now</button>
        </div>
        <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-out" className='flex flex-col items-center justify-center rounded-md shadow-sm py-6 hover:shadow-xl hover:duration-500 hover:delay-200 hover:ease-in-out'>
            <div className='flex items-center justify-center space-x-3 mb-6'>
                <BsFillChatDotsFill className='w-6 h-6 text-blue-700' />
                <div>
                    <h2 className='text-primary font-semibold mb-1 text-sm'>Chat</h2>
                    <p className='text-xs text-secondary '>021.123.145.14</p>
                </div>
            </div>
            <button className='w-9/12 py-3 rounded-md bg-blue-50 text-blue-700 font-bold text-xs  hover:bg-blue-700 hover:text-white hover:shadow-md hover:duration-500 hover:delay-50 hover:ease-linear'>Chat Now</button>
        </div>
        <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-out" className='flex flex-col items-center justify-center rounded-md shadow-sm py-6 hover:shadow-xl hover:duration-500 hover:delay-200 hover:ease-in-out'>
            <div className='flex items-center justify-center space-x-3 mb-6'>
                <HiVideoCamera className='w-6 h-6 text-blue-700' />
                <div>
                    <h2 className='text-primary font-semibold mb-1 text-sm'>Video Call</h2>
                    <p className='text-xs text-secondary '>021.123.145.14</p>
                </div>
            </div>
            <button className='w-9/12 py-3 rounded-md bg-blue-50 text-blue-700 font-bold text-xs  hover:bg-blue-700 hover:text-white hover:shadow-md hover:duration-500 hover:delay-50 hover:ease-linear'>Video Call Now</button>
        </div>
        <div data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-out" className='flex flex-col items-center justify-center rounded-md shadow-sm py-6 hover:shadow-xl hover:duration-500 hover:delay-200 hover:ease-in-out'>
            <div className='flex items-center justify-center space-x-3 mb-6'>
                <MdMail className='w-6 h-6 text-blue-700' />
                <div>
                    <h2 className='text-primary font-semibold mb-1 text-sm'>Message</h2>
                    <p className='text-xs text-secondary '>021.123.145.14</p>
                </div>
            </div>
            <button className='w-9/12 py-3 rounded-md bg-blue-50 text-blue-700 font-bold text-xs hover:bg-blue-700 hover:text-white hover:shadow-md hover:duration-500 hover:delay-50 hover:ease-linear'>Message Now</button>
        </div>
    </div>
  )
}

export default Boxes
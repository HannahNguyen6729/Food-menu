import React from 'react'

export default function BTTailwind() {
  return (
    <div className="container mx-auto">
        <p className="text-center text-5xl m-16 text-green-600">Welcome to my website built with Tailwind</p>
        <div className="grid grid-cols-3 gap-7">
            <div className= 'rounded-lg bg-gray-300'>
                <div className='text-center mb-10 mt-5 p-5'>
                    <p className='font-bold text-purple-700'>Category</p>
                    <p className='my-4 font-bold text-xl'>Frontend Developer</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita omnis quam earum temporibus suscipit sint, voluptatum quia a assumenda error.</p>
                </div>
                <div className='flex justify-between items-center font-bold bg-gray-200 p-3 rounded-b-lg'>
                    <span> 1 BTC </span>
                    <button className='rounded px-4 py-2 text-white bg-purple-500 transition hover:bg-purple-300 hover:text-purple-500 duration-700'>Register</button>
                </div>
            </div>
            <div className= 'rounded-lg bg-gray-300'>
                <div className='text-center mb-10 mt-5 p-5'>
                    <p className='font-bold text-purple-700'>Category</p>
                    <p className='my-4 font-bold text-xl'>Frontend Developer</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita omnis quam earum temporibus suscipit sint, voluptatum quia a assumenda error.</p>
                </div>
                <div className='flex justify-between items-center font-bold bg-gray-100 p-3 rounded-b-lg'>
                    <span> 1 BTC </span>
                    <button className='rounded px-4 py-2 text-white bg-purple-500 transition hover:bg-purple-300 hover:text-purple-500 duration-700'>Register</button>
                </div>
            </div>
            <div className= 'rounded-lg bg-gray-300'>
                <div className='text-center mb-10 mt-5 p-5'>
                    <p className='font-bold text-purple-700'>Category</p>
                    <p className='my-4 font-bold text-xl'>Frontend Developer</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita omnis quam earum temporibus suscipit sint, voluptatum quia a assumenda error.</p>
                </div>
                <div className='flex justify-between items-center font-bold bg-gray-100 p-3 rounded-b-lg'>
                    <span> 1 BTC </span>
                    <button className='rounded px-4 py-2 text-white bg-purple-500 transition hover:bg-purple-300 hover:text-purple-500 duration-700'>Register</button>
                </div>
            </div>
            
        </div>
        {/* Dung flex */}
        {/* <div className="flex justify-center gap-4">
            <div className= 'rounded-lg bg-gray-300'>
                <div className='text-center mb-10 mt-5 p-5'>
                    <p className='font-bold text-purple-700'>Category</p>
                    <p className='my-4 font-bold text-xl'>Frontend Developer</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita omnis quam earum temporibus suscipit sint, voluptatum quia a assumenda error.</p>
                </div>
                <div className='flex justify-between items-center font-bold bg-gray-100 p-3'>
                    <span> 1 BTC </span>
                    <button className='rounded px-4 py-2 text-white bg-purple-500'>Register</button>
                </div>
            </div>
            <div className= 'rounded-lg bg-gray-300'>
                <div className='text-center mb-10 mt-5 p-5'>
                    <p className='font-bold text-purple-700'>Category</p>
                    <p className='my-4 font-bold text-xl'>Frontend Developer</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita omnis quam earum temporibus suscipit sint, voluptatum quia a assumenda error.</p>
                </div>
                <div className='flex justify-between items-center font-bold bg-gray-100 p-3'>
                    <span> 1 BTC </span>
                    <button className='rounded px-4 py-2 text-white bg-purple-500'>Register</button>
                </div>
            </div>
            <div className= 'rounded-lg bg-gray-300'>
                <div className='text-center mb-10 mt-5 p-5'>
                    <p className='font-bold text-purple-700'>Category</p>
                    <p className='my-4 font-bold text-xl'>Frontend Developer</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita omnis quam earum temporibus suscipit sint, voluptatum quia a assumenda error.</p>
                </div>
                <div className='flex justify-between items-center font-bold bg-gray-100 p-3'>
                    <span> 1 BTC </span>
                    <button className='rounded px-4 py-2 text-white bg-purple-500'>Register</button>
                </div>
            </div>
            
        </div> */}
    </div>
  )
}

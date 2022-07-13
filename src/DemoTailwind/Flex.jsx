import React from 'react'

export default function Flex() {
  return (
    <div className=" h-screen bg-blue-300 container">
         <button className='rounded-full bg-blue-400 h-40 w-40'>background</button>
        <div className="flex justify-end h-1/2 gap-5 bg-yellow-300">
            <div className=' h-1/4 w-1/4 bg-orange-400'></div>
            <div className=' h-1/4 w-1/4 bg-blue-400'></div>
            <div className=' h-1/4 w-1/4 bg-green-400'></div>
        </div>
        <div className="flex justify-center items-stretch h-1/2 gap-5 bg-red-300">
            <div className='  w-1/4 bg-orange-400'></div>
            <div className='  w-1/4 bg-blue-400'></div>
            <div className='  w-1/4 bg-green-400'></div>
        </div>
        <div className="flex justify-end items-center h-1/2 gap-5 bg-yellow-300">
            <div className=' h-1/4 w-1/4 bg-orange-400'></div>
            <div className=' h-1/4 w-1/4 bg-blue-400'></div>
            <div className=' h-1/4 w-1/4 bg-green-400'></div>
        </div>
        <div className="flex flex-wrap h-1/2 gap-5 content-center bg-pink-300">
            <div className=' h-1/4 w-1/4 bg-orange-400'></div>
            <div className=' h-1/4 w-1/4 bg-blue-400'></div>
            <div className=' h-1/4 w-1/4 bg-green-400'></div>
            <div className=' h-1/4 w-1/4 bg-purple-400'></div>
            <div className=' h-1/4 w-1/4 bg-pink-400'></div>
        </div>
        <div className="flex flex-wrap h-1/2 gap-5 content-start justify-end bg-gray-300">
            <div className=' h-1/4 w-1/4 bg-orange-400'></div>
            <div className=' h-1/4 w-1/4 bg-blue-400'></div>
            <div className=' h-1/4 w-1/4 bg-green-400'></div>
            <div className=' h-1/4 w-1/4 bg-purple-400'></div>
            <div className=' h-1/4 w-1/4 bg-pink-400'></div>
        </div>
        <div className=' gap-6 h-full bg-pink-400'>
            <div className='rounded-full bg-green-400 h-20 w-20 '></div>
            <div className='rounded-full bg-purple-400 h-20 w-20'>background</div>
            <div className='rounded-full bg-blue-400 h-40 w-40'>background</div>
        </div>
        <div className='container'>
            <div className='rounded-full bg-blue-400 h-40 w-40'>background</div>
        </div>
    </div>
  )
}

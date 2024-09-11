import React from 'react'

function Main() {
  return (
    <div className='w-full h-[480px] fixed flex px-28 py-8'>
      <div className='h-[400px] w-[50%]'>
        <h1 className='font-extrabold text-[68px] leading-none pl-4'>YOUR FEET DESERVE BEST</h1>
        <p className='pl-4 pt-3 text-[16px]'>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.THEN YOU AND YOUR SHOES ARE THE BEST.</p>
        <div className='flex gap-24 pl-4 pt-4'>
          <button className='border-2 border-solid border-zinc-900 p-1 font-bold text-white bg-red-600'>Shop Now</button>
          <button className='border-2 border-solid border-gray-400 text-gray-500 p-1 font-bold '>Category</button>
        </div>
        <div className='flex pl-3 pt-5'>
          <img className='w-10 h-9' src="/amazon.jpg" alt="" />
          <img className='w-11 h-7' src="/Flipkart.png" alt="" />
        </div>
      </div>
      <div className='h-[400px] w-[50%]'>
        <img className='pb-6 h-[440px]' src="/nike.png" alt="" />
      </div>
    </div>
  )
}

export default Main

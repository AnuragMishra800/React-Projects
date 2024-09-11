import React from 'react'

function Nav() {
  return (
    <div className='w-full h-20'>
      <nav className='flex justify-between items-center m-6'>
        <div>
          <img className='h-16 w-24' src="/Nike-Logo-1978-present.jpg" alt="" />
        </div>
        <ul className='flex gap-16 font-semibold'>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className='h-8 bg-red-600 flex items-center w-16 justify-center font-bold text-white'>Login</button>
      </nav>
    </div>
  )
}

export default Nav

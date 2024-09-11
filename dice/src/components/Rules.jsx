import React from 'react'

function Rules() {
  return (
    <div className='h-screen w-full p-6 bg-[#fbf1f1]'>
      <h1 className='text-6xl font-bold text-center mt-10'>How To Play Dice Game?</h1>
      <div className='p-16'>
        <p className='font-medium text-2xl'>1-Select Any Number.</p>
        <p className='font-medium mt-3 text-2xl'>2-Click On Dice Image.</p>
        <p className='font-medium mt-3 text-2xl'>3-After Click On Dice If Selected Number Is Equal To Dice Number.</p>
        <p className='font-medium mt-3 text-2xl'>4-Then You Will Get Same Number Added To Your Total Score.</p>
        <p className='font-medium mt-3 text-2xl'>5-And If You Are Wrong Then Two Points Will Deducted From Your Total Score.</p>
        <p className='font-medium mt-3 text-2xl'>6-The Same Process Will Repeat & Repeat Again.</p>
      </div>
    </div>
  )
}

export default Rules

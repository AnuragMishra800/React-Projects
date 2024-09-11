import React from 'react'

function TotalScore({score}) {
  return (
    <div className='max-w-40 text-center mb-6'>
      <h1 className='text-8xl leading-[100px]'>{score}</h1>
      <p className='font-medium text-base'>Total Score</p> 
    </div>
  )
}

export default TotalScore

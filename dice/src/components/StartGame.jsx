import React from 'react'

function StartGame(props) {
  return (
    <div className='max-w-[1180px] p-28 h-screen flex mx-0 my-auto items-center'>
      <div>
        <img src="/dices.png" alt="dices" />
      </div>
      <div>
        <h1 className='text-8xl whitespace-nowrap '>Dice Game</h1>
        <button onClick={props.click} className='cursor-pointer px-[6px] py-[14px] bg-black border-2 border-solid border-transparent text-white rounded-md min-w-[220px] transition ease-in d duration-[0.6s] hover:bg-white hover:border-2 hover:border-solid hover:border-black hover:transition hover:duration-[0.3s] hover:ease-in hover:text-black'>Play Now</button>  
      </div>
    </div>
  )
}

export default StartGame

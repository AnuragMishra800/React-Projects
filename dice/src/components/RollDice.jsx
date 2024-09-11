import React, { useState } from 'react'

function RollDice({currentDice,rollDice}) {
    return (
        <div className='flex justify-center mt-4 flex-col items-center'>
            <div onClick={rollDice} className='cursor-pointer'>
                <img src={`/dice_${currentDice}.png`} alt="Dice 1" />
            </div>
            <p className='text-2xl'>Click On Dice To Roll</p>
        </div>
    )
}

export default RollDice

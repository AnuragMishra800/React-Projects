import React, { useState } from 'react'

function NumberSelector({error,setError,selectedNumber,setSelectedNumber}) {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    const numberSelectorHandler = (value) => {
        setSelectedNumber(value)
        setError("")
    }
    return (
        <div className='flex items-end flex-col'>
            <p className='font-bold text-red-700  text-[16px]'>{error}</p>
            <div className='flex gap-6'>
                {arrNumber.map((value, i) => (
                    <div key={i} onClick={() => numberSelectorHandler(value)} className='box h-16 w-16 border-2 border-black grid place-items-center text-2xl font-bold hover:bg-black hover:text-white'> {value}</div>
                ))
                }
            </div>
            <p className='text-2xl font-bold'>Select Number</p>
            <p className='text-2xl font-bold'>You Have Selected Number = {selectedNumber}</p>
        </div >
    )
}

export default NumberSelector 

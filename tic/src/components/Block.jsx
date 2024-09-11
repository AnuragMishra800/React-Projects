import React from 'react'

function Block(props) {
  return (
    <div onClick={props.onClick} className='font-mono flex items-center justify-center text-7xl font-semibold h-28 w-28 border-2 border-solid border-black cursor-pointer rounded-lg p-4'>
      {props.value}
    </div>
  ) 
}

export default Block

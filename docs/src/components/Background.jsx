import React from 'react'

function Background() {
    return (
        <>
            <div className='fixed z-[2] w-full h-screen'>
                <div className='absolute top-[4%] w-full py-8 text-xl text-zinc-500 flex justify-center font-semibold'>Documents</div>
                <h1 className='top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold absolute text-[13vw] leading-none tracking-tighter text-zinc-900'>Docs</h1>
            </div>
        </>
    )
}

export default Background

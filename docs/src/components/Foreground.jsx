import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null); 
    const data = [
        { desc: "Myself Anurag Mishra, Frontend-Developer.", filesize: ".6mb", close: false, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }, },
        { desc: "Myself Kunal Kumar, Mern-Stack Developer.", filesize: ".9mb", close: true, tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" } },
        { desc: "Myself Ayush, Full Stack Developer.", filesize: ".4mb", close: false, tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" }, }
    ]
    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-8 flex-wrap p-6'>
            {data.map((item, index)=>(
                <Card data={item} reference={ref}/>
            ))}
        </div>
    )
}

export default Foreground

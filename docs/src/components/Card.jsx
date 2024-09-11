import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"


function Card({ data, reference}) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic=
        {.1} className='flex-shrink-0 relative w-[170px] h-52 rounded-[30px] bg-zinc-900/90 text-white px-5 py-7 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-xs mt-5 font-semibold leading-tight'>{data.desc}</p>
            <div className='footer absolute left-0 bottom-0 w-full'>
                <div className='flex justify-between items-center mb-2 py-2 px-5'>
                    <h5>{data.filesize}</h5>
                    <span className='w-6 h-6 flex bg-zinc-600 rounded-full items-center justify-center'>
                        {data.close ? <IoClose /> : <LuDownload size=".8em" color='#fff' />}
                    </span>
                </div>
                {data.tag.isOpen && (
                    <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-500"} flex items-center justify-center`}>
                        <h3 className='text-xs font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default Card

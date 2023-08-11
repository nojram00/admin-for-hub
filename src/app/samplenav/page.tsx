'use client'
import { useState } from 'react';
import Image from 'next/image'
export default function Sample(){

    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <div className="min-h-screen bg-white w-full">
                <button onClick={() => { setOpen(!isOpen)}} className={` bg-blue-400 ${isOpen ? 'translate-x-[900%]' : 'translate-x-0'} transition-transform ease-in-out duration-300`}>
                    <Image src={'/Icons/list.svg'}
                            width={39}
                            height={39}
                            alt='list-icon'/>
                </button>
                <nav className={` bg-blue-400 w-1/6 ${isOpen ? '-translate-x-0' : '-translate-x-full'} transition-transform ease-in-out duration-300`}>
                    <h1>Lists</h1>
                </nav>
            </div>
        </>
    );
}

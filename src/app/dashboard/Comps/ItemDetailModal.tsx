'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
export default function ItemDetails(props : {isModalActive : boolean, image: string }){

    const [isActive, setModal] = useState<boolean>(props.isModalActive)
    // useEffect(() => {
    //     setModal(props.isModalActive)
    // },[props.isModalActive])


    return(
        <div className={`${props.isModalActive ? 'block' : 'hidden'} bg-gray-400 w-[77vw] h-[70vh] fixed top-52`}>
            <button className="float-right p-5 text-lg" onClick={() => {
                setModal(!isActive)
                // props.isModalActive = isActive
                console.log(props.isModalActive)
            }}>close</button>
            <div className="p-5 mt-10">
                <h1>LOLS!!!</h1>
                <Image src={props.image} alt="image" width={200} height={300}/>
            </div>
        </div>
    )
}

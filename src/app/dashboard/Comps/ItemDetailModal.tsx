'use client'

import Image from "next/image"
import { useEffect } from "react"
export default function ItemDetails(props : {image: string }){

    useEffect(() => {
        console.log(props.image)
    }, [props.image])

    return(
        <div>
            <div className="p-5 mt-10 flex bg-white justify-center w-[vw]">
                <Image src={props.image} alt="image" width={300} height={200}/>
            </div>
        </div>
    )
}

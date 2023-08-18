'use client'

import { useState } from "react";

export default function ItemModal(props: { menuActive: any; active: any;}){

    const [itemName, setItemName] =  useState<string>("")
    const [quantity, setQuantity] = useState<number>(0)
    const [price, setPrice] = useState<number>(0)

    const ItemToAdd = {
        name : itemName,
        quantity: quantity,
        price: price,
    }

    const AddThisShit = () => {
    }


    return (
        <div className={`fixed rounded-3xl ${props.menuActive ? 'w-[65vw]' : 'w-[80vw]'} h-[75vh] bottom-20 right-52 ${props.active ? 'bg-white visible' : 'bg-transparent invisible'} transition-all ease-in-out duration-300 p-10`}>
            <div className={`rounded-2xl outline w-full h-full ${props.active ? 'visible' : 'invisible'} relative`}>
                <div className={`w-full h-full flex flex-col justify-around items-center ml-5 ${props.active ? 'block' : 'hidden'}`}>
                    <div className="flex-row space-x-5">
                        <label htmlFor="itemName">Item Name</label>
                        <input type="text" name="itemName" id="" className="bg-black outline-blue-400 p-5 rounded-3xl text-white" value={itemName} onChange={e => setItemName(e.target.value)}/>
                    </div>
                    <div className="flex-row space-x-10">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" name="quantity" id="" className="bg-black outline-blue-400 p-5 rounded-3xl text-white" value={quantity} onChange={e => setQuantity(Number(e.target.value))}/>
                    </div>
                    <div className="flex-row space-x-16">
                        <label htmlFor="">Price</label>
                        <input type="number" name="" id="" className="bg-black outline-blue-400 p-5 rounded-3xl  text-white" value={price} onChange={e => setPrice(Number(e.target.value))}/>
                    </div>
                    <div className="flex-row space-x-16">
                        <label htmlFor="">Type</label>
                        <input type="text" name="" id="" className="bg-black outline-blue-400 p-5 rounded-3xl  text-white"/>
                    </div>
                    <div className="flex-row self-center">
                        <button type="submit" className={`py-4 px-10 bg-blue-400 rounded-lg`}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ItemModal from "./ItemModal";

type Items = {
    name: string;
    quantity: number;
    category: string;
}

export default function ItemsComponent(props: { name: any; menuActive: any }){
    const name = props.name
    const menuActive = props.menuActive



    const [isModalActive, setModal] = useState(false)
    const [message, setMessage] = useState("Add Items")

    const buttonClick = () => {
        setModal(!isModalActive)
        if(!isModalActive)
        {
            setMessage("Close")
        }
        else
        {
            setMessage("Add Items")
        }
    }

    const [items, setItems] = useState<Items[]>([])

    const addClick = (index: number) => {
        const updatedItems = [...items]
        updatedItems[index].quantity += 1
        setItems(updatedItems)
    }

    const removeClick = (index: number) => {
        const updatedItems = [...items]
        updatedItems[index].quantity -= 1
        setItems(updatedItems)
    }

    const fetchItems = async () => {
        let d:any = []
        await fetch("http://127.0.0.1:8080/api/getItems", { next : {revalidate : 10}})
                .then(res => res.json())
                .then(data => {
                    data.forEach((item: any) => {
                        d.push(item)
                    });
                    // setTimeout(fetchItems, 10000)
                })
                .catch(err => console.error(err))
                setItems(d)
    }

    const dummy_data: Items[] =[
        {
            name:'sample',
            quantity: 5,
            category: 'sample din',
        }
    ]
    const lols = () => setItems(dummy_data)
    useEffect(() => {

        // wag mo tangalin
        lols()

       // fetchItems();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <div className={`${menuActive ? 'w-body' : 'w-content'} mt-content min-h-screen float-right overflow-auto z-30`}>
            <div className="top-52 w-full h-[50px] outline outline-blue-400">
                <h1 className="uppercase text-2xl font-bold px-5">{name}</h1>
                <div className="float-right px-5">
                    <button className="m-10 p-5 rounded-3xl bg-slate-950 text-white transition-all" onClick={buttonClick}>
                        {message}
                    </button>
                </div>
            </div>


            <table className="w-full h-full mt-10">
                <thead className="align-center font-bold text-left">
                    <th className="p-5">Name</th>
                    <th className="p-5 text-center">Quantity</th>
                    <th className="p-5">Type</th>
                </thead>
                <tbody className="text-left">
                    {items.map((item, index) => (
                        <tr key={index} className="">
                            <td>
                                <div className="p-5 bg-gray-300 my-1 mx-2 rounded-md py-[26px]">
                                    {item.name}
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="p-5 bg-gray-300 my-1 mx-2 rounded-md flex flex-row justify-between items-center">
                                    <button className=" bg-white p-2 rounded-full w-[39px] h-[39px]" onClick={() => removeClick(index)}>
                                        <Image src="/Icons/sub.svg"
                                                    width={39}
                                                    height={39}
                                                    alt="add-icon"/>
                                    </button>
                                    <div>
                                        {item.quantity}
                                        {/* <input type="text" value={item.quantity} /> */}
                                    </div>
                                    <button className=" bg-white p-2 rounded-full w-[39px] h-[39px]"
                                            onClick={() => addClick(index)}>
                                        <Image src="/Icons/add.svg"
                                                width={39}
                                                height={39}
                                                alt="add-icon"/>
                                    </button>
                                </div>
                            </td>
                            <td className="p-5">
                                <div className="p-5 bg-gray-300 my-1 mx-2 rounded-md py-[28px]">
                                    {item.category ? item.category : " "}
                                </div>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
            <ItemModal active={isModalActive} menuActive={props.menuActive}/>
        </div>
    )
}

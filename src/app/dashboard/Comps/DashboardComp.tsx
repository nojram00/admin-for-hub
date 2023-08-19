'use client'
import { useEffect, useState } from "react";

export default function DashboardComp(props: { name: any; menuActive: any;}){
    const name = props.name
    const menuActive = props.menuActive

    // const [items, setItems] = useState([])

    const fetchItems = async () => {

    }

    useEffect(() => {
        fetchItems();
    }, [])

    return(
        <div className={`${menuActive ? 'w-body' : 'w-content'} mt-content min-h-screen float-right overflow-auto`}>
            <div className="top-52 w-full h-[50px] outline outline-blue-400">
                <h1 className="uppercase text-2xl font-bold px-5">{name}</h1>
            </div>

        </div>
    );
}

// 'use server'

// export const getStaticProps = async () => {
//     const res = await fetch(`https://google.com`)
//     const data = await res.text()

//     return {
//         props: { data : data}
//     }
// }



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
            <h1>{name}</h1>
            <button>
                Hello
            </button>
        </div>
    );
}

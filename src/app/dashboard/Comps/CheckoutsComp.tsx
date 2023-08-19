'use client'

import Link from "next/link";
import { useState } from "react";

export default function Checkouts(props: { name: any; menuActive: any; }){
    const name = props.name
    const menuActive = props.menuActive

    const dummy_data = [
        {
            username: 'Carlos Agassi',
            userId: 1,
            orderId: 1,
            status: 'pending'
        },
        {
            username: 'Rosmar Tan',
            userId: 2,
            orderId: 2,
            status: 'approved'
        },
        {
            username: 'Toni Fowler',
            userId: 3,
            orderId: 3,
            status: 'declined'
        },
        {
            username: 'Toni Fowler',
            userId: 3,
            orderId: 4,
            status: 'pending'
        }
    ]

    const [data, setData] = useState(dummy_data)


    return(
        <div className={`${menuActive ? 'w-body' : 'w-content'} mt-content min-h-screen float-right overflow-auto`}>
            <div className="top-52 w-full h-[50px] outline outline-blue-400">
                <h1 className="uppercase text-2xl font-bold px-5">{name}</h1>
            </div>

            <table className="h-full w-full mt-12">
                <thead className="text-2xl font-extrabold">
                    <th>
                        <div className="mb-10 text-left pl-3">
                            User Name
                        </div>
                    </th>
                    <th>
                        <div className="mb-10">
                            User ID
                        </div>
                    </th>
                    <th>
                        <div className="mb-10">
                            Order ID
                        </div>
                    </th>
                    <th>
                    <div className="mb-10 pl-3">
                            Status
                        </div>
                    </th>
                </thead>
                <tbody className="align-middle text-xl font-bold">
                    {data.map( (order, id) => (
                        <tr key={id}>
                            <td>
                                <div className="py-6 my-2 mx-1 rounded-md bg-gray-300 text-left pl-3">
                                    {order?.username}
                                </div>
                            </td>
                            <td>
                                <div className="py-6 my-2 mx-1 rounded-md bg-gray-300 text-center">
                                    {order?.userId}
                                </div>
                            </td>
                            <td>
                                <div className="py-6 my-2 mx-1 rounded-md bg-gray-300 text-center">
                                    {order?.orderId}
                                </div>
                            </td>
                            <td>
                                <div className="py-6 my-2 mx-1 rounded-md bg-gray-300 pl-3 text-center">
                                    {order?.status}
                                </div>
                            </td>
                            <td>
                                <div className="w-full p-6 my-2 mx-1 rounded-md bg-gray-300 hover:underline cursor-pointer text-center">
                                    <Link href={`dashboard/order/${order?.orderId}`}>
                                        View Order
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

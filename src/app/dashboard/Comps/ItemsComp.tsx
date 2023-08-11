export default function ItemsComponent(props: { name: any; menuActive: any }){
    const name = props.name
    const menuActive = props.menuActive

    const items = [
        {
            name: 'ddr4 ram',
            quantity: 5,
            type: 'ram'
        },
        {
            name: 'sample motherboard',
            quantity: 10,
            type: 'motherboard'
        }
    ]
    return(
        <div className={`${menuActive ? 'w-body' : 'w-content'} mt-content min-h-screen float-right overflow-auto`}>
            <h1 className="uppercase text-2xl font-bold px-5">{name}</h1>

            <table className="w-full h-full mt-10">
                <thead className="align-center font-bold text-left">
                    <td className="p-5">Name</td>
                    <td className="p-5 text-center">Quantity</td>
                    <td className="p-5">Type</td>
                </thead>
                <tbody className="text-left">
                    {items.map((item, index) => (
                        <tr key={index} className="">
                            <td>
                                <div className="p-5 bg-gray-300 my-1 mx-2 rounded-md">
                                    {item.name}
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="p-5 bg-gray-300 my-1 mx-2 rounded-md">
                                    {item.quantity}
                                </div>
                            </td>
                            <td className="p-5">
                                <div className="p-5 bg-gray-300 my-1 mx-2 rounded-md">
                                    {item.type}
                                </div>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}

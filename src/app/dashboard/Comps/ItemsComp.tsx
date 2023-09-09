'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { convert } from '../../../../lib/base64'
import { Button, Modal } from "react-bootstrap";
import swal from "sweetalert";

type Items = {
    data : {
        name: string;
        quantity: number;
        category: string;
        image: string;
        description: string;
    }
}

export default function ItemsComponent(props: { name: any; menuActive: any }){
    const name = props.name
    const menuActive = props.menuActive

    const [addItemState, setAddItemState] = useState(false)
    const [updateItemState, setUpdateItemState] = useState(false)

    //Add button show
    const buttonClick = () => setAddItemState(!addItemState)

    //Update button show
    const handleUpdate = () => setUpdateItemState(!updateItemState)

    const [items, setItems] = useState<Items[]>([])

    const addClick = (index: number) => {
        const updatedItems = [...items]
        updatedItems[index].data.quantity += 1
        setItems(updatedItems)
    }

    const removeClick = (index: number) => {
        const updatedItems = [...items]
        updatedItems[index].data.quantity -= 1
        setItems(updatedItems)
    }

    const fetchItems = async () => {
        let d:any = []
        await fetch("/api/items", { next : {revalidate : 10}})
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    data.forEach((item: any) => {
                        d.push(item)
                    });
                    // setTimeout(fetchItems, 10000)
                    // console.log(d)
                })
                .catch(err => console.error(err))
                setItems(d)
    }

    //handle Item Details:
    const [itmdetShow, setitmdetShow] = useState(false)
    const handleItemDetails = () => setitmdetShow(!itmdetShow)

    // const dummy_data: Items[] =[
    //     {
    //         name:'sample',
    //         quantity: 5,
    //         category: 'sample din',
    //     }
    // ]
    // const lols = () => setItems(dummy_data)
    useEffect(() => {

        // wag mo tangalin
        // lols()

       fetchItems();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const [itemDetailState, setItemDetailState] = useState<boolean>(false)
    const [itemImage, setItemImage] = useState<string>('')
    const [itemDesc, setItemDesc] = useState<string>('')
    const toggleItemdetails = () => {
        setItemDetailState(!itemDetailState)
    }


    //Add Items Properties and Functions:
    //Start

        const [itemName, setItemName] =  useState<string>("")
        const [quantity, setQuantity] = useState<number>(0)
        const [price, setPrice] = useState<number>(0)
        const [desc, setDesc] = useState<string>('')
        const [b64Img, setb64Img] = useState<any>()

        const [selectedCategory, setSelectedCategory] = useState('')

        const handleSelectedCategory = (e: any) => {
            setSelectedCategory(e.target.value)
        }

        const ItemToAdd = {
            name : itemName,
            quantity: quantity,
            price: price,
            description: desc,
            category: selectedCategory,
            image: b64Img,
        }

        //Success Alert
        const addSuccess = () => {
            swal({
                title: "Add Item Success!",
                icon: "success",
                buttons: {
                    Ok: {
                        text: "Ok" //walang error dito
                    }
                }
            }).then(() => {
                // window.location.reload()
                buttonClick()
            })
        }

        //Adding Failed
        const addFailed = () => {
            swal({
                title: "Adding Failed...",
                icon: "error",
                buttons: {
                    Ok: {
                        text: "Ok"
                    }
                }
            }).then(() => {
                buttonClick()
            })
        }

        useEffect(() => {
            fetchItems();
        }, [addItemState])

        const submitForm = async () => {
            try {
                const submit = await fetch(`/api/addItems`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(ItemToAdd)
                })
                console.log(submit)
                if(submit.ok)
                {
                    addSuccess()
                }else{
                    addFailed()
                }
            }
            catch (err) {
                console.error(err)
                return
            }
        }

        const [categories, setCategories] = useState<any[]>([])

        const fetchCategories = async () => {
            const c = await fetch('/api/categories')
            const categories = await c.json()

            return categories
        }



        const handleImage = async (e: any) => {
            const file = e.target.files[0];
            if(file){
                const b64Image = await convert(file)
                // console.log(b64Image)
                setb64Img(b64Image)
            }
        }

        useEffect(() => {
        const getcategories = async () => {
                const cat = await fetchCategories()
                setCategories(cat);
        }
        getcategories()
        }, [])

    //End

    return(
        <div className={`${menuActive ? 'w-body' : 'w-content'} mt-content min-h-screen float-right overflow-auto z-30`}>
            <div className="top-52 w-full h-[50px] outline outline-blue-400">
                <h1 className="uppercase text-2xl font-bold px-5">{name}</h1>
                <div className="float-right px-5">
                    <button className="m-10 p-5 rounded-3xl bg-slate-950 text-white transition-all" onClick={buttonClick}>
                        {/* {message} */}
                        Add
                    </button>
                </div>
            </div>


            <table className="w-full h-full mt-10">
                <thead className="align-center font-bold text-left">
                    <th className="p-5">Name</th>
                    <th className="p-5 text-center">Quantity</th>
                    <th className="p-5">Type</th>
                    <th className="p-5"></th>
                </thead>
                <tbody className="text-left">
                    {items.map((item, index) => (
                        <tr key={index} className="">
                            <td>
                                <div className="p-5 bg-gray-300 my-1 mx-2 rounded-md py-[26px]">
                                    {item?.data.name}
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
                                        {item.data?.quantity}
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
                                    {item.data?.category ? item.data?.category : " "}
                                </div>
                            </td>
                            <td className="p-5">
                                {/* <Image src={item.data?.image} width={50} height={50} alt="image"/> */}
                                {/* Show Details Btn:  */}
                                <button onClick={() => {
                                    handleItemDetails()
                                    setItemImage(item.data?.image)
                                    setItemDesc(item?.data?.description)
                                }}>View Details</button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
            {/* Item Detail Modal: */}

                <Modal show={itmdetShow} className="fixed bg-gray-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg w-[70vw] h-[70vh]">
                    <Modal.Header closeButton>
                        <h1 className="p-5">Item Details</h1>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <ItemDetails image={itemImage}/> */}
                        <div className="p-5 ml-5 rounded-md mb-3 flex flex-col items-center bg-white justify-around">
                            <Image src={itemImage} alt="image" width={300} height={300}/>
                            <div className="text-black mt-5">
                                <h1 className=" font-bold text-2xl">Description</h1>
                                <p>{itemDesc}</p>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" className="text-black float-right mr-5 bg-white text-2xl p-2 rounded-md" onClick={handleItemDetails}>Close</Button>
                    </Modal.Footer>
                </Modal>

            {/* Add Item Modal */}
            <Modal show={addItemState} className="fixed bg-gray-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg w-[70vw] h-[80vh] z-30">
                <Modal.Header className="max-h-[10vh]">
                    <h1 className="p-5">Add Item</h1>
                </Modal.Header>
                <Modal.Body className="max-h-[60vh] overflow-y-visible overflow-x-hidden">
                    {/* <ItemModal/> */}
                    <div className={`w-full h-full flex flex-col justify-around items-center ml-5`}>
                        <div className="flex-row space-x-5 my-2">
                            {/* Item Name */}
                            <label htmlFor="name">Item Name</label>
                            <input type="text" name="name" id="" className="bg-black outline-blue-400 p-5 rounded-3xl text-white" value={itemName} onChange={e => setItemName(e.target.value)}/>
                        </div>
                        <div className="flex-row space-x-10 my-2">
                            {/* Quantity */}
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" name="quantity" id="" className="bg-black outline-blue-400 p-5 rounded-3xl text-white" value={quantity} onChange={e => setQuantity(Number(e.target.value))}/>
                        </div>
                        <div className="flex-row space-x-16 my-2">
                            {/* Price */}
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price" id="" className="bg-black outline-blue-400 p-5 rounded-3xl  text-white" value={price} onChange={e => setPrice(Number(e.target.value))}/>
                        </div>
                        <div className="flex-row space-x-16 my-2">
                            {/* Type/Category */}
                            <label htmlFor="">Type</label>
                            {/* <input type="text" name="" id="" className="bg-black outline-blue-400 p-5 rounded-3xl  text-white"/> */}
                            <select name="category" id="" className="text-black" value={selectedCategory} onChange={handleSelectedCategory}>
                                <option value="">Select a category</option>
                                {categories.map((c, i) => (
                                    <option value={c.category} key={i}>{c.category}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex-row space-x-16 justify-center items-center my-2">
                            {/* Image */}
                            <input type="file" name="image" id="" accept="image/**" onChange={handleImage}/>
                        </div>
                        <div className="flex-row space-x-16 justify-center items-center my-2">
                            {/* description */}
                            <textarea name="description" id="" value={desc} onChange={(e) => setDesc(e.target.value)} cols={30} rows={10} className={`bg-black w-[40vw] outline-blue-400 p-5 text-white rounded-md`} placeholder="Enter description"></textarea>
                        </div>
                        <div className="flex-row self-center my-2">
                            <button type="submit" className={`py-4 px-10 bg-blue-400 rounded-lg mb-2`} onClick={submitForm}>Add</button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="">
                    <Button variant="primary" className="text-black float-right mr-5 mt-3 bg-white text-2xl p-2 rounded-md" onClick={buttonClick}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

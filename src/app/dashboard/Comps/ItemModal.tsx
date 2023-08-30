'use client'

import { useEffect, useState } from "react";


export default function ItemModal(props: { menuActive: any; active: any;}){

    const [itemName, setItemName] =  useState<string>("")
    const [quantity, setQuantity] = useState<number>(0)
    const [price, setPrice] = useState<number>(0)
    const [desc, setDesc] = useState<string>('')

    const [selectedCategory, setSelectedCategory] = useState('')

    const handleSelectedCategory = (e: any) => {
        setSelectedCategory(e.target.value)
    }

    const ItemToAdd = {
        name : itemName,
        quantity: quantity,
        price: price,
        description: desc,
        category: selectedCategory
    }

    const submitForm = async () => {
        try {
            const submit = await fetch(`/api/addItems?name=${itemName}&quantity=${quantity}&price=${price}&category=${selectedCategory}&description=${desc}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            console.log(submit)
            if(submit.ok)
            {
                return(<>
                    <h1>Submitted Successfully</h1>
                </>)
            }
        }
        catch (err) {
            console.error(err)
            return
        }
    }

    // const category = ['ram', 'motherboard', 'monitor', 'hard drive']
    // let category: any = []
    const [categories, setCategories] = useState<any[]>([])

    const fetchCategories = async () => {
        const c = await fetch('/api/categories')
        const categories = await c.json()

        //it should be return as an array, not a promise
        return categories
    }

    useEffect(() => {
       const getcategories = async () => {
            const cat = await fetchCategories()
            setCategories(cat);
       }
       getcategories()
    }, [])

    return (
        <div className={`fixed rounded-3xl ${props.menuActive ? 'w-[65vw]' : 'w-[80vw]'} h-[75vh] bottom-20 right-52 ${props.active ? 'bg-white visible' : 'bg-transparent invisible'} transition-all ease-in-out duration-300 p-10`}>
            <div className={`rounded-2xl outline w-full h-full ${props.active ? 'visible' : 'invisible'} relative`}>
                <div className={`w-full h-full flex flex-col justify-around items-center ml-5 ${props.active ? 'block' : 'hidden'}`}>
                    <div className="flex-row space-x-5">
                        <label htmlFor="name">Item Name</label>
                        <input type="text" name="name" id="" className="bg-black outline-blue-400 p-5 rounded-3xl text-white" value={itemName} onChange={e => setItemName(e.target.value)}/>
                    </div>
                    <div className="flex-row space-x-10">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" name="quantity" id="" className="bg-black outline-blue-400 p-5 rounded-3xl text-white" value={quantity} onChange={e => setQuantity(Number(e.target.value))}/>
                    </div>
                    <div className="flex-row space-x-16">
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" id="" className="bg-black outline-blue-400 p-5 rounded-3xl  text-white" value={price} onChange={e => setPrice(Number(e.target.value))}/>
                    </div>
                    <div className="flex-row space-x-16">
                        <label htmlFor="">Type</label>
                        {/* <input type="text" name="" id="" className="bg-black outline-blue-400 p-5 rounded-3xl  text-white"/> */}
                        <select name="category" id="" value={selectedCategory} onChange={handleSelectedCategory}>
                            <option value="">Select a category</option>
                            {categories.map((c, i) => (
                                <option value={c.category} key={i}>{c.category}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-row space-x-16 justify-center items-center">
                        <textarea name="description" id="" cols={30} rows={10} className={`bg-black w-[40vw] outline-blue-400 p-5 text-white rounded-md`} placeholder="Enter description"></textarea>
                    </div>
                    <div className="flex-row self-center">
                        <button type="submit" className={`py-4 px-10 bg-blue-400 rounded-lg`} onClick={submitForm}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

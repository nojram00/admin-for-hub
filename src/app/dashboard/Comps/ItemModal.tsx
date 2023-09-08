'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { convert } from '../../../../lib/base64'

export default function ItemModal(){

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

    return (
                <div className={`w-full h-full flex flex-col justify-around items-center ml-5`}>
                    <div className="flex-row space-x-5 my-2">
                        <label htmlFor="name">Item Name</label>
                        <input type="text" name="name" id="" className="bg-black outline-blue-400 p-5 rounded-3xl text-white" value={itemName} onChange={e => setItemName(e.target.value)}/>
                    </div>
                    <div className="flex-row space-x-10 my-2">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" name="quantity" id="" className="bg-black outline-blue-400 p-5 rounded-3xl text-white" value={quantity} onChange={e => setQuantity(Number(e.target.value))}/>
                    </div>
                    <div className="flex-row space-x-16 my-2">
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" id="" className="bg-black outline-blue-400 p-5 rounded-3xl  text-white" value={price} onChange={e => setPrice(Number(e.target.value))}/>
                    </div>
                    <div className="flex-row space-x-16 my-2">
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
                       <input type="file" name="image" id="" accept="image/**" onChange={handleImage}/>
                    </div>
                    <div className="flex-row space-x-16 justify-center items-center my-2">
                        <textarea name="description" id="" cols={30} rows={10} className={`bg-black w-[40vw] outline-blue-400 p-5 text-white rounded-md`} placeholder="Enter description"></textarea>
                    </div>
                    <div className="flex-row self-center my-2">
                        <button type="submit" className={`py-4 px-10 bg-blue-400 rounded-lg mb-2`} onClick={submitForm}>Add</button>
                    </div>
                    {/* <Image src={b64Img} width={120} height={120} alt="wews"/> */}
                    {/* {img && <Image src={imgURL} width={120} height={120} alt="wews"/>} */}
                </div>


    )
}

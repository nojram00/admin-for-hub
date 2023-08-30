import { NextRequest, NextResponse } from "next/server";
import clientCon from "../../../../config/mongodb.config";

type SearchParams = {
    name: string,
    quantity: number,
    price: number,
    description: string
}

export async function POST( req: NextRequest){

    const name = req.nextUrl.searchParams.get('name');
    const quantity = req.nextUrl.searchParams.get('quantity');
    const price = req.nextUrl.searchParams.get('price');
    const description = req.nextUrl.searchParams.get('description');
    const category = req.nextUrl.searchParams.get('category');

    const client = await clientCon
    const  db = client.db('hub_new_db')

    const addItem = await db.collection('items')
                    .insertOne({
                        name: name,
                        quantity: quantity,
                        price: price,
                        description: description,
                        category: category
                    })

    return NextResponse.json(addItem)
}



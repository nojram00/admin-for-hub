import { NextRequest, NextResponse } from "next/server";
import clientCon from "../../../../config/mongodb.config";
import { Readable } from "stream";

export async function POST(req : NextRequest){

    const username = req.nextUrl.searchParams.get('username');
    const bodyText = await req.text()
    const orders = JSON.parse(bodyText);

    const client = await clientCon
    const db = client.db('hub_new_db')

    console.log(orders)

    const addOrder = await db.collection('orders')
                    .insertOne({
                        user: username,
                        orders: orders
                    })

    return NextResponse.json(addOrder)
}

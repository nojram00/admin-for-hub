import { NextRequest, NextResponse } from "next/server";
import clientCon from "../../../../config/mongodb.config";


export async function POST(req : NextRequest){

    const username = req.nextUrl.searchParams.get('username');
    const orders = req.nextUrl.searchParams.get('orders');

    const client = await clientCon
    const db = client.db('hub_new_db')

    const addOrder = await db.collection('orders')
                    .insertOne({
                        user: username,
                        orders: orders
                    })

    return NextResponse.json(addOrder)
}

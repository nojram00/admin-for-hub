import { NextRequest, NextResponse } from "next/server";
import clientCon from "../../../../config/mongodb.config";


export async function GET(req : NextRequest){
    const client = await clientCon
    const db = client.db('hub_new_db')

    const orders = await db.collection('orders')
                    .find({})
                    .toArray()

    return NextResponse.json(orders)
}

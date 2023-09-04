import { NextRequest, NextResponse } from "next/server";
import clientCon from "../../../../config/mongodb.config";
import { NextApiRequest } from "next";


export async function GET(req : NextApiRequest){
    const client = await clientCon
    const db = client.db('hub_new_db')

    const orders = await db.collection('orders')
                    .find({})
                    .toArray()

    return NextResponse.json(orders)
}

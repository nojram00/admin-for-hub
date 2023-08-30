import { NextRequest, NextResponse } from "next/server";
import clientCon from "../../../../config/mongodb.config";

export async function GET(req: NextRequest) {
    const client = await clientCon
    const db = client.db('hub_new_db')


    const categories = await db.collection('categories')
                        .find({})
                        .toArray()
    // console.log(categories)
    return NextResponse.json(categories)
}

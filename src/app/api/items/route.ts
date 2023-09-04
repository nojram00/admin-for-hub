import { NextRequest, NextResponse } from "next/server";
import clientCon from "../../../../config/mongodb.config";

export async function GET(req : NextRequest){
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
    };
    const client = await clientCon
    // const response = new NextResponse(null, {headers})

    const db = client.db('hub_new_db')

    const category = req.nextUrl.searchParams.get('category')
    const catParam = category === null ?  {} : {category}

    // console.log(category)
    const items = await db.collection('items')
                        .find(catParam)
                        .toArray()


    return NextResponse.json(items, {headers});
}

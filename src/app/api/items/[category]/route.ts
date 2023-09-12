import { NextRequest, NextResponse } from "next/server";
import clientCon from "../../../../../config/mongodb.config";
import headers from "../../../../../lib/apiHeader";

export async function GET(req : NextRequest, {params} : {params: {category: string}}){

    const client = await clientCon

    const db = client.db('hub_new_db')

    //console.log(params.category)
    const items = await db.collection('items')
                        .find({"data.category" : params.category})
                        .toArray()

    // console.log(items)

    return NextResponse.json(items, {headers});
}

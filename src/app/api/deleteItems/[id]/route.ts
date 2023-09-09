import { NextRequest, NextResponse } from "next/server";
import headers from "../../../../../lib/apiHeader";
import clientCon from "../../../../../config/mongodb.config";
import { ObjectId } from "mongodb";


export async function GET(req: NextRequest, {params} : {params: {id:string}}) {

    const client = await clientCon
    const db = client.db('hub_new_db')

    const result = await db.collection('items')
                            .deleteOne({_id: new ObjectId(params.id)})


    return NextResponse.json(result, {headers})
}

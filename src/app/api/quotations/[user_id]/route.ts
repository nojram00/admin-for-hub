import { NextRequest, NextResponse } from "next/server";
import clientCon from "../../../../../config/mongodb.config";
import { ObjectId } from "mongodb";


export async function GET(req : NextRequest, params: {user_id : number}) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
    };

    const client = await clientCon
    const db = client.db('hub_new_db')

    const quotations = await db.collection('quotations')
            .find({ _id : new ObjectId(params.user_id) })
            .toArray()

    return NextResponse.json(quotations, {headers})
}

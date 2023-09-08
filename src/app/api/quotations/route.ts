import { NextRequest, NextResponse } from "next/server";
import clientCon from "../../../../config/mongodb.config";


export async function GET(req : NextRequest) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
    };

    const client = await clientCon
    const db = client.db('hub_new_db')

    const quotations = await db.collection('quotations')
            .find({})
            .toArray()

    return NextResponse.json(quotations, {headers})
}

import { NextRequest, NextResponse } from "next/server";
import clientCon from "../../../../config/mongodb.config";

export async function POST( req: NextRequest){


    const bodyText = await req.text()
    const data = JSON.parse(bodyText)

    const client = await clientCon
    const  db = client.db('hub_new_db')

    // const name = req.query.name as string
    // console.log(name)

        const addItem = await db.collection('items')
                    .insertOne({
                        data
                    })

    return NextResponse.json(addItem)


    // return res.json({message: 'wow'})

}








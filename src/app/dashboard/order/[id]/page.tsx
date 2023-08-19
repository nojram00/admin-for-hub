'use client'

export default function Order(params : { id : number}){
    return(
        <div className="min-h-screen bg-dashboard-body">
            <h1>{params.id}</h1>
        </div>
    )
}

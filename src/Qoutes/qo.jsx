import React from "react"
import QoutesPage from "./Qoutes"
import {qoutes} from './data.js'

export const Qoute =()=>{
    return(
        <div className="container">
            {qoutes.map((data)=>(
                <QoutesPage data={data}/>
            ))}
        </div>
    )
}
import Header from "../HeaderComponent"
import image from "../assets/iconRes.png"
import './Qoutes.css'
import React from "react"

const QoutesPage = ({data})=>{
    console.log(data);
    
    return(
        <>
        <Header/>
        <main>
        <h1>Famous Qoutes</h1>
         {/* Qdata.map((data)=>{ */}
                {/* // console.log(data) */}
                <div className="container">
                <div className="roman1">
                <h3>{data.qoute}</h3>
            </div>
            <div className="roman2">
                    <p>-</p>
            </div>
            <hr />
            </div>
        </main>
        </>
    )
}
export default QoutesPage;
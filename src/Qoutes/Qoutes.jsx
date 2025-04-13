import Header from "../components/HeaderComponent"
import FoodData from "./data";
import './Qoutes.css'
// import FoodData from "./data";

const QoutesPage = ()=>{
    return(
        <>
        <Header/>

        <main>
        <h1>Famous Quotes</h1>
        {
            FoodData.map((e)=>{
                return <>
                

         {/* Qdata.map((data)=>{ */}
                {/* // console.log(data) */}
                <div className="container">
                <div className="roman1">
                <h1>{e.quote}....</h1>
            </div>
            <hr />
            <div className="roman2">
                    <p>-  {e.author}</p>
            </div>
            
            </div>
        
                </>
            })
        }
        </main>
        </>
    )
}
export default QoutesPage;